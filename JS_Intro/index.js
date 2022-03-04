
const button = document.getElementById("calculateButton");

function calculateTip(sum, tip){
const calculatedTip = parseInt(sum) * parseInt(tip) / 100
return calculatedTip
}


function divideTotal (total, numberOfFriends){
const sumDivided = total / parseInt(numberOfFriends);
return sumDivided
}

function showDividedSum(sum){

    const friendSum = document.getElementById("friendSum");
    friendSum.innerHTML = sum + "Kr";

    const inputForm = document.getElementById("inputForm");
    inputForm.classList.toggle("hide");
    document.getElementById("showSum").classList.toggle("hide")
}

button.addEventListener('click', function() {
    const sum = document.getElementById("sum").value;
    const numberOfFriends = document.getElementById("numberOfFriends").value;
    const tip = document.getElementById("tip").value;

    const calculatedTip = calculateTip(sum, tip);

    const total = parseInt(sum) + calculatedTip;

    const friendSum = divideTotal(total, numberOfFriends);

    showDividedSum(friendSum)



});