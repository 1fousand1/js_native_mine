let students = [
    {
        name: "Bob",
        age: 22,
        isMarried: true,
        scores: 85,
    },
    {
        name: "Alex",
        age: 21,
        isMarried: true,
        scores: 89
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
        scores: 100
    }
];


const getScores = item => item.scores
const getName = item => item.name


const getStNames = (array) => {
    const result = []
    const getName = item => item.name
//snippet fori
    for (let i = 0; i <array.length; i++) {
        result[i] = getName(array[i])
    }
    return result
}
console.log(getStNames(students))

const getStudentsScores = (array) => {
    const result = []
    const getScores = item => item.scores
    for (let i = 0; i <array.length; i++) {
        result[i] = getScores(array[i])
    }
    return result
}

const getNewArray = (array, func) => {
    const result = []
    for (let i = 0; i <array.length; i++) {
        result[i] = func(array[i])
    }
    return result
}

console.log(getNewArray(students, getName))
console.log(students.map(getName))

/*const addProp = item => {
    item.isStident = true
    return item
}*/

//метод это функция которая является свойством объектов
//метод это свойтсво объекта которая реализовано функцией

const addProp = item => {
    const copy ={...item}
    copy.isStudent = true
    return copy
}


//filter

const itPush = (array, el) =>{
    array[array.length] = el
    return array.length
}

const itFilter = (array, func) => {
    const result = []
    for (let i = 0; i <array.length; i++) {
        if(func(array[i] === true)){
            itPush(array,array[i])
        }
    }
    return result
}

//include

const itInclude = (array, value) => {
    for (let i = 0; i < array.length; i++) {
        if(array[i] === value){
            return true
        }
    }
    return false
}

const itUnShift = (array, item) => {
    for (let i = array.length - 1; i >= 0; i--) {
        array[i+1] = array[i]
    }
    array[0] = item
    return array.length
}

//добавили элемнет в начало массива

const itShift = (array) => {
    const removedItem = array[0]
    for (let i = 0; i < array.length ; i++) {
        array[i] = array[i + 1]
    }
    array.length = array.length - 1
    return removedItem
}

const nums=[1,2,3,4,5]
itShift(nums)
console.log(nums)



/*/!*chaining последовательное применение методов массива*!/
nums.map(el=> el ** 2)
    .filter(el => el < 20)
    .reverse()
    .pop()*/

/*на ютубе поискть "пишем полифилы" /*на ютубе поискть "пишем полифилы" */

/*prototype это свойство глобального объекта родителя Array
* console.dir
* this это контекст вызова или ссылка на тот объект который использует функцию*/
