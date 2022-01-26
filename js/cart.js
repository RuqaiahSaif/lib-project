var number = 1;

function pluse() {
    number++;
    document.getElementById("cart-number").innerHTML = number;
}
function muns() {
    if(number>1){
    number--;
    document.getElementById("cart-number").innerHTML = number;
    }
    
}