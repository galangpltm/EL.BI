
function showLove() {
    const surprise = document.getElementById("surprise");

    surprise.innerHTML =
        "I LOVE YOU MORE THAN WORDS CAN SAY! ❤️🥰";

    createHearts(25);
}

function createHearts(amount = 1) {
    const container = document.getElementById("hearts");

    for (let i = 0; i < amount; i++) {
        const heart = document.createElement("div");

        heart.className = "heart";
        heart.innerHTML = "♥";

        heart.style.left = Math.random() * 100 + "vw";
        heart.style.fontSize = (15 + Math.random() * 25) + "px";
        heart.style.animationDuration = (4 + Math.random() * 4) + "s";

        container.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 8000);
    }
}

// Animasi hati muncul secara berkala
setInterval(() => {
    createHearts(2);
}, 1200);




document.addEventListener("DOMContentLoaded", function () {

    const music = document.getElementById("bgMusic");
    const button = document.getElementById("musicBtn");

    if (!music || !button) {
        console.error("Elemen musik tidak ditemukan!");
        return;
    }

    button.addEventListener("click", function () {

        if (music.paused) {

            music.play()
                .then(() => {
                    button.textContent = "❚❚ PAUSE";
                })
                .catch(error => {
                    console.error(error);
                    alert("Musik gagal diputar. Periksa file MP3!");
                });

        } else {

            music.pause();
            button.textContent = "▶ PLAY";

        }

    });

});
