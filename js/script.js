let div = document.createElement("div");
div.className = "Introductions";
div.innerHTML = '<h2 id="introductions">VEUILLEZ CHOISIR UN SUJET</h2>';
const target = document.querySelector(".details-for-every-topic");
target.prepend(div);

if(window.location.href.includes('#')){
    div.style.display = "none";
}

addEventListener("click", function(event){
    const link = event.target.closest('a');
    if(link){
        div.style.display = "none";
    }
});