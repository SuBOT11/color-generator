//quering the DOM
const content = document.querySelector(".content");
const button = document.querySelector("button");
const colorInfo = document.querySelector(".color-info");
const para = document.querySelector('p')

arrayColors = [
  "green",
  "yellow",
  "white",
  "blue",
  "grey",
  "pink",
  "purple",
  "brown",
  "red",
  "crimson",
];

const mathNum = () => {
  let num = Math.random() * 10;
  let random = Math.floor(num);

  return random;
};

const randColor = (num) => {
  button.addEventListener("click", (e) => {
    e.preventDefault();

    const html = `<div class = "change">
  
    </div>
    `;
    content.innerHTML = html;
    const display = (color)=>{
      content.style.background = `${color}`;
    para.innerText = `${color}`
    }
    display(arrayColors[num()])
  });
};

randColor(mathNum);
