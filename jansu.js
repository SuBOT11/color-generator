//quering the DOM
const content = document.querySelector(".content");
const button = document.querySelector("button");
const colorInfo = document.querySelector(".color-info");
const para = document.querySelector("p");
const hex = document.querySelector("#hex");
const buttonDiv = document.querySelector('.btn')
const hexbtn = document.querySelector('.hexbtn')


const arrayColors = [
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
 const arrayHex = ["#ddd333", "#fff", "#000"];
 





const mathNum = () => {
  let num = Math.random() * 10;
  let random = Math.floor(num);

  return random;
};
console.log(mathNum())

const randColor = (num) => {
  button.addEventListener("click", (e) => {
    e.preventDefault();

    const html = `<div class = "change">
  
    </div>
    `;
    content.innerHTML = html;
    const display = (color) => {
      content.style.background = `${color}`;
      para.innerText = `${color}`;
    };
    display(arrayColors[num()])
    console.log(num())
    
  });
};


//generate a template



hex.addEventListener("click", (e) => {
  e.preventDefault();
  
  content.innerHTML = "";
  hex.removeAttribute('style')
  buttonDiv.innerHTML = '';
  const hexButton = document.createElement('button');
  hexButton.textContent = 'hexButton' 
  buttonDiv.append(hexButton)
  hexButton.setAttribute('id','hexbtn')

  //add a content
   const html = `
   <div class = "change">
  
    </div> `;
   content.innerHTML = html; 
   hexButton.addEventListener('click',e=>{
    e.preventDefault()

    let hexColor = '#';

for(let i = 0;i<6;i++)
{
hexColor += colorCombo[numberForHex()];
}


     
     const display = (color) => {
      content.style.background = `${color}`;
      para.innerText = `${color}`;
    };
    display(hexColor)
    
   })

 
});
randColor(mathNum);

const colorCombo = [0,1,'a',2,'b',3,'c',4,'d',5,6,'e',7,8,'f',9]

const numberForHex = ()=>{
  return Math.floor(Math.random()*colorCombo.length);

}

