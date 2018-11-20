/* jshint esversion: 6 */
/* globals require, module */

const _ = require('lodash');
const Generator = require('../basegen');

function makeNamePythonCompatible(n) {
  return n.replace(/[\s-]+/, '_');
}

module.exports = class extends Generator {

  initializing() {
  }

  prompting() {
    if (this.get('silent')) return;

    const prompts = [];
    if (!this.get('projectName')) {
      prompts.push({
        type: 'input',
        name: 'projectName',
        message: 'Project name',
        default: this.config.get('projectName') || makeNamePythonCompatible(this.appname)
      });
      if (!this.get('rootPackage')) {
        prompts.push({
          type: 'input',
          name: 'rootPackage',
          message: 'Root package name',
          default: this.config.get('rootPackage') || makeNamePythonCompatible(this.appname)
        });
      }
      if (!this.get('mainModule')) {
        prompts.push({
          type: 'input',
          name: 'mainModule',
          message: 'Main module name',
          default: this.config.get('mainModule') || 'core'
        });
      }
    }
    if (!this.get('description')) {
      prompts.push({
        type: 'input',
        name: 'description',
        message: 'What does the library do?',
        default: this.config.get('description')
      });
    }
    if (!this.get('homepage')) {
      prompts.push({
        type: 'input',
        name: 'homepage',
        message: 'Project homepage',
        default: this.config.get('homepage')
      });
    }
    if (this.get('gitAuthor')) {
      this.def('authorName', this.user.git.name());
      this.def('authorEmail', this.user.git.email());
    } else {
      if (!this.get('authorName')) {
        prompts.push({
          type: 'input',
          name: 'authorName',
          message: 'Author name',
          default: this.config.get('authorName') || this.user.git.name()
        });
      }
      if (!this.get('authorEmail')) {
        prompts.push({
          type: 'input',
          name: 'authorEmail',
          message: 'Author email',
          default: this.config.get('authorEmail') || this.user.git.email()
        });
      }
    }
    if (!this.get('githubUser')) {
      prompts.push({
        type: 'input',
        name: 'githubUser',
        message: 'GitHub username',
        default: this.config.get('githubUser')
      });
    }

    return this.prompt(prompts).then(props => {
      _.assign(this.state, props);
    });
  }

  configuring() {
    this.def('projectName', makeNamePythonCompatible(this.appname));
    this.def('rootPackage', this.get('projectName'));
    this.def('mainModule', 'core');
    this.def('description', 'TODO short project description');
    this.def('authorName', 'TODO author name');
    this.def('authorEmail', 'TODO author email');
    this.def('githubUser', 'TODO github username');
    this.def('homepage', 'https://github.com/' + this.get('githubUser') + '/' + this.get('projectName') + '/');
    this.def('year', (new Date()).getFullYear());

    this.config.set(this.state);
    this.config.save();
  }

  writing() {
    this.cp('gitignore.txt', '.gitignore');
    this.cp('gitattributes.txt', '.gitattributes');
    this.cp('flake8.txt', '.flake8');
    this.cpTpl('LICENSE.rst');
    this.cpTpl('CHANGELOG.rst');

    this.cpTpl('root_package.py', this.state.rootPackage + '/__init__.py');
    this.cp('main_module.py', this.state.rootPackage + '/' + this.state.mainModule + '.py');
    this.cpTpl('test_package.py', this.state.rootPackage + '/test/__init__.py');
    this.cpTpl('test_module.py', this.state.rootPackage + '/test/test_' + this.state.mainModule + '.py');

    this.cpTpl('travis-ci.yml', '.travis-ci.yml');
    this.cpTpl('auto_test.cmd', 'auto/test.cmd');
  }

};
