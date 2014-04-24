// jQuery does not export itself as node.js/CommonJS module
window.d3 = require("d3");
// but after the require we can just export the jQuery
// global from this module
require("../bower_components/nvd3/nv.d3.js");

module.exports = window.nv;