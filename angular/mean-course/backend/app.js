const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// app.use((req, res, next)=>{
//   console.log("First middleware");
//   next();
// });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));


app.use((req, res, next)=>{
  res.setHeader("Access-Control-Allow-Origin","*");
  res.setHeader("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept");
  res.setHeader("Access-Control-Allow-Methods", " GET, POST, PUT, PATCH, DELETE, OPTIONS");
  next();
});

app.post("/api/posts", (req, res, next)=>{
  const post = req.body;
  console.log(post);
  res.status(201).json({
    message: "Post added successfully"
  });
});

app.get('/api/posts',(req, res, next)=>{
  //res.send('Hello from express!');
  const posts = [
    { id: "12345", title:"rafi", content:"This is coming from server"},
    { id: "12345", title:"rafi", content:"This is coming from server"},
    { id: "12345", title:"rafi", content:"This is coming from server"}
  ];

  res.status(200).json({
    message:"posts fetched successfully",
    posts : posts,
    code:200
  });
  //res.json(posts);
});

module.exports = app;