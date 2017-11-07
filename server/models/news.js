const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const newsSchema = new Schema({
    id: String,
    title: String,
    description: String,
    image: String,
    url: String
});

module.exports = mongoose.model('news', newsSchema, 'newsFav' )