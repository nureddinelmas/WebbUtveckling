let number = false;
const btn = document.getElementById("turnon")
const image = document.getElementById("imagem")

function turnon() {
    if (number){
        image.src = "pic_bulboff.gif"
        number  = false
    } else {
        image.src = "pic_bulbon.gif"
        number = true
    }
    console.log(number)

}

btn.addEventListener('click', function() {
    turnon();
});

