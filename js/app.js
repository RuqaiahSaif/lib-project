// let loginShow = document.getElementById("show_login");
// let modelContent = document.getElementById("sec1");
// loginShow.addEventListener('click',()=>{
//     modelContent.style.visibility ='visible';
// });
let modal = document.getElementById("modal");
let btn = document.getElementById("myBtn");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function () {
    modal.style.display = "flex";
    // modal.style.visibility = "visible";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
    // modal.style.visibility = "hidden";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
        // modal.style.visibility = "hidden";
    }
}
/////////////////////////model2////////////
let modal2 = document.getElementById("modal2");
let btn2 = document.getElementById("btn2");
var span2 = document.getElementsByClassName("close2")[0];

btn2.onclick = function () {
    modal2.style.display = "flex";
    // modal.style.visibility = "visible";
    //  modal.style.display = "none";
}

// When the user clicks on <span> (x), close the modal
span2.onclick = function () {
    modal2.style.display = "none";
    // modal.style.visibility = "hidden";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal2) {
        modal2.style.display = "none";
        // modal.style.visibility = "hidden";
    }
}