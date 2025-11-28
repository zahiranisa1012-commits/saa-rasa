function tambahPendapat(id) {
    const input = document.getElementById("input-" + id);
    const text = input.value.trim();
    if (text === "") return;

    const box = document.getElementById("opinions-" + id);
    const p = document.createElement("p");
    p.textContent = text;
    box.appendChild(p);

    input.value = "";
}

function beriRating(id) {
    let current = parseInt(document.getElementById("rating-" + id).textContent);
    current = current >= 5 ? 1 : current + 1; // rating muter dari 1-5
    document.getElementById("rating-" + id).textContent = current;
}
