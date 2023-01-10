function randomBodyColour() {
    document.getElementsByTagName("body")[0].style.backgroundColor = randomColour(); 
    //"rgb(" + r + "," + g + "," + b + ")"; 
    //"rgb(Math.floor(255*Math.random()), Math.floor(255*Math.random()), Math.floor(255*Math.random()))";
}

function randomColour() {
    const r = randomNumber(255);
    const g = randomNumber(255);
    const b = randomNumber(255);
    const rgb = "rgb(" + r + "," + g + "," + b + ")";
    return rgb;
}

function randomNumber(max) {
    return Math.floor(max*Math.random());
}