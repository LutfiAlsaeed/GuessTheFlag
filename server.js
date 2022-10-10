const express=require('express');
const app=express();
const cors=require('cors')
const PORT=5000;



app.get('/',(req,res)=>{
  res.sendFile(__dirname+'/homePage/homePage.html')
})

app.get('/api/:flag',(req,res)=>{
  const reqCountry=req.params.flag.toLowerCase();
  if(country[reqCountry]){
    res.json(country[reqCountry])
  }
  res.json(country)
})

app.listen(process.env.PORT || PORT,()=>{
  console.log(`here we goooo on port${PORT}`);
})
