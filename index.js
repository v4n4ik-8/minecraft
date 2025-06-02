function openModal() {
    document.getElementById("myModal").style.display = "block";
    document.body.classList.add("darken");
    startRain();
}

function closeModal() {
    document.getElementById("myModal").style.display = "none";
    document.body.classList.remove("darken");
    stopRain();
}

function startRain() {
    const rainContainer = document.getElementById("rain");
    for (let i = 0; i < 50; i++) {
        const img = document.createElement("img");
        img.src = "minecraft-1-logo-svg-vector.svg"; // Путь к твоему SVG файлу
        img.style.width = `${Math.random() * 30 + 20}px`;
        img.style.height = `${Math.random() * 30 + 20}px`;
        img.style.animationDuration = `${Math.random() * 3 + 2}s`;
        img.style.left = `${Math.random() * 100}vw`;
        img.style.animationDelay = `${Math.random() * 5}s`;
        img.style.transformOrigin = "center";
        img.style.transform = `rotate(${Math.random() * 360}deg)`;
        rainContainer.appendChild(img);
    }
}

function stopRain() {
    const rainContainer = document.getElementById("rain");
    while (rainContainer.firstChild) {
        rainContainer.removeChild(rainContainer.firstChild);
    }
}

window.onclick = function(event) {
    var modal = document.getElementById("myModal");
    if (event.target == modal) {
        modal.style.display = "none";
        document.body.classList.remove("darken");
        stopRain();
    }
}