// 확인용 alert('하이');
// 클래스 panel들을 모두 선택해서 사우 panel에 담기
// querySelectorAll : 여러개의 객체를 배열로 저장함
const panels = document.querySelectorAll('.panel');

panels.forEach((panel) => {
  // panel.addEventListener('click', 함수);
  //함수자리에 익명함수 사용
  panel.addEventListener('click', () => {
    removeActive();
    panel.classList.add('active'); // 패널에 active 클래스를 추가
  });
});
// 모든 패널에 active 클래스 제거
function removeActive() {
  panels.forEach((panel) => {
    panel.classList.remove('active');
  });
}
