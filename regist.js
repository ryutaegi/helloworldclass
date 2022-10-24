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
function registbt(){
  alert("제출하였습니다")
  location.href ='./index.html'
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
function joinname111()
{
  joinname11 = document.getElementById('joinname1').value
  alert("입력확인용 : "+ joinname11)
}
function joinum111() //여기서 막힘
{
  alert("입력확인용 : ")
  const joinnum11 = document.getElementById('joinnum1').value
  
}

// var infor = {
//   "loginid" : joinname11,
//   "loginpassword" : ,
//   "name" :,
//   "contact" :,
//   "email" : 
// };
// Json Object를 저장하기
localStorage.setItem("cast", JSON.stringify(cast));