const burger = document.querySelector(".burger");
const nav = document.querySelector(".nav-links");
const navlinks = document.querySelectorAll(".nav-links li");
var loginn = { "login10" : 0}

if(!JSON.parse(localStorage.getItem("cast"))){

  localStorage.setItem("cast", JSON.stringify(loginn));
}
//localStorage.setItem("cast", JSON.stringify(loginn));


const navAnimation = () => {
  navlinks.forEach((link, index) => {
    // 애니메이션이 있을 때
    if (link.style.animation) {
      // 애니메이션 비움
      link.style.animation = "";
    } else {
      // 애니메이션 없을 때 애니메이션을 추가
      // 딜레이 간격을 줘서 li가 하나씩 차례대로 나타나도록 설정
      link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5
        }s`;
    }
  });
};
const handleNav = () => {
  nav.classList.toggle("nav-active");

  //nav Animation
  navAnimation();

  //burger Animation
  burger.classList.toggle("toggle");
};
const navSlide = () => {
  burger.addEventListener("click", handleNav);
};





const setNavTransition = (width) => {
  if (width > 768) {
    nav.style.transition = "";
  } else {
    nav.style.transition = "transform 0.5s ease-in";
  }
};

const handleResize = () => {
  const width = event.target.innerWidth;
  setNavTransition(width);
};




const init = () => {
  // Toggle Nav
  window.addEventListener("resize", handleResize);
  navSlide();
};

init();
$(function () {
  // 이미지 슬라이드 컨트롤를 사용하기 위해서는 carousel를 실행해야한다.
  $('#carousel-example-generic').carousel({
    // 슬리아딩 자동 순환 지연 시간
    // false면 자동 순환하지 않는다.
    interval: 3000,
    // hover를 설정하면 마우스를 가져대면 자동 순환이 멈춘다.
    pause: "",
    // 순환 설정, true면 1 -> 2가면 다시 1로 돌아가서 반복
    wrap: true,
    // 키보드 이벤트 설정 여부(?)
    keyboard: true
  });
});


var div1 = document.getElementById("m1");
var div2 = document.getElementById("m2");
var div3 = document.getElementById("m3");
var div4 = document.getElementById("m4");

div1.addEventListener("mouseover", function (e) {
  gsap.to("#m1", {
    width: 300
  });
});
div1.addEventListener("mouseout", function (e) {
  gsap.to("#m1", {
    width: 160
  });
});
div2.addEventListener("mouseover", function (e) {
  gsap.to("#m2", {
    width: 300
  });
});
div2.addEventListener("mouseout", function (e) {
  gsap.to("#m2", {
    width: 160
  });
});
div3.addEventListener("mouseover", function (e) {
  gsap.to("#m3", {
    width: 300
  });
});
div3.addEventListener("mouseout", function (e) {
  gsap.to("#m3", {
    width: 160
  });
});
div4.addEventListener("mouseover", function (e) {
  gsap.to("#m4", {
    width: 300
  });
});
div4.addEventListener("mouseout", function (e) {
  gsap.to("#m4", {
    width: 160
  });
});

loginn = JSON.parse(localStorage.getItem("cast"))



function logclick(){
 if(loginn["login10"] ==1)
 {
   cast = {
     "login10" : 0,
 };
 localStorage.setItem("cast", JSON.stringify(cast));
  location.href = "./index.html";
 }
 else{
  
 location.href = "./login.html";
 }
 
 // Json Object를 저장하기
 
 }
if(loginn["login10"]==1)
{
  const element = document.getElementById('log');
  element.innerHTML 
  = '&nbsp&nbsp&nbsp&nbsp로그아웃&nbsp&nbsp&nbsp&nbsp';
  const element1 = document.getElementById('log1');
  element1.innerHTML 
  = '로그아웃';
}
else{
  const element = document.getElementById('log');
  element.innerHTML 
  = '&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp로그인&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp';
  const element1 = document.getElementById('log1');
  element1.innerHTML 
  = '로그인';

}


var home = document.getElementById("home");
var teach = document.getElementById("teach");
var regist = document.getElementById("regist");
var guide = document.getElementById("guide");
var m1 = document.getElementById("m1");
var m2 = document.getElementById("m2");
var m3 = document.getElementById("m3");
var m4 = document.getElementById("m4");



teach.addEventListener("click",function (e){
 if(loginn["login10"]==1)
 {
  location.href = "./teach.html";
 }
 else{
  Swal.fire({
    title: '로그인 후 서비스 이용이 가능합니다',
    height: 500,
    width : 500,
    imageUrl: "./images/helloworldclass1.png",
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: '로그인 페이지로 이동',
    cancelButtonText: '취소',
  }).then((result) => {
    if (result.value) {
      location.href = "./login.html";  //"삭제" 버튼을 눌렀을 때 작업할 내용을 이곳에 넣어주면 된다. 
    }
  })
 }

})

home.addEventListener("click",function (e){
  if(loginn["login10"]==1)
  {
   location.href = "./home.html";
  }
  else{
   Swal.fire({
     title: '로그인 후 서비스 이용이 가능합니다',
     height: 500,
     width : 500,
     imageUrl: "./images/helloworldclass1.png",
     showCancelButton: true,
     confirmButtonColor: '#3085d6',
     cancelButtonColor: '#d33',
     confirmButtonText: '로그인 페이지로 이동',
     cancelButtonText: '취소',
   }).then((result) => {
     if (result.value) {
       location.href = "./login.html";  //"로그인페이지로이동" 버튼을 눌렀을 때 작업할 내용을 이곳에 넣어주면 된다. 
     }
   })
  }
 
 })

 guide.addEventListener("click",function (e){
   location.href = "./guide.html";
 })
m1.addEventListener("click",function (e){
  if(loginn["login10"]==1)
  {
   location.href = "./home.html";
  }
  else{
   Swal.fire({
     title: '로그인 후 서비스 이용이 가능합니다',
     height: 500,
     width : 500,
     imageUrl: "./images/helloworldclass1.png",
     showCancelButton: true,
     confirmButtonColor: '#3085d6',
     cancelButtonColor: '#d33',
     confirmButtonText: '로그인 페이지로 이동',
     cancelButtonText: '취소',
   }).then((result) => {
     if (result.value) {
       location.href = "./login.html";  //"로그인페이지로이동" 버튼을 눌렀을 때 작업할 내용을 이곳에 넣어주면 된다. 
     }
   })
  }
 
 })

m2.addEventListener("click",function (e){
  // if(loginn["login10"]==1)
  // {
    location.href = "./teach.html";
  // }
  // else{
  //  Swal.fire({
  //    title: '로그인 후 서비스 이용이 가능합니다',
  //    height: 500,
  //    width : 500,
  //    imageUrl: "./images/helloworldclass1.png",
  //    showCancelButton: true,
  //    confirmButtonColor: '#3085d6',
  //    cancelButtonColor: '#d33',
  //    confirmButtonText: '로그인 페이지로 이동',
  //    cancelButtonText: '취소',
  //  }).then((result) => {
  //    if (result.value) {
  //      location.href = "./login.html";  //"삭제" 버튼을 눌렀을 때 작업할 내용을 이곳에 넣어주면 된다. 
  //    }
  //  })
  // }
 
 })
 
 m3.addEventListener("click",function (e){
  if(loginn["login10"]==1)
  {
   location.href = "./regist.html";
  }
  else{
   Swal.fire({
     title: '로그인 후 서비스 이용이 가능합니다',
     height: 500,
     width : 500,
     imageUrl: "./images/helloworldclass1.png",
     showCancelButton: true,
     confirmButtonColor: '#3085d6',
     cancelButtonColor: '#d33',
     confirmButtonText: '로그인 페이지로 이동',
     cancelButtonText: '취소',
   }).then((result) => {
     if (result.value) {
       location.href = "./login.html";  //"확인" 버튼을 눌렀을 때 작업할 내용을 이곳에 넣어주면 된다. 
     }
   })
  }
 
 })
 m4.addEventListener("click",function (e){
 
   location.href = "./guide.html";

 
 })



 regist.addEventListener("click",function (e){
  if(loginn["login10"]==1)
  {
   location.href = "./regist.html";
  }
  else{
   Swal.fire({
     title: '로그인 후 서비스 이용이 가능합니다',
     height: 500,
     width : 500,
     imageUrl: "./images/helloworldclass1.png",
     showCancelButton: true,
     confirmButtonColor: '#3085d6',
     cancelButtonColor: '#d33',
     confirmButtonText: '로그인 페이지로 이동',
     cancelButtonText: '취소',
   }).then((result) => {
     if (result.value) {
       location.href = "./login.html";  //"확인" 버튼을 눌렀을 때 작업할 내용을 이곳에 넣어주면 된다. 
     }
   })
  }
 
 })





// window.onresize = function () {
//   document.location.reload();
// };




//ㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇ이자리
if (matchMedia("screen and (max-width: 768px)").matches) {
  
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  var swiper2 = new Swiper(".mySwiper2", {
    slidesPerView: 1,
    spaceBetween: 30,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
}//else if(matchMedia("screen and (max-width: 1023px)").matches){
//console.log("tablet");
//}
else if (matchMedia("screen and (min-width: 1024px)").matches) {

  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 2,
    spaceBetween: 30,
    slidesPerGroup: 2,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
 
  var swiper2 = new Swiper(".mySwiper2", {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 3,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
}

function initMap() {
  //지도 스타일
  var map = new google.maps.Map(document.getElementById('map'), {
      
      //처음 중심 좌표
      center: {
          lat: 37.587624,
          lng: 126.976020
      },
      
      //처음 줌 값. 숫자가 작을수록 낮은 배율
      zoom: 3
  });
  //마커 정보
  var locations = [
      
      //튀니지 마커
      ['<div class="wrap"><div class="text-box"><h4>튀니지</h4><div class="img-box"><img src="./images/flag1.png"></div><a target="_blank" href="t-detail.html"><p>자세히 보기</p></a></div>', 36.84527787020169, 10.224256946189977],
      
      
      //미국 마커
      ['<div class="wrap"><div class="text-box"><h4>미국</h4><div class="img-box"><img src="./images/flag2.png"></div><a target="_blank" href="https://naver.com"><p>자세히 보기</p></a></div>', 38.89773472896015, -77.03658344594376],
      
      
      //캐나다 마커
      ['<div class="wrap"><div class="text-box"><h4>캐나다</h4><div class="img-box"><img src="./images/flag3.jpg"></div><a target="_blank" href="https://naver.com"><p>자세히 보기</p></a></div>', 45.31745113995196, -75.89366700815698],
      
      
      ]
  
  
  //마커 이미지
  var customicon = './images/marker.png'
  //인포윈도우
  var infowindow = new google.maps.InfoWindow();
  //마커 생성
  var marker, i;
  for (i = 0; i < locations.length; i++) {
      marker = new google.maps.Marker({
          
          //마커의 위치
          position: new google.maps.LatLng(locations[i][1], locations[i][2]),
          
          //마커 아이콘
          icon: customicon,
          
          //마커를 표시할 지도
          map: map
      });
      google.maps.event.addListener(marker, 'click', (function(marker, i) {
          return function() {
              
              //html로 표시될 인포 윈도우의 내용
              infowindow.setContent(locations[i][0]);
              
              //인포윈도우가 표시될 위치
              infowindow.open(map, marker);
          }
      })(marker, i));
      
      if (marker) {
          marker.addListener('click', function() {
              
              //중심 위치를 클릭된 마커의 위치로 변경
           //   map.setCenter(this.getPosition());
              //마커 클릭 시의 줌 변화
            //  map.setZoom(14);
          });
      }
  }
}
