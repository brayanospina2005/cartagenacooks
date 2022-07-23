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

let toggleBtn1 = document.querySelector("#toggleBtn1");
let info1 = document.querySelector("#info1");

let toggle1 = false;

toggleBtn1.addEventListener("click", () => {
    if (toggle1) {
        info1.style = ` transform: translateY(8rem);`;
        toggleBtn1.innerHTML = `<i class="fas fa-arrow-up"></i>`;
        toggle1 = false;
    } else {
        info1.style = ` transform: translateY(0rem);`;
        toggleBtn1.innerHTML = `<i class="fas fa-arrow-down"></i>`;
        toggle1 = true;
    }

})

/* let toggleBtn2 = document.querySelector("#toggleBtn2");
let info2 = document.querySelector("#info");

let toggle2 = false;

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

}) */