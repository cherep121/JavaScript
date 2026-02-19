// ФУНКЦИИ
console.log("\nФУНКЦИИ\n");
// №1:
console.log("**** №1 ****");
console.log("Способ 1: ");
function subtractAndShow(a, b) {
    const result = a - b;
    console.log(`Разность чисел ${a} и ${b} равна ${result}`);
}
subtractAndShow(10, 5);

console.log("Способ 2: ");
function subtract(a, b) {
    return a - b;
}

const result = subtract(15, 7);
console.log(`Результат вычитания: ${result}`);

// №2:
console.log("\n**** №2 ****");
function greetByAge(age) {
    if (age < 18) {
        console.log("Привет, малыш!");
    } else {
        console.log("Здравствуйте, юноша!");
    }
}
greetByAge(15);
greetByAge(20);

// №3:
console.log("\n**** №3 ****");
function findMax(a, b, c) {
    let max = a;
    if (b > max) max = b;
    if (c > max) max = c;
    return max;
}

console.log(`Наибольшее из чисел (5, 12, 7): ${findMax(5, 12, 7)}`);
console.log(`Наибольшее из чисел (25, 18, 31): ${findMax(25, 18, 31)}`);
console.log(`Наибольшее из чисел (10, 10, 10): ${findMax(10, 10, 10)}`);

// №4:
console.log("\n**** №4 ****");
console.log("Код выведет:");
console.log("Локальная переменная");
console.log("Глобальная переменная");
console.log("Объяснение:");
console.log("сначала var это глоб после захода в функцию и вызова функции после нее var = лок");
console.log("после функция закрывается и локалбная переменая var уничтожается, и после функции выводится глобальная var");

// №5:
console.log("\n**** №5 ****");
function calculateU(x, y, z) {
    const maxXY = Math.max(x, y);
    const maxSumZ = Math.max(x + y, z);
    const denominator = Math.pow(Math.max(0.5, x + z), 2);
    const u = (maxXY + maxSumZ) / denominator;
    return u;
}

console.log(`x=1, y=2, z=3: u = ${calculateU(1, 2, 3)}`);
console.log(`x=0, y=0, z=0: u = ${calculateU(0, 0, 0)}`);
console.log(`x=-1, y=2, z=-3: u = ${calculateU(-1, 2, -3)}`);
console.log(`x=0.5, y=1.5, z=2: u = ${calculateU(0.5, 1.5, 2)}`);

// №6:
console.log("\n**** №6 ****");
function polygonPerimeter(coordinates) {
    const n = coordinates.length / 2;
    let perimeter = 0;
    
    for (let i = 0; i < n; i++) {
        const x1 = coordinates[2 * i];
        const y1 = coordinates[2 * i + 1];
        const nextIndex = (i + 1) % n;
        const x2 = coordinates[2 * nextIndex];
        const y2 = coordinates[2 * nextIndex + 1];
        const distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
        perimeter += distance;
    }
    
    return perimeter;
}
console.log(`Треугольник (0,0), (3,0), (0,4): P = ${polygonPerimeter(0, 0, 3, 0, 0, 4)}`);
console.log(`Квадрат (0,0), (2,0), (2,2), (0,2): P = ${polygonPerimeter(0, 0, 2, 0, 2, 2, 0, 2)}`);
console.log(`Прямоугольник (1,1), (5,1), (5,4), (1,4): P = ${polygonPerimeter(1, 1, 5, 1, 5, 4, 1, 4)}`);

// №7:
console.log("\n**** №7 ****");
function sequenceMember(n) {
    if (n === 1) {
        return 1;
    }
    let sumPrevious = 0;
    for (let i = 1; i < n; i++) {
        sumPrevious += sequenceMember(i);
    }
    return Math.sin(sumPrevious);
}

console.log("Первые 10 членов последовательности:");
for (let i = 1; i <= 10; i++) {
    console.log(`a[${i}] = ${sequenceMember(i)}`);
}

// МАССИВЫ 
console.log("\nМАССИВЫ\n");

// №1:
console.log("\n**** №1 ****");
let arr = [];
arr[0] = "Первый элемент";
arr[1] = "Второй элемент";
arr[2] = "Третий элемент";
console.log(`Элемент с индексом 2: ${arr[2]}`);
console.log(`Количество элементов: ${arr.length}`);
arr.splice(1, 1);
console.log("Элементы массива после удаления:");
arr.forEach(element => console.log(element));

// №2:
console.log("\n**** №2 ****");
let countries = ["Россия", "США", "Китай", "Индия", "Бразилия"];
let population = [146700000, 331000000, 1441000000, 1380000000, 213000000];

