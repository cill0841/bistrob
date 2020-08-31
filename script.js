window.addEventListener("load", sidenVises);

function sidenVises() {
    console.log(" siden vises ");

    document.querySelector("#menuknap").addEventListener("click", toggleMenu);


}



/*toggle betyder at tilføje noget der ikke er der/ eller fjerne hvis det er - hidden i dette tilfælde*/
function toggleMenu() {
    console.log("toggle menu ");
    document.querySelector("#menu").classList.toggle("hidden");

    /*Hvis menu indeholder hidden er "let" delen sand og hvis ikke er den falsk  */
    let erSkjult = document.querySelector("#menu").classList.contains("hidden");

    if (erSkjult == true) {
        document.querySelector("#menuknap").textContent = "☰";

    } else {
        document.querySelector("#menuknap").textContent = "X";
    }
