//라벨들을 선언
const labels = document.querySelectorAll('.form-control label');

labels.forEach((label) => {
  label.innerHTML = label.textContent //"이메일"
    .split('') // ["이" , "메" , "일"]
    .map((c, i) => `<span style="transition-delay: ${i * 50}ms">${c}</span>`)
    .join(''); //각각의 span태그를 다 합침
});
