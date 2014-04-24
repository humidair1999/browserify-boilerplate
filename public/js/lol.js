// note that jquery isn't available in any way, shape or form, because it's a commonjs
//  module and didn't have to expose a window value for any plugins or anything
//console.log($);
console.log('jquery: ', window.jQuery);
console.log('jquery: ', window.$);

// angular is available, because it exports to window.angular
console.log('angular: ', angular);

// d3 is available, because we had to attach it to window.d3 in order for nvd3 to attach itself
//  to d3. otherwise, d3 would be in the same situation as jquery
console.log('d3: ', d3);

// nvd3 is also available, because it's not commonjs compatible and simply attaches itself to window.nv
console.log('nvd3: ', nv);