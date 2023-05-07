const styleSheet =
  document.querySelector("#extra-styles");

const letters = Array.from(document.querySelectorAll(".letter"));

let rule = "";
letters.map((l, i) => {
  rule += `.letter:nth-child(${i+1})`;
  rule += "{";
  rule += "animation: rise 0.5s forwards ease-in-out;";
  rule += `animation-delay: calc(var(--tick) * ${i + 1});`;
  rule += "}";
});
styleSheet.innerHTML = rule;