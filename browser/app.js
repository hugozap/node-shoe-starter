var domready            = require('domready');
var through             = require('through');
var shoe                = require('shoe');
var serverStream  = shoe('/data');

domready(function(){

	 serverStream
	 	.pipe(through(show));

})


function show(chunk){
	console.log(chunk);
	this.push(chunk);
}

