const mongoose = require('mongoose');

module.exports = {
  connection: () => {
    mongoose.connect('mongodb://localhost:27017/rocketbox', {
      useNewUrlParser: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
      useCreateIndex: true
    })
    .then(() => console.log('MongoDB connected'))
    .catch(() => console.log('Failed to connect MongoDB'));
  }
}