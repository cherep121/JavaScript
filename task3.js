function f1(x) {
    return new Promise(resolve => {
        setTimeout(() => resolve(x * x), Math.random() * 100);
    });
}

function f2(x) {
    return new Promise(resolve => {
        setTimeout(() => resolve(2 * x), Math.random() * 100);
    });
}

function f3(x) {
    return new Promise(resolve => {
        setTimeout(() => resolve(-2), Math.random() * 100);
    });
}

function f4(x) {
    return new Promise(resolve => {
        setTimeout(() => resolve(3), Math.random() * 100);
    });
}

function f5(x) {
    return new Promise(resolve => {
        setTimeout(() => resolve(x), Math.random() * 100);
    });
}

function f6(x) {
    return new Promise(resolve => {
        setTimeout(() => resolve(-x), Math.random() * 100);
    });
}

function computeF(x, functions) {
    let result = 0;
    let index = 0;
    
    function processNext() {
        if (index < functions.length) {
            return functions[index](x)
                .then(value => {
                    result += value;
                    console.log(`f${index + 1} дает значение ${value}, промежуточный результат ${result}`);
                    index++;
                    return processNext();
                });
        } else {
            return Promise.resolve(result);
        }
    }
    
    return processNext();
}

console.log("n = 2:");
computeF(3, [f1, f2]).then(res => console.log("Ответ:", res));

setTimeout(() => {
    console.log("\nn = 4:");
    computeF(3, [f1, f2, f3, f4]).then(res => console.log("Ответ:", res));
}, 1000);

setTimeout(() => {
    console.log("\nn = 6:");
    computeF(3, [f1, f2, f3, f4, f5, f6]).then(res => console.log("Ответ:", res));
}, 2000);