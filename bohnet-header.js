/*
============================================
; Title:  bohnet-header.js
; Author: Professor Krasso
; Date:   5 Dec 2019
; Modified By:  Christine Bohnet
; Description: Displays a formatted header
;===========================================
*/

/**
* Params: firstName, lastName, assignment
* Response: output 
* Description: Returns a well-formatted string header
*/
exports.display = function (firstName, lastName, assignment) {
	let output = '\n' + firstName + ' ' + lastName + '\n' + assignment + '\nDate: ' + 
	new Date().toLocaleDateString('en-US') + '\n'

	return output  
}
