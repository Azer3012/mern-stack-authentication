const express = require("express");
const mongoose=require('mongoose')
const dotenv =require('dotenv')
const cors =require('cors')
const userRouter=require('./routers/userRouter')
const customerRouter=require('./routers/customerRouter')
dotenv.config()

const cookieParser=require('cookie-parser')
//set up server
const app = express();
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`server started on port :${PORT}`));



app.use(express.json())
app.use(cookieParser())
app.use(cors({
    origin:["http://localhost:3000"],
    credentials:true
}))
//connect to mongoDB


mongoose.connect(process.env.MDB_CONNECT,{
    useNewUrlParser:true,
    useUnifiedTopology:true,

},(err)=>{
    if(err) return console.log(err);

    console.log('Connected to MongoDB');
})


//set up routes

app.use('/auth',userRouter)
app.use('/customer',customerRouter)