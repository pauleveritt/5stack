==========================
06 - Mocking HTTP Requests
==========================


First we get setup::

  $ kill the previous karma start
  $ cd 06-httpbackend
  $ npm install
  $ node_modules/bower/bin/bower install
  $ node_modules/grunt-cli/bin/grunt copy


In one window, start the long-running Karma server::

  $ node_modules/karma/bin/karma start

In another window, run your tests:

  $ node_modules/karma/bin/karma run


Further Topics
==============

- Added ``$http`` as a dependency in our service

- $http.get is a deferred the returns a promise, which we attach to
  with .then and thus our tests get a little more complicated.