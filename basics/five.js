// this keyword 

const person = {
    name : "chandu",
    greet: () => {
        console.log('hllo my name is ${this.name}')
    },
};

person.greet()

// promises

const myPromise = new Promise ((resolve,reject) => {
    if (true){
        resolve(value)
    }
    else {
        reject(error)
    }
})