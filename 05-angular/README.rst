============
05 - Angular
============

That was a boring test. Let's start an AngularJS application and
write a real, albeit simple, unit test. For this step, our application
will be a headless AngularJS "service" that simple stores a variable.

First we get setup::

  $ kill the previous karma start
  $ cd 05-angular
  $ npm install
  $ node_modules/bower/bin/bower install
  $ node_modules/grunt-cli/bin/grunt copy


In this step we did the following:

- We made a new Angular "module" for the service we are implementing.
  This service is in ``src/fivestack-service.js``.

- Changed ``karma.conf.js`` to load ``src/fivestack.js`` and also
  ``angular.js`` (plus angular-mocks) into our test runner

- Our tests module changed

In one window, start the long-running Karma server::

  $ node_modules/karma/bin/karma start

In another window, run your tests:

  $ node_modules/karma/bin/karma run


Further Topics
==============

#. *Dependency Injection*.

#. *Mocking*.