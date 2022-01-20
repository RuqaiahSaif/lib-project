/////////////// search
function search_book() {
    let input = document.getElementById('searchbar').value
    input = input.toLowerCase();
    let x = document.getElementsByClassName('flexCard');

    for (i = 0; i < x.length; i++) {
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display = "none";
        }
        else {
            x[i].style.display = "block";
        }
    }
}
////////////////////// add to cart



var count = 0;

function add() {
    count++;
    sessionStorage.setItem('counter', count);

    document.getElementById("counter").innerHTML = count;
}



