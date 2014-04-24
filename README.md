## browserify-boilerplate

#### a boilerplate for vanilla browserify, intended to showcase and explain usage

---

###### What is it?

This bad boy is a boilerplate for `browserify` without any wacky transforms, shims, or plugins of any sort. It's intended to demonstrate how to manually shim a variety of libraries and plugins that utilize common design patterns (CommonJS, AMD, `window` values) so that you can discover how to write your own shims for the obscure libraries and plugins you're using to easily make them `browserify`-compatible!

---

###### Why?

Because frankly, JS module loaders, especially those intended for the client-side, have really, really bad documentation. They lack significant examples and example use cases. The best way to get up-and-running with a new tool is to see complete, code-commented examples of it in action. Let's do that.

---

###### What libraries are included/demonstrated?

- jQuery (CommonJS)
- Angular (`window`)
- Angular.route (`window`; plugin)
- d3 (CommonJS)
- nvd3 (`window`; plugin)

With more to come! I'd take suggestions, as well.

---

###### How do I get it working?

1. Clone this repo
2. Install `browserify` globally with `npm install -g browserify`
3. Install `grunt` globally with `npm install -g grunt-cli`
4. `npm install` and `bower install` (have `npm` and `bower` installed, obviously)
5. Run the default grunt task with simply `grunt`
6. Start the node server with `node server.js` and navigate to `localhost:3000`
7. Read through the code; it's well-commented and (hopefully) logical

---

###### What's coming?

- More examples (jQuery plugin, jQueryUI, maybe some AMD examples?)
- Remove `grunt` and utilize `npm run` scripts instead
- Showcase `browserify` `transform`, such as `brfs`
- Testing integration(?)
