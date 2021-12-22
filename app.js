// """
// input = “0001101000110100011110110111001111100”
//
// Prefix Binary code: a code (eg. 101) cannot be prefix of another (no other code starts with 101)
//     ' ' 101
// 'e' 1100
// 'g' 00
// 'h' 1101
// 'o' 01
// 'p' 1110
// 'r' 1111
// 's' 100
//
// output = ‘go go gophers’
// """

const input = "0001101000110100011110110111001111100";
const dictionary = {
  101: " ",
  1100: "e",
  "00": "g",
  1101: "h",
  "01": "o",
  1110: "p",
  1111: "r",
  100: "s",
};
const expectedOutput = "go go gophers";
let currentSequence = "";
let result = "";
for (const char of input) {
  currentSequence += char;
  if (currentSequence.length > 1 && currentSequence in dictionary) {
    result += dictionary[currentSequence];
    currentSequence = "";
  }
}
console.log(result === expectedOutput);
