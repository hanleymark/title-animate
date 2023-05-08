const styleSheet = document.querySelector("#extra-styles");
const titleContainer = document.querySelector(".title-container");
const title = "MARK HANLEY";
const root = document.querySelector(":root");
root.style.setProperty('--number-of-letters', `${title.length}`);

addTitleToPage(title, titleContainer);

const letters = Array.from(document.querySelectorAll(".letter"));

let rule = "";
letters.map((l, i) => {
  rule += `.letter:nth-child(${i + 1})`;
  rule += "{";
  rule += "animation: rise var(--rise-duration) forwards ease-in-out;";
  rule += `animation-delay: calc(var(--tick) * ${i + 1});`;
  rule += "}";
});

// Make html element visible (prevented FOAC)
styleSheet.innerHTML = rule;

function addTitleToPage(title, element) {
  for (letter of title) {
    const span = document.createElement("span");
    span.classList.add("letter");
    span.innerHTML = (letter === " ") ? "&nbsp;" : letter;
    element.appendChild(span);
  }
  const underline = document.createElement("span");
  //underline.classList.add("letter");
  underline.classList.add("underline");
  underline.innerText = "_";
  element.appendChild(underline);
}