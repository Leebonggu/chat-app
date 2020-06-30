# genius

Application development with Team Genius

## 성공

일단 대화는 됨

io(global) vs socket(callback)

io.emit vs socket.emit

socket.on

## 개선

쌍방통신 => username // roomname
socket.join('') ????????????

렉걸림
유저없음
채팅 칠때마다...

/chat#covJ5jy6EkKxNqM4AABV
/chat#oSn6BcsWqv9OUBP2AABX
/chat#4KGsbLKzm-7AcmggAABT
/chat#z_Ywgi-U6bZ_kCkfAABW
/chat#8OzLWl4xmVk-FE2yAABZ
/chat#5X06Glv34ZnYJRgrAABY
/chat#Vj_glxn9P3mXUMFjAABa
/chat#EcK7Uf_V3m1vK4qTAABb

계속 뜸

클라이언트 =>

## /P1

Scenario: admin user with username 'admin'

Given that admin with username 'admin' enters the room
And admin is alone
Then chat will show previous logs of himself
And admin will be able to chat to himself

| Scenario: username

Given that user enteres a name in a alphabet only input
Then name will be the username in the chat room

| Scenario: user enter chat when admin is available

Given that a user create a username
And there are no user waiting
And admin is waiting
Then the user can enter the chat

| Scenario: user enter chat when admin is not available

Given that a user create a username
And there are no user waiting
And admin is not available
Then there we be a message saying that admin is currently unavailable

| Scenario: user waits for chat

Given that a user create a username
And there are user waiting
Then the user will be last of the current queue
And there will be an estimated waiting time
And there will be an waiting number based on a queue
Given that user is waiting for chat
When a user in chat leaves the room
And admin stays in the room
And the user is first on the queue
Then user will enter the room

| Scenario: user chats

Given that a user enter chat
Then previous logs together will appear
And the user will be able to continue to chat with admin

| Scenario: admin leaves during chat

Given that a user is chatting with admin
When admin leaves the chat
Then chat closes
Then there we be a message saying that admin is currently unavailable
Given that a user waiting
When admin leaves the chat
Then there we be a message saying that admin is currently unavailable

## 시도헤볼 것

=> 클래스형
=> disconnect ?

## genius

### A가 방을 만들었을 때

- 채팅가능
- A가 나갔다 들어왔을 경우? 채팅 내용이 있어야함

### Admin이 들어왔을 때

- 채팅 내용이 있어야함(있을 예정)
- (굳이 Admin이라는 이름이 필요한가?)

### Data

- object
- new Map()

### Roomname

- 드롭다운
  - 보고서roomname
  - 강의
  - 사나리오
=> 선택

?room=보고서1, 2, 3, 4 ,,,

### 더 생각할 것들

- boradcast: like 공지사항
- 시간, 접근: 춘국의 입장 / 사용자의 입장
- 방은 최대 몇개까지 만들어져야 할까?
- Queue 개념에 대한 고민

{
  user1: {
    room: user1,
    contents: [
      {username: ~, text: ~},
      {username: ~, text: ~},
      {username: ~, text: ~},
      {admin: ~, text: ~},
    ],
  }
  user2: {
    room: user2,
    contents: [
      {username: ~, text: ~},
      {username: ~, text: ~},
      {username: ~, text: ~},
      {admin: ~, text: ~},
    ],
  }
}

---

{
  roomname1: {
    user: [user1, admin],
    contents: [
        {username: ~, text: ~},
        {username: ~, text: ~},
    ]
  },
  roomname2: {
    user: [user2, admin],
    contents: [
        {username: ~, text: ~},
        {username: ~, text: ~},
    ]
  }
}

### 처음들어왔을때

user1: {
  room: user1,
  contents: [
  ],
}

### Queue

- 마지막 마세지 도착 시간 추가: 방 정렬
- 질문이 해결된 상태인가? => 리스트를 봤을때 파악이 가능해야함

- 그래서 답변이 해결된 경우는 어떻게 처리해야하나?
- 마지막 대화를 확인하고, 마지막 답변이 admin이라면? => 답변이 완료된게 아닌지

### More

회원가입 필요없음 -> 나가면 기록 삭제

user 나가면 => rooms있던 방 제거
enterance: true => false

1. 입장 / 퇴장 [0] (admin)
2. 시간으로 Queue 시도 [0]
3. 완료버튼 [0] => 미완료/완료 (admin)

--------------------------------------

4. 질문채택? => 대화내용 전체 저장 => 인공지능

Admin: 방안에서 완료버튼 -> 답변완료
  만족하십니까?
    답변완료 기준

춘국: 좋은 질문 선택과 질문의 저장 -> 질문저장

나가기 (user, admin 구분필요) / 답변완료 / 질문저장

신경쓰기: 경우의 수 고려
  예를들어:
    user가 나가버린다면?
    한 유저가 여러번 질문한다면?
    