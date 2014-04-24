(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
// if you want to use a module like angular on a per-module basis (var angular), you must use the export
//  value within browserify-shim; since angular attaches itself to the window, the export lets your module
//  know to check window object for angular
//var angular = require('angular');
//require('angular-route');
//var d3 = require('d3');
//var nv = require('nvd3');

var $ = require('jquery');
var angular = require('angular');

require('angular-route');

var nvd3 = require('nvd3');
var d3 = require('d3');


console.log($);
console.log(angular);

console.log(d3);
console.log(nvd3);

var myApp = angular.module('myApp', ['ngRoute']);

require('./lol');
},{"./lol":2,"angular":"C+Mn/M","angular-route":"mDPAxo","d3":"Mt5tg5","jquery":"cKJToO","nvd3":"qoNtjj"}],2:[function(require,module,exports){
// if you want to use a module like angular on a per-module basis (var angular), you must use the export
//  value within browserify-shim; since angular attaches itself to the window, the export lets your module
//  know to check window object for angular
//var angular = require('angular');
//require('angular-route');
//var d3 = require('d3');
//var nv = require('nvd3');

console.log(window.jQuery);
console.log(angular);

console.log(d3);
console.log(window.nv);
},{}]},{},[1])