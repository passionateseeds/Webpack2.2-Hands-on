# webpack 2.2 hands-on tutorial

## Goal of this hands-on
This is a part of my webpack learning journey, we wrote this documents to help myself re-formulate what I have learnt, clarify my thinking.
This hands-on is step-by-steps configure webpack as well as detail of what problems we are trying to solve.
My advise is stick with this hands-on, doing by yourself, look at [the webpack official docs][twod]  for clarification.

[Check out my blog here.](http://yolokuder.com) or [visit my youtube chanel here](http://youtube.com)

## Prerequisites
  * You know basic web development with html, javascript, css and Node.js

## Table of Contents
  1. [chapter 01. initial project configuration](#chapter 01. initial project configuration)
  1. [chapter 02. bundling using webpack](#chapter 02. bundling using webpack)
  1. [chapter 03. initial project configuration](#chapter01. initial project configuration)
  1. [chapter 04. bundling using Webpack](#chapter02. bundling using Webpack)
  1. [chapter 05. webpack configuration](#chapter03. webpack configuration)
  1. [chapter 06. webpack plugin](#chapter04. webpack plugin)
  1. [chapter 07. webpack loader](#chapter05. webpack loader)
  1. [chapter 08. development environment](#chapter06. development environment)
  1. [chapter 09. code splitting](#chapter07. code splitting)


## chapter01. initial project configuration
The main function of web browser is to present web resource we choose. The web resource is usually
  * A HTML file which describes content of elements
  * CSS files which defines the look and feel of a particular elements
  * JavaScript makes HTML page more dynamic

To initialize project, I create `index.html` file, `main.css` file and `bundle.js` file in `build` folder. `build` folder is a package we will deploy to web server.

## chapter02. bundling using Webpack
The first step to use webpack is installing. I want to create a node project by doing the following
```bash
npm init --yes

# `--yes` flag tell `npm` not ask any questions and fill with default values
```

Now, you can see the `package.json` file is created in current folder.
Next, I wanna install webpack by running
```
npm install webpack --save-dev
```
Awesome, if you look at `package.json` file, there is webpack dependencies added to project.
```json
"devDependencies": {
  "webpack": "^2.2.1"
}
```
In additional, `node_modules` folder is created.

> I am using `Git`, I don't want `Git` check in any files in `node_modules` so I add `.gitignore` file.
> This is not necessarily if you are not working with Git

while developing, I want to have a `src` folder which I am working on and then I will build to `build` folder as a package for deployment. So I create `index.js` file in `src` folder.

To prepare a package, I do following
```
node .\node_modules\webpack\bin\webpack.js .\src\index.js .\build\bundle.js
```
`webpack` will compile `.\src\index.js` file and create a `.\build\bundle.js` file.

If successful it displays something like this in console:

```
Hash: 823d4bfbef66397b9714
Version: webpack 2.2.1
Time: 63ms
    Asset     Size  Chunks             Chunk Names
bundle.js  2.59 kB       0  [emitted]  main
   [0] ./src/index.js 83 bytes {0} [built]
```
Look into the `.\build\bundle.js` file, we can see javascript from `.\src\index.js` moved to the end of file like this.
```javascript

/***/ (function(module, exports) {

document.getElementById('root').innerHTML = 'This is the best project structure';


/***/ })
```
Now, refresh browser and congratulation!!! you have done a good job using `webpack` now.
With my curiosity, I want to change a little bit and experiment with webpack. I create a `.\src\component` folder and add `.\src\compoment\button.js` file. Then, I want to use the button in `index.js` file. Node allow us to load modules using `require` keyword, so I add 2 lines to `index.js` file

```javascript
var button = require("./component/button")
document.body.appendChild(button);
```
Next, I package by executing command line again
```
node .\node_modules\webpack\bin\webpack.js .\src\index.js .\build\bundle.js
```
That is so awesome, `webpack` understand that `index.js` depends on `button.js` and `webpack` bundle the javascript code in `button.js` file to `bundle.js` output file too.

> `webpack` is a module bundler, it will analyze dependencies of modules and generate assets (or bundles)

From an experiment in example above, `index.js` is a `entry point`. `webpack` recursively builds a dependency graph that includes every module your application needs, then packages all of those modules into a small number of bundles - often, just one - to be loaded by the browser. Read more at [webpack document site](#webpackdoc)

## chapter03. webpack configuration
## chapter04. webpack plugin
## chapter05. webpack loader
## chapter06. development environment
## chapter07. code splitting


[twod]: <https://webpack.js.org/>
[webpackdoc]: <https://webpack.js.org/concepts/dependency-graph/>
