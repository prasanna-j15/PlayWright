/*

Use same Javascript File Name: 01_learn.js
 
    Objective: Learn var vs let vs const and understand variable scoping
 
    Declare a const name as browserName (global)
    Assign value as "Chrome"
    Create a function by name getBrowserVersion
    Create if condition inside function to check if browser is chrome, then
    Declare a local variable -- use var first (browserVersion) and print that variable inside function (outside block)
    Call that function from the javascript
 
    - Use 'var' first as block variable and then convert that as 'let'
    - Confirm how it works

    - function how to write and how to call
    - basic if condition and block variable
    - let vs var

*/

const browsername="Chrome";
getBrowserVersion(browsername);
function getBrowserVersion(browsername) {
    if (browsername.startsWith("Chrome")) {
        var version = 123;
        console.log("Chromeused");
    }
    console.log(version);
}


