# -*- coding: utf-8 -*-


def example(a, b):
    """
    Returns the sum of a and b, except of of both is 0 then it returns 42.

    >>> example(1, 2)
    3
    >>> example(0, 4)
    42
    """
    return a + b if a != 0 and b != 0 else 42
