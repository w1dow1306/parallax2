const express = require('express');
const app = express();
const port = 3000; // You can change the port if needed
const path =require('path')
app.use(express.static('public'));
app.use('/static', express.static('static'));
app.get("/",(req,res)=>{
  res.sendFile(path.join(__dirname,"./index.html"))
})
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});