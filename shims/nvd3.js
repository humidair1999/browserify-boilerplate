// the version of d3 we're using (3.4.5) is commonjs-compatible, so it exports a proper value we
//  can latch onto
window.d3 = require("d3");

// however, nv3d is not commonjs-compatible, so we had to expose d3 as window.d3 in order for nvd3
//  to be able to find it
require("../bower_components/nvd3/nv.d3.js");

// then, we can export window.nv in order to pretend we're a real commonjs module!
module.exports = window.nv;