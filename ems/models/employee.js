/*
============================================
; Title:  employee.js
; Author: Chris Bohnet
; Date:   4 April 2020
; Description: File for the Employee database model
;===========================================
*/

// Require statements
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Employee Schema
let EmployeeSchema = new Schema({
  firstName: {type: String, required: true },
  lastName: {type: String, required: true },
  email: {type: String, required: true }
});


// define the employee model
// Export the model so its publicly available.
module.exports = mongoose.model('Employee', EmployeeSchema);
