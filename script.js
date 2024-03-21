function send(){
    const input = document.getElementById("input");
    const loader = document.getElementById("overlay");
    const diashow = document.getElementById("diashow");

    const inputHost = document.getElementById("hostIP").value;
    const inputPassword = document.getElementById("password").value;

    const host = "host";
    const password = "password";

    if(host === inputHost && password === inputPassword) {
        input.classList.toggle("smaller-container");
        setTimeout(function() {
            input.style.display = "none";
            diashow.style.display = "block";
            loader.style.display = "block";
        
        }, 200);
    }
}

/* var isSmall = false; 


function toggleSize() {
    var image = document.getElementById("img_1");
    if (isSmall) {
        image.classList.remove("small");
        image.classList.add("large");
    } else {
        image.classList.remove("large");
        image.classList.add("small");
    }
    isSmall = !isSmall; // Den Zustand umschalten
}

// Animationsloop
setInterval(toggleSize, 6000);  */

/* document.addEventListener("click", function(event) {
    // Die Funktion, die bei jedem Mausklick auf der Seite ausgeführt wird
    console.log("Ein Mausklick wurde auf der Seite ausgelöst!");
    console.log("Position des Mausklicks - X: " + event.clientX + ", Y: " + event.clientY);
}); */