var mongoose = require('mongoose');
var Schema = mongoose.Schema;

require('mongoose-currency').loadType(mongoose);
const Currency = mongoose.Types.Currency;

var l_Schema = new Schema({
	name: {
		type: String,
		required: true,
		unique: true
	},
	image: {
		type: String,
		required: true
	},
	designation: {
		type: String,
		required: true,
	},
	abbr: {
		type: String,
		required: true,
	},
	description: {
		type: String,
		required: true
	},
	featured: {
		type: Boolean,
		required: false
	}
}, {
	timestamps: true
});

var leader = mongoose.model('leader', l_Schema);

module.exports = leader;