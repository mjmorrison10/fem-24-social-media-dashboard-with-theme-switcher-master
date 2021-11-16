const Switch = document.querySelector(".checkbox");
const Body = document.querySelector(".body");
const Header = document.querySelector(".header-title");
const Overview = document.querySelector(".overview");

const Divs = document.getElementsByTagName("div");

Switch.addEventListener("click", () => {
  console.log("clicked");
  console.log(Divs);

  for (div of Divs) {
    div.classList.toggle("dark");
  }

  Body.classList.toggle("dark");
  Header.classList.toggle("dark");
  Overview.classList.toggle("dark");
});
