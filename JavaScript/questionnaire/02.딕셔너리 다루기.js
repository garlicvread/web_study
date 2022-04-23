let country = {
    대한민국: "서울",
    베트남: "하노이",
    브라질: "브라질리아",
    프랑스: "파리",
    미국: "워싱턴",
    칠레: "산티아고",
    체코: "프라하",
    러시아: "모스크바",
    중국: "베이징",
    스페인: "마드리드",
    이집트: "카이로",
    영국: "런던",
};

// Insert 칠레: "산티아고" to the variable chile.
let chile = {
    칠레: "산티아고",
};

// Add an element '벨기에' : '브뤼셀' to the dictionary country.
country.벨기에 = "브뤼셀";
console.log(country);

// Delete the element '중국' from the dictionary country.
delete country.중국;
console.log(country);

// 값을 확인하기 위한 코드입니다.
console.log(chile);
console.log(country);
