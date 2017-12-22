const mongoose = require( 'mongoose' )
require('mongoose-type-email')

const _schema = {
  name:{
    type: String,
  },
  email: {
    type: String,
  },
  type:{
    type: String,
    
  }
  

}
const schema = new mongoose.Schema( _schema )
const Model = mongoose.model( 'User', schema )

module.exports = Model
