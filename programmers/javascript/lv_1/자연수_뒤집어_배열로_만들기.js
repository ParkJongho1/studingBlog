// Programmers
// 자연수 n을 뒤집어 각 자리 숫자를 원소로 가지는 배열 형태로 리턴해주세요. 예를들어서 n이 12345이면 [5,4,3,2,1]을 리턴합니다.
// One a day! 0단계부터 하루에 하나이상!!!

function solution(n) {
   return n
      .toString()
      .split("")
      .reverse()
      .map((o) => (o = parseInt(o)));
}
