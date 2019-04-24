'use strict'

const express= require('express');
const app    = express();
const path   = require('path');
const port   = 5000;

app.use(express.static(path.join(__dirname + '/public')));
app.use(express.static(path.join(__dirname + '/public/bower_components')));
app.set('view engine','ejs')

app.get("/", (req, res) => {
	 res.redirect('http://applelink.s3-website.us-east-2.amazonaws.com/login');
})

app.get("/home", (req, res) => {
	 res.sendFile(path.join(__dirname + '/views/Home.html'));
})


app.listen(process.env.PORT || 5000, () => {
	console.log('server is up in port ' + process.env.PORT);	
}) 
	
