

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
readFile();

//Q3
const writeFile = () => {
  fs.writeFile("text.txt", "A new file has been created", (err) => {
    if (err) throw err;
    console.log("new file");
  });
};
writeFile();

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
getPost(50)
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
getPostAsync(2)

//practice
//Q1
const appendToFile = (data) => {
  
  fs.appendFile("data.txt",data,(err) => {
    if (err) throw err;
    console.log('The ${data} was appended to file!');})
};
appendToFile("hello")









app.listen(PORT, () => {
  console.log("SERVER IS WORKING ON http://localhost:" + PORT);
});
