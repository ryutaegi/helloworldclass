const id = document.getElementById('id')
const password = document.getElementById('password')
const login = document.getElementById('login')
let errStack = 0;

login.addEventListener('click', () => {
    if (id.value == 'admin@admin') {
        if (password.value == '1234') {
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


