// 10c.
document.querySelector(".js-button").addEventListener("click", () => {
    if (document.querySelector(".js-button").classList.contains("js-button")) {
        console.log("Yes")
    } else {
        console.log("No")
    }
});

// 10d.
document.querySelector(".gaming-btn").addEventListener("click", () => {
    if (!document.querySelector(".gaming-btn").classList.contains('is-toggled')) {
        document.querySelector(".gaming-btn").classList.add('is-toggled');
    } else {
        document.querySelector(".gaming-btn").classList.remove('is-toggled');
    }
});

// 10e & 10g
const buttons = document.querySelectorAll(".gaming-music-tech-btns");
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        buttons.forEach((btn) => {
            btn.classList.remove('is-toggled');
        });
        button.classList.add('is-toggled');
    });
});