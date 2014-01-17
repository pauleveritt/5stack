===================
01 - NodeJS and npm
===================

Most of the tools that we use in the 5stack are implemented in NodeJS.
This doesn't mean our web application is in NodeJS, nor does it mean you
will every be confronted with learning or writing Node code.

Start by installing NodeJS. On Linux, use your package manager. On
OS X, use Homebrew. NodeJS should get you the ``npm`` package, though
perhaps your OS has that as an extra package. ``npm`` is the
Node Package Manager and is the way that we'll get our tools.

``npm`` makes it easy to build the equivalent of pip's
``requirements.txt``. In this folder is a ``package.json`` that
specifies all the NodeJS software you need for the *development* of this
project.

To go ahead and get the software::

  $ cd 01-nodejs
  $ npm install

You'll see that a node_modules directory is created. This is like
Python's ``lib/python-2.7/site-packages`` directory. Thus, from a
package perspective, everything in this step is isolate from the other
tutorial steps.

Each package can be pinned to a version number. In this step we say
``*`` to get the most recent *non-conflicting* version. We can use a
richer expression to pin to specific semantic-versioning releases, or
use wildcards for something in between.

Further Topics
==============

#. *nvm*. ``node_modules`` gives you isolation from packages, but what
   about your NodeJS or npm versions? The ``nvm`` project has a solution
   for that.

#. *devDependencies*. I have elided much from the ``package.json``
   format, such as ``devDependencies``. Trust that, like ``setup.py``
   etc., there's more to the story.

#. *Registering packages*. Like Python's packaging, there are ways to
   register with a central registry.