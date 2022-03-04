let number = 1;

function turnon() {
    if (number === 1){
        document.getElementById("turnon").src = "pic_bulbon.gif"
        number = 1
    } else {
        document.getElementById("turnoff").src = "pic_bulboff.gif"
        number = 0
    }
    console.log(number)

}

const btn = document.getElementById("turnon")
const btnoff = document.getElementById("turnoff")

btn.addEventListener("click", function() {
   document.getElementById("imagem").src = "pic_bulbon.gif"  
   document.getElementById("text").innerHTML = "Lampan är öppet"
});

btnoff.addEventListener("click", function(){
document.getElementById("imagem").src = "pic_bulboff.gif" 
document.getElementById("text").innerHTML = "Lampan är stängd"
});