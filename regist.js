var a1=0, a2=0, a3=0, a4=0;
function change1(){
  if(a1==0){
  document.getElementById('bt1').style.backgroundColor = "rgb(1, 1, 1)";
  a1=1;
  }else{
    
  document.getElementById('bt1').style.backgroundColor = "rgb(255, 255, 255)";
  a1=0;
  }
}
function change2(){
  if(a2==0){
  document.getElementById('bt2').style.backgroundColor = "rgb(1, 1, 1)";
  a2=1;
  }else{
    
  document.getElementById('bt2').style.backgroundColor = "rgb(255, 255, 255)";
  a2=0;
  }
}
function change3(){
  if(a3==0){
  document.getElementById('bt3').style.backgroundColor = "rgb(1, 1, 1)";
  a3=1;
  }else{
    
  document.getElementById('bt3').style.backgroundColor = "rgb(255, 255, 255)";
  a3=0;
  }
}
function change4(){
if(!(a1==1&&a2==1&&a3==1)){
alert("모든 약관에 동의해주세요.")
}
else{
  location.href = "./regist1.html";
}
}
function change5(){
  if(!(a1==1&&a2==1)){
  alert("모든 약관에 동의해주세요.")
  }
  else{
    location.href = "./join2.html";
  }
  }


  function show () {
    document.querySelector(".background").className = "background show";
  }
  
  function close () { 
    document.querySelector(".background").className = "background";
  }
  
  document.querySelector("#show").addEventListener('click', show);
  document.querySelector("#close").addEventListener('click', close);

var joinname11;
var joinnum11;
var joinnum22;
var joinnum33;
var joinid;
var joinpw;
var joinemail;
var infor = {};
function joinname111()
{
  joinname11 = document.getElementById('joinname1').value

}
function joinnum1()
{
  joinnum11 = document.getElementById('joinnum1').value

}
function joinnum2()
{
  joinnum22 = document.getElementById('joinnum2').value

}
function joinnum3()
{
  joinnum33 = document.getElementById('joinnum3').value
  
}
function joinid1()
{
  joinid = document.getElementById('joinid').value
  
}
function joinpw1()
{
  joinpw = document.getElementById('joinpw').value
  
}
function joinemail1()
{
  joinemail = document.getElementById('joinemail').value
  
}
function comp()
{
// alert("이름 : "+joinname11)
// alert("전화번호 : "+joinnum11+joinnum22+joinnum33)
// alert("아이디 : "+joinid)
// alert("비밀번호 : "+joinpw)
// alert("이메일 : "+joinemail)
infor = {
  "joinname" : joinname11,
  "joinnum1" : joinnum11,
  "joinnum2" : joinnum22,
  "joinnum3" : joinnum33,
  "name" : joinname11,
  "joinid" : joinid,
  "joinpw" : joinpw,
  "email" : joinemail
};

//Json Object를 저장하기

localStorage.setItem("infor", JSON.stringify(infor));
//alert(JSON.stringify(infor))
alert("계정 생성이 완료되었습니다.")
location.href ='./login.html'

}
