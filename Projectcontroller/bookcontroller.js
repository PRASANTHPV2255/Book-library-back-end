const Book = require("../ProjectSchema/Booksschema")


const Addbook=async(req,res)=>{
    const{BookName,Language,Author,Genre,Published,Price,Quantity,Image}=req.body

    const books=await Book.findOne({BookName})
    //console.log(books);

    if(!BookName || !Language || !Author || !Genre || !Published || !Price || !Image){

       return res.json({msg:'fill all the filed'})
    } 
     if(books) {
       return res.json({msg:'book already exist'})
    } 
    else {
        const insertbook=await Book.create({
            BookName,Language,Author,Genre,Published,Price,Quantity,Image
        })
       return res.json({msg:"Book added",insertbook})
    }
}

//Display books//

const bookdetails=async(req,res)=>{

    const bookdis=await Book.find()
    res.json(bookdis)
}

//Delete

const deletedata=async(req,res)=>{
    const _id=req.params.id
    const deletebook=await Book.findByIdAndRemove(_id)
    
    if(deletebook){
        const books=await Book.find()
    res.json({msg:'book deleted',books})
    }
    // const books=await Book.find()
    // res.json({msg:'book deleted',books})
}

//update//

const updatebook=async(req,res)=>{
    const {BookName,Language,Author,Genre,Published,Price,Quantity,Img}=req.body
    const _id=req.params.id
    const update=await Book.findByIdAndUpdate(_id,{BookName,Language,Author,Genre,Published,Price,Quantity,Img})
    res.json({msg:'book updated',update})
}

//display single book details
const findbook=async(req,res)=>{
    const _id=req.params.id
    const find=await Book.findById(_id)
    res.json({msg:'book find',find})
}




module.exports={Addbook,bookdetails,deletedata,updatebook,findbook}