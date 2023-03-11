const todoListId_1 = "23jgj85"
const todoListId_2 = "45gkj09"


const todoLists = [
    {
        id: todoListId_1,
        title: "What to learn",
        filter: "all",
    },
    {
        id: todoListId_2,
        title: "What to buy",
        filter: "all",
    },
]



const tasks = {
    [todoListId_1]: [   //"todoListId_1" => "23jgj85"
        {id: "12", name: "HTML", isDone: true},
        {id: "13", name: "CSS", isDone: false}
    ],
    [todoListId_2]: [
        {id: "24", name: "Meat", isDone: true},
        {id: "22", name: "Milk", isDone: false}
    ],

}

console.log(tasks[todoListId_1])
console.log(tasks[todoListId_1][0]["name"])
console.log(tasks[todoListId_1][0].name)
console.log(tasks[todoListId_1].filter(t => t.isDone))
console.log([...tasks[todoListId_1], {id: "14", name: "Redux", isDone: false}])

console.log(tasks[todoLists[1].id])



//  reduce => свёртка => сократилка

const nums = [1,2,3,4]

console.log(nums.reduce((acc, el)=> acc + el), 0)

//0+1 => 1
// 1+2 => 3
//3 + 3 => 6
//6 + 4 => 10
// => 10


let students = [
    {   id: 1,
        name: "Bob",
        age: 22,
        isMarried: true,
        scores: 85
    },
    {
        id: 2,
        name: "Alex",
        age: 21,
        isMarried: true,
        scores: 89
    },
    {
        id: 3,
        name: "Nick",
        age: 20,
        isMarried: false,
        scores: 120
    },
    {
        id: 4,
        name: "John",
        age: 26,
        isMarried: false,
        scores: 100
    }
];

const data = students.reduce((acc, el)=> {
    acc[el.id] = {...el}
    delete acc[el.id].id
    return acc
}, {})

console.log(data)

/*console.log(students.reduce((acc,el)=>acc +el.scores, 0)) //сложить баллы студентв
console.log(students.reduce((acc,)))*/



/*
function itReduce(func, startValue) {
    let acc = startValue
    for (let i = 0; i < this.length; i++) {
        acc = func(acc, this[i])
    }
    return acc
}

Array.prototype.itReduce = itReduce

console.log([1,2,3,4].itReduce((acc, el)=> acc + el, 0))*/
