function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms * 1000));
}

async function processCandidate(name, prepTime1, defenseTime1, prepTime2, defenseTime2) {
    // №1
    console.log(`${name} started the 1 task.`);
    await delay(prepTime1);
    console.log(`${name} moved on to the defense of the 1 task.`);
    await delay(defenseTime1);
    console.log(`${name} completed the 1 task.`);
    
    console.log(`${name} is resting.`);
    await delay(5);
    
    // №2
    console.log(`${name} started the 2 task.`);
    await delay(prepTime2);
    console.log(`${name} moved on to the defense of the 2 task.`);
    await delay(defenseTime2);
    console.log(`${name} completed the 2 task.`);
}

async function interviews(...candidates) {
    const promises = candidates.map(candidate => 
        processCandidate(candidate[0], candidate[1], candidate[2], candidate[3], candidate[4])
    );
    
    await Promise.all(promises);
}

const candidates = [
    ['Ivan', 5, 2, 7, 2],
    ['John', 3, 4, 5, 1],
    ['Sophia', 4, 2, 5, 1]
];

console.log('Начало собеседований:');
interviews(...candidates).then(() => {
    console.log('Все собеседования завершены!');
});