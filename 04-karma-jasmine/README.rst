======================
04 - Karma and Jasmine
======================

Let's do some testing. In 5stack, there is one system for test
assertions (Jasmine, Mocha, etc.) and another system for test-running.
Most of Angular seems to have settled on Jasmine tests running under
their Karma test runner.

Angular's testing story is very interesting. The framework was designed
(perhaps over-designed) to be promote productive testing.

This directory has a ``karma.conf.js`` configuration file. First we get
setup::

  $ cd 04-karma-jasmine
  $ npm install
  $ node_modules/bower/bin/bower install

Note that we added some Karma-related dependencies to ``package
.json``. This gives us the Karma test runner. We already have a sample
test in ``tests/helloSpecs.js``, so let's run our tests.

In one window, start the long-running Karma server::

  $ node_modules/karma/bin/karma start

In another window, run your tests:

  $ node_modules/karma/bin/karma run

egghead also has good introductions to Karma::

  https://egghead.io/tags/testing


Further Topics
==============

#. *Auto-running*. Karma has options for automatically running tests
   when things have changed. We're going to get Grunt to do that for us.
