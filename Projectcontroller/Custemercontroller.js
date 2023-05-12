
const Custemer = require("../ProjectSchema/Custemerschema")



//Add custemer

const Addcustemer=async(req,res)=>{
    const {Name,Email,AddressLine1,City,State,PinCode,Country}=req.body

    const findcustemer=await Custemer.findOne({Email})
     console.log({msg:'email already used',findcustemer});

    if (await !Name || !Email || !AddressLine1 || !City || !State || !PinCode || !Country){
      return  (res.json({msg:'Fill All the field'}))
    }
    if(await PinCode.length
        !==6){
       return (res.json({msg:'Pincode is not correct'}))
    }
    if(await findcustemer){
       return (res.json({msg:'Email alredy used'}))
    }
    else {
        const insertcustemer=await Custemer.create({
            Name,Email,AddressLine1,City,State,PinCode,Country
        })
        res.json({msg:'Custemer inserted',insertcustemer})
    }
}

//Display all custemer

const displaycustemer=async(req,res)=>{

    const discustemer=await Custemer.find()
    res.json(discustemer)
}


//Delete custemer

const Deletecustemer=async(req,res)=>{

    const _id=req.params.id

    const delcustemer=await Custemer.findByIdAndRemove({_id})


    if(delcustemer){
        const displaycustemer=await Custemer.find()
    res.json({msg:'Custemer deleted',displaycustemer})
    }
}

//Display single custemer data

const singlecustemer=async(req,res)=>{

    const _id=req.params.id
    const singledata=await Custemer.findById({_id})
    res.json(singledata)
}

//Update custemer

const updatecustemer=async(req,res)=>{

  const { Name,Email,AddressLine1,AddressLine2,City,State,PinCode,Country}=req.body
   
  const _id=req.params.id
  const updatedate=await Custemer.findByIdAndUpdate(_id,{Name,Email,AddressLine1,AddressLine2,City,State,PinCode,Country})

  res.json({msg:'Custemer updated',updatedate})
  console.log({msg:'Custemer updated',updatedate});

}


module.exports={Addcustemer,displaycustemer,Deletecustemer,singlecustemer,updatecustemer}