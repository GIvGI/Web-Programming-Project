let div = document.createElement("div");
div.className = "Introductions";
div.innerHTML = '<h2 id="introductions">VEUILLEZ CHOISIR UN SUJET</h2>';
const target = document.querySelector(".details-for-every-topic");
target.prepend(div);

const updateIntroductions = () => {
    if (window.location.hash) {div.style.display = "none";}
    else {div.style.display = "block";}
};
updateIntroductions();
window.addEventListener("hashchange", updateIntroductions);