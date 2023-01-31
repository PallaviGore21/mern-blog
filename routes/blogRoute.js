const { getAllBlogs, addBlogs, removeBlog, editBlog } = require("../controllers/blogController")

const router=require("express").Router()

router
.get("/", getAllBlogs)
.post("/add", addBlogs)
.delete("/:blogId", removeBlog)
.put("/:blogId" , editBlog)

module.exports=router