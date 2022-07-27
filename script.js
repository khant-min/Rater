const submitButton = document.querySelector(".submit");
const buttonTags = document.querySelectorAll(".btn");
const firstContainer = document.querySelector(".first");
const SecondContainer = document.querySelector(".second");
const rater = document.querySelector(".marker");

let currentValue;
buttonTags.forEach(button => {
  button.addEventListener("click", () => {
    currentValue = button.id;
  });
});

submitButton.addEventListener("click", () => {
  if (currentValue !== undefined) {
    firstContainer.style.display = "none";
    SecondContainer.style.display = "inline";
    rater.innerHTML = `You selected ${currentValue} out of 5`;
  } else {
    alert("Please rating a number!");
  }
});
