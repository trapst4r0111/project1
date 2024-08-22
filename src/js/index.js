const carousselButtons = document.querySelectorAll(".button");
const images = document.querySelectorAll(".image");
const imagesshowskill = document.querySelectorAll(".imageshowskill")
const infos = document.querySelectorAll(".info");

carousselButtons.forEach((button, indexa) => {
    button.addEventListener("click", () => {
        deactivateSelectedButton();
        showSelectedButton(button);

        deactivateSelectedImage();
        showBackgroundImage(indexa);

        deactivateSelectedInfo();
        showInfo(indexa);

        deactivateSelectedSkillShow();
        showSelectedSkillShow(indexa);
    });
});



function deactivateSelectedButton() {
    const selectedButton = document.querySelector(".selected");
    selectedButton.classList.remove("selected");
}

function showSelectedButton(button) {
    button.classList.add("selected");
}



function deactivateSelectedImage() {
    const imagey = document.querySelector(".y");
    imagey.classList.remove("y");
}

function showBackgroundImage(indexa) {
    images[indexa].classList.add("y");
}



function deactivateSelectedInfo() {
    const infoa = document.querySelector(".a");
    infoa.classList.remove("a");
}
function showInfo(indexa) {
    infos[indexa].classList.add("a");
}



function deactivateSelectedSkillShow() {
    const imageshowskillz = document.querySelector(".z");
    imageshowskillz.classList.remove("z");
}

function showSelectedSkillShow(indexa) {
    imagesshowskill[indexa].classList.add("z");
}