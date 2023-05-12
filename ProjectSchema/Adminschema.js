const Mongoose  = require("mongoose");


const adminschema=Mongoose.Schema({
    AdminName:{type:String},
    Email:{type:String},
    Password:{type:String},
})

const Projectadmin=Mongoose.model('Project Admin',adminschema)

module.exports=Projectadmin