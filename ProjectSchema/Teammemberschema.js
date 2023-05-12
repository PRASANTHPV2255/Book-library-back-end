const  Mongoose  = require("mongoose");


const Teammemberschema=Mongoose.Schema({
    Name:{type:String},
    Email:{type:String},
    DateOfBirth:{type:String},
    Gender:{type:Boolean},
    Description:{type:String},
    Role:{type:String},
    PhoneNumber:{type:Number},
    ProfilePicture:{typr:String}

})
const Member=Mongoose.model('Project Team Member',Teammemberschema)

module.exports=Member