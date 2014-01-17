5stack
======

A step-by-step tutorial on some choices in an HTML5-stack application
and project.

About
=====

Web-based applications these days are being developed in a different
style. Rather than treating the browser as a dumb terminal,
more work is being done in the client. A new style, based around HTML5
and JS MVC frameworks, moves much of the application out of the server.

This HTML5-style off applications has many, many choices at each level.
Not just in the libraries you use in your application, but in the tools
you use as well.

As this is a tutorial, we'll declare a set of choices and label them
the 5stack. We'll introduce each piece step-wise.

Out-of-Scope
============

#. *IDE*. I use PyCharm, so much in fact that I make tool decisions
   based partially on what kind of integration I can get. However, my
   compatriots aren't IDE believers, so I'll leave that out.

#. *Yeoman and yo*. Yeoman is a project to unite some of the tools
   (npm, bower, grunt) and add distributable scaffolds via ``yo``.
   These make it easy to get all the pile of stuff going. Since this
   tutorial is about learning the pile of crap, we'll do everything
   by hand.
