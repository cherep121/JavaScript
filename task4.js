function createSumPromise(initialA, initialB) {
    return new Promise((resolve, reject) => {
        if (initialA === undefined || initialB === undefined || 
            typeof initialA !== 'number' || typeof initialB !== 'number') {
            reject(new Error('Аргументы должны быть числами и не должны быть undefined'));
            return;
        }
        
        let count = 0;
        let currentSum = initialA;
        const b = initialB;
        
        const intervalId = setInterval(() => {
            if (count >= 5) {
                clearInterval(intervalId);
                resolve(`Суммирование завершено. Итоговая сумма: ${currentSum}`);
                return;
            }
            
            if (count > 0) {
                currentSum += b;
            }
            
            count++;
            console.log(`Итерация ${count}: сумма = ${currentSum}`);
            
        }, 2000);
    });
}

console.log('Успешное выполнение');
createSumPromise(5, 3)
    .then(result => console.log(result))
    .catch(error => console.error('Ошибка:', error.message));

setTimeout(() => {
    console.log('\n!!!! Вариант с ошибкой (не число) !!!!');
    createSumPromise('5', 3)
        .then(result => console.log(result))
        .catch(error => console.error('Ошибка:', error.message));
}, 15000);

setTimeout(() => {
    console.log('\n!!!! Вариант с ошибкой (undefined) !!!!');
    createSumPromise(5, undefined)
        .then(result => console.log(result))
        .catch(error => console.error('Ошибка:', error.message));
}, 30000);