const express=require('express');
const app=express();
const PORT=5000;

app.get('/',(req,res)=>{
  res.sendFile(__dirname+'/homePage/homePage.html')
})

app.listen(PORT,()=>{
  console.log('here we goooo');
})