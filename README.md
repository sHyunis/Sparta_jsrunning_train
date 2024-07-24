# Sparta_jsrunning_train

달리기반 실습 과제입니다.  
1일차에 배운 내용들을 토대로 풀 수 있도록 구성되어 있습니다.

&nbsp;

## 1. 빈칸 채우기 문제

아래 내용에서 빈 칸에 들어갈 항목들을 채워주시고 왜 그렇게 생각했는지
본인의 생각을 간단하게 1줄 정도 같이 적어주세요.

```javascript
1. let uninitialized;
console.log(uninitialized); // 결과값 < undefined > // 아무것도 할당해주지 않았기 떄문에 undefined가 뜹니다.


2. < const > apple = "사과";
apple = "바나나"; // TypeError: Assignment to constant variable // var과 let은 재할당이 가능하지만 const는 재할당이 불가합니다.


3. let lotto = [3, 8, 13, 19, 21, 32];
console.log(lotto[3]); // 결과값 < 19 > // lotto[3] 은 배열에 4번째 위치한 Index의 값을 말합니다.


4.
let mySchedule = "";
console.log(mySchedule || false); // < false > // false는 결과값 false를 반환
console.log(!!mySchedule); // < false > // mySchedule은 빈문자열 빈문자열 False / !는 결과값의 반대를 뜻하는데 !가 2번이라 false

```

&nbsp;

## 2. 객체 선언해보기

지난 시간에 배웠던 객체(object)를 다시 복습해보며, 아래의 조건을 충족하는 객체를 직접 선언해보세요.

- 자기 자신을 소개하는 객체입니다.
- 이름, 나이, MBTI 세 가지 키와 값이 포함되어 있어야 합니다.
- 콘솔 창에 이름, 나이, MBTI가 나오도록 console.log() 를 찍어보세요.

예시

```javascript
const jungSoHyun = {
  // 조건을 충족하는 코드 작성
  name: "정소현",
  age: 25,
  MBTI: "ENTJ",
};

console.log(jungSoHyun.name);
console.log(jungSoHyun.age);
console.log(jungSoHyun.MBTI);
```

&nbsp;

## 3. 홀짝 판별기

지난 시간에 배웠던 연산자를 활용하여, 숫자를 입력하면 홀수인지 짝수인지 판별하는 함수를 만들어 보려고 합니다. 다음과 같은 결과값이 나올 수 있도록 코드를 작성해 주세요.

예시

```javascript
function solution(number) {
  // 코드를 작성해 주세요.
  return number % 2 === 0 ? "짝수" : "홀수";
}

console.log(함수명(10)); // 결과값 "짝수";
console.log(함수명(7)); // 결과값 "홀수";
```

// 2로 나누었을 떄 아무것도 남지 않으면 짝수, 남으면 홀수
&nbsp;

## 4. 계산기 문제

연산자와 함수, 조건문을 토대로 계산기 함수를 하나 만들어 보려고 합니다.
함수에 숫자 , 연산자 , 숫자 세 개의 매개변수를 넣었을 때 해당 연산자를 기준으로 연산을 해서 값을 반환하는 함수를 만들어주세요.

예시

```javascript
function calculator(num1, sign, num2) {
  // 입력받은 연산자를 판단하여 num1과 num2 를 처리하고 answer를 반환시켰습니다.
  let answer = 0;
  if (sign === "+") {
    answer = num1 + num2;
  } else if (sign === "-") {
    answer = num1 - num2;
  } else if (sign === "*") {
    answer = num1 * num2;
  } else if (sign === "/") {
    answer = num1 / num2;
  } else console.log("잘못 입력하셨습니다");

  return answer;
}
calculator(3, "+", 6); // 결과값 9
calculator(11, "-", 6); // 결과값 5
calculator(6, "*", 3); // 결과값 18
calculator(15, "/", 3); // 결과값 5
```

&nbsp;

## 5. 평균 점수 구하기 [선택 문제]

5번 문제는 필수 문제가 아닌, 4번까지 풀고 여유가 있을 때 풀어보는 선택 문제입니다.

&nbsp;

학교에서 시험을 보았는데 전산 문제로 한 문제의 답이 전부 오답처리가 된 바람에 학생들의 점수를 전부 3점씩 올려주어야 합니다.

scores에 있는 학생들의 점수를 반복문을 통해 3점씩 올리게 고쳐주시는데 4번 문제를 통해 만든 계산기 함수를 통해 더해주세요.

```javascript
const scores = [36, 62, 72, 55, 86, 95, 92, 48, 81];

function plusScore(numArray) {
  let scoreAnswer = [];
  for (i = 0; i < numArray.length; i++) {
    scoreAnswer.push(calculator(numArray[i], "+", 3));
  }
  return scoreAnswer;
  // 4번 문제의 계산기 함수를 활용한 코드를 작성해주세요.
}
plusScore(scores);
console.log(scores);
console.log(plusScore(scores));
// 기대값: [39, 65, 75, 58, 89, 98, 95, 51, 84]
```

// 배열에 있는 숫자들에 반복적으로 숫자를 더해줘야 해서 반복문을 썼습니다.
