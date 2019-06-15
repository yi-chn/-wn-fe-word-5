var n = prompt('输入数字n')
var number1 = 0;
var number2 = 1;
for(var i = 3;i <= n;i++){
    var temp = number2;
    number2 = number1 + number2;
    number1 = temp;
}
alert(number2);