async function wait() {
    await new Promise(resolve => setTimeout(resolve, 1000));
    return 10;
}

function f() {
    wait().then(result => {
        console.log('Результат из async функции:', result);
    });
}

console.log('Вызов функции f():');
f();
console.log('Функция f завершилась, но результат придет через секунду');

function f2() {
    return wait();
}

f2().then(result => {
    console.log('Результат из f2:', result);
});