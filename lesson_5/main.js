
//1.сортирует строки "из коробки" т.е. без доп параметров

const str = ['Bob','Alex','John']
console.log(str.sort())

//2.Сортирует строки типа по "алфавиту" (unicode)
const str2 = ['Bob','Alex','John',"john", '123', 'Игорь', 'Юрий']
console.log(str2.sort())


//3. работает мутабельно (сортирует массив на месте) / исходное состояние утрачено
console.log(str2)


//4.возвращает ссылку на исходынй массив
console.log(str === str2.sort())

//5. Для всех сотальных случаев необходимо передать функцию сравнения (callback)

const numbers =[1000,'+20',-500, 77 , 9]
console.log(numbers.sort)

const compareFn = (a, b) => {//по возрастанию
  if(a > b) { //надо переставить
      return 5567
  } else { //не надо переставить
      return -22
  }
}

console.log(numbers.sort(compareFn))

//7. reverse
console.log



const students = [
    {
        name: "Bob",
        age: 22,
        isMarried: true,
        scores: 95
    },
    {
        name: "Alex",
        age: 24,
        isMarried: true,
        scores: 89
    },
    {
        name: "Helge",
        age: 24,
        isMarried: true,
        scores: 90
    },
    {
        name: "Nick",
        age: 20,
        isMarried: false,
        scores: 120
    },
    {
        name: "John",
        age: 19,
        isMarried: false,
        scores: 121
    },
    {
        name: "alex",
        age: 22,
        isMarried: true,
        scores: 89
    },
];


//7. Сортирвока объект по строковым значения
//a. Регистро зависимая сортировка


const compareObjByName = (a, b) => {
    if(a.name > b.name) {
        return 1
    } else {
        return -1
    }
}
console.log(students.sort(compareObjByName))

//б. Регистро независимая
console.log(students.sort((a,b)=>a.name.localeCompare(b.name)))

//8.Сортировка массива объектов по числовым значениям
console.log(students.sort((a,b)=> a.scores - b.scores))


//bubble sort

const numbersJS =[67, 37, 12, 22]

for (let j = 0; j < numbersJS.length-1 ; j++) {
    for (let i = 0; i < numbersJS.length-1-j; i++) {
        if(numbersJS[i] > numbersJS[i+1]){
            isSorted = false;
            /*let temp = numbersJS[i]
            numbersJS[i] = numbersJS[i+1]
            numbersJS[i+1] = temp*/
            [numbers[i+1],numbersJS[i]] = [numbersJS[i], numbers[i+1]]
        }
    }
    if(isSorted)break
}


console.log(numbersJS)

//O(n^2) => O((n-1)^2) => O((n-1)*((n-1)/2))


//как поменять значение местами ипользуя только арифметические операторы для цифр
a = a + b
b = a - b
a = a - b
///https://www.dev-notes.ru/articles/array-destructuring-in-es6/


