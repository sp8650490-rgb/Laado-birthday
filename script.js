function checkPassword() {
    let pass = document.getElementById("password").value;

    if (pass === "05052020") {
        document.getElementById("lockScreen").classList.add("hidden");
        document.getElementById("access").classList.remove("hidden");

        setTimeout(() => {
            document.getElementById("access").classList.add("hidden");
            document.getElementById("main").classList.remove("hidden");
        }, 2500);

    } else {
        document.getElementById("error").innerText =
        "Areee Laado 😝 itna bhi bhool gayi?";
    }
}

function startJourney() {
    document.querySelector("section").classList.add("hidden");
    document.getElementById("page1").classList.remove("hidden");

    document.getElementById("music").play();
}

function nextPage(id) {
    let sections = document.querySelectorAll("section");
    sections.forEach(sec => sec.classList.add("hidden"));

    document.getElementById(id).classList.remove("hidden");
}

function celebrate() {
    alert("I Love You Laado ❤️");

    let music = document.getElementById("music");
    music.volume = 1;
}
