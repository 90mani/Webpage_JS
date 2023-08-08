
const div = document.getElementById("div");
const span = document.getElementById("span");
const button = document.getElementById("button");

div.addEventListener("click", () => console.log("div was clicked!"),true);
span.addEventListener("click", () => console.log("span was clicked!"),true);
button.addEventListener("click", () => console.log("button was clicked!"),true);