let counter = 0;
let intervalId = setInterval(() => {
    counter = counter + 1;
    let result = document.getElementsByClassName("seconds")[0];
    if (counter < 11) {
        result.textContent = counter;
    } else {
        result.textContent = "yay!";
    }

    // console.log(counter) // I don't need the console.log function.
    // I would only need it if I am working with the terminal.
    // To run the this in the terminal, I would need to also
    // remove the code that communicates with the html.

}, 1000); // Logs counter every second (1000 milliseconds)

setTimeout(() => {
    clearInterval(intervalId);
    let ptag2 = document.getElementsByClassName("stop")[0];
    ptag2.textContent = "Timer has stopped.😊"
}, 11000)