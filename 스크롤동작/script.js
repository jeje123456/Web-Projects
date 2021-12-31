//모든 박스를 boxes 상수에 저장
const boxes = document.querySelectorAll('.box');

//처음 시작시 한번 실행
checkBoxes();

// 스크롤 이벤트 어디서? = 윈도우
//윈도우창에서 스크롤하면 => checkBoxes 함수 실행
window.addEventListener('scroll', checkBoxes);

function checkBoxes() {
  //윈도우 창의 아래쪽 px 을 약간 높게(박스를 보여주거나 사라지는 트리거포인트)
  // 콘솔창에서 스크롤 할때 윈도우 창의 높이 확인 가능
  // const triggerBottom = window.innerHeight; //화면창의 높이
  // 창의 높이가 5분의 4 지점까지 내려오면 박스가 들어오게 만들고 싶으므로
  const triggerBottom = (window.innerHeight / 5) * 4;
  // 윈도우 창의 아래쪽 px 을 약간 높게(박스를 보여주거나 사라지는 트리거포인트)

  //모든 박스에게 박스높이가 트리거높이보다 작으면 보이게 설정
  // forEach 함수의 매개변수로 box를 줘서 익명함수로 처리
  boxes.forEach((box) => {
    // content 상단의 높이 = .getBoundingClientRect()
    const boxTop = box.getBoundingClientRect().top; // 박스의 상단 높이
    // 박스높이 < 트리거포인트 => 박스 보이기(박스에 클래스 show 달기)
    if (boxTop < triggerBottom) {
      // 박스 보이게 (박스에 클래스 show 삭제)
      box.classList.add('show');
    } else {
      //박스 안보이기(박스에 클래스 show 삭제)
      box.classList.remove('show');
    }
  });
}
