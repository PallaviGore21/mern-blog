const mongoose = require("mongoose")

const blogSchema=mongoose.Schema({
    title:{
        type:String,
        required:[true,"please Provide title"]
    },

    desc:{
        type:String,
        required:[true,"please Provide desc"]
    },

    image:{
        type:String,
        require:[true, "please Provide image url"]
    },
    publish:{
        type:Boolean,
        default:false
    }
})
module.exports=mongoose.model("blog",blogSchema)