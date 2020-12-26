const express = require('express');
const router = express.Router()
const Posts = require('../Models/post.js')

// get all posts
router.get('/', async(req,res)=>{
    try {
        const posts = await Posts.find();
        res.json(posts);
    }
    catch(err){
     res.status(500).json({message:err});
    }
});

// post by id
router.get('/:id', async(req,res)=>{
    try {
        const posts = await Posts.findById(req.params.id);
        res.json(posts);
    }
    catch(err){
     res.status(500).json({message:err});
    }
});

// creating a post
router.post('/',(req,res)=>{
   const post = new Posts ({
       title: req.body.title,
       description:req.body.description
   });
   post.save()
   .then((data)=>{
     res.json(data);
   })
   .catch((err)=>{
    res.json({message:err})
   });
})


// delete alll posts
router.delete('/', async(req,res)=>{
    try {
        const deleteposts = await Posts.remove();
        res.json(deleteposts);
    }
    catch(err){
     res.status(500).json({message:err});
    }
})

// delete post by id
router.delete('/:id', async(req,res)=>{
    try {
        const removePost = await Posts.remove({_id:req.params.id});
        res.json(removePost);
    }
    catch(err){
     res.status(500).json({message:err});
    }
})

// updated post by id
router.patch('/:id',async(req,res)=>{
    try {
        const updatePost = 
        await Posts.updateOne({_id:req.params.id}, 
        {$set:{description: req.body.description, title: req.body.title}});
        res.json(updatePost);
    }
    catch(err){
     res.status(500).json({message:err});
    }
})


module.exports = router