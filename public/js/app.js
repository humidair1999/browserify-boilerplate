// jquery doesn't require a shim at all, because the version we're using (1.11.0) is commonjs-compatible
var $ = require('jquery');

// reference our shimmed version of angular
var angular = require('angular');

// reference our shimmed version of angular-route; note that even though our shim exports window.angular,
//  we don't actually need to alias it when requiring; we can treat it more as a plugin, since it extends
//  the same namespace as core angular
require('angular-route');

// commonjs-compatible d3
var d3 = require('d3');

// our shimmed version of nvd3
var nvd3 = require('nvd3');

// all our libraries should exist and be available!

console.log('jquery: ', $);
console.log('angular: ', angular);

console.log('d3: ', d3);
console.log('nvd3: ', nvd3);

var myApp = angular.module('myApp', ['ngRoute']);

// let's require another app module to demonstrate more of the exposed module values
require('./lol');