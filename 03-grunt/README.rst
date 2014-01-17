==========
03 - Grunt
==========

We just mentioned that developers usually copy dependencies out of
``bower_components`` and into their source. Stuff like that is
error-prone and obnoxious. Sure sounds like something that should be
automated.

``GruntJS`` is a fantastic little tool-tool. That is, it is a way to
register and configure lots of Grunt plugins that do useful stuff for
you during development. 2,100-plus plugins are listed at::

  http://gruntjs.com/plugins

In this step we'll do the smallest amount of Grunt for the copying task
into a new ``src`` directory with a ``lib`` subdirectory for external
dependencies::

  $ cd 03-grunt
  $ npm install
  $ node_modules/bower/bin/bower install

Now that you're setup:

  $ node_modules/grunt-cli/bin/grunt copy

Your ``src/lib`` now has a copy of ``angular.js``, copied over from
the dependency-managed, convenient-update world of Bower.

egghead.io has 6 (although 4 are "pro") very good, short screencasts on
GruntJS::

  https://egghead.io/tags/gruntjs

...including a very basic introduction.

Further Topics
==============

#. *Nesting*. The commands registered in Grunt have an interesting
   nesting and sub-nesting facility. More later.

#. *Combining*. What if we wanted to take all our external JS libs
   and combined them into one ``5stack-libs.js``? There's a plugin for
   that (``grunt-contrib-concat``) that we'll see later.

#. *Cache busting*. What if we wanted to set far-futures expires and
   thus have something unique in the ``5-stack-libs.js`` filename?
   There are a litany of plugins for that.

#. *Hands-free*. That's great, but I don't want to do all this stuff
   during development every time I change something? Can't it just
   watch for changes and perform certain actions? Yep, there's a
   plugin for that, which we'll see later.
