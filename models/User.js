const mongoose = require('mongoose');

let userSchema = new mongoose.Schema({
  name: {
    type: String
  },
  email: {
    type: String
  },
  mobile: {
    type: Number
  }
  },{
    collection: 'users'
  }
)
module.exports = mongoose.model('user', userSchema)
