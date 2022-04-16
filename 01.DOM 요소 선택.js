// DOM은 문서의 구조화된 표현(structured representation)을 제공하여 프로그래밍 언어가 문서 구조, 스타일, 내용 등을 변경할 수 있도록 한다.

// document.getElementsByTagName(); - 태그 이름 선택
// document.getElementById(); - 아이디 선택
// document.getElementsByClassName(); - 클래스 선택
// document.getElementsByName(); - name 속성값 선택

// 1. document.getElementsByTagName()를 사용하여 태그가 div인 요소 선택
// 2. document.getElementById()를 사용하여 아이디가 banana인 요소 선택
// 3. document.getElementsByClassName()를 사용하여 클래스가 vegetable인 모든 요소 선택
// 4. document.getElementsByName()를 사용하여 name 속성값이 red인 모든 요소 선택
// 5. 선택된 각 요소들을 document.write()를 이용해 화면에 출력

// * 텍스트가 아닌 Object 객체가 출력되어야 한다.

// HTML <div> 요소를 선택
var selectedTagName = document.getElementsByTagName('div'); 

// 아이디가 “banana"인 요소 선택
var selectedId = document.getElementById('banana');

// 클래스가 "vegetable"인 모든 요소 선택
var selectedClassNameS = document.getElementsByClassName('vegetable'); 

// name 속성값이 "red"인 모든 요소 선택
var selectedNameS = document.getElementsByName('red'); 


// 선택된 요소 출력
document.write(selectedTagName);
document.write(selectedId);
document.write(selectedClassNameS);
document.write(selectedNameS);
