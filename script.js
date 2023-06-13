//nav elements active status

let navKey = document.querySelectorAll(".list");

navKey.forEach((keys) => {
  keys.addEventListener("click", function () {
    navKey.forEach((key) => key.classList.remove("active")); // removing active class from all elements
    this.classList.add("active"); // adding active class to each element
  });
});

// change text animation effects

let text = document.querySelector(".changeText");

const textLoad = () => {
  setTimeout(() => {
    text.textContent = "Web Developer.";
  }, 0);
  setTimeout(() => {
    text.textContent = "Graphics Designer.";
  }, 4000);
  setTimeout(() => {
    text.textContent = "Software Developer.";
  }, 8000);
};

textLoad();
setInterval(textLoad, 12000);
