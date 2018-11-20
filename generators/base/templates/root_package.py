# -*- coding: utf-8 -*-

"""
<%= description %>
"""

import logging


try:
    from logging import NullHandler
except ImportError:
    class NullHandler(logging.Handler):
        def emit(self, record):
            pass

logging.getLogger(__name__).addHandler(NullHandler())


# package metadata

__version__ = '0.0.0'
__url__ = '<%= homepage %>'
__author__ = '<%= authorName %>'
__author_email__ = '<%= authorEmail %>'
__maintainer__ = '<%= authorName %>'
__maintainer_email__ = '<%= authorEmail %>'
__keywords__ = ['lib', '<%= projectName %>']
