const clockDisplay = document.querySelector ('.clock');
setInterval ( () => clockDisplay.innerText = new Date().toLocaleTimeString (), 1000);


