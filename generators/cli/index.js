/* jshint esversion: 6 */
/* globals require, module */

const Generator = require('../basegen');
const chalk = require('chalk');
const yosay = require('yosay');


module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);
    this._initCli();
  }

  _initCli() {
    this.argument('name', {
      description: 'The name of the distribution package',
      type: String,
      required: false
    });

    this.option('root-package', {
      alias: 'p',
      description: 'The name of the root package',
      type: String
    });
    this.option('main-module', {
      alias: 'm',
      description: 'The name of the main module',
      type: String,
      default: 'core'
    });
    this.option('description', {
      alias: 'd',
      type: String
    });
    this.option('project-url', {
      alias: 'u',
      description: 'URL to the project homepage',
      type: String
    });
    this.option('author', {
      alias: 'a',
      description: 'The authors name',
      type: String
    });
    this.option('email', {
      alias: 'e',
      description: 'The authors email address',
      type: String
    });
    this.option('github-user', {
      alias: 'gh',
      description: 'The username for GitHub',
      type: String
    });

    this.option('silent', {
      alias: 's',
      description: 'Do not ask any questions interactively',
      type: Boolean
    });
    this.option('git-author', {
      alias: 'g',
      description: 'Use the authors name and email from git config without asking',
      type: Boolean,
      default: false
    });
  }

  initializing() {
    this.set('projectName', this.options['name']);
    this.set('rootPackage', this.options['root-package']);
    this.set('mainModule', this.options['main-module']);
    this.set('description', this.options['description']);
    this.set('homepage', this.options['project-url']);
    this.set('authorName', this.options['author']);
    this.set('authorEmail', this.options['email']);
    this.set('githubUser', this.options['github-user']);

    this.set('silent', this.options['silent']);
    this.set('gitAuthor', this.options['git-author'] || this.get('silent'));
  }

  prompting() {
    if (!this.get('silent')) return;

    if (!this.options.child) {
      this.log(
        yosay(`Welcome to the ${chalk.red('Mastersign Generator')} for ${chalk.cyan('Python CLI Tools')}!`)
      );
    }
  }

  default() {
    this.composeWith(require.resolve('../base'), this.options);
  }

  writing() {
    this.cpTpl('README.rst');
    this.cp('requirements.txt');
    this.cpTpl('setup.py');

    this.cpTpl('shim.cmd', 'bin/' + this.get('projectName') + '.cmd');
    this.cpTpl('shim.sh', 'bin/' + this.get('projectName') + '.sh');
  }
};
