function callback() {
    console.log('It is done!');
}

// №2
async function runTasksWithAsync() {
    console.log('=== Задание 2 через async/await (последовательно) ===');
    console.log('start');
    
    await readConfigAsync('myConfig');
    await doQueryAsync('select * from cities');
    await httpGetAsync('http://google.com');
    await readFileAsync('README.md');
    
    callback();
    console.log('end');
}

function readConfigAsync(name) {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log('(1) config from ' + name + ' loaded');
            resolve();
        }, Math.floor(Math.random() * 1000));
    });
}

function doQueryAsync(statement) {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log('(2) SQL query executed: ' + statement);
            resolve();
        }, Math.floor(Math.random() * 1000));
    });
}

function httpGetAsync(url) {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log('(3) Page retrieved: ' + url);
            resolve();
        }, Math.floor(Math.random() * 1000));
    });
}

function readFileAsync(path) {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log('(4) Readme file from ' + path + ' loaded');
            resolve();
        }, Math.floor(Math.random() * 1000));
    });
}

// №3
async function computeFAsync(x, functions) {
    let result = 0;
    
    for (let i = 0; i < functions.length; i++) {
        const value = await functions[i](x);
        result += value;
        console.log(`f${i + 1} дает значение ${value}, промежуточный результат ${result}`);
    }
    
    return result;
}

function f1Async(x) {
    return new Promise(resolve => {
        setTimeout(() => resolve(x * x), Math.random() * 100);
    });
}

function f2Async(x) {
    return new Promise(resolve => {
        setTimeout(() => resolve(2 * x), Math.random() * 100);
    });
}

function f3Async(x) {
    return new Promise(resolve => {
        setTimeout(() => resolve(-2), Math.random() * 100);
    });
}

function f4Async(x) {
    return new Promise(resolve => {
        setTimeout(() => resolve(3), Math.random() * 100);
    });
}

function f5Async(x) {
    return new Promise(resolve => {
        setTimeout(() => resolve(x), Math.random() * 100);
    });
}

function f6Async(x) {
    return new Promise(resolve => {
        setTimeout(() => resolve(-x), Math.random() * 100);
    });
}

// №4
async function sumWithAsync(initialA, initialB) {
    if (initialA === undefined || initialB === undefined || 
        typeof initialA !== 'number' || typeof initialB !== 'number') {
        throw new Error('Аргументы должны быть числами и не должны быть undefined');
    }
    
    let count = 0;
    let currentSum = initialA;
    const b = initialB;
    
    while (count < 5) {
        if (count > 0) {
            currentSum += b;
        }
        
        count++;
        console.log(`Итерация ${count}: сумма = ${currentSum}`);

        await new Promise(resolve => setTimeout(resolve, 2000));
    }
    
    return `Суммирование завершено. Итоговая сумма: ${currentSum}`;
}

async function demonstrateAll() {
    // №2
    await runTasksWithAsync();
    
    // №3
    console.log('\n=== Задание 3 через async/await ===');
    console.log("n = 2:");
    let res = await computeFAsync(3, [f1Async, f2Async]);
    console.log("Ответ:", res);
    
    console.log("\nn = 4:");
    res = await computeFAsync(3, [f1Async, f2Async, f3Async, f4Async]);
    console.log("Ответ:", res);
    
    console.log("\nn = 6:");
    res = await computeFAsync(3, [f1Async, f2Async, f3Async, f4Async, f5Async, f6Async]);
    console.log("Ответ:", res);
    
    // №4
    console.log('\n=== Задание 4 через async/await (успешный) ===');
    try {
        const result = await sumWithAsync(5, 3);
        console.log(result);
    } catch (error) {
        console.error('Ошибка:', error.message);
    }

    console.log('\n=== Задание 4 через async/await (с ошибкой) ===');
    try {
        const result = await sumWithAsync('5', 3);
        console.log(result);
    } catch (error) {
        console.error('Ошибка:', error.message);
    }
}

demonstrateAll().catch(error => {
    console.error('Ошибка в демонстрации:', error);
});