const mongoose = require('mongoose');

let studentSchema = new mongoose.Schema({
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
    collection: 'students'
  }
)
module.exports = mongoose.model('Student', studentSchema)
