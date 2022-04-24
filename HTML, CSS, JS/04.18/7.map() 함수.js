// map() function returns
// 함수는 각 배열 요소를 정의된 함수를 통해 변환한 결괏값들로 새 배열을 반환합니다. 쉽게 말해 배열을 가공하여 새 배열을 만드는 함수입니다.
//
//     예를 들어 아래와 같이 딕셔너리 배열이 주어졌습니다. 딕셔너리 요소인 firstname과 lastname을 합한 전체 이름을 출력하려고 합니다.

let persons = [
    { firstname: "Malcom", lastname: "Reynolds" },
    { firstname: "Kaylee", lastname: "Frye" },
    { firstname: "Jayne", lastname: "Cobb" },
];

function getFullName(item) {
    let fullname = item.firstname + " " + item.lastname;
    return fullname;
}

document.write(persons.map(getFullName));

document.write("<br>");
let numbers = [4, 9, 16, 25];
let x = numbers.map(Math.sqrt);
document.write(x);