console.log("Вариант 1: цикл for с счетчиком");
function displayCountriesAndPopulation() {
    console.log("Список стран и населения:");
    for (let i = 0; i < countries.length; i++) {
        console.log(`${countries[i]}: ${population[i]} человек`);
    }
}
displayCountriesAndPopulation();

console.log("\nВариант 2: цикл for...in");
function displayCountriesAndPopulationForIn() {
    console.log("Список стран и населения (for...in):");
    for (let i in countries) {
        console.log(`${countries[i]}: ${population[i]} человек`);
    }
}
displayCountriesAndPopulationForIn();

// №3:
console.log("\n**** №3 ****");
let arrMonths = ["January", "February", "March", "April", "May", "June"];
let len = arrMonths.pop();
console.log(arrMonths.join(" "));
console.log(arrMonths.length);
console.log(`Удаленный элемент: ${len}`);
console.log("\nДетальный разбор:");
let originalArr = ["January", "February", "March", "April", "May", "June"];
console.log(`Исходный массив: ${originalArr.join(" ")}`);
console.log(`Длина исходного массива: ${originalArr.length}`);

let removedElement = originalArr.pop();
console.log(`Удаленный элемент: ${removedElement}`);
console.log(`Массив после удаления: ${originalArr.join(" ")}`);
console.log(`Длина после удаления: ${originalArr.length}`);

// №4:
console.log("\n**** №4 ****");
let a = [1, 2, 3, 4, 5, 6, 7];
let t = a.slice(0, 3);
console.log(t);
console.log("Исходный массив не изменился:", a);

// №5:
console.log("\n**** №5 ****");
let a5 = [1, 2, 3, 4, 5, 6, 7];
let d = a5.splice(1, 3);
console.log(a5);
console.log("Удаленные элементы:", d);


// №6:
console.log("\n**** №6 ****");
let arr6 = [1, 2, 3, 4, 5];
console.log("Исходный массив:", arr6);
let reversed = arr6.reverse();
console.log("Массив в обратном порядке:", reversed);
let arr6copy = [1, 2, 3, 4, 5];
let reversedCopy = [...arr6copy].reverse();
console.log("Оригинал (не изменился):", arr6copy);
console.log("Копия в обратном порядке:", reversedCopy);

// №7:
console.log("\n**** №7 ****");
let arr7 = ['c', 5, 2, 'b', 3, 1, 4, 'a'];

let sortedCustom = [...arr7].sort((a, b) => {
    if (typeof a === 'number' && typeof b === 'number') {
        return a - b;
    }

    if (typeof a === 'string' && typeof b === 'string') {
        return a.localeCompare(b);
    }

    if (typeof a === 'number') return -1;
    if (typeof b === 'number') return 1;
    return 0;
});
console.log("Сортировка с числами вперед:", sortedCustom);

// №8:
console.log("\n**** №8 ****");
let arr8 = [1, 2, 3, 4, 5];
let joined = arr8.join("+");
console.log(joined);
console.log("Исходный массив:", arr8);
console.log("С другим разделителем:", arr8.join(" - "));
console.log("Без разделителя:", arr8.join(""));

// №9:
console.log("\n**** №9 ****");
let firstArray = [1, 2, 3, 4, 5];
let secondArray = [8, 7, 9, 9, 6];

let combinedArray = firstArray.concat(secondArray);
combinedArray.sort(function(a, b) {
    return a - b;
});

console.log("Отсортированный массив: " + combinedArray);

let middleIndex = Math.floor(combinedArray.length / 2);
let medianValue;

if (combinedArray.length % 2 === 0) {
    medianValue = (combinedArray[middleIndex - 1] + combinedArray[middleIndex]) / 2;
} else {
    medianValue = combinedArray[middleIndex];
}

console.log("Медиана: " + medianValue);

// №10:
console.log("\n**** №10 ****");
function createRandomArray(length, min = 1, max = 100) {
    let arr = [];
    for (let i = 0; i < length; i++) {
        arr.push(Math.floor(Math.random() * (max - min + 1)) + min);
    }
    return arr;
}

let randomArray = createRandomArray(8, 1, 50);
console.log("Исходный массив:", randomArray);
let maxValue = Math.max(...randomArray);
let minValue = Math.min(...randomArray);

console.log(`Максимальное значение: ${maxValue}`);
console.log(`Минимальное значение: ${minValue}`);

let maxIndex = randomArray.indexOf(maxValue);
let minIndex = randomArray.indexOf(minValue);

console.log(`Индекс максимального: ${maxIndex}`);
console.log(`Индекс минимального: ${minIndex}`);

[randomArray[maxIndex], randomArray[minIndex]] = [randomArray[minIndex], randomArray[maxIndex]];
console.log("Массив после замены:", randomArray);

