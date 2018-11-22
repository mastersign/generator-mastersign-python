.. <%= projectName %> documentation master file.
   You can adapt this file completely to your liking, but it should at least
   contain the root `toctree` directive.

Welcome to <%= projectName %>'s documentation!
===========================================================

.. toctree::
   :maxdepth: 2
   :caption: Contents:


Module ``<%= rootPackage %>``
-----------------------------------------------------------

.. automodule:: <%= rootPackage %>
	:members:

Module ``<%= rootPackage %>.<%= mainModule %>``
-----------------------------------------------------------

.. automodule:: <%= rootPackage %>.<%= mainModule %>
	:members:
<% if (cli) { %>
CLI Usage
---------

.. click:: <%= rootPackage %>.cli:main
	:prog: <%= projectName %>

<% } %>
Indices and tables
==================

* :ref:`genindex`
* :ref:`modindex`
* :ref:`search`
