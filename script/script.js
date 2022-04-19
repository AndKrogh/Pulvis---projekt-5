console.log("It's working yay!")
const navbar = document.querySelector(".navbar");
const menu = document.querySelector(".menu-list");
const menuBtn = document.querySelector(".menu-btn");
const cancelBtn = document.querySelector(".cancel-btn");
menuBtn.onclick = ()=>{
  menu.classList.add("active");
  menuBtn.classList.add("hide");
}
cancelBtn.onclick = ()=>{
  menu.classList.remove("active");
  menuBtn.classList.remove("hide");
}

window.onscroll = ()=>{
  this.scrollY > 20 ? navbar.classList.add("sticky") : navbar.classList.remove("sticky");
}


/* Anders's kode */

let galleryImg = document.querySelectorAll(".galleri-img");
let getLatestOpenedeImg;
let windowWidth = window.innerWidth;

if(galleryImg) {
    galleryImg.forEach(function(image, index){
        image.onclick = function() {
            let getElementCss = window.getComputedStyle(image);
            let getFullImgUrl = getElementCss.getPropertyValue("background-image");
            let getImgUrlPos = getFullImgUrl.split("/images/billeder-til-js-galleri/thums/");
            let setNewImgUrl = getImgUrlPos[1].replace('")', '');

            getLatestOpenedeImg = index + 1;

            let container = document.body;
            let newImgWindow = document.createElement("div");
            container.appendChild(newImgWindow);
            newImgWindow.setAttribute("class", "img-window");
            newImgWindow.setAttribute("onclick", "closeImg()");

            let newImg =document.createElement("img");
            newImgWindow.appendChild(newImg);
            newImg.setAttribute("src", "/images/billeder-til-js-galleri/" + setNewImgUrl);
            newImg.setAttribute("id", "current-img");

            newImg.onload = function () {
                let imgWidth = this.width;
                let calcImgToEdge = ((windowWidth - imgWidth) / 2) - 80;

                let newNextBtn = document.createElement("a");
                let btnNextText = document.createTextNode("Næste");
                newNextBtn.appendChild(btnNextText);
                container.appendChild(newNextBtn);
                newNextBtn.setAttribute("class", "img-btn-next");
                newNextBtn.setAttribute("onclick", "changeImg(1)");
                newNextBtn.style.cssText = "right: " + calcImgToEdge + "px;";

                let newPrevBtn = document.createElement("a");
                let btnPrevText = document.createTextNode("Tidligere");
                newPrevBtn.appendChild(btnPrevText);
                container.appendChild(newPrevBtn);
                newPrevBtn.setAttribute("class", "img-btn-prev");
                newPrevBtn.setAttribute("onclick", "changeImg(0)");
                newPrevBtn.style.cssText = "left: " + calcImgToEdge + "px;";
            }

        }

    });
}

function closeImg () {
    document.querySelector(".img-window").remove();
    document.querySelector(".img-btn-next").remove();
    document.querySelector(".img-btn-prev").remove();

}

function changeImg(changeDir) {
    document.querySelector("#current-img").remove();

    let getImgWindow = document.querySelector(".img-window");
    let newImg = document.createElement("img");
    getImgWindow.appendChild(newImg);

    let calcNewImg;
    if(changeDir === 1) {
        calcNewImg = getLatestOpenedeImg + 1;
        if(calcNewImg > galleryImg.length) {
            calcNewImg = 1;
        }
    }
    else if (changeDir === 0) {
          calcNewImg = getLatestOpenedeImg - 1;
        if(calcNewImg < 1) {
            calcNewImg  = galleryImg.length;
        }
    }

    newImg.setAttribute("src", "images/billeder-til-js-galleri/img" + calcNewImg + ".jpg");
    newImg.setAttribute("id", "current-img");

    getLatestOpenedeImg = calcNewImg;
}