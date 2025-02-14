#HTML

1. 컴포넌트가 시작되는 부모요소는 늘 하나다.
2. 클래스를 부모요소에게 준 다음에 시작한다.
3. 클래스를 마구잡이로 부여하지 않는다. 시맨틴 태그를 써서 해결
   #CSS
4. 클래스.클래스....: 여러가지 클래스가 한꺼번에 들어간 태그를 선택 -응용: #아이디#아이디...:여러가지 아이디가 한꺼번에 들어간 태그를 선택
5. 선행 선택자 + 마지막 선택자: 마지막 선택자가 내가 스타일링을 줄 태그임.
6. position:
   -relative: 부모 요소로 지정, 기준이 됨
   -absolute: 자식 요소로 지정, 기준을 따라감
   **주의사항**: top, left 또는 top, right 또는 bottom, left 또는 bottom right로만 작성하면 됨.
   -content:'';
   **가상요소만드는 친구**:absolute를 섞어서 사용하면 개꿀
   4.object-fit:
   -cover: 찌그러진 사진을 예쁘게 펴줌. 단점: 위치 조정은 안됨

#JS

1. document: DOM(Document Object Model): 웹 그 자체
2. document.querySelector: 추노, CSS작성 규칙을 따라서 잡아옴. -예시: const body = document.querySelector('body') -예시: const btn = document.querySelector('body.btn')
   **주의** 클래스명은 많은 곳에서 사용할 수 있기 때문에 btn은 복수가 될 수 도 있음.
3. document.createElement: 태그를 만들어줌 -예시: const button = document.createElement('button')
