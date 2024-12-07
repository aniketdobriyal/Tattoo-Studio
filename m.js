
let n = 1;
let x;
function main() {
    let n = 1;
    x = document.getElementById("img");
}

function chng() {
    x.style.animation = 'none';
    x.offsetWidth;
    x.style.animation = null;

    if (n == 1) {
        x.style = "background-image:url('1465319_large5419.jpg');";
        document.getElementById("titles").innerHTML = "<b>SPECIAL</b> <br>OFFERS";

    }

    else if (n == 2) {
        x.style = "background-image:url('338926-women-tattoos.jpg')";
        document.getElementById("titles").innerHTML = "<b>DISCOUNTS <br>FOR FIRST-TIMER </b>";

    }


    else if (n == 3) {
        x.style = "background-image:url('IMG_7182.jpg')";
        n = 0;
        document.getElementById("titles").innerHTML = "<b>BOOK NOW</b> <br>";


    }



    n++;
}
setInterval(chng, 3500);

