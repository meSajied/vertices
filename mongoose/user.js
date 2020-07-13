var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var User = new Schema({
	username: {
		type: String,
		required: true,
		unique: true
	},
	// if we use facebook oAuth...
	facebookId: String,
	password:  {
		type: String,
		required: true
	},
	admin:   {
		type: Boolean,
		default: false
	}
});

module.exports = mongoose.model('user', User);