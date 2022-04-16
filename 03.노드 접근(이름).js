// 1. document의 자식 노드 중 두 번째 노드를 node1 변수에 할당
var node1 = document.childNodes[1];

// 2. node1의 자식 노드 중 세 번째 노드를 node2 변수에 할당
var node2 = node1.childNodes[2];

// 3. node2의 자식 노드 중 두번째 노드를 node3 변수에 할당
var node3 = node2.childNodes[1]

// 4. node1, node2, node3의 이름을 nodeName을 이용해 출력

document.write(node1.nodeName)
document.write(node2.nodeName)
document.write(node3.nodeName)

//5. `node2`의 자식 변수 모두 출력
console.log(node2.childNodes)
