const File = require('../models/File');
const Box = require('../models/Box');

module.exports = {

  store: async (request, response) => {

    const { id } = request.params;
    const { originalname: title, key: path } = request.file;

    const box = await Box.findById(id);
    const file = await File.create({
      title,
      path
    });

    box.files.push(file);
    await box.save();

    request.io.sockets.in(box._id).emit('file', file);

    return response.json(file);

  }

}