const express = require('express')
const path = require('path')
const blogs = require('../data/blogs')

const router = express.Router();

router.get('/', (req, res) => {
    //res.sendFile(path.join(__dirname, '../views/blogHome.html'))
    res.render('home');
})

router.get('/about', (req, res)=>{
    //res.sendFile(path.join(__dirname, '../views/about.html'))
    res.render('about')
})

router.get('/blog', (req,res)=>{
    //res.sendFile(path.join(__dirname, '../views/blogPage.html'))
    res.render('blogHome',{
        blogs:blogs
    })
})

router.get('/blogpost/:slug', (req,res)=>{
    let myBlog = blogs.filter((element) => {
        return element.slug === req.params.slug;
    })
    res.render('blogPage',{
        title: myBlog[0].title,
        content: myBlog[0].content
    })
})

module.exports = router;