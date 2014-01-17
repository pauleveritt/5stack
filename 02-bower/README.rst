==========
02 - Bower
==========

``npm`` and ``package.json`` got you the *tools* that you need. But
there was no ``jQuery`` or ``AngularJS`` in there.

Bower appears to be the winner for getting and distributing JS
libraries and other artifacts that go into the web application. It has
a very controlled scope. For example, it doesn't include a module
loading system. For that, people use RequireJS.

Let's start my making a ``bower.json`` as shown in this directory. Then::

  $ cd 02-bower
  $ npm install

Now that you're setup:

  $ node_modules/bower/bin/bower install

This creates a bower_components directory with subdirectories for each
package (specified or dependent.)

Further Topics
==============

#. *bower_components*. In general you put this (and node_modules) in
   your .gitignore. Which means it isn't really distributed as part of
   your software. Thus, most don't point their <script> directly
   at ``bower_components``. Instead, you have Grunt tasks that
   automatically copy the files into your source (perhaps transforming
   along the way.)

#. *git-focused*. Bower is built very much on Git. Once you do the
   Bower command to register the package's repo, it expects tags for
   version numbers.