// 객체 상수 만들기
const progress = document.getElementById('progress'); //막대기바
const prev = document.getElementById('prev'); // 이전 버튼
const next = document.getElementById('next'); // 다음 버튼
// 서클들의 객체를 저장 // 웹창의 F12 console에서 circles 치면 확인 가능
const circles = document.querySelectorAll('.circle');

// 단계 표시 변수
let currentActive = 1;

// 다음을 클릭했을때 currentActive +1
// next.addEventListener('click', 함수); 함수에 익명함수 생성
next.addEventListener('click', () => {
  currentActive++;
  if (currentActive > circles.length) {
    currentActive = circles.length;
    // 다음버튼을 계속 눌러도 서클 객체의 갯수만큼만 증가
  }
  막대바업데이트();
});

prev.addEventListener('click', () => {
  currentActive--;
  if (currentActive < 1) {
    currentActive = 1;
    // 이전 버튼을 계속 눌러도 1까지만 감소
  }
  막대바업데이트();
});

function 막대바업데이트() {
  // circles.forEach(함수) 함수를 익명함수로
  // 매개변수 circle과 idx(인덱스번호)
  circles.forEach((circle, idx) => {
    // console.log(circle, idx);
    // 위의 문장은 다음버튼 누르면 console창에 객체와 인덱스 번호출력됨
    if (idx < currentActive) {
      circle.classList.add('active'); // 클래스 추가
    } else {
      circle.classList.remove('active'); // 클래스 제거
    }
  });
  //막대바 업데이트
  const actives = document.querySelectorAll('.active');
  progress.style.width =
    ((actives.length - 1) / (circles.length - 1)) * 100 + '%';

  // 이전버튼을 누를 수 있도록 disable 제거
  if (currentActive === 1) {
    prev.disabled = true; // 현재상태가 1이면 이전버튼 사용 불가
  } else if (currentActive === circles.length) {
    next.disabled = true; // 상태가 4이면 다음버튼은 사용 못함
  } else {
    prev.disabled = false; // 그 외에는 전부 사용 가능
    next.disabled = false;
  }
}
