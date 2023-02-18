require('dotenv').config();
const express = require('express');
const app = express();
const PORT =  process.env.PORT || 3000 ;
const router = require('./routes')
app.use(express.json())

app.use('/api',router)
app.use(express.static(__dirname + '/www'))
app.listen(PORT,() => {
      console.log('Sever running on port : '+ PORT);
});
