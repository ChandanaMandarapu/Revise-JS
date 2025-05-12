const obj = {
    name = "chandu",
    age = 21,
    sayHello: function(){
        return "hello"
    },
    career : {},
}
console.log(Object.values(obj))

for (let key in obj){
    console.log(key)
}

const obj2 = {
    haircolor: "black",
    arr: [1,2,3]
}
const obj3 = {...obj,obj2}
console.log(obj3)

const mySet = new Set(1,23,4)
mySet.add(3)
mySet.delete(1)
mySet.has(23)

for (const value of mySet )
{
    console.log(value)
}

mySet.clear()
const arr = Array.from(mySet)

// Maps

const map = new Map()
const numberMap = new Map([1,2,3])

map.set(3)
map.delete(3)
map.get(1)
