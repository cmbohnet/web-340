/*
============================================
; Title:  app.js
; Author: Chris Bohnet
; Date:   4 April 2020
; Description: Driver for the Employee Management System
;===========================================
*/

// Require statements
var express = require("express");
var http = require("http");
var path = require("path");
var mongoose = require("mongoose");
var logger = require("morgan");
var helmet = require("helmet");
var bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");
var csrf = require("csurf");

// setup csrf protection
var csrfProtection = csrf({cookie: true});

var Employee = require("./models/employee");

// mLab connection
var mongoDB = "mongodb+srv://web340MongoUser:web340MongoUser@cluster0-3uuui.mongodb.net/test?retryWrites=true&w=majority";
mongoose.connect(mongoDB, {
    useMongoClient: true
});

mongoose.Promise = global.Promise;

var db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error: "));

db.once("open", function() {
    console.log("Application connected to mLab MongoDB instance");
});

//Create the express application and set the ejs views and logger
var app = express();

//use statements
app.use(logger("short"));

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(cookieParser());
app.use(helmet.xssFilter());
//CSRF protection
app.use(csrfProtection);

//Intercepts all incoming requests and adds a CSRF token to the response.
app.use(function(request, response, next) {
    var token = request.csrfToken();
    response.cookie('XSRF-TOKEN', token);
    response.locals.csrfToken = token;
    next();
});

//set statements
app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");
app.set('port', process.env.PORT || 8080);

// model
var employee = new Employee({

    firstName: "Chris",
    lastName: "Bohnet"

});


/*var employee = [
    {name: "Chris"}, 
    {name: "Brian"}, 
    {name: "Georgie"},
    {name:  "Sam"}];
*/
//Routing for landing page
app.get("/", function (request, response) {
    Employee.find({}, function(err, employees) {
        if (err) {
          console.log(err);
          throw err;
        } else {
          console.log(employees);
          response.render('index', {
            title: 'EMS | Home',
            employees: employees
          })
        }
      });
    });


    /*response.render("index", {

        title: "Home page",
        employee: employee
    });

});
*/

//Processes a form submission.
app.post("/process", function(request, response) {

    console.log(request.body.txtFirstName);
    if (!request.body.txtFirstName) {
        response.status(400).send('Entries must have a first name');
        return;
      }
    
      if (!request.body.txtLastName) {
        response.status(400).send('Entries must have a last name');
        return;
      }

      if (!request.body.txtEmail) {
        response.status(400).send('Entries must have an email');
        return;
      }
      // get the request's form data
      const employeeName = request.body.txtFirstName;
      const employeeLast = request.body.txtLastName;
      const email = request.body.txtEmail;
      console.log(employeeName);
    
      // create a fruit model
      let employee = new Employee({
        firstName: employeeName,
        lastName: employeeLast,
        email: email
      });
    
      // save
      employee.save(function(err) {
        if (err) {
          console.log(err);
          throw err;
        } else {
          console.log(employeeName + ' saved successfully!');
          response.redirect('/');
        }
      });
    });  
    
    /*response.redirect("/");

});
*/

//Routing for new employee entry page
app.get("/new", function (request, response) {

    response.render("new", {

        title: "Enter New Employee",
        
    });

});

//Routing for display list of current employees page
app.get("/list", function (request, response) {
    Employee.find({}, function(err, employees) {
        if (err) {
          console.log(err);
          throw err;
        } else {
          console.log(employees);
          response.render('list', {
            title: 'EMS | Home',
            employees: employees
          })
        }
      });
    });

    /*response.render("list", {

        title: "List of Employees",
        employee: employee
    });

});
*/
http.createServer(app).listen(8080, function() {

    console.log("Application started on port 8080!");

});

