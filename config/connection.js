const mongoose = require('mongoose');

const connectString = process.env.mongoConnect

mongoose.connect(connectString);

module.exports = mongoose.connection;