// №11:
console.log("\n**** №11 ****");
function processArray(arr) {
    let isDescending = true;
    let firstViolationIndex = -1;
    
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < arr[i + 1]) {
            isDescending = false;
            firstViolationIndex = i + 1;
            break;
        }
    }
    
    if (isDescending) {
        const reversedArray = [...arr].reverse();
        console.log("Массив упорядочен по убыванию. В обратном порядке:");
        console.log(reversedArray);
        return reversedArray;
    } else {
        console.log(`Массив не упорядочен по убыванию. Номер первого нарушающего элемента: ${firstViolationIndex}`);
        return firstViolationIndex;
    }
}

console.log("Пример 1:");
processArray([5, 4, 3, 2, 1]);
console.log("Пример 2:");
processArray([5, 4, 6, 2, 1]);
console.log("Пример 4:");
processArray([1, 1, 1, 1, 1]);

// №12:
console.log("\n**** №12 ****");
function funct12(arr) {
    const result = [];
    
    for (let i = 0; i < arr.length; i++) {
        if (i % 2 === 1 && arr[i] > 0) {
            result.push(arr[i] * 3);
        }
        else if (i % 2 === 0 && arr[i] < 0) {
            result.push(arr[i] / 5);
        }
        else {
            result.push(arr[i]);
        }
    }
    
    console.log(result);
    return result;
}
let arr12 = [-10, 5, -8, 3, -6, 1];
console.log("Исходый масссив: ");
console.log(arr12);
console.log("Переработанный массив: ");
funct12(arr12); 

// №13:
console.log("\n**** №13 ****");
let matrix = [
    [-10, 5, 8, -3, 12],
    [6, -5, 7, 9, -2],
    [4, 0, -8, 3, 10],
    [-7, 2, 15, -1, 6],
    [3, -4, 11, 1, -6]
];

console.log("Исходная матрица:");
for (let i = 0; i < matrix.length; i++) {
    console.log(matrix[i].join('\t'));
}

console.log("Элементы, принадлежащие интервалу [-5; 7]:");

for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {        
        if (matrix[i][j] >= -5 && matrix[i][j] <= 7) {
            console.log(`Элемент [${i+1},${j+1}] = ${matrix[i][j]}`);
        }
    }
}

// №14:
console.log("\n**** №14 ****");
let M = 4;
let N = 5;

let matrix14 = [
    [5.2, 3.1, 8.7, 2.4, 6.3],
    [9.1, 4.5, 1.8, 7.2, 3.9],
    [2.8, 6.4, 5.5, 9.3, 1.2],
    [7.6, 2.1, 4.3, 8.9, 5.7]
];
console.log("Исходная матрица:");
for (let i = 0; i < M; i++) {
    console.log(matrix14[i].map(x => x.toFixed(1)).join('\t'));
}

let sumOfMaxInRows = 0;
for (let i = 0; i < M; i++) {
    let maxInRow = matrix14[i][0];
    for (let j = 1; j < N; j++) {
        if (matrix14[i][j] > maxInRow) {
            maxInRow = matrix14[i][j];
        }
    }
    sumOfMaxInRows += maxInRow;
    console.log(`Максимум в строке ${i+1}: ${maxInRow.toFixed(1)}`);
}
console.log(`Сумма наибольших значений элементов строк: ${sumOfMaxInRows.toFixed(1)}`);

let productOfMinInColumns = 1;
for (let j = 0; j < N; j++) {
    let minInColumn = matrix14[0][j];
    for (let i = 1; i < M; i++) {
        if (matrix14[i][j] < minInColumn) {
            minInColumn = matrix14[i][j];
        }
    }
    productOfMinInColumns *= minInColumn;
    console.log(`Минимум в столбце ${j+1}: ${minInColumn.toFixed(1)}`);
}
console.log(`Произведение наименьших элементов столбцов: ${productOfMinInColumns.toFixed(1)}`);

// №15:
console.log("\n**** №15 ****");
let booksByAuthor = {
    "Пушкин": ["Евгений Онегин", "Капитанская дочка", "Руслан и Людмила"],
    "Есенин": ["Черный человек", "Анна Снегина", "Письмо матери"],
    "Данцова": ["Крутой наследничек", "Бриллиантовая рука", "Любовь-морковь"],
    "Толстой": ["Война и мир", "Анна Каренина", "Воскресение"],
    "Достоевский": ["Преступление и наказание", "Идиот", "Братья Карамазовы"]
};

console.log("КНИГИ ПО АВТОРАМ: ");

for (let author in booksByAuthor) {
    console.log(`\nАвтор: ${author}`);
    console.log("Книги:");
    
    let books = booksByAuthor[author];
    for (let i = 0; i < books.length; i++) {
        console.log(`  ${i+1}. ${books[i]}`);
    }
}