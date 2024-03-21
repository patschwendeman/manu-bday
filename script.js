const loader = document.getElementById("overlay");
const audio = document.getElementById("audioPlayer");

let  audioIndex = 0;
const audios = ["1", "2", "3"]

function send(){
    const input = document.getElementById("input");
    const diashow = document.getElementById("diashow");

    const inputHost = document.getElementById("hostIP").value;
    const inputPassword = document.getElementById("password").value;

    const host = "host";
    const password = "password";

    const imgIds = ["img_1", "img_2", "img_3", "img_4", "img_5", "img_6", "img_7", "img_8"];


    if(host === inputHost && password === inputPassword) {
        input.classList.toggle("smaller-container");
        setTimeout(function() {
            input.style.display = "none";
            diashow.style.display = "block";
            loader.style.display = "block";

            audio.src = "assets/audio/voice_end.mp3"
            audio.load();
            audio.play();

            setTimeout(function() {

                imgIds.forEach((id, index) => {
                    setTimeout(function() {
                        const element = document.getElementById(id);
                        if (element) { 
                            element.style.opacity = 1;
                        }
                    }, 4000 * index); 
                });
            }, 5000);
        }, 200);
    }
}

document.addEventListener("click", function(event) {
    
    if(loader.style.display !== 'block') {
        audioIndex += 1;
        if(audioIndex > audios.length) audioIndex = 1;
            audio.src = "assets/audio/voice_" + audioIndex + ".mp3"
            
            audio.load();
            audio.play();
        }   
});