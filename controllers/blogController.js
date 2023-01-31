const Blog = require("./../models/blogModel")
exports.getAllBlogs=async(req,res)=>{
    try{
        const result=await Blog.find()
        res.json({
            success:true,
            message:"All blogs Fetched Successfully",
            result
        })
    }catch(error){
        res.json({
            success:false,
            message:`Error ${error}`,
            result
        })
    }
}

exports.addBlogs=async(req,res)=>{
    try{
        console.log(req.body);
        await Blog.create(req.body)
        res.json({
            success:true,
            message:"All blogs added Successfully",
            
        })
    }catch(error){
        res.json({
            success:false,
            message:`Error ${error}`,
         
        })
    }
}

exports.removeBlog=async(req,res)=>{
    try{
        const {blogId} = req.params
        await Blog.findByIdAndDelete(blogId)
        res.json({
            success:true,
            message:"All blogs deleted Successfully",
            
        })
    }catch(error){
        res.json({
            success:false,
            message:`Error ${error}`,
         
        })
    }
}

exports.editBlog=async(req,res)=>{
    try{
        const {blogId} = req.params
        await Blog.findByIdAndUpdate(blogId,req.body)
        res.json({
            success:true,
            message:"All blogs updated Successfully",
            
        })
    }catch(error){
        res.json({
            success:false,
            message:`Error ${error}`,
         
        })
    }
}