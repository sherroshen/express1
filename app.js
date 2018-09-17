var express = require('express');
var path = require('path');

var app = express();

var fn = express.static(path.join(__dirname,'public'));
//console.log(fn.toString());

app.use('/',fn);

app.listen(9999,function(){
	console.log('listen:9999');
})