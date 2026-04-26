
let browser = "Chrome"; // Global variable declared

function checkBrowserversion(showBrowserversion){  // calling function
   console.log("Checking browser version");
   setTimeout(() => {
    showBrowserversion(browser)
   },100);
}
//callbackfunction
function showBrowserversion(version) {  // callback function 
    console.log(`The browser version is ${version}`)
}
checkBrowserversion(showBrowserversion);  // mainfunction called
