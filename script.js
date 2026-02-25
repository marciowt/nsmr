function falar() {

    const fala = document.getElementById("fala");

    fala.innerHTML = `
        <div class="texto-amor">
            <span class="nome">Noemi Samara</span><br>
            eu te amo ❤️
        </div>
    `;

    for (let i = 0; i < 12; i++) {
        let heart = document.createElement("div");
        heart.classList.add("heart");
        heart.innerText = "❤️";

        heart.style.left = Math.random() * window.innerWidth + "px";
        heart.style.top = (window.innerHeight - 100) + "px";

        document.body.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 3000);
    }
}