// %표시 글자 , 벡그라운드 객체 상수로 저장
const loadText = document.querySelector('.loading-text');
const bg = document.querySelector('.bg');
// 로딩할때 숫자
let load = 0;

//setInterval(함수, 시간) : 시간만큼 반복해서 함수 실행
let interval = setInterval(blurring, 30); // 0.03초에 1번

function blurring() {
  load++;
  // console.log(load);
  if (load > 99) {
    //load가 100이면 clearInterval
    clearInterval(interval); //위의 반복 인터벌을 중지.
  }
  // 화면의 텍스트에 load' 값 출력
  // loadText.textContent = 문자열->변수 : 벡틱 문자열 `${변수}`+ 문자열
  loadText.textContent = `${load}%`;
  // 1. 블러필터를 사용해서 처음에 흐리게(30px) => 선명하게(0px) 만들기
  // 2. 글자를 갈수록 흐리게 opacity 1(선명) => 0 (안보이게)
  // 1과 2를 실행하는 함수 : https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
  loadText.style.opacity = scale(load, 0, 100, 1, 0);
  bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;
}

const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};
