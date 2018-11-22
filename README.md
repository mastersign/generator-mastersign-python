# Yeoman Generator Mastersign Python

[![NPM version][npm-image]][npm-url]
<!-- [![Build Status][travis-image]][travis-url] -->
[![Dependency Status][daviddm-image]][daviddm-url]

> An opinionated generator for Python 3 projects

## Installation

First, install [Yeoman](http://yeoman.io) and generator-mastersign-python using [npm](https://www.npmjs.com/) (we assume you have pre-installed [node.js](https://nodejs.org/)).

```bash
npm install -g yo
npm install -g generator-mastersign-python
```

Then generate your new project:

```bash
yo mastersign-python
```

The generator supports different project flavors:

* Library
* CLI Tool

### Commandline Usage for Libraries

```
Usage:
  yo mastersign-python:library [<name>] [options]

Options:
  -h,    --help          # Print the generator's options and usage
         --skip-cache    # Do not remember prompt answers                                 Default: false
         --skip-install  # Do not automatically install dependencies                      Default: false
  -p,    --root-package  # The name of the root package
  -m,    --main-module   # The name of the main module                                    Default: core
  -d,    --description   # Description for description
  -u,    --project-url   # URL to the project homepage
  -a,    --author        # The authors name
  -e,    --email         # The authors email address
  -gh,   --github-user   # The username for GitHub
  -s,    --silent        # Do not ask any questions interactively
  -g,    --git-author    # Use the authors name and email from git config without asking  Default: false

Arguments:
  name  # The name of the distribution package  Type: String  Required: false
```

### Commandline Usage for CLI Tools

```
Usage:
  yo mastersign-python:cli [<name>] [options]

Options:
  -h,    --help          # Print the generator's options and usage
         --skip-cache    # Do not remember prompt answers                                 Default: false
         --skip-install  # Do not automatically install dependencies                      Default: false
  -p,    --root-package  # The name of the root package
  -m,    --main-module   # The name of the main module                                    Default: core
  -d,    --description   # Description for description
  -u,    --project-url   # URL to the project homepage
  -a,    --author        # The authors name
  -e,    --email         # The authors email address
  -gh,   --github-user   # The username for GitHub
  -s,    --silent        # Do not ask any questions interactively
  -g,    --git-author    # Use the authors name and email from git config without asking  Default: false

Arguments:
  name  # The name of the distribution package  Type: String  Required: false
```

## Getting To Know Yeoman

 * Yeoman has a heart of gold.
 * Yeoman is a person with feelings and opinions, but is very easy to work with.
 * Yeoman can be too opinionated at times but is easily convinced not to be.
 * Feel free to [learn more about Yeoman](http://yeoman.io/).

## License

BSD-3-Clause © [Tobias Kiertscher](https://www.mastersign.de/)

[npm-image]: https://badge.fury.io/js/generator-mastersign-python.svg
[npm-url]: https://npmjs.org/package/generator-mastersign-python
[travis-image]: https://travis-ci.org/mastersign/generator-mastersign-python.svg?branch=master
[travis-url]: https://travis-ci.org/mastersign/generator-mastersign-python
[daviddm-image]: https://david-dm.org/mastersign/generator-mastersign-python.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/mastersign/generator-mastersign-python
