

const express=require('express')
const connectDB = require('./Database')
const router=require('./Testrouter')
const app=express()
const dotenv=require('dotenv')
const cors=require('cors')

const bodyParser = require('body-parser')

app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));

app.use(express.json())
connectDB();

dotenv.config()
app.use(cors({
    origin:'http://localhost:3000',
    credentials:true,
}))
app.use('/',router)

app.get('/',(req,res)=>{
    res.json('API IS RUNNING');
})

const PORT = process.env.PORT||4000;
  
app.listen(PORT,()=>console.log(`SERVER IS RUNNING ON PORT ${PORT}`))