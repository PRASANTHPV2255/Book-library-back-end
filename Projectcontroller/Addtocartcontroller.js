const { json } = require("express");
const User = require("../ProjectSchema/Userschema");


const addtocart=async(req,res)=>{
    const{bookid,userId}=req.body;

    const addtocart=await User.updateOne({_id:userId},{$addToSet:{Cart:bookid}})

    if(addtocart){
        res.json({addtocart,msg:'added'})
        console.log(addtocart);
    }
    else{
        return res.status(400).json('Some error')
    }
}

const cart=async(req,res)=>{
    const {userId}=req.body
    const product=await User.findOne({_id:userId}).populate('Cart')

   if(product){
    res.json({msg:'get cart',product})
   }
   else{
    return res.status(400).json('some error')
   }
}

const removeitemfromcart=async(req,res)=>{
    const{bookid,userId}=req.body;
    const addtocart=await User.findByIdAndUpdate(userId,{"$pull":{Cart:bookid}})

    if(addtocart){
        return res.json({addtocart})
    }
    else{
        return res.status(400).json('some error')
    }
}
module.exports={addtocart,cart,removeitemfromcart}