try{
    riskyfunction()
}catch(error){
    console.log("An error occured")
} finally {
    console.log("clenedup code can go here")
}

function greet(name) {
    return "hello"
}

const hi = function (name) {
    console.log("hello")
}

const greet = (name) => "chandu"


// map filter and reudce

// map

const numbers = [1,2,3,4]
const doubled = numbers.map((num) => num*2)
console.log(doubled)

// filter 
const users = [
    {name : "kira",age:23},
    {name: "nira", age:23},
]

const names = users.map((user) => user.name);
console.log(names)

const numbers2 = [1,3,4,5]
const sum = numbers2.reduce((acc,num) => acc + num , 0)
console.log(sum)

const numbers3 = [1,3,4,6,5]
const evenNumbers = numbers.filter(num => num%2 === 0)
console.log(evenNumbers)