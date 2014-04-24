// jQuery does not export itself as node.js/CommonJS module
window.angular = require("angular");
// but after the require we can just export the jQuery
// global from this module
require("../bower_components/angular-route/angular-route.js");

module.exports = window.angular;