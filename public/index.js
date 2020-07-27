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
    const star = document.getElementById('star');
    star.src = "star.svg";
    img.appendChild(star);
};
const checkedStar = () => {
    let img = document.createElement("img");
    img.src = "star2.svg";
    const rate = document.getElementById('rate');
    rate.appendChild(img);
    img.style.height = "50%";
    const star = document.getElementById('star');
    star.src = "star.svg";
    img.appendChild(star);
}
const rest = () => {
    window.location.href(index - 2.0.html)
}
const hospital = () => {
    window.location.href(index - 2.0.html)
}
const cafe = () => {
    window.location.href(index - 2.0.html)
}
const shop = () => {
    window.location.href(index - 2.0.html)
}

const gym = () => {
    window.location.href(index - 2.0.html)
}
const cinema = () => {
    window.location.href(index - 2.0.html)
}
const home = () => {
    window.location.href(index.html)
}