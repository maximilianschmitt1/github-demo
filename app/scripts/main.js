'use strict';

var images = require('./images');

window.onload = function() {
	var image = document.querySelector('img');

	image.addEventListener('mouseover', function() {
		image.src = images.mouseover;
	});

	image.addEventListener('mouseout', function() {
		image.src = images.original;
	});
};