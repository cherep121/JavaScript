// Объекты
// №1
console.log("++++ ОБЪЕКТЫ ++++");
console.log("**** №1 ****");
let user = {};
user.name = "John";
user.surname = "Smith";
console.log("Объект:", user);
user.name = "Pete";
console.log("Объект после изменения:", user);
delete user.name;
console.log("Объект после удаления имени:", user);

// №2
console.log("\n**** №2 ****");
let myBrowser = {
    name: "Microsoft Internet Explorer",
    version: "9.0"
};
console.log("Свойства объекта myBrowser:");
for (let key in myBrowser) {
    console.log(key + ": " + myBrowser[key]);
}

// №3
console.log("\n**** №3 ****");
function isEmpty(obj) {
    for (let key in obj) {
        return false;
    }
    return true;
}

let emptyObj = {};
let nonEmptyObj = {a: 1};
console.log("isEmpty(emptyObj):", isEmpty(emptyObj));
console.log("isEmpty(nonEmptyObj):", isEmpty(nonEmptyObj));

// №4
console.log("\n**** №4 ****");
const userConst = {
    name: "John"
};

console.log("Исходный объект:", userConst);
userConst.name = "Pete";
console.log("Объект после изменения:", userConst);

try {
    userConst = 123;
} catch(error) {
    console.log("Ошибка при попытке переназначить userConst:", error.message);
}

// №5
console.log("\n**** 5 ****");
function multiplyNumeric(obj) {
    for (let key in obj) {
        if (typeof obj[key] === 'number') {
            obj[key] *= 2;
        }
    }
}

let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};
console.log("До multiplyNumeric:", menu);
multiplyNumeric(menu);
console.log("После multiplyNumeric:", menu);

// №6
console.log("\n**** №6 ****");
let calculator = {
    read: function(a, b) {
        this.a = a;
        this.b = b;
    },
    sum: function() {
        return this.a + this.b;
    },
    mul: function() {
        return this.a * this.b;
    }
};

calculator.read(5, 3);
console.log("Сумма:", calculator.sum());
console.log("Произведение:", calculator.mul());

calculator.read(10, 2);
console.log("Сумма:", calculator.sum());
console.log("Произведение:", calculator.mul());

// №7
console.log("\n**** №7 ****");
let ladder = {
    step: 0,
    up() {
        this.step++;
        return this;
    },
    down() {
        this.step--;
        return this;
    },
    showStep() {
        console.log(this.step);
        return this;
    }
};

ladder.up().up().down().showStep().down().showStep();

// №8
console.log("\n**** №8 ****");
function Browser(name, version) {
    this.name = name;
    this.version = version;
    this.aboutBrowser = function() {
        console.log(`Браузер: ${this.name}, Версия: ${this.version}`);
    };
}

let myBrowser2 = new Browser("Microsoft Internet Explorer", "9.0");
console.log("Свойства объекта myBrowser2:");
console.log("name:", myBrowser2.name);
console.log("version:", myBrowser2.version);
myBrowser2.aboutBrowser();

// №9
console.log("\n**** №9 ****");
function Employee(имя, отдел, телефон, зарплата) {
    this.Имя = имя;
    this.Отдел = отдел;
    this.Телефон = телефон;
    this.Зарплата = зарплата;
    
    this.checkFun = function() {
        console.log("Информация о сотруднике:");
        console.log(`Имя: ${this.Имя}`);
        console.log(`Отдел: ${this.Отдел}`);
        console.log(`Телефон: ${this.Телефон}`);
        console.log(`Зарплата: ${this.Зарплата}`);
    };
}

let employee1 = new Employee("Антон Чистюхин", "IT-отдел", "+7 9999999999", 100000000);
employee1.checkFun();

// №10
console.log("\n**** №10 ****");
function Calculator() {
    this.read = function(a, b) {
        this.a = a;
        this.b = b;
    };
    
    this.sum = function() {
        return this.a + this.b;
    };
    
    this.mul = function() {
        return this.a * this.b;
    };
}

let calc = new Calculator();
calc.read(10, 5);
console.log("Калькулятор:");
console.log("Сумма:", calc.sum());
console.log("Произведение:", calc.mul());

calc.read(7, 3);
console.log("Сумма:", calc.sum()); // 10
console.log("Произведение:", calc.mul()); // 21

// №11
console.log("\n**** №11 ****");

function Accumulator(startingValue) {
    this.value = startingValue;
    
    this.read = function(a) {
        this.value += a;
    };
}

