const comment = () => {
    const comBox = document.createElement('div');
    const com = document.createElement('input');
    const card = document.getElementById('card');
    card.appendChild(comBox);
    comBox.appendChild(com);
    comBox.style.width = "50vw";
    comBox.style.height = "3vh";
};
const star = () => {
    let img = document.createElement("img");
    img.src = "star2.svg";
    const rate = document.getElementById('rate');
    rate.appendChild(img);
    img.style.height = "50%";
};