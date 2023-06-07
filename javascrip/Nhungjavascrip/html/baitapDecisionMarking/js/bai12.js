
var n = parseInt(prompt("Nhập vào số nguyên n:"));
var reverse = 0;

while (n !== 0) {
  var number = n % 10; // Lấy chữ số cuối cùng
  reverse = reverse * 10 + number; // Đảo ngược số bằng cách nhân 10 và cộng chữ số cuối cùng
  n = Math.floor(n / 10); // Loại bỏ chữ số cuối cùng
}

console.log("Số đảo ngược của", n, "là:", reverse);