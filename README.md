# Newsletter-signup
Newsletter signup page made using Node, ExpressJS , MailChimp API and Bootstrap. If you’re looking for a way to connect and establish a touch point with your audience, sending out a newsletter is a great way to grab their attention. Newsletters are a must-have for businesses and can build engagement with new and existing customers.

## Body-Parser
Body-parser is the Node. js body parsing middleware. It is responsible for parsing the incoming request bodies in a middleware before you handle it.

## ExpressJS
Express.js is a small framework that works on top of Node.js web server functionality to simplify its APIs and add helpful new features. It makes it easier to organize your application’s functionality with middleware and routing. It adds helpful utilities to Node.js HTTP objects and facilitates the rendering of dynamic HTTP objects.

## Why Express?
Develops Node.js web applications quickly and easily.
It’s simple to set up and personalise.
Allows you to define application routes using HTTP methods and URLs.
Includes a number of middleware modules that can be used to execute additional requests and responses activities.
Simple to interface with a variety of template engines, including Jade, Vash, and EJS.
Allows you to specify a middleware for handling errors.

### Installation of ExpressJS

1. npm i express
2. Initialization \
  `const express=require("express");` \
  `const app=express();` 
  
  `app.listen(process.env.PORT || 3000,function(){` \
  `console.log("Server is running!");` \
  `});` 
  
  `app.get('/', function (req, res) {` \
  `res.send("Welocme to GeeksforGeeks!");` \
  `});` 
  
  ## JSON?
  JavaScript Object Notation, more commonly known by the acronym JSON, is an open data interchange format that is both human and machine-readable. 
  
  ## Mailchimp API?
  The Mailchimp Marketing API provides programmatic access to Mailchimp data and functionality, allowing developers to build custom features to do things like sync email activity and campaign analytics with their database, manage audiences and campaigns, and more. To use the Marketing API, you need a Mailchimp account.
  https://mailchimp.com/developer/marketing/guides/quick-start/
  
  ## Heroku?
  Heroku is known for running apps in dynos – which are really just virtual computers that can be powered up or down based on how big your application is. Think of dynos as malleable building blocks for running your app.
  
  ## Procfile?
  A Procfile is a mechanism for declaring what commands are run by your application's containers on the Deis platform. It follows the process model. You can use a Procfile to declare various process types, such as multiple types of workers, a singleton process like a clock, or a consumer of the Twitter streaming API.
  
