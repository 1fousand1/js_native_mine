//1. Реализуйте функцию, которая принимает параметром подсторку, число повторов и разделитель, а возвращает сторку, состоящую из указанного количества повторов подстроки с использованием разделителя.
// repeatString("yo", 3, " ") => "yo yo yo"
// repeatString("yo", 3, ",") => "yo,yo,yo"
function repeatString(substr, rep, sep) {
    let result = substr;
    for (let i = 1; i < rep; i++) {
        result += sep + substr;
    }
    return result;
}
console.log(repeatString("yo", 5, " "))
console.log(repeatString("yo", 3, ","))

//2. Реализуйте функцию, которая принимает параметром сторку и подстроку, а возвращает true, если строка начинается с указанной подстроки, в противном случае - false. Регистр не учитывается.
// checkStart("Incubator", "inc") => true
// checkStart("Incubator", "yo") => false

function checkStart(str, substr) {
    return str.toLowerCase().startsWith(substr.toLowerCase());
}
console.log(checkStart("Incubator", "inc"))
console.log(checkStart("Incubator", "yo"))

//3. Реализуйте функцию, которая принимает параметром строку и число (количество символов), а возвращает строку из параметров, обрезанную до указанного количества символов и завершает её многоточием.
//truncateString("Всем студентам инкубатора желаю удачи!", 10) => "Всем студе..."

const truncateString = (str, num) => {
    if (str.length > num) {
        return str.slice(0, num) + "...";
    } else {
        return str;
    }
}

console.log(truncateString("Всем студентам инкубатора желаю удачи!", 10))

//4. Реализуйте функцию, которая принимает параметром сторку (предложение) и возвращает самое короткое слово в предложении, если в параметрах пустая строка или не строка, то возвращает null.
// getMinLengthWord("Всем студентам инкубатора желаю удачи.") => "Всем"
// getMinLengthWord("") => null
// getMinLengthWord(123) => null

const getMinLengthWord = (sentence) => {
    if (typeof sentence !== "string" || sentence.trim().length === 0) {
        return null;
    }

    const words = sentence.split(" ");
    let shortestWord = words[0];

    for (let i = 1; i < words.length; i++) {
        if (words[i].length < shortestWord.length) {
            shortestWord = words[i];
        }
    }

    return shortestWord;
}

console.log(getMinLengthWord("Всем студентам инкубатора желаю удачи."))
console.log(getMinLengthWord(""))
console.log(getMinLengthWord(123))



//5. Реализуйте функцию, которая принимает параметром сторку (предложение) и возвращает то же предложение, где все слова написаны строчными, но начинаются с заглавных букв.
// setUpperCase("всем стУдентам инкуБатора Желаю удачИ") => "Всем Студентам Инкубатора Желаю Удачи!"

const setUpperCase = (sentence) => {
    if (typeof sentence !== "string") {
        return null;
    }

    const words = sentence.split(" ");

    for (let i = 0; i < words.length; i++) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase();
    }

    return words.join(" ");
}

console.log(setUpperCase("всем стУдентам инкуБатора Желаю удачИ"))

// !!!!!!!!!!!!!!!!!!После решения 5 задач - поднимаем руку!!!!!!!!

//6. Реализуйте функцию, котрая принимает параметрами строку и подстроку. Если все
// символы подстроки содержаться в стороке - возвращает true, если нет -
// возвращает false. Проверка проводится без учёта регистра и без учёта
// повторяющихся символов.
// * с учётом повторяющихся символов в подстроке

function isIncludes(str, substr) {
    if (typeof str !== "string" || typeof substr !== "string") {
        return false;
    }
    str = str.toLowerCase();
    substr = substr.toLowerCase();

    for (let i = 0; i < substr.length; i++) {
        let index = str.indexOf(substr[i]);
        if (index === -1) {
            return false;
        }
        str = str.slice(0, index) + str.slice(index + 1);
    }
    return true;
}

console.log(isIncludes("Incubator", "Cut"))
console.log(isIncludes("Incubator", "table"))
console.log(isIncludes("Incubator", "inbba"))
console.log(isIncludes("Incubator", "inba"))
console.log(isIncludes("Incubator", "Incubatorrr"))
// isIncludes("Incubator", "Cut") => true
// isIncludes("Incubator", "table") => false
// isIncludes("Incubator", "inbba") => true //*false
// isIncludes("Incubator", "inba") => true  //*true
// isIncludes("Incubator", "Incubatorrr")=> true //*false





  




