// jQuery does not export itself as node.js/CommonJS module
require("../bower_components/angular/angular.js");
// but after the require we can just export the jQuery
// global from this module
module.exports = window.angular;