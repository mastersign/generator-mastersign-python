/* jshint esversion: 6 */
/* globals require, module */

const Generator = require('../basegen');
const chalk = require('chalk');
const yosay = require('yosay');

module.exports = class extends Generator {

  prompting() {
    this.log(
      yosay(`Welcome to the ${chalk.red('Mastersign Generator')} for ${chalk.cyan('Python')}!`)
    );

    const prompts = [
      {
        type: 'list',
        name: 'projectType',
        choices: ['library', 'cli'],
        message: 'What kind of project`?',
        default: 'library'
      }
    ];

    return this.prompt(prompts).then(props => {
      this.props = props;
    });
  }

  default() {
    this.composeWith(require.resolve('../' + this.props.projectType), { child: true });
  }
};
