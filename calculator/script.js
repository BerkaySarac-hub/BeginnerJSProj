let resultScreen = document.getElementById("calculator-frame");
let numbersButton = document.querySelectorAll("#numbers button");
let rightControls = document.querySelectorAll("#right-controls button");
let zeroBtn = document.getElementById("zero")
let number1;
let number2;

for (let index = 0; index < (numbersButton.length -1); index++) {
   
    numbersButton[index].addEventListener("click",()=>{
        resultScreen.innerHTML += index + 1
    })

}
zeroBtn.addEventListener("click",()=>{
    resultScreen.innerHTML += "0"
}) 

rightControls[0].addEventListener("click",()=>{
    resultScreen.innerHTML = ""
})

var sumResult;
function sumThem() {
    number1 = resultScreen.innerHTML
    resultScreen.innerHTML="+"
    number2 = resultScreen.innerHTML
    sumResult = number1+number2
}
rightControls[1].addEventListener("click",sumThem)
function equalTo() {
    var result;
    if (resultScreen.innerHTML.includes("+")) {
        result = sumResult;
    }
    if (resultScreen.innerHTML.includes("-")) {
        result = sourResult;
    }
    resultScreen.innerHTML = result;
}
numbersButton[5].addEventListener("click",equalTo)