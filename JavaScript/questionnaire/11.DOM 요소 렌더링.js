// Using getElementsByTagName() and the buttons for User1, User2, User3,
// create elements for each user in 11.DOM 요소 렌더링.html.
// Using addEventListener(), create a function that display alert message of activateItem()
// when each button is clicked.
// The format of alert message is "Hi, user1! You are in group 1".

let data = {
    items: [
        {
            name: "user1",
            group: 1,
        },
        {
            name: "user2",
            group: 1,
        },
        {
            name: "user3",
            group: 2,
        },
    ],
};

//위에 제시된 데이터 배열을 지시사항에 따라 div 목록으로 렌더링합니다.
let userItems = document.getElementsByTagName('button');

for (let i = 0; i < userItems.length; i++) {
    let userItem = userItems[i];

    userItems[i].item_name = data.items[i].name;
    userItems[i].item_group = data.items[i].group;
    userItems[i].addEventListener('click', activateItem);
}

function activateItem() {
    alert(`Hi, ${this.item_name}! You are in group ${this.item_group}`);
}
