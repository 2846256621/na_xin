const express = require('express');
const app = express();

app.use(express.static('static'));

app.get('/',(req,res)=>{
  res.sendFile(__dirname + '/static/new.html');
})
// app.listen(8081,'192.168.1.225',()=>{
//     console.log('server on http://192.168.1.225:8081');
// })
app.listen(8081,'192.168.1.188',()=>{
  console.log('server on http://192.168.1.188:8081');
})
// 192.168.1.225
