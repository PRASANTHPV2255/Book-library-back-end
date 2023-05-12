const User = require("../ProjectSchema/Userschema")
const bcrypt = require('bcrypt')
const jwt=require('jsonwebtoken')

const Usersignup=async(req,res)=>{
    const{FirstName,Lastname,Email,PhoneNumber,Password,ConfirmPassword}=req.body

    const signup=await User.findOne({Email})

   if(!FirstName || !Lastname || !PhoneNumber || !Password || !ConfirmPassword){
      return res.json({msg:'Fill all the fields'})
   } 
   if(Password.length < 8) {
    return res.json({msg:'Password must need at least 8 character'})
   }
   if(Password !== ConfirmPassword){
   return res.json({msg:'Password not match'})
   }
   if(signup){
    return res.json({msg:'Email already exist'})
   }
   else{
    const salt=await bcrypt.genSalt(10);
    const hashedpassword=await bcrypt.hash(Password,salt)
    const Usersignup=await User.create({
        FirstName,Lastname,Email,PhoneNumber,Password:hashedpassword
    })
    Token=gentoken(Usersignup._id)
    console.log({Usersignup});
    res.json({msg:'register successful',Usersignup,Token:Token,userId:finduser._id,usename:finduser.FirstName})
    
   }
}

//LOGIN CONTROLER

const Loginuser=async(req,res)=>{
    const{Email,Password}=req.body

    const finduser=await User.findOne({Email})


    if ( finduser && bcrypt.compareSync(Password,finduser.Password)){
        res.json({msg:'Logined success',Token:gentoken(finduser._id),userId:finduser._id,usename:finduser.FirstName})
     console.log({msg:'Login success'})
    } 
   else {
        res.json({msg:'Email and password not correct'})
        console.log('Email and password not correct'); 
    }
}
const gentoken=(id)=>{
    return jwt.sign({id},process.env.JWT_SECRET,{expiresIn:'1d'}); 
}

module.exports={Usersignup,Loginuser}