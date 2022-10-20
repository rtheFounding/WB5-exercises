const data = [
    {
        imagePath: "images/37a_twentyonepilots20184237.jpeg",
        description: "Twenty One Pilots",
        alt: "image1"
    },
    {
        imagePath: "images/BlueLock_YoichiIsagi2-1600x900-1-1024x576.jpg",
        description: "Bluelock",
        alt: "image2"
    },
    {
        imagePath: "images/nbRy3xXxLmjvzhPh8r7MVR.jpg",
        description: "AC2",
        alt: "image3"
    }
]

window.onload = () => {
    const images = document.getElementsByTagName("img")
    const paragraphs = document.getElementsByTagName("p");
    for (let i = 0; i < 3; i++) {
        images[i].src = data[i].imagePath;
        images[i].setAttribute("alt", data[i].alt);
        images[i].className = "roundedImg";
        paragraphs[i].innerHTML = data[i].description;
        paragraphs[i].style.border = "2px solid black";
    }
    // kevin (instructor has different ways to check on as well.)
    /*
    const list = [...paragraphs]; //convert to array
    list.forEach(e => e.style.border = "2px solid black") */
};

/*
function init() {
    addStyle();
    addTo();

}

function addStyle() {
    const findPTag = document.getElementsByTagName("p");
    for (let i = 0; i < findPTag.length; i++) {
        findPTag[i].style.border = "2px solid black"
    }
}

function addTo() {
        const images = document.querySelectorAll("img");

        let lengthOfImage = images.length;
        for (let i = 0; i < lengthOfImage; i++) {
            if(!images[i].className && !images[i].alt) {
                images[i].className = "roundedImg";
                images[i].alt = "Test";
            } 
        }
} */