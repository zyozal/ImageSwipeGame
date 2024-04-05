
  const headImages = [
    '../css/images/뽀로로 (1).jpg',
    '../css/images/루피 (1).jpg',
    '../css/images/에디 (1).jpg',
    '../css/images/패티 (1).jpg'
    ];
  const faceImages = [
    '../css/images/뽀로로 (2).jpg',
    '../css/images/루피 (2).jpg',
    '../css/images/에디 (2).jpg',
    '../css/images/패티 (2).jpg'
  ];
  const bodyImages = [
    '../css/images/뽀로로 (3).jpg',
    '../css/images/루피 (3).jpg',
    '../css/images/에디 (3).jpg',
    '../css/images/패티 (3).jpg'
  ];
  const footImages = [
    '../css/images/뽀로로 (4).jpg',
    '../css/images/루피 (4).jpg',
    '../css/images/에디 (4).jpg',
    '../css/images/패티 (4).jpg'
  ];

    
let currentIndex = 0; // 현재 이미지 위치

// 이전, 다음 버튼 클릭 이벤트
const [$prev1,$img1,$next1] = [...document.getElementById('slide1').children];
const [$prev2,$img2,$next2] = [...document.getElementById('slide2').children];
const [$prev3,$img3,$next3] = [...document.getElementById('slide3').children];
const [$prev4,$img4,$next4] = [...document.getElementById('slide4').children];
// const $prev = document.getElementById('slide1').children[0];
// console.log($next4);
// const $prev1 = document.getElementById('prev1');
// const $prev2 = document.getElementById('prev2');
// const $prev3 = document.getElementById('prev3');
// const $prev4 = document.getElementById('prev4');
// const $next1 = document.getElementById('next1');
// const $next2 = document.getElementById('next2');
// const $next3 = document.getElementById('next3');
// const $next4 = document.getElementById('next4');


$next1.addEventListener('click', () => {
  // 현재 내가 보고 있는 이미지가 배열의 0번 인덱스라면
  // 다음버튼을 누르면 1번을 보여줘야한다.
  currentIndex++;
  if (currentIndex >= headImages.length) currentIndex = 0;
  $img1.setAttribute('src', headImages[currentIndex]);
});

$prev1.addEventListener('click', () => {
  // 현재 내가 보고 있는 이미지가 배열의 0번 인덱스라면
  // 다음버튼을 누르면 1번을 보여줘야한다.
  currentIndex--;
  if (currentIndex < 0) currentIndex = headImages.length -1;
  $img1.setAttribute('src', headImages[currentIndex]);
});

$next2.addEventListener('click', () => {
  // 현재 내가 보고 있는 이미지가 배열의 0번 인덱스라면
  // 다음버튼을 누르면 1번을 보여줘야한다.
  currentIndex++;
  if (currentIndex >= faceImages.length) currentIndex = 0;
  $img2.setAttribute('src', faceImages[currentIndex]);
});

$prev2.addEventListener('click', () => {
  // 현재 내가 보고 있는 이미지가 배열의 0번 인덱스라면
  // 다음버튼을 누르면 1번을 보여줘야한다.
  currentIndex--;
  if (currentIndex < 0) currentIndex = faceImages.length -1;
  $img2.setAttribute('src', faceImages[currentIndex]);
});

$next3.addEventListener('click', () => {
  // 현재 내가 보고 있는 이미지가 배열의 0번 인덱스라면
  // 다음버튼을 누르면 1번을 보여줘야한다.
  currentIndex++;
  if (currentIndex >= bodyImages.length) currentIndex = 0;
  $img3.setAttribute('src', bodyImages[currentIndex]);
});

$prev3.addEventListener('click', () => {
  // 현재 내가 보고 있는 이미지가 배열의 0번 인덱스라면
  // 다음버튼을 누르면 1번을 보여줘야한다.
  currentIndex--;
  if (currentIndex < 0) currentIndex = bodyImages.length -1;
  $img3.setAttribute('src', bodyImages[currentIndex]);
});

$next4.addEventListener('click', () => {
  // 현재 내가 보고 있는 이미지가 배열의 0번 인덱스라면
  // 다음버튼을 누르면 1번을 보여줘야한다.
  currentIndex++;
  if (currentIndex >= footImages.length) currentIndex = 0;
  $img4.setAttribute('src', footImages[currentIndex]);
});

$prev4.addEventListener('click', () => {
  // 현재 내가 보고 있는 이미지가 배열의 0번 인덱스라면
  // 다음버튼을 누르면 1번을 보여줘야한다.
  currentIndex--;
  if (currentIndex < 0) currentIndex = footImages.length -1;
  $img4.setAttribute('src', footImages[currentIndex]);
});