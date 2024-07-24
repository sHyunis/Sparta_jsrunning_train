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

//-----------------------
const scores = [36, 62, 72, 55, 86, 95, 92, 48, 81];

function plusScore(numArray) {
  let scoreAnswer = [];
  for (i = 0; i < numArray.length; i++) {
    scoreAnswer.push(calculator(numArray[i], "+", 3));
  }
  return scoreAnswer;
  // 4번 문제의 계산기 함수를 활용한 코드를 작성해주세요.
}

console.log(plusScore(scores));

// 기대값: [39, 65, 75, 58, 89, 98, 95, 51, 84]

// function plusScore(scores){scores.map(calculator(scores,"+",3))}
