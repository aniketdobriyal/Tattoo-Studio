let flag = true;

function menu() {
  
    v = document.getElementById("menu");
    if (flag) {

        v.style = "display:contents;";

        flag = false;
    }
    else {
        v.style = "display:none";
        flag = true;
    }
}