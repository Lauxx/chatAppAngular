var mongoose = require('mongoose');

var chatModel = new mongoose.Schema({
    body: {type: String},
    date: {type: Date, default: Date.now}
});

module.exports = mongoose.model('Chats', chatModel);
