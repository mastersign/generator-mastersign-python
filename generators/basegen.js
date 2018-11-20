/* jshint esversion: 6 */
/* globals require, module */

const Generator = require('yeoman-generator');

module.exports = class extends Generator {

  constructor(args, opts) {
    super(args, opts);

    if (!this.options.state) {
      this.options.state = {};
    }
    this.state = this.options.state;
  }

  cp(template, destination) {
    this.fs.copy(
      this.templatePath(template),
      this.destinationPath(destination || template));
  }

  cpTpl(template, destination) {
    this.fs.copyTpl(
      this.templatePath(template),
      this.destinationPath(destination || template),
      this.state);
  }

  def(name, defaultValue) {
    this.state[name] = this.state[name] || this.config.get(name) || defaultValue;
  }

  set(name, value) {
    this.state[name] = value;
  }

  get(name) {
    return this.state[name];
  }

};
