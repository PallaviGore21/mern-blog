const express =  require("express")
require("dotenv").config({path:"./confiq/.env"})
const db = require("./confiq/db")
const cors=require("cors")
require("colors")
db()
const PORT = process.env.PORT || 5000
const app = express()
app.use(express.json()) 
app.use(express.static("public"))
app.use(cors())         
app.use("/blog",require("./routes/blogRoute"))

app.listen(PORT,console.log((`SERVER RUNNING http://localhost:5000 ${PORT}`.bgCyan)))