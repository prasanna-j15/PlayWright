
/*

Use new Javascript File Name: 02_Conditional.js
 
    Objective: Learn if - else and switch - case
    Create 2 functions : launchBrowser, runTests
    where,
    a) launchBrowser need to take input as browserName (string) and do not return any
        - use if, else (chrome or otherwise)
        - just print
    b) runTests need to take input as testType (string) and do not return any
        - use switch case (smoke, sanity, regression, default (smoke))
        - just do print
 

*/


let browserName = "Chrome"
checkBrowser(browserName);
function checkBrowser(browserName) {
    if (browserName==="Chrome") {
        console.log ("Browser is Chrome")
    }
        else{
         console.log ("Not Chrome")
    }
}

let runTest = "test";
chkTest(runTest);
function chkTest(runTest) {
    switch (runTest) {
        case "smoke":
            console.log ("Selected value is smoke");
            break;
        case "sanity":
            console.log ("Selected value is sanity");
            break;
            case "regression":
                console.log ("Selected value is regression");
                break;
        default:
            console.log ("Selected value is smoke");
            break;
    }
}