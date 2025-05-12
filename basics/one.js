console.log("hello world")
console.error("error")
console.warning("warning")

// collecting user input frm node

const prompt = require("prompt-sync")()

const v= prompt("type something ")
console.log(v)

var x = "maha"
let y = "chandu"
y = "chandana"

// scope

if(true){
    let v = 0
}
console.log(x)

const a = 9
const b = "9"

console.log(a+b)

const j = "hi"
const k = 2
console.log(j+k)

// type conversion

console.log(Number(b)+a)
console.log(k.toString())

// equality operators

console.log("1" == 1)
console.log(true == undefined)
console.log(undefined ===  null)