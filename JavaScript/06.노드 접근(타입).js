/*
nodeType 프로퍼티 값은 텍스트가 아니라 숫자로 표현된다.

대표적인 HTML 노드별 nodeType 프로퍼티 값은 다음과 같다.\
  - 요소 노드:1
  - 속성 노드: 2
  - 텍스트 노드: 3
  - 주석 노드: 8
  - 문서 노드: 9
*/


// 1. 아이디가 apple인 요소의 첫번째 자식 노드 선택
var apple_node = document.getElementById("apple").childNodes[0];

// 2. apple_node의 값을 변수에 할당
var apple_node_value = apple_node.nodeValue;

// 3. apple_node의 타입을 변수 할당
var apple_node_type = apple_node.nodeType;

// 4. apple_node의 값과 타입 출력
document.write(apple_node_value);
document.write(apple_node_type);
