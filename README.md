# nodejs-boilerplate

This repo is a minimal Node.js project starter.

## System Requirements.

* Node.js with NPM support.

## Technology Stacks

Tools used during development phase:

* [Babel](https://babeljs.io/)
* [Flow](https://flow.org/)
* [Gulp](https://gulpjs.com/) and related packages
 
There is no any external dependency on generated output.

## Usage

### Start a New Project

Clone this repo and install all the tools:

```
$ git clone https://github.com/cwchentw/nodejs-boilerplate.git
$ my nodejs-boilerplate myapp
$ cd myapp
$ npm install
```

After editing *myapp*, update the remote URL to save it to a new remote repo:

```
$ git remote set-url origin path/to/remote/repo
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
$ npm run start
```

In addition to code concatenation, the code will be minified to save disk space.

### Check Type in Source

Run `flow` to check type in source code:

```
$ npm run flow
```

You have to add flow-compatible type annotation in JavaScript code to use flow by yourself.

### Notice

You have to edit *srclist.js* to set the order for file concatenation.

## Copyright

2019, Michael Chen. The repo itself is licensed under [MIT license](https://opensource.org/licenses/MIT). Nevertheless, you may adopt it in your own project with any license you prefer.
