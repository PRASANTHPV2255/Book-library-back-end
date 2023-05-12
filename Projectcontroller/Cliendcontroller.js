
const Client = require("../ProjectSchema/Clientschema")


const addClient=async(req,res)=>{
    const {Name,Email,SignedStatus,Role,Phonenumber}=req.body

    const finduser=await Client.findOne({Email})
    console.log({msg:'No Client found',finduser});

    if(!Name || !Email || !SignedStatus || !Role || !Phonenumber){
      res.json({msg:'fill all the field'})
    }
    if(finduser){
        res.json({msg:'Email already used'})
    }
    else{
        const insertclient=await Client.create({
            Name,Email,SignedStatus,Role,Phonenumber
        })
        res.send({msg:'Client added',insertclient})
    } 
   
    
}
//display cliend details

const displayclient=async(req,res)=>{
    const clientdetails=await Client.find()
    res.json(clientdetails)
}

//update client

const updateclient=async(req,res)=>{
     
    const {Name,Email,SignedStatus,Role,Phonenumber}=req.body

    const _id=req.params.id
    const clientupdate=await Client.findByIdAndUpdate(_id,{Name,Email,SignedStatus,Role,Phonenumber})
    
    res.json({msg:'Client updated',clientupdate})
    console.log({msg:'Client updated',clientupdate});

}

//Client delete
const deleteclient=async(req,res)=>{
   const _id=req.params.id
   const clientdelete=await Client.findByIdAndRemove(_id)
   

   if(clientdelete){
    const clients=await Client.find()
    res.json({msg:'Client deleted',clients})
   }
}

//Display single Client details

const singledate=async(req,res)=>{
    const _id=req.params.id

    const findclient=await Client.findById(_id)
    res.json(findclient)
}

module.exports={addClient,displayclient,updateclient,deleteclient,singledate}