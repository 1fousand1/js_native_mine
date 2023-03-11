//string, number, boolean, null, undefined, Nan - примитивы
//array, object, function -  обекты //ссылочный тип данных

//1. Более сложная структура
//2. Объекты представляют из себя ссылочных тип даннах
//3. Имеют свойства и методы



const user ={
    name: 'bob',
    age: 34
}


const user2 = user

//const copyUser = {}
//copyUser.name = user.name
//copyUser.age = user.age
//варинат для чайника


const copyUser = {...user}
//хороший вариант скопировать объект/сделать объект копию /spread оператор {...object}

console.log(user === copyUser)
console.log(user === user2)

const arr = [1,2,3,4,5]
const copyArr = [...arr]
///также работает с другим

const students =[
    {name: 'bob', age:34},
    {name: 'alex', age:32},
]

//students[0] => ссылка #234
//students[1] => ссылка 345

const copyStudents = [...students]  // shallow поверхностная мелкая копия
console.log(students === copyStudents) //false
console.log(students[0] === copyStudents[0]) //true

const deepCopy =[{...students[0]},{...students[1]}]
//колхозный вариант глубокой копии
console.log(students[0] === deepCopy[0]) //true
console.log(students === deepCopy) //false



const deepCopyWithMap = students.map(st => ({...st}))
/// круглые скобочки для того чтобы  мап понимал что мы хотим получить ({...st})

/*const deepCopyWithMap = students.map(() => {})  => {
    return {...st}
})*/
// map - любимый метод массива map - отобржаение (с англ) map в себя принимает функцию callback, а функция принимает
//в себя каждый элемент


// CRUD операции

const addSt =[...students, {name: 'Anna', age: 28}] //create

const updateBobAge = students.map(st => st.name === 'Bob' ? {...st, age:35} : st) //update

const removeSt = students.filter(st => st.name !== "Bob") //delete

