
var mongoose = require('mongoose')

var entrySchema = new mongoose.Schema({
	home_type: String,
	price: Number,
	address: String,
	bedrooms: Number,
	beds: Number,
	bathrooms: Number,
	title: String,
	summary: String,
	photos: Array,
	email: String
})

var model = mongoose.model('Property', propertySchema)

module.exports = model