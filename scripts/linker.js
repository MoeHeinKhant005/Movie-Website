// Get the right script that needs to load in movies.html page
const scriptToLoad = sessionStorage.getItem('scriptToLoad');
console.log(scriptToLoad)

// Function to create a new script element
function addScript(scriptName){
    const script = document.createElement('script');
    script.setAttribute('type', 'text/javascript');
    script.setAttribute('src',`../scripts/${scriptName}`);
    document.body.appendChild(script);
}

// Load the script at the end of the body element
addScript(scriptToLoad);
