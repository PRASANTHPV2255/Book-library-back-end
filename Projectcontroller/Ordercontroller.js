const Order = require("../ProjectSchema/Orderschema")



//CREATE ORDER
const Addorder=async(req,res)=>{
    
    const{FirstName,LastName,OrderId,ProductNumber,Date}=req.body

    const findorder=await Order.findOne({OrderId})

    if(await !FirstName || !LastName || !OrderId || !ProductNumber || !Date){
      return  res.json({msg:'Fill all the field'})
    }
    if(findorder){
       return res.json({msg:'Order already exist'})
    }
    if(OrderId.length !==5){
        return res.json({msg:'Order Id is not Correct'})
    }
    else{
        const cresteorder=await Order.create({
            FirstName,LastName,OrderId,ProductNumber,Date
        })
        console.log(cresteorder);
        return res.json({msg:'Order created',cresteorder})
    }

}
//Display all data

const displayorder=async(req,res)=>{

   
    
    const display=await Order.find()
    return res.json(display)
}

//Find Single Order Details

const singleorder=async(req,res)=>{

    const _id=req.params.id
    
    const singledata=await Order.findById({_id})
    return res.json(singledata)
}

//Delete Order

const Deleteorder=async(req,res)=>{
    const _id=req.params.id

    const deletedata=await Order.findByIdAndRemove({_id})

    if(deletedata){
        const displaydata=await Order.find()
    return res.json({msg:'Order deleted',displaydata})
    }
}

//Update Order

const updateorder=async(req,res)=>{

    const{FirstName,LastName,OrderId,ProductNumber,Date}=req.body

    const _id=req.params.id

    // if(await !FirstName || !LastName || !OrderId || !ProductNumber || !Date){
    //     return  res.json({msg:'Fill all the field'})
    //   }
    //else{
    const update=await Order.findByIdAndUpdate(_id,{FirstName,LastName,OrderId,ProductNumber,Date})

      console.log(update);
    return res.json({msg:'Order Updated',update})
    //}
}

module.exports={Addorder,displayorder,singleorder,Deleteorder,updateorder}