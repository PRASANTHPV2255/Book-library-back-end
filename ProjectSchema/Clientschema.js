const  Mongoose  = require("mongoose");


const clientschema=Mongoose.Schema({
    Name:{type:String},
    Email:{type:String},
    SignedStatus:{type:Boolean},
    Role:{type:String},
    Phonenumber:{type:Number}
})

const Client=Mongoose.model('project client',clientschema)

module.exports=Client