// DOM은 문서의 구조화된 표현(structured representation)을 제공하여 프로그래밍 언어가 문서 구조, 스타일, 내용 등을 변경할 수 있도록 한다.

// document.getElementsByTagName(); - 태그 이름 선택
// document.getElementById(); - 아이디 선택
// document.getElementsByClassName(); - 클래스 선택
// document.getElementsByName(); - name 속성값 선택

// HTML <div> 요소 선택
var selectedTagName = document.getElementsByTagName('div');

// 아이디가 "banana"인 요소 선택
var selectedId = document.getElementById('banana');

// 클래스가 "vegetable"인 모든 요소 선택
var selectedClassNameS = document.getElementsByClassName('vegetable');

// name 속성값이 "red"인 모든 요소를 선택
var selectedNameS = document.getElementsByName('red');


// 선택된 요소를 출력
document.write(selectedTagName);
document.write(selectedId);
document.write(selectedClassNameS);
document.write(selectedNameS);
