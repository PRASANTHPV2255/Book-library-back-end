const Projectadmin = require("../ProjectSchema/Adminschema")
const bcrypt=require('bcrypt')
const jwt=require('jsonwebtoken')




//Register Admin

const register=async(req,res)=>{

    const {AdminName,Email,Password}=req.body

   const salt=await bcrypt.genSalt(10)
   const hashedpassword=await bcrypt.hash(Password,salt)

   const adminregister=await Projectadmin.create({
    AdminName,Email,Password:hashedpassword
   })
   Token=gentoken(adminregister._id)
}


//Login Admin
const loginadmin=async(req,res)=>{
    const {AdminName,Email,Password}=req.body

    const adminlogin=await Projectadmin.findOne({Email})

    if(!AdminName || !Email || !Password){
        return res.status(400).json({msg:'fill all the filed'})
    }
    if(adminlogin){
        return({msg:'Admin Logined success'})
    }
    else{
        return res.status(400).json({msg:'Email and Password is not correct'})
    }
}

const gentoken=(id)=>{
    return jwt.sign({id},process.env.JWT_SECRET,{expiresIn:'1d'})
}



module.exports=loginadmin