const navLinks = document.getElementById('nav-links');
const hamburger = document.getElementById('hamburger');
const buttons = document.querySelectorAll(".tab-btn");
const tabPanels = document.querySelectorAll(".tab-panel");

hamburger.addEventListener ("click", () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('rotate-ham');
});

function openPanel(panelName) {
    buttons.forEach(button => button.classList.remove("active"));
    tabPanels.forEach(panel => panel.classList.remove('active'));
    document.getElementById(panelName).classList.add("active");
    event.currentTarget.classList.add("active");
}

// document.addEventListener("DOMContentLoaded", () => {
//     buttons.forEach(button => {
//         button.addEventListener("click", () => {
//             buttons.forEach(btn => btn.classList.remove("active"));
//             event.currentTarget.classList.add("active");

//         })
//     })
// });