let accumulator = new Accumulator(1);
console.log("Начальное значение accumulator:", accumulator.value);
accumulator.read(10);
console.log("После read(10):", accumulator.value);
accumulator.read(5);
console.log("После read(5):", accumulator.value);


//Работа с прототипами
// №1
console.log("++++ РАБОТА С ПРОТИПАМИ ++++");
console.log("\n**** №1 ****");

let animal = {
    jumps: null
};

let rabbit11 = {
    __proto__: animal,
    jumps: true
};

console.log(rabbit11.jumps); // 1
delete rabbit11.jumps;
console.log(rabbit11.jumps); // 2
delete animal.jumps;
console.log(rabbit11.jumps); // 3
// rabbit jums = true при 1 = true, rabbit delete при 2 но есть animal jums = null, при 3 delette animal rabbit = undefind

// №2
console.log("\n**** №2 ****");

let animal2 = {
    eat() {
        this.full = true;
        console.log("this внутри eat:", this);
    }
};

let rabbit22 = {
    __proto__: animal2
};

rabbit22.eat();
console.log("rabbit22.full:", rabbit22.full); // true
console.log("animal2.full:", animal2.full); // undefined
// this присваивается объекту которым он вызывается


// №3
console.log("\n**** №3 ****");
let hamsterFixed1 = {
    stomach: [],
    eat(food) {
        this.stomach.push(food);
    }
};

let speedy1 = {
    __proto__: hamsterFixed1,
    stomach: []
};

let lazy1 = {
    __proto__: hamsterFixed1,
    stomach: [] 
};

speedy1.eat("apple");
console.log("speedy1.stomach:", speedy1.stomach);
console.log("lazy1.stomach:", lazy1.stomach);

// №4            
console.log("**** №4 ****");
String.prototype.color = "black";
String.prototype.size = "14px";

String.prototype.write = stringWrite;
function stringWrite() {
    console.log("Цвет текста: " + this.color);
    console.log("Размер шрифта: " + this.size);
    console.log("Текст: " + this.toString());
}

let s = new String("Это строка");
s.color = "red";
s.size = "18px";
s.write();

console.log("\n--- Второй объект ---");
let s2 = new String("Вторая строка");
s2.write();

// №5
console.log("\n**** №5 ****");

function Rabbit() {}
Rabbit.prototype = {
    eats: true
};

let rabbit = new Rabbit();
console.log("Исходный rabbit.eats:", rabbit.eats);

console.log("#### Rabbit.prototype={} ####");
function Rabbit1() {}
Rabbit1.prototype = { eats: true };
let rabbit1 = new Rabbit1();
Rabbit1.prototype = {};
console.log("rabbit1.eats:", rabbit1.eats);
// rabbit сохроняет страый прототип тк был привязан при создании

console.log("#### Rabbit.pr.eats=false ####");
function Rabbit2() {}
Rabbit2.prototype = { eats: true };
let rabbit2 = new Rabbit2();
Rabbit2.prototype.eats = false;
console.log("rabbit2.eats:", rabbit2.eats);
// меняем само свойство следовательно все видят false

console.log("#### delete rab.eats ####");
function Rabbit3() {}
Rabbit3.prototype = { eats: true };
let rabbit3 = new Rabbit3();
delete rabbit3.eats;
console.log("rabbit3.eats:", rabbit3.eats);
// у rab не своего своего свойства eats поэтому он не удаляется 

console.log("#### delete rab.pr.eats ####");
function Rabbit4() {}
Rabbit4.prototype = { eats: true };
let rabbit4 = new Rabbit4();
delete Rabbit4.prototype.eats;
console.log("rabbit4.eats:", rabbit4.eats);
// удалили свой из прототипа 


// Классы
console.log("\n++++ КЛАССЫ ++++");
// №1
console.log("\n**** №1 ****");
class Clock {
    constructor(hours, minutes, seconds) {
        this.hours = hours;
        this.minutes = minutes;
        this.seconds = seconds;
    }
    
    displayTime() {
        const formattedHours = this.hours.toString().padStart(2, '0');
        const formattedMinutes = this.minutes.toString().padStart(2, '0');
        const formattedSeconds = this.seconds.toString().padStart(2, '0');
        
        console.log(`${formattedHours}:${formattedMinutes}:${formattedSeconds}`);
    }
}

const myClock = new Clock(14, 30, 5);
myClock.displayTime();

// №2
console.log("\n**** №2 ****");
class Animal111 {
    constructor(name) {
        this.name = name;
    }
}

class Rabbit111 extends Animal111 {
    constructor(name) {
        super(name);
        this.created = Date.now();
    }
}

