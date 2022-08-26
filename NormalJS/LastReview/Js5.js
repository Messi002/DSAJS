//rest syntax
const double = (...nums) => {
    console.log(nums);


    return this;
}
const results = double(1,2,3,4,5)

// spread syntax Array
const people = ['shaun','Gareth','Lareth'];
console.log(...people);

//spread syntax Objects
const person = {
    name: "Austin",
    color: "red",
}

const personClone = {...person}
personClone.color = 'blue'
console.log(personClone);