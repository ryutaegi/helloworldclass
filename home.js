const myname = document.getElementById('myname')
var infor = JSON.parse(localStorage.getItem("infor"))


myname.innerHTML = infor["name"]