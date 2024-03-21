function showlargeimg(x)
{
    document.querySelector(".master_div").style = "display:none";
  getSelection
    document.querySelector(".large_img").style = "display:block";
    document.getElementById("large_img").src = x;

}

function showsmallimg()
{
    document.querySelector(".master_div").style = "display:flex";
    document.querySelector(".large_img").style = "display:none";
    document.getElementById("large_img").src = "";
}

function next()
{
    let x =  document.querySelectorAll(".large_img");
    let img  = document.getElementsByClassName("images");

}