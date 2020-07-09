const mongoose = require('mongoose');
const Schema = mongoose.Schema;

require('mongoose-currency').loadType(mongoose);
const Currency = mongoose.Types.Currency;

const dishSchema = new Schema({
	name: {
		type: String,
		required: true,
		unique: true
	},
	description: {
		type: String,
		required: true
	}
},{
	timestamps: true
});

const commentSchema = new Schema({
	rating:  {
		type: Number,
		min: 1,
		max: 5,
		required: true
	},
	comment:  {
		type: String,
		required: true
	},
	author:  {
		type: String,
		required: true
	}
}, {
	timestamps: true
});

var comment = mongoose.model('comment', commentSchema);
var Dishes = mongoose.model('Dish', dishSchema);

module.exports = Dishes;