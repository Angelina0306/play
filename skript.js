a = 10;
alert(a);
a = 20;
alert(a);
a = "Год выпуска первого Iphone 2007";
alert(a);
a = "Брендан Эйх создатель Java Skrip";
alert(a);

let a = 10;
let b = 2;
alert(a + b);
alert(a - b);
alert(a / b);
alert(a * b);

let result = 2 ** 5;
alert(result);

let a = 9;
let b = 2;
console.log(a % b);
 
let age = prompt(
 "Сколько вам лет?", 18);
alert(age);

let user = {
  name: "Амина",
  age: 2,
  isAdmin: true,
};


console.log(`Привет, ${name}!`);


let num = 1;
num += 5;
num -=  3;
num *= 7;
num /= 3;
num++;
num--;
alert(num);

let password = "7580";
let result = prompt("Введите пароль", "");
if (result == password) alert("Пароль введён верно");
else alert("Пароль введен неправильно");

let d = 7 ;
let e = 111;

if (d > 100 || e > 100) {
  console.log("Верно");
} else {
  console.log("Неверно");
}

let a = "2";
let b = "3";
alert(Number(a) + Number(b));