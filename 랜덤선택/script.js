// 입력받는 창
const textarea = document.getElementById('textarea');
// span 태그들을 넣을 객체
const tagsEl = document.getElementById('tags');

// 처음 시작시 커서를 입력창에
textarea.focus();

// 키보드를 쳤을 경우 이벤트 발생
textarea.addEventListener('keyup', (e) => {
  // console.log(e.target.value); // 입력한 값 출력
  createTags(e.target.value); // span 태그추가
  // 엔터 입력시
  if (e.key === 'Enter') {
    // setTimeout(함수, 시간); //시간 뒤에 1번 함수 실행
    setTimeout(() => {
      e.target.value = ''; // 클리어 (공백)
    }, 10);
    randomSelect(); // 랜덤 선택
  }
});

function createTags(input) {
  // 필터=>공백만 입력해서 값이 null일 경우 제거, 맵=>입력값이 있을때 공백제거
  const tags = input
    .split(',')
    .filter((tag) => tag.trim() !== '')
    .map((tag) => tag.trim());

  // console.log(tags);

  tagsEl.innerHTML = ''; //tagsEl안의 태그들을 전부 삭제
  tags.forEach((tag) => {
    const tagEl = document.createElement('span'); // JS로 span태그 만듬
    tagEl.classList.add('tag'); // 태그 클래스 추가
    tagEl.textContent = tag; // 글자 내용을 tag로 입력
    tagsEl.appendChild(tagEl); // tagEl을 tagsEl의 자식태그로 넣음
  });
}

function randomSelect() {
  const times = 30; //시간을 바꿀수 있도록
  // setInterval(함수, 시간) : 계속 반복 함수
  const interval = setInterval(() => {
    const randomTag = 랜덤태그선택();
    하이라이트(randomTag);

    setTimeout(() => {
      하이라이트제거(randomTag);
    }, 100); //0.1초 뒤에 하이라이트 제거
  }, 100); //0.1초마다 반복하는 함수

  setTimeout(() => {
    clearInterval(interval);

    setTimeout(() => {
      const randomTag = 랜덤태그선택();
      하이라이트(randomTag);
    }, 100); // 하나만 랜덤태그 선택되서 하이라이트됨.
  }, times * 100); // 3초 뒤에 interval 멈춤
}

function 랜덤태그선택() {
  const tags = document.querySelectorAll('.tag');
  // Math.floor : 반올림
  return tags[Math.floor(Math.random() * tags.length)];
}

function 하이라이트(tag) {
  tag.classList.add('highlight');
}

function 하이라이트제거(tag) {
  tag.classList.remove('highlight');
}
