window.onload = init;

function init() {
    displayBorder();
    displayAlt();

}


function displayBorder() {
    const imageGroup = document.getElementsByClassName("imageGroup")
    let numDivs = imageGroup.length
    for (let i = 0; i < numDivs; i++) {
        imageGroup[i].style.border = "2px solid red";
    }
}

function displayAlt() {
    const images = document.querySelectorAll("img");

    let lengthOfImage = images.length;
    for (let i = 0; i < lengthOfImage; i++) {
        if(!images[i].alt) {
            images[i].alt = "graffiti image"
        } 
    }
}



