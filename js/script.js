/*const myHeading = document.querySelector("h1");

myHeading.textContent = "Hello, World!";
alert(myVariable);

myVariable = "Myktybek"*/

const imgElement = document.querySelector("img");

const img1URL = "../img/moon.jpg";
const img2URL = "../img/pink.jpg";

function changePhoto(event){
    let current = imgElement.getAttribute("src");
    if(current == img1URL){
        imgElement.setAttribute("src", img2URL);
    }
    else {
        imgElement.setAttribute("src", img1URL)
    }
}

imgElement.onclick = changePhoto;
