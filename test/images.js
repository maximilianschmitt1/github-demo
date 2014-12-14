/* global describe, it */
'use strict';

var fanImages = require('../app/scripts/images');
var expect = require('expect');

describe('images', function() {
	it('provides an original image', function() {
		expect(fanImages.original).toExist();
	});
	it('provides a mouseover image', function() {
		expect(fanImages.mouseover).toExist();
	});
});