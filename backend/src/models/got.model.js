var mongoose = require('mongoose');
var mongoosePaginate = require('mongoose-paginate-v2');
var conn = require('./connection');

mongoose.connect(`mongodb+srv://${conn.user}:${conn.password}@${conn.server}/${conn.database}?retryWrites=true`, { useNewUrlParser: true })

var rankSchema = new mongoose.Schema({ title: String, rank: String });
var gotSchema = new mongoose.Schema({
    books: [String],
    gender: String,
    house: String,
    image: String,
    name: String,
    rank: rankSchema,
    slug: String,
    titles: [String]
})

gotSchema.plugin(mongoosePaginate);

module.exports = mongoose.model('Got', gotSchema)