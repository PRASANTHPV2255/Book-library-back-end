const  Mongoose  = require("mongoose");


const orderschema=Mongoose.Schema({
    
    FirstName:{type:String},
    LastName:{type:String},
    OrderId:{type:String},
    ProductNumber:{type:Number},
    Date:{type:String}
})

const Order=Mongoose.model('Project Order',orderschema)

module.exports=Order