const bar = document.querySelector("#bar");
const menu = document.querySelector("#menu");
const close = document.querySelector("#close");

/*=============== SHOW MENU ===============*/

bar.addEventListener("click", () => menu.classList.add("show-menu"));

close.addEventListener("click", () => menu.classList.remove("show-menu"));