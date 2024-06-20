let btn = document.querySelector("button");
let exit = document.querySelector("span");
let modal = document.querySelector("#mc");

btn.addEventListener("click", () => {
  modal.style.display = "block";
});
exit.addEventListener("click", () => {
  modal.style.display = "none";
});
