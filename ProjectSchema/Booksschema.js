const  Mongoose  = require("mongoose");



const bookschema=Mongoose.Schema({
 
    BookName:{type:String},
    Language:{type:String},
    Author:{type:String},
    Genre:{type:String},
    Published:{type:String},
    Price:{type:Number},
    Quantity:{type:Number},
    Image:{type:String}
})

const Book=Mongoose.model('ProjectBook',bookschema);

module.exports=Book