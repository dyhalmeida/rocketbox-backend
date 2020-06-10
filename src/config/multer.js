const multer = require('multer');
const { resolve } = require('path');
const crypto = require('crypto');

module.exports = {
  destination: resolve(__dirname, '..', '..', 'uploads'),
  storage: multer.diskStorage({
    destination: (request, file, callback) => {
      callback(null, resolve(__dirname, '..', '..', 'uploads'));
    },
    filename: (request, file, callback) => {
      crypto.randomBytes(16, (err, hash) => {
        if (err) callback(err);
        file.key = `${hash.toString('hex')}-${file.originalname}`;
        callback(null, file.key);
      })
    }
  })
};