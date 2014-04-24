// the version of angular we're using (1.2.16) is not commonjs-compatible; it attaches to
//  the window as window.angular, and the library doesn't export anything
require("../bower_components/angular/angular.js");

// export the window.angular to emulate a proper module export value
module.exports = window.angular;