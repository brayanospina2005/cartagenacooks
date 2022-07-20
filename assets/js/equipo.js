let toggleBtn = document.querySelector("#toggleBtn");
let info = document.querySelector("#info");

let toggle = false;

toggleBtn.addEventListener("click", () => {
    if (toggle) {
        info.style = ` transform: translateY(8rem);`;
        toggleBtn.innerHTML = `<i class="fas fa-arrow-up"></i>`;
        toggle = false;
    } else {
        info.style = ` transform: translateY(0rem);`;
        toggleBtn.innerHTML = `<i class="fas fa-arrow-down"></i>`;
        toggle = true;
    }

})