// №1
console.log("**** №1 ****");
let a1 = 20;
let b1 = "Hello, World!";
let c1 = true;
let d1 = null;
let e1 = undefined;

console.log("Тип a1:", typeof a1);
console.log("Тип b1:", typeof b1);
console.log("Тип c1:", typeof c1);
console.log("Тип d1:", typeof d1);
console.log("Тип e1:", typeof e1);

// №2
console.log("\n**** №2 ****");
let a2 = 15;
let b2 = 10;

console.log("a2 равна b2:", a2 === b2);
console.log("a2 меньше b2:", a2 < b2);
console.log("a2 меньше или равна b2:", a2 <= b2);
console.log("a2 больше b2:", a2 > b2);

// №3
console.log("\n**** №3 ****");
let a = false;
let b = null;
let c = undefined;

console.log("a =", a);
console.log("b =", b);
console.log("c =", c);

// №4
console.log("\n**** №4 ****");

console.log("1) \"1\" + 2 + 3 =", "1" + 2 + 3); // если одо значение строка второй тоже будет строкой 1 строка, то 2 тоже станет срокой также и с 3 
console.log("2) 1 + 2 + \"3\" =", 1 + 2 + "3"); // 1 + 2 = 3 обычное вычисление, результата становится строкой после прибавление троки 
console.log("3) \"1\" - 2 =", "1" - 2); // - превращает строку в число 
console.log("4) \"1\" + \"-2\" =", "1" + "-2"); // склейка строк
console.log("5) \"1\" + \"1\" - \"1\" =", "1" + "1" - "1"); // 1 + 1 склейка строк и вычитание 
console.log("6) \"foo\" + \"-\" + \"bar\" =", "foo" + "-" + "bar"); // конкатенация
console.log("7) 0 == \"0\" =", 0 == "0"); // == не строгое неравенство преводит в типы 
console.log("8) 0.5 + 0.1 == 0.6 =", 0.5 + 0.1 == 0.6); // погрешности с плавающей точкой  
console.log("9) 0.1 + 0.2 == 0.3 =", 0.1 + 0.2 == 0.3); // погрешности с плавающей точкой 
console.log("10) true + true + true == 3 =", true + true + true == 3); // true = 1 
console.log("11) true == 1 =", true == 1); // true = 1 
console.log("12) true === 1 =", true === 1); // разные типы 
console.log("13) 1 < 2 < 3 =", 1 < 2 < 3); // 1<2 = true, true < 3 = true 
console.log("14) 3 > 2 > 1 =", 3 > 2 > 1); // 3>2 = true, true >1 = false
console.log("15) 9007199254740991 + 1 == 9007199254740991 + 2 =", 
            9007199254740991 + 1 == 9007199254740991 + 2); // потеря точности 
console.log("16) Math.sqrt(-1) == Math.sqrt(-1) =", Math.sqrt(-1) == Math.sqrt(-1)); // Math.sqrt(-1) возврашщает NaN, и при этом NaN не равен NaN 

// №5
console.log("\n**** №5 ****");

let str1 = 'Кто ';
let str2 = 'ты ';
let str3 = 'такой?';
let concatenation = str1 + str2 + str3;

console.log(concatenation);

// №6
console.log("\n**** №6 ****");

let str = "20";
let a6 = 5;

console.log("str + a =", str + a6); // тоже самое как в №4.1
console.log("str - a =", str - a6); // тоже самое как в №4.3
console.log("str * \"2\" =", str * "2"); // тоже как с оператором - 
console.log("str / 2 =", str / 2); // тоже как с оператором - 

// №7
console.log("\n**** №7 ****");
let a7 = "12";
let b7 = "7.15";
let numA = Number(a7);
let numB = parseFloat(b7);
let remainder = numA % numB;
let result7 = Math.round(remainder);
console.log("Остаток от деления:", result7);

// №8
console.log("\n**** №8 ****");
let x = 1;
let numerator = x ** 2 - 7 * x + 10;
let denominator = x ** 2 - 8 * x + 12;
let result8 = numerator / denominator;
console.log(`x = ${x}, результат = ${result8}`);

// №9
console.log("\n**** №9 ****");
let userEmail = "user@yandex.ru";
if (!userEmail.includes('@')) {
    console.log(`Email "${userEmail}" не содержит символ @!`);
} else {
    console.log(`mail "${userEmail}" содержит символ @`);
}

// №2.1
console.log("\n**** №2.1 ****");

let age = 25;
console.log(`Возраст: ${age}`);

if (age >= 1 && age <= 17) {
    console.log("Для детей");
} else if (age >= 18 && age <= 30) {
    console.log("Для молодежи");
} else {
    console.log("Для всех возрастов");
}

// №2.2
console.log("\n**** №2.1 ****");

let a22 = 15;
let b22 = 10;
let max2;

max2 = a22 > b22 ? a22 : b22;
console.log(`a = ${a22}, b = ${b22}`);
console.log(`max = ${max2}`);

// №2.3
console.log("\n**** №2.3 ****");

let crows = 7;

switch (crows) {
    case 1:
        console.log("На ветке сидит 1 ворона");
        break;
    case 2:
    case 3:
    case 4:
        console.log(`На ветке сидит ${crows} вороны`);
        break;
    case 5:
    case 6:
    case 7:
    case 8:
    case 9:
    case 10:
        console.log(`На ветке сидит ${crows} ворон`);
        break;
    default:
        console.log("Число должно быть от 1 до 10");
}

// №2.4
console.log("\n**** №2.4 ****");

// while
console.log("while:");
let w = 1;
while (w <= 50) {
    console.log(w);
    w += 2;
}

// for
console.log("\nfor:");
for (let f = 1; f <= 50; f += 2) {
    console.log(f);
}

// №2.5
console.log("\n**** №2.5 ****");

let sum = 0;

for (let i = 1; i <= 15; i++) {
    if (i === 5 || i === 7) {
        continue; 
    }
    sum += i;
}

console.log(`Сумма чисел от 1 до 15, исключая 5 и 7: ${sum}`);

// №2.6
console.log("\n**** №2.6 ****");

let x6 = 2;
let y6 = 5;

let result6 = 1;
let counter6 = 0;

while (counter6 < y6) {
    result6 *= x6;
    counter6++;
}

console.log(`${x6}^${y6} = ${result6}`); // 2^5 = 32