

const express = require("express");
const app = express();
const fs = require("fs");

const axios = require("axios");
const PORT = 3000;
app.use(express.json());

//Q2
const readFile = () => {
  let content;
  fs.readFile("data.txt", (err, data) => {
    if (err) throw err;
    content = data.toString();
    console.log(content);
  });
};
//readFile();

//Q3
const writeFile = () => {
  fs.writeFile("text.txt", "A new file has been created", (err) => {
    if (err) throw err;
    console.log("new file");
  });
};
//writeFile();

//Q4
/*
const getPost = async (id) => {
  let response;
  try {
    response = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );
    console.log("DATA",response.data)
  } catch (err) {
    throw err;
  }
};
getPost(50)*/
//------------------------------------------------------------------------------//
//Q4 promises
const getPost =  (id) => {
  
  
     axios.get(
      `https://jsonplaceholder.typicode.com/posts/${id}`)

      .then((response)=>{
        console.log("DATA",response.data)
      })
    .catch((err)=>{
      console.log("ERR",err)
    })
    
   
};
//getPost(50)
//------------------------------------------------------------------------------//
//Q5

const getPostAsync = async(data) => {
  let response;
  try {
    response = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${data}`
    );
    console.log("DATA2",response.data)
  } catch (err) {
    throw err;
  }
};
//getPostAsync(2)

//practice
//Q1
const appendToFile = (data) => {
  
  fs.appendFile("data.txt",data,(err) => {
    if (err) throw err;
    console.log('The ${data} was appended to file!');})
};
//appendToFile("hello")

//Q2
const copyFile = (fileName) => {
  fs.copyFile(fileName,"copy_of_data.txt",(err) => {
    if (err) throw err;
    console.log('the data has copied');})
};

//copyFile('data.txt')

//Q3
const post = JSON.stringify({
  title: "JavaScript Basics",
  body: "This post contains information about javaScript ",
  // the id of the user who is going to create the post
  userId: 1,
});

const createPost = (post) => {
  axios.post("https://jsonplaceholder.typicode.com/posts",post
    )
    .then((response)=>{
      console.log('DATA',response.data)
    })
    .catch((err)=>{
      console.log('ERR',err)
    })
};

//createPost(post);

//Q4
const newPost = JSON.stringify({
  // the post id that we want to update, change it when trying to update another post
  id: 1,
  title: "Updated Title",
  body: "Updated body",
  userId: 1,
});

const updatePost = (postId, data) => {
  axios.put(`https://jsonplaceholder.typicode.com/posts/${postId}`,data
    )
    .then((response)=>{
      console.log('DATA',response.data)
    })
    .catch((err)=>{
      console.log('ERR',err)
    })
};
//updatePost(1, newPost);

//Q5
const getUsers = async() => {
  let response;
  try{
    response=await axios.get("https://jsonplaceholder.typicode.com/users")
   // console.log('DATA',response.data)
    return response.data
  }catch(err){
    console.log("ERR",err)
  }
  
};
//getUsers()


//Q6
const saveUsers =async () => {
  console.log("getUsers",getUsers())
  const users=await getUsers()

  fs.writeFile("users.txt", JSON.stringify(users) , (err) => {
    if (err) throw err;
    console.log("new file");
  });
};
saveUsers()



app.listen(PORT, () => {
  console.log("SERVER IS WORKING ON http://localhost:" + PORT);
});