let rabbit111 = new Rabbit111("Белый кролик");
console.log(rabbit111.name);
console.log(rabbit111.created);


// №3
console.log("\n**** №3 ****");
class Clock3 {
  constructor(template) {
    this.template = template;
  }

  render() {
    let date = new Date();

    let hours = date.getHours();
    if (hours < 10) hours = '0' + hours;

    let mins = date.getMinutes();
    if (mins < 10) mins = '0' + mins;

    let secs = date.getSeconds();
    if (secs < 10) secs = '0' + secs;

    let output = this.template
      .replace('h', hours)
      .replace('m', mins)
      .replace('s', secs);

    console.log(output);
  }

  stop() {
    clearInterval(this.timer);
  }

  start() {
    this.render();
    this.timer = setInterval(() => this.render(), 1000);
  }
}

class ExtendedClock extends Clock3 {
  constructor(template, precision = 1000) {
    super(template);
    this.precision = precision;
  }

  start() {
    this.render();
    this.timer = setInterval(() => this.render(), this.precision);
  }
}
let clock = new ExtendedClock("h m s", 2000);
clock.start();
setTimeout(() => clock.stop(), 10000);


// №4
console.log("\n**** №4 ****");
class Stock {
  constructor() {
    this.boxes = [];
    this.nextId = 0;
  }

  add(w, v) {
    const box = {
      id: this.nextId++,
      w: w,
      v: v
    };
    this.boxes.push(box);
    return box.id;
  }

  getByW(min_w) {
    if (this.boxes.length === 0) return -1;

    const suitableBoxes = this.boxes.filter(box => box.w >= min_w);
    
    if (suitableBoxes.length === 0) return -1;

    const minW = Math.min(...suitableBoxes.map(box => box.w));
    
    const candidates = suitableBoxes.filter(box => box.w === minW);

    candidates.sort((a, b) => a.id - b.id);
    
    const selectedBox = candidates[0];
    
    this.boxes = this.boxes.filter(box => box.id !== selectedBox.id);
    
    return selectedBox.id;
  }

  getByV(min_v) {
    if (this.boxes.length === 0) return -1;

    const suitableBoxes = this.boxes.filter(box => box.v >= min_v);
    
    if (suitableBoxes.length === 0) return -1;

    const minV = Math.min(...suitableBoxes.map(box => box.v));

    const candidates = suitableBoxes.filter(box => box.v === minV);
    
    candidates.sort((a, b) => a.id - b.id);
    
    const selectedBox = candidates[0];
    
    this.boxes = this.boxes.filter(box => box.id !== selectedBox.id);
    
    return selectedBox.id;
  }

  showStock() {
    console.log("Текущее состояние склада:");
    this.boxes.forEach(box => {
      console.log(`  ID: ${box.id}, w: ${box.w}, v: ${box.v}`);
    });
  }
}

function testStock() {
  const stock = new Stock();
  
  console.log("==== Тест 1: Добавление коробок ====");
  console.log("Добавляем коробку (5, 10):", stock.add(5, 10)); 
  console.log("Добавляем коробку (3, 8):", stock.add(3, 8)); 
  console.log("Добавляем коробку (7, 6):", stock.add(7, 6));  
  console.log("Добавляем коробку (3, 12):", stock.add(3, 12));
  stock.showStock();

  console.log("==== Тест 2: Поиск по грузоподъемности ====");
  console.log("Ищем коробку с w >= 4:");
  console.log("Результат:", stock.getByW(4));
  stock.showStock();

  console.log("==== Тест 3: Поиск по объему ====");
  console.log("Ищем коробку с v >= 7:");
  console.log("Результат:", stock.getByV(7)); 
  stock.showStock();

  console.log("==== Тест 4: Поиск с выбором самой старой коробки ====");
  console.log("Добавляем еще коробки:");
  stock.add(4, 5); 
  stock.add(4, 9); 
  stock.add(6, 9); 
  stock.showStock();

  console.log("Ищем коробку с w >= 4 (должна выбрать ID 4, так как она самая старая среди w=4):");
  console.log("Результат:", stock.getByW(4)); 
  stock.showStock();

  console.log("=== Тест 5: Поиск несуществующей коробки ===");
  console.log("Ищем коробку с v >= 100:");
  console.log("Результат:", stock.getByV(100)); 
  stock.showStock();

  console.log("=== Тест 6: Поиск на пустом складе ===");
  const emptyStock = new Stock();
  console.log("Ищем на пустом складе (w >= 1):", emptyStock.getByW(1)); 
  console.log("Ищем на пустом складе (v >= 1):", emptyStock.getByV(1));
}

testStock();