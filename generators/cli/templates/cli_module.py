# _*_ coding: utf-8 _*_
"""
This module provides the CLI for the tool.
"""

import click
from <%= rootPackage %>.<%= mainModule %> import example


@click.command(help='<%= description %>')
@click.option('-a', '--first', type=int, prompt='First value', default=0,
              help='Operand A')
@click.option('-b', '--second', type=int, prompt='Second value', default=0,
              help='Operand B')
@click.option('--verbose/--not-verbose', default=False,
              help='Activate/deactivate verbose output')
def main(first, second, verbose):
    if verbose:
        print('Computing the result for combining {} and {}'.format(first, second))
    result = example(first, second)
    if verbose:
        print('The result is {}'.format(result))
    else:
        print(str(result))


if __name__ == '__main__':
    main()
