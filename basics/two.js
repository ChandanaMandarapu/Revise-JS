console.log("logical operators")

if(true){
    console.log("helloworld")
}
else if(false){
    console.log("hey")
}

const value = 3

switch (value) 
{
    case 3:
        console.log("cool")
        break
    case 4:
        console.log("done")
        break
}

// Arrays

const arr = [1,2,3,4,54,true]
const arr2 = newArray(5)
console.log(arr2[2])
const arr3 = Array.from("chandu")
arr[3] = "r"
console.log(arr2[arr2.length-1])

arr.push(9)
arr3.pop()
arr2.shift()
console.log(arr.concat(arr3))
console.log(arr.splice(1,2))

// destructuring and spread operator

const [x,...y] = [1,2,34]
console.log(x,y)

// while loops

do{
    console.log("run")
}while(true()){
    console.log("hehe")
}

for (let i = 0; i<10; i++)
{
    console.log(i)
}
for (let i = 0; i<arr.length; i++)
{
    console.log(arr[i])
}

for (let value of arr)
{
    console.log(value)
}
