var template = `
<body class='wrapper'>
<nav class='navbar' id='navbar' >
    <div>
      <a  class="navbar-title" href='index.html'>너와 나의 2시</a>
    </div>
    <ul class='navbar-menu'>
      <li>
        <a  class='navbar-write' href='upload.html'>글쓰기</a>
      </li>
      <li>
        <a class='navbar-mywrite' href='my.html'>내 글 보기</a>
      </li>
    </ul>

 <a href="#" class="navbar-toggleBtn">
 <i class="fas fa-bars"></i></a>

    <ul class="navbar-sub-menu">
      <li>     
        <button id="darkModeToggle" class=" btn-mode " ><img src='https://github.com/mdab4793/wewrite/blob/main/%E1%84%92%E1%85%A2%E1%84%83%E1%85%A1%E1%86%AF.png?raw=true'/></button>
      </li>

      <li>
        <span class="userName" > </span>
        <a class='navbar-login' href='login.html'>login</a>
      </li>
      <li>
       <a class='navbar-logout' nav-login href='logout.html'>logout</a>
      </li>
 </ul>
</nav>
</body>`;
$('.wrapper').append(template);
//https://www.youtube.com/watch?v=X91jsJyZofw 코딩엘리 반응형헤더 참조
const toggleBtn = document.querySelector('.navbar-toggleBtn');
const menu = document.querySelector('.navbar-menu');
const sub = document.querySelector('.navbar-sub-menu');

toggleBtn.addEventListener('click', function () {
  menu.classList.toggle('active');
  sub.classList.toggle('active');
});

//유저의 로그인상태확인
firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    $('.navbar-login').css('display', 'none');
    $('.navbar-logout').css('display', 'block');
    $('.userName').html(user.displayName); //navbar에 유저이름 나타내기
    $('.navbar-write').css('display', 'block');
    $('.navbar-mywrite').css('display', 'block');
  }
});

//https://onlydev.tistory.com/88 블로그참조
// 로컬스토리지 데이터 읽기(darkMode keyName 읽기)
let darkMode = localStorage.getItem('darkMode');

const darkModeToggle = document.querySelector('#darkModeToggle');
const enableDarkMode = () => {
  // body 태그에 다크모드 클래스 추가
  document.body.classList.add('dark-mode');
  // 로컬스토리지에 다크모드 키-값 생성
  localStorage.setItem('darkMode', 'enabled');
};

const disableDarkMode = () => {
  // body 태그에 다크모드 클래스 제거
  document.body.classList.remove('dark-mode');
  // 로컬스토리지에 다크모드 키의 값을 null로 업데이트
  localStorage.setItem('darkMode', null);
};

if (darkMode === 'enabled') enableDarkMode();

darkModeToggle.addEventListener('click', () => {
  // 클릭 시마다 초기화
  darkMode = localStorage.getItem('darkMode');

  // 만약 다크모드가 활성화 되어 있지 않다면
  if (darkMode !== 'enabled') {
    // 다크모드 활성화 함수 호출
    enableDarkMode();
    darkModeToggle.innerHTML = '<img src=https://github.com/mdab4793/wewrite/blob/main/%E1%84%83%E1%85%A1%E1%84%8F%E1%85%B3%E1%84%86%E1%85%A9%E1%84%83%E1%85%B3%E1%84%92%E1%85%A2.png?raw=true/>';
  } else {
    // 그렇지 않다면(활성화 되어 있다면) 비활성화 함수 호출
    disableDarkMode();
    darkModeToggle.innerHTML =
      '<img src=https://github.com/mdab4793/wewrite/blob/main/%E1%84%83%E1%85%A1%E1%84%8F%E1%85%B3%E1%84%86%E1%85%A9%E1%84%83%E1%85%B3%E1%84%83%E1%85%A1%E1%86%AF.png?raw=true/>';
  }
});

//navbar 배경 다크모드변경(초승달,반달)
let darkNav = localStorage.getItem('darkNav');

const enableDarkNav = () => {
  document.querySelector('.navbar').classList.add('navbar-dark');
  // body 태그에 다크모드 클래스 추가
  // document.body.classList.add('navbar-dark');
  // 로컬스토리지에 다크모드 키-값 생성
  localStorage.setItem('darkNav', 'enabled');
};

const disableDarkNav = () => {
  // body 태그에 다크모드 클래스 제거
  document.querySelector('.navbar').classList.remove('navbar-dark');
  // 로컬스토리지에 다크모드 키의 값을 null로 업데이트
  localStorage.setItem('darkNav', null);
};

if (darkNav === 'enabled') enableDarkNav();

darkModeToggle.addEventListener('click', () => {
  // 클릭 시마다 초기화
  darkNav = localStorage.getItem('darkNav');

  // 만약 다크모드가 활성화 되어 있지 않다면
  if (darkNav !== 'enabled') {
    // 다크모드 활성화 함수 호출
    enableDarkNav();
  } else {
    // 그렇지 않다면(활성화 되어 있다면) 비활성화 함수 호출
    disableDarkNav();
  }
});
