
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
////////////////////////// sllider///////////////////
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}
////////////////////////////////

//////////////////////
const countdown = () => {
    const upperDate = new Date('Jan 21, 2022 00:00:00').getTime();
    const currentDate = new Date().getTime();
    const diffDate = upperDate - currentDate;


    const second = 1000;
    const minutes = second * 60;
    const hours = minutes * 60;
    const days = hours * 24;

    const remain_days = Math.floor(diffDate / days);
    const remain_hours = Math.floor((diffDate % days) / hours);
    const remain_minutes = Math.floor((diffDate % hours) / minutes);
    const remain_second = Math.floor((diffDate % minutes) / second);

    var d = document.getElementById('days');
    var h = document.getElementById('hours');
    var m = document.getElementById('minutes');
    var s = document.getElementById('seconds');

    d.innerHTML = remain_days;
    h.innerHTML = remain_hours;
    m.innerHTML = remain_minutes;
    s.innerHTML = remain_second;


    var d1 = document.getElementById('days1');
    var h1 = document.getElementById('hours1');
    var m1 = document.getElementById('minutes1');
    var s1 = document.getElementById('seconds1');

    d1.innerHTML = remain_days;
    h1.innerHTML = remain_hours;
    m1.innerHTML = remain_minutes;
    s1.innerHTML = remain_second;

    var d2 = document.getElementById('days2');
    var h2 = document.getElementById('hours2');
    var m2 = document.getElementById('minutes2');
    var s2 = document.getElementById('seconds2');

    d2.innerHTML = remain_days;
    h2.innerHTML = remain_hours;
    m2.innerHTML = remain_minutes;
    s2.innerHTML = remain_second;

    var d3 = document.getElementById('days3');
    var h3 = document.getElementById('hours3');
    var m3 = document.getElementById('minutes3');
    var s3 = document.getElementById('seconds3');

    d3.innerHTML = remain_days;
    h3.innerHTML = remain_hours;
    m3.innerHTML = remain_minutes;
    s3.innerHTML = remain_second;


    var d4 = document.getElementById('days4');
    var h4 = document.getElementById('hours4');
    var m4 = document.getElementById('minutes4');
    var s4 = document.getElementById('seconds4');

    d4.innerHTML = remain_days;
    h4.innerHTML = remain_hours;
    m4.innerHTML = remain_minutes;
    s4.innerHTML = remain_second;
}
setInterval(countdown, 1000);
/////////////////////////////
