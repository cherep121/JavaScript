let promise = new Promise(function(resolve, reject) {
    resolve(1);
    setTimeout(() => resolve(2), 1000);
});

promise.then(console.log);

// Выводится: 1
// Промис может быть разрешен (resolve) только один раз. 
// Первый вызов resolve(1) устанавливает значение промиса, 
// а второй вызов resolve(2) игнорируется, так как промис уже в состоянии fulfilled.