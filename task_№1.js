// №1
console.log("**** №1 ****");
function ask_password(login, password, success, failure) {
    login = login.toLowerCase();
    password = password.toLowerCase();

    const vowels = new Set(['a', 'e', 'i', 'o', 'u', 'y']);
    
    function countVowels(str) {
        return [...str].filter(ch => vowels.has(ch)).length;
    }

    function getConsonants(str) {
        return [...str].filter(ch => !vowels.has(ch)).join('');
    }

    const passwordVowels = countVowels(password);
    const loginConsonants = getConsonants(login);
    const passwordConsonants = getConsonants(password);

    const vowelCondition = passwordVowels === 3;
    const consonantCondition = loginConsonants === passwordConsonants;

    if (vowelCondition && consonantCondition) {
        success(login);
    } else if (!vowelCondition && !consonantCondition) {
        failure(login, "Everything is wrong");
    } else if (!vowelCondition) {
        failure(login, "Wrong number of vowels");
    } else {
        failure(login, "Wrong consonants");
    }
}

function main(login, password) {
    ask_password(
        login,
        password,
        (login) => console.log(`Привет, ${login}!`),
        (login, error) => console.log(`Кто-то пытался притвориться пользователем ${login}, но в пароле допустил ошибку: ${error.toUpperCase()}.`)
    );
}

main("login", "aaalgn");
main("login", "aaabbb");
main("login", "logan");