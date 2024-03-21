
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
        x.style = "background-image:url('https://img2.juzaphoto.com/001/shared_files/uploads_hr/1465319_large5419.jpg');";
        document.getElementById("titles").innerHTML = "<b>SPECIAL</b> <br>OFFERS";

    }

    else if (n == 2) {
        x.style = "background-image:url('https://wallup.net/wp-content/uploads/2016/05/13/338926-women-tattoos.jpg')";
        document.getElementById("titles").innerHTML = "<b>DISCOUNTS <br>FOR FIRST-TIMER </b>";

    }


    else if (n == 3) {
        x.style = "background-image:url('https://das-tattoostudio-hannover.de/wp-content/uploads/2022/01/tattoostudio-hannover-blog-01-1536x864.jpg')";
        n = 0;
        document.getElementById("titles").innerHTML = "<b>BOOK NOW</b> <br>";


    }



    n++;
}
setInterval(chng, 3500);

