// 입력할 태그 객체
const insert = document.getElementById('insert');

// 키 입력시 이벤트 ? 윈도우창에 이벤트 발생
window.addEventListener('keydown', (e) => {
  // console.log(e.key);
  // console.log(e.keyCode);
  // console.log(e.code);
  // innerHTML : 문자열과 태그를 모두 한번에 넣을 수 있다.
  insert.innerHTML = `
  <div class="key">
  ${e.key}
  <small>event.key</small>
</div>

<div class="key">
  ${e.keyCode}
  <small>event.keyCode</small>
</div>

<div class="key">
  ${e.code}
  <small>event.code</small>
</div>`;
});

window.addEventListener('click', (e) => {
  console.log(`클릭한 좌표 : (${e.clientX}, ${e.clientY})`);
});
