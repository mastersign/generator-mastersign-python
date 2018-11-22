# -*- coding: utf-8 -*-

"""
This module contains the core functionality.
"""


def example(a: int, b: int) -> int:
    """
    Returns the sum of a and b, except one or both are 0 then it returns 42.

    :param a: The first operand
    :type a: int
    :param b: The second operand
    :type b: int
    :returns: The conditional sum
    :rtype: int

    .. testsetup::

        from <%= rootPackage %>.<%= mainModule %> import example

    >>> example(1, 2)
    3
    >>> example(0, 4)
    42
    """
    return a + b if a != 0 and b != 0 else 42
