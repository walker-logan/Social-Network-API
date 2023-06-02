const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://walker-logan:42069666@cluster0.d35djdg.mongodb.net/?authMechanism=DEFAULT');

module.exports = mongoose.connection;