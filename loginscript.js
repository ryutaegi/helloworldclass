const id = document.getElementById('id')
const password = document.getElementById('password')
const login = document.getElementById('login')
let errStack = 0;
var infor;
infor = JSON.parse(localStorage.getItem("infor"))


login.addEventListener('click', () => {
    if (!infor) {
            alert('존재하지 않는 계정입니다.')
            errStack ++;
    }
    else if (id.value == infor["joinid"]) {
        if (password.value == infor["joinpw"]) {
            alert('로그인되었습니다.');
            var cast = {
                "login10" : 1
            };
            // Json Object를 저장하기
            localStorage.setItem("cast", JSON.stringify(cast));
            location.href = "index.html";
            
        }
        else {
            alert('이메일과 비밀번호를 확인해주세요.')
            errStack ++;
        }
    }
    else {
        alert('존재하지 않는 계정입니다.')
    }

    if (errStack >= 5) {
        alert('비밀번호를 5회 이상 틀리셨습니다. 비밀번호 찾기를 권장드립니다.')
    }
})


