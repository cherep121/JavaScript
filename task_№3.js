// №3 
console.log("**** №3 ****");
function computeF(x, functions, callback) {
    let result = 0;
    let index = 0;

    function next(value) {
        result += value;
        console.log(`f${index} дает значение ${value}, промежуточный результат ${result}`);
        if (index < functions.length) {
            functions[index++](x, next);
        } else {
            callback(result);
        }
    }

    next(0);
}

function f1(x, callback) {
    setTimeout(() => callback(x * x), Math.random() * 100);
}

function f2(x, callback) {
    setTimeout(() => callback(2 * x), Math.random() * 100);
}

function f3(x, callback) {
    setTimeout(() => callback(-2), Math.random() * 100);
}

function f4(x, callback) {
    setTimeout(() => callback(3), Math.random() * 100);
}

function f5(x, callback) {
    setTimeout(() => callback(x), Math.random() * 100);
}

function f6(x, callback) {
    setTimeout(() => callback(-x), Math.random() * 100);
}

console.log("n = 2:");
computeF(3, [f1, f2], (res) => console.log("Ответ:", res));

console.log("n = 4:");
computeF(3, [f1, f2, f3, f4], (res) => console.log("Ответ:", res));

console.log("n = 6:");
computeF(3, [f1, f2, f3, f4, f5, f6], (res) => console.log("Ответ:", res));