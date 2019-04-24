'use strict'

const express= require('express');
const app    = express();
const path   = require('path');
const port   = 5000;

app.use(express.static(path.join(__dirname + '/public')));
app.use(express.static(path.join(__dirname + '/public/bower_components')));
app.set('view engine','ejs')

app.get("/", (req, res) => {
	 res.sendFile(path.join(__dirname + '/index.html'));
})

app.get("/home", (req, res) => {
	 res.sendFile(path.join(__dirname + '/views/Home.html'));
})


app.listen(process.env.PORT || 5000, () => {
	console.log('server is up in port ' + process.env.PORT);	
}) 
	
