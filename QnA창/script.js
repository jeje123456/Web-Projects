// 버튼을 클릭했을때 active 클래스를 객체 (.faq)에 준다.
const toggles = document.querySelectorAll('.faq-toggle');

// toggles.forEach(함수); 하나의 버튼을 매개변수로 줌
toggles.forEach((toggle) => {
  //모든 토글에 클릭시 상위객체 (.parentNode) 를 찾아서 active 클래스를 토글
  // toggle.addEventListener('이벤트종류', 함수); e = 이벤트 객체
  toggle.addEventListener('click', () => {
    // parentNode 쓰면 본인 태그보다 상위태그로 올라감
    console.log(toggle.parentNode);
    toggle.parentNode.classList.toggle('active');
    // toggle : 클래스가 있으면 제거, 없으면 추가
  });
});
