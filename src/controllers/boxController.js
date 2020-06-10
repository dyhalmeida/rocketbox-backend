const Box = require('../models/Box');

module.exports = {

  store: async (request, response) => {

    const { title } = request.body;
    
    const box = await Box.create({ title });
    return response.json(box);

  }

}