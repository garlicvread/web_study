// 1. 아이디가 "carrot"인 요소 선택
var carrot_btn = document.getElementById("carrot");

// 2. click할 때 텍스트를 보여주는 함수 작성
//    버튼 클릭시 "토끼가 나타났어요!!" 문장을 출력하는 함수

function showText() {
    document.getElementById("text").innerHTML = "토끼가 나타났어요!!";
};

// 3. 선택한 요소에 "click" 이벤트 핸들러 등록 (이벤트명:"click", 함수이름)
carrot_btn.addEventListener("click", showText);
