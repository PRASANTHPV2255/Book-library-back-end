
const  Mongoose= require("mongoose");


const Userschema=new Mongoose.Schema({
    FirstName:{
        type: String,
        require:true,
    },
    LastName:{
        type:String,
        require:true,
    },
    Email:{
        type:String,
        require:true,
    },
    PhoneNumber:{
        type:Number,
        require:true,
    },
    Password:{
        type:String,
        require:true,
    },
    ConfirmPassword:{
        type:String,
        require:true,
    },
    Cart:[{type:Mongoose.Schema.Types.ObjectId,ref:'ProjectBook'}]
});

const User=Mongoose.model('ProjectUser',Userschema)

module.exports=User