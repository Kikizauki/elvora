if (localStorage.getItem("adminLogin") !== "true") {
    window.location.href = "login.html";

}

const emojilist = ['❤️', '✨', '🎓', '😊', '📸', '📅', '🎉', '🌟', '😜', '😘', '4️⃣', '😎'];

function createEmoticon() {
    const emot = document.createElement('div');
    emot.classList.add('emoticon');
    
    emot.innerText = emojilist[Math.floor(Math.random() * emojilist.length)];
    
    emot.style.left = Math.random() * 100 + 'vw';
    emot.style.fontSize = Math.random() * 15 + 10 + 'px';
    emot.style.animationDuration = Math.random() * 5 + 3 + 's';
    emot.style.animationDelay = Math.random() * 2 + 's';
    
    document.body.appendChild(emot);
    
    setTimeout(() => {
        emot.remove();
    }, 7000);
}

setInterval(createEmoticon, 700);


document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".card");
    const content = document.querySelector(".content");
    const body = document.body;

    cards.forEach(card => {
        card.addEventListener("click", (e) => {
            const isAlreadyActive = card.classList.contains("active");

            // 1. Bersihkan semua kartu yang aktif dulu
            cards.forEach(c => c.classList.remove("active"));
            
            if (!isAlreadyActive) {
                // 2. Aktifkan kartu yang diklik
                card.classList.add("active");
                content.classList.add("blur");
                body.classList.add("no-scroll");
            } else {
                // 3. Jika kartu yang sama diklik lagi, tutup
                content.classList.remove("blur");
                body.classList.remove("no-scroll");
            }
            
            e.stopPropagation();
        });
    });

    // Klik di mana saja untuk menutup kartu yang sedang full
    document.addEventListener("click", () => {
        cards.forEach(c => c.classList.remove("active"));
        content.classList.remove("blur");
        body.classList.remove("no-scroll");
    });
});