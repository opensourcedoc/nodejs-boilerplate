# nodejs-boilerplate

This repo is a minimal Node.js project starter.

## System Requirements.

* Node.js with NPM support.

## Technology Stacks

Tools used during development phase:

* [Babel](https://babeljs.io/)
* [Flow](https://flow.org/)
* [ESLint](https://eslint.org/)
* [Gulp](https://gulpjs.com/) and related packages
 
There is no any external dependency on generated output.

## Usage

### Start a New Project

Clone this repo and install all the tools:

```
$ git clone https://github.com/cwchentw/nodejs-boilerplate.git myapp
$ cd myapp
$ npm install
```

After editing *myapp*, update the remote URL to save it to a new repo:

```
$ git remote set-url origin https://example.com/user/myapp.git
$ git push -u origin master
```

### Build a Project

Invoke this command to build the app in development mode:

```
$ npm run start-dev
```

All the JavaScript source files will be concatenated into single *app.js*, running it with `node`.

### Publish a Project

Invoke this command to build the app in release mode:

```
$ npm start
```

In addition to code concatenation, the generated code will be minified as well to save disk space.

### Check Type in Source

Run `flow` to check type in source code:

```
$ npm run flow
```

You have to add flow-compatible type annotation in JavaScript code to use flow by yourself.

### Notice

You have to edit *srclist.js* to set the order for file concatenation.

## Copyright

Copyright (c) 2019 Michelle Chen. Licensed under [MIT license](https://opensource.org/licenses/MIT)
