function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomItem(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

const firstNames = ['Иван', 'Петр', 'Анна', 'Мария', 'Алексей', 'Екатерина', 'Дмитрий', 'Ольга'];
const lastNames = ['Иванов', 'Петров', 'Сидоров', 'Кузнецова', 'Смирнов', 'Волкова'];
const genders = ['male', 'female'];
const cities = ['Москва', 'СПб', 'Новосибирск', 'Екатеринбург', 'Казань'];

function generateHuman(id) {
    const gender = randomItem(genders);
    const age = random(5, 80);
    return {
        id: id,
        firstName: randomItem(firstNames),
        lastName: randomItem(lastNames),
        age: age,
        gender: gender,
        address: `г. ${randomItem(cities)}, ул. ${randomItem(['Ленина', 'Пушкина', 'Гагарина'])}, д. ${random(1, 100)}`,
        phone: `+7${random(900, 999)}${random(1000000, 9999999)}`
    };
}

export async function getData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            const size = random(5, 20);
            const humans = [];
            for (let i = 0; i < size; i++) {
                humans.push(generateHuman(i));
            }
            resolve(humans);
        }, 500); 
    });
}