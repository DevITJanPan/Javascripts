let sum = 0;
let number;

while(true) {
  number = Number(prompt("Nhập vào một số nguyên dương: "));

  if (number < 0) {
    break;
  }

  sum += number;
}

console.log("Tổng các số đã nhập là:", sum);