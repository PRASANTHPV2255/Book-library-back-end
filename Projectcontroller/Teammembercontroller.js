
const Member = require("../ProjectSchema/Teammemberschema")





//ADD TEAM MEMBER
const Teammember=async(req,res)=>{

    const{Name,Email,DateOfBirth,Gender,Description,Role,PhoneNumber}=req.body

    const finduser=await Member.findOne({Email})

    if(!Name || !Email || !DateOfBirth || !Gender || !Description || !Role || !PhoneNumber){
      return  res.json({msg:'Fill all Field'})
    }
    if(finduser){
     return   res.json({msg:'Email already used'})
    }
    if(PhoneNumber.length !==10){ 
      return  res.json({msg:'Phone number is not correct'})
    }
    else{
        const insermember=await Member.create({
            Name,Email,DateOfBirth,Gender,Description,Role,PhoneNumber
            
        })
       return res.json({msg:'Team Member Created',insermember}) 
    }
}

//Dispaly

const memberdisplay=async(req,res)=>{

    const display=await Member.find()
    res.json(display)
}




//Update

const updatemember=async(req,res)=>{

    const{Name,Email,DateOfBirth,Gender,Description,Role,PhoneNumber}=req.body
    
    const _id=req.params.id
    const update=await Member.findByIdAndUpdate(_id,{Name,Email,DateOfBirth,Gender,Description,Role,PhoneNumber})

    res.json({msg:'Team Member Updated',update})
}

//view single data

 const singlemember=async(req,res)=>{
      
    const _id=req.params.id
    const member=await Member.findOne({_id})
    res.json(member)
 }

 //Delete member

 const deletemember=async(req,res)=>{

    const _id=req.params.id
    const deletedata=await Member.findByIdAndRemove({_id}) 


    if(deletedata){
        const displaymember=await Member.find()
        res.json({msg:'Member Deleted',displaymember})
    }
 } 


module.exports={Teammember,updatemember,memberdisplay,singlemember,deletemember}