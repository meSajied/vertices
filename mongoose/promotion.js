const mongoose = require('mongoose');
const Schema = mongoose.Schema;

require('mongoose-currency').loadType(mongoose);
const Currency = mongoose.Types.Currency;

const p_Schema = new Schema({
	name: {
		type: String,
		required: true,
		unique: true
	},
	image: {
		type: String,
		required: true
	},
	label: {
		type: String,
		required: true,
		default: ""
	},
	price: {
		type: Currency,
		required: true
	},
	description: {
		type: String,
		required: true
	}
}, {
	timestamps: true
});

var p_schem = mongoose.model('promotion', p_Schema);

module.exports = p_Schem;