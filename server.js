const express=require('express');
const app=express();
const PORT=5000;

const country={
  'jo':{
    'nameEn':'Jordan',
    'nameAr':'الاردن',
    'info':'',
    'flag':''
  },
  'af':{
    'nameEn':'Afghanistan',
    'nameAr':'أفغانستان',
    'info':'',
    'flag':'https://www.worldometers.info/img/flags/af-flag.gif'
  }
  
}

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

app.listen(PORT,()=>{
  console.log(`here we goooo on port${PORT}`);
})
