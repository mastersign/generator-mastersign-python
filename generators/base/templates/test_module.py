# -*- coding: utf-8 -*-

from unittest import TestCase
from <%= rootPackage %>.<%= mainModule %> import example


class ExampleTestCase(TestCase):

    def test_example_default(self):
        expected = 3
        result = example(1, 2)
        self.assertEqual(expected, result)

    def test_example_first_zero(self):
        expected = 42
        result = example(0, 2)
        self.assertEqual(expected, result)

    def test_example_second_zero(self):
        expected = 42
        result = example(1, 0)
        self.assertEqual(expected, result)

    def test_example_both_zero(self):
        expected = 42
        result = example(0, 0)
        self.assertEqual(expected, result)
