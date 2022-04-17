// HTML 문서가 로드될 때 이벤트 핸들러 작동: window.onload

window.onload =
    function() {
        // 아이디가 "text"인 요소 선택
        var text = document.getElementById('text');
        text.innerHTML = "페이지 오픈";
    }
