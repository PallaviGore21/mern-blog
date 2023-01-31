const mongoose = require("mongoose")
const db =()=>{
    try{
        mongoose.set('strictQuery', true);

             mongoose.connect(process.env.MONGO_URL)
             console.log("db connected".bgYellow);
    }catch(error){ 
        console.log(`Unable to connect ${error}`)
        process.exit() // to stop the server

    }
}
module.exports=db