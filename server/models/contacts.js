var mongoose = require('mongoose');
var Schema = mongoose.Schema;




mongoose.connect(process.env.MONGO_URI);
module.exports = mongoose.mode('contacts', Contact)
