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
function registbt(){
  alert("제출하였습니다")
  location.href ='./index.html'
  }