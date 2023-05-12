const  Mongoose  = require("mongoose");

const custemerschema= Mongoose.Schema({
    Name:{type:String},
    Email:{type:String},
    AddressLine1:{type:String},
    City:{type:String},
    State:{type:String},
    PinCode:{type:Number},
    Country:{type:String}
})

const Custemer=Mongoose.model('ProjectCustemer',custemerschema)

module.exports=Custemer