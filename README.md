# wewrite
생각많은 새벽 생각을 글로 옮겨적을수 있는 웹사이트를 만들어 보았습니다.
사용기술 html,css,js,jquery,firebase
호스팅사이트: https://wewrite-92f77.web.app/index.html
테스트용 id,pw: test123@naver.com
              Test123

1.사이트의 메인페이지입니다.
  navbar를 반응형웹으로 만들었고,localstorge를 이용하여 다크모드를 적용하였습니다.
  또한 scrollTop버튼을 만들어 navbar로 빠른이동을 하게 만들었습니다.
  forEach문을 활용하여 반복문을 구현하였습니다.
![반응형,다크모드,스크롤업](https://user-images.githubusercontent.com/76995216/191616713-7dda589a-80b4-4eaa-be20-1d03ebb71148.gif)  
          
2.작성자가 원하는 느낌으로 글 쓸 수 있게 폰트사이즈,폰트색상,폰트종류를 다양하게 만들었습니다. 
  직접원하는 이미지를 선택 할 수 있게 만들었으며, 선택한이미지를 미리 볼 수 있게 만들었습니다.  
![글쓰기](https://user-images.githubusercontent.com/76995216/191616278-b78e3632-8af1-4480-9a02-2921371e95a8.gif)

3.업로드와 마찬가지이며 제목과 내용은 수정전의 내용을 포함하도록 했습니다.
![수정하기](https://user-images.githubusercontent.com/76995216/191616730-00dc3968-c90a-4dc8-b9ed-89d47d75e78f.gif)

4.내가 쓴 글만 볼 수 있게 만들었습니다.
  firebase where문을 사용해 로그인된 유저의 uid의 글만 가져오도록 요청하였습니다. 
![내글보기,반응형](https://user-images.githubusercontent.com/76995216/191616702-1660062b-fd82-4de7-bd6f-530dfdd6f819.gif)

5.삭제하기 기능을 구현했습니다. if문을 활용하여 로그인된uid와 글작성자의uid를 비교해 같다면 수정삭제버튼을 보이게 만들었습니다. 
![삭제하기](https://user-images.githubusercontent.com/76995216/191616478-058492de-9217-43fa-b188-2c547c27431c.gif)

6.댓글 기능을 구현했습니다.
![댓글달기](https://user-images.githubusercontent.com/76995216/191617005-a4f64cf2-6978-435d-b716-3ff7e6e5d0a6.gif)

7.회원가입,로그인,로그아웃기능 입니다.
  if문을 활용하여 이메일 정규식을 사용하였습니다, 비밀번호는 대문자가 포함되지않으면 가입되지않게하였습니다. 
  공백검사를 구현하였습니다.
![회원가입](https://user-images.githubusercontent.com/76995216/191616505-9ed4b717-5b1f-4c24-926b-c8d21f117da2.gif)
![로그인](https://user-images.githubusercontent.com/76995216/191616460-9f8fa228-802b-44cf-8c55-d8b63ba0658e.gif)
![로그아웃](https://user-images.githubusercontent.com/76995216/191616449-8a41bb21-4038-4ad9-99ab-bf7e50d36101.gif)







