// 인기도순 영화 정보 주소
const API_URL =
  'https://api.themoviedb.org/3/discover/movie?api_key=e36d520a271fd7ce5f2d0714fa2ffe1b&language=ko&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate';
// 포스터 이미지 앞의 주소
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280';

// 영화 검색
const SEARCH_API =
  'https://api.themoviedb.org/3/search/movie?api_key=e36d520a271fd7ce5f2d0714fa2ffe1b&language=ko&query=';

// 태그 객체 생성
const main = document.getElementById('main'); // 영화가 들어가는 부분
const form = document.getElementById('form');
const search = document.getElementById('search');

getMovies(API_URL);

// 영화 정보 가져오기 // 함수에 async 써야 await 사용 가능
async function getMovies(url) {
  // await : 다 받을때까지 대기
  const res = await fetch(url); //fetch : url 주소에서 제공하는 정보를 전송받음
  const data = await res.json(); //데이터 문자열을 제이슨으로 변환해서 data로 저장

  영화보여주기(data.results); //필요한 영화 정보만 배열로 출력
}

// 영화 정보를 화면에 표시
function 영화보여주기(movies) {
  main.innerHTML = ''; //처음에 비우기

  movies.forEach((movie) => {
    const title = movie.title;
    const poster_path = movie.poster_path;
    const vote_average = movie.vote_average;
    const overview = movie.overview;

    const moveEl = document.createElement('div'); //div 태그 생성
    moveEl.classList.add('movie');

    moveEl.innerHTML = `
    <img 
      src="${IMG_PATH + poster_path}" 
      alt="${title}" 
    />
    <div class="movie-info">
      <h3>${title}</h3>
      <span class="${평점별색상선택(vote_average)}">${vote_average}</span>
    </div>
    <div class="overview">
       <h3>상세보기</h3>
       ${overview}
    </div>
    `;
    main.appendChild(moveEl);
  });
}

function 평점별색상선택(vote_average) {
  if (vote_average >= 8) {
    return 'green';
  } else if (vote_average >= 6) {
    return 'orange';
  } else {
    return 'red';
  }
}

// 검색창으로 검색했을때(이벤트)
form.addEventListener('submit', (e) => {
  //원래 form submit 이벤트는 서버로 입력 데이터를 보내는데 그 이벤트는 제거
  e.preventDefault();
  // 우리가 원하는 이벤트 실행
  const searchTerm = search.value;
  // console.log(searchTerm); //test
  // searchTerm에 아무 내용이 없으면 null값이고 false임
  if (searchTerm && searchTerm !== '') {
    // 입력 내용이 공백이 아닐 경우 처리
    getMovies(SEARCH_API + searchTerm);
    search.value = '';
  } else {
    // 입력이 잘못됐을때
    window.location.reload(); // 새로고침
  }
});
