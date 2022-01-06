// counter 클래스가 있는 모든 객체들을 counters에 저장
const counters = document.querySelectorAll('.counter');

counters.forEach((counter) => {
  counter.textContent = '0';
  업데이트카운터(counter);
});

function 업데이트카운터(counter) {
  //data-target의 속성값을 가져옴
  //+문자열 = 숫자형 //parseInt(문자열) = 숫자형 //Number(문자형) = 숫자형
  const target = +counter.getAttribute('data-target');
  const c = +counter.textContent; //처음에는 0

  const increment = target / 200; //나누기 200한 비율로 증가

  if (c < target) {
    // Math.ceil : 반올림 제거
    counter.textContent = `${Math.ceil(c + increment)}`;
    setTimeout(() => {
      업데이트카운터(counter);
    }, 1); // 타겟값보다 작으면 0.001초뒤에 함수실행
  } else {
    counter.textContent = target; //타겟값 입력
  }
}
