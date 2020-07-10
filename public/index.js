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
const rest = () => {
    window.location.href = "index-2.0.html";
    console.log("hahah");
}
const hospital = () => {
    window.location.href = "index-2.1.html";
    console.log("hahah");
}
const cafe = () => {
    window.location.href = "index-2.2.html";
    console.log("hahah");
}
const shop = () => {
    window.location.href = "index-2.3.html";
    console.log("hahah");
}
const gym = () => {
    window.location.href = "index-2.4.html";
    console.log("hahah");
}
const cinema = () => {
    window.location.href = "index-2.5.html";
    console.log("hahah");
}