const numberElements = document.getElementsByClassName('calc_number');
const signElements = document.getElementsByClassName('calc_sign');
const result = document.getElementById('result');
let firstInput = true;
const resultsList = document.getElementById('results');
const resultButton = document.getElementById('resultButton');

// for(let i=0; i < numberElements.length; i++ ) {
//     numberElements[i].addEventListener('click', testListener)
// }

// Array.from(numbers).forEach((number) => {
//     number.addEventListener('click', function() {
//                 console.log("tryck!")
//             })
// });

for(const numberElement of numberElements ) {
    numberElement.addEventListener('click', function() {
                        buttonListener(numberElement);
                    })
}

for(const signElement of signElements ) {
    signElement.addEventListener('click', function() {
                        buttonListener(signElement);
                    })
}

// function testListener() {
//     console.log(this.innerText)

// }

resultButton.addEventListener("click", function() {
    clearResultBlock()
});

function clearResult() {
    result.innerText = '';
}

function display(value) {
    if(firstInput) {
        clearResult();
        firstInput = false;

    }
    result.innerText += value
}

function buttonListener(button) {
   
    if (button.innerText == "="){
        calculate()
    }else {
        display(button.innerText)
    }
}

function calculate(){
    let res = eval(result.innerText)
    display('=' + res)
    firstInput = true
    displayResults(result.innerText)
}

function displayResults(value){
   const listItem = document.createElement("li")
   listItem.innerText = value;
    resultsList.appendChild(listItem)
    
}

function clearResultBlock(){
    resultsList.innerHTML = "";
}