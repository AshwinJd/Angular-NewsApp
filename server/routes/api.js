const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const News = require('../models/news');
const config = require('../../config/database');

mongoose.Promise = global.Promise;

mongoose.connect(config.database)
  .then(() =>  console.log('connection successful'))
  .catch((err) => console.error(err));




router.get('/news', (req,res) =>{
  console.log("get request for all favourite news");
  News.find({})
  .exec(function(err,news){
    if(err){
      console.log("Error getting news");
    }else {
      res.json(news);
    }
  })
});

router.post('/newsAdd', (req,res) =>{
  console.log("post request for news");
  console.log(req.body);
  var news = new News();
  news.id = req.body.author;
  news.title = req.body.title;
  news.description = req.body.description;
  news.image = req.body.urlToImage;
  news.url = req.body.url;
  news.save((err, insertedNews) =>{
    if(err){
      console.log("Error Saving news");
    }else {
      res.json(insertedNews);
    }
  })
})

module.exports = router;
