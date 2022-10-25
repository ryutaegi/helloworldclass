var infor = JSON.parse(localStorage.getItem("infor"))
document.getElementById("registname").innerHTML = infor["joinname"];
document.getElementById("registnum1").innerHTML = infor["joinnum1"];
document.getElementById("registnum2").innerHTML = infor["joinnum2"];
document.getElementById("registnum3").innerHTML = infor["joinnum3"];
document.getElementById("registemail").innerHTML = infor["email"];

document.getElementById("show1").onclick = function() {
  document.getElementById("modal").style.display="block";
}

document.getElementById("modal").onclick = function() {
  document.getElementById("modal1").style.display="block";
  document.getElementById("modal").style.display="none";
}

document.getElementById("modal1").onclick = function() {
  document.getElementById("modal1").style.display="none";
  location.href ='./index.html'
} 

