// 열기버튼, 닫기버튼, 컨테이너 객체 상수
const open = document.getElementById('open');
const close = document.getElementById('close');
const container = document.querySelector('.container');

//열기버튼에 이벤트 리스너 : 마우스 click시 show-nav 클래스 추가
// open.addEventListener{'이벤트 종류', 함수}
// 익명함수 () => {}
open.addEventListener('click', () => {
  container.classList.add('show-nav');
});
close.addEventListener('click', () => {
  container.classList.remove('show-nav');
});
