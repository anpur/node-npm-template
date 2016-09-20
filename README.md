# node-npm-template
Template for Node.JS NPM package: VSCode launch task, Unit tests, Travis CI and RunKit custom example.

Contents of template:
 
 - [Node.js](https://nodejs.org) module
 - Sync and async tests with [Mocha framework](https://mochajs.org/) and [Chai assert](http://chaijs.com/api/assert/)
 - [VSCode](https://code.visualstudio.com) launch config to debug tests
 - [NPM package](https://www.npmjs.com/) with that module
 - [Travis CI](https://travis-ci.org/) integration
 - [RunKit](https://runkit.com) custom example

## Setup
Perform these steps to make initial setup of your work environment:
 1. Install the [VSCode](https://code.visualstudio.com)
 2. Install the [Node.js](https://nodejs.org), it comes with the [NPM](https://docs.npmjs.com/) package manager
 3. Open module's folder in the VSCode
 4. Run `npm install` in the root folder to install dependencies
 5. Press `F5` to run unit tests

## Node module
You can edit the module itself here: [node-npm-template.js](https://github.com/anpur/node-npm-template/blob/master/node-npm-template.js).

Also, check my [JS backend / frontend example](https://github.com/anpur/js-frontend-backend-example) to learn more about Node.JS modules and Mocha tests. 

## Sync and async tests
Check out [tests/unit-tests.js](https://github.com/anpur/node-npm-template/blob/master/tests/unit-tests.js) and [tests/functional-tests.js](https://github.com/anpur/node-npm-template/blob/master/tests/functional-tests.js) files for examples of tests.

## VSCode launch config
Mocha invocation is added to [.vscode/launch.json](https://github.com/anpur/node-npm-template/blob/master/.vscode/launch.json) so you can debug tests.

## NPM package
NPM package is described in the [package.json](https://github.com/anpur/node-npm-template/blob/master/package.json) file.
Also notice `test` script command, which defines NPM module tests (invoked by Travis).

To publish such module simply run:

    npm publish

in the folder with `package.json` file (first time you'll be asked to login with `npm adduser` command).

You can show nice badge of your NPM package in your [README.md](https://github.com/anpur/node-npm-template/blob/master/README.md#npm-package) file:

[![NPM:](https://img.shields.io/npm/v/node-npm-template.svg)](https://www.npmjs.com/package/node-npm-template)

## Travis CI
To integrate with Travis CI we simply need to add [.travis.yml](https://github.com/anpur/node-npm-template/blob/master/.travis.yml) file to the root of GitHub repo and init it on [Travis CI](https://travis-ci.org/) site.

You can check results build results: [travis-ci.org/anpur/node-npm-template](https://travis-ci.org/anpur/node-npm-template) or even add nice badge to your [README.md](https://github.com/anpur/node-npm-template/blob/master/README.md#travis-ci) file:

[![Build Status](https://api.travis-ci.org/anpur/node-npm-template.svg)](https://travis-ci.org/anpur/node-npm-template)