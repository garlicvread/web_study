// 함수 선언문 안에서 this는 global 객체를 의미한다.
// 함수 선언식이 내부 함수에서 선언될 경우 this는 global이나 window 처럼 전역 객체에 binding 된다.

// 이러한 이벤트 binding 은 다음 순서로 진행된다.
//     1. 이벤트를 받아 줄 요소 선택.
//     2. 선택한 요소에 어떤 이벤트에 반응할 것인지를 정하고 요소와 이벤트를 연결한다(binding).
//     3. 이벤트가 발생했을 때 실행될 코드를 작성한다.

// html 파일에서 id="elem"으로 선언된 요소에 click 이벤트가 발생했을 때 실행될 코드를 작성한다.
// 마우스 버튼을 눌렀을 때: “The mouse button is clicked.”
// 마우스 버튼을 놓았을 때: “The mouse button is released.”

// Menu 클래스의 handleEvent()내에 수행할 코드를 작성.
class Menu {
    handleEvent(event) { // 1.
        let method = "on" + event.type[0].toUpperCase() + event.type.slice(1); // 2.
        if (this.onMouseDown === method) { // 3.
            console.log("The mouse button is clicked.");
        } else if (this.onMouseUp === method) {
            console.log("The mouse button is released.");
        }

    }

    // onMousedown()와 onMouseup()에 innerHTML로 텍스트를 변경
    onMousedown() {
        this.innerHTML = "The mouse button is clicked.";
    }

    onMouseup() {
        this.innerHTML = "The mouse button is released.";
    }
}

let menu = new Menu();
const elem = document.getElementById("elem");

// elem 버튼에 addeventListener()를 추가해서 mousedown과 mouseup을 수행
elem.addEventListener("mousedown", menu);
elem.addEventListener("mouseup", menu);
