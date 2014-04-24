// reference our shimmed angular lib that exports window.angular, and expose window.angular within
//  this module to ensure angular-route has it to latch onto
window.angular = require("angular");

// this version of angular-route (1.2.16), much like angular itself, doesn't export anything; it
//  augments window.angular alongside the core lib
require("../bower_components/angular-route/angular-route.js");

// it's actually not necessary to explicitly export window, a global browser value, from this module; we
//  just do it to follow proper patterns
module.exports = window.angular;