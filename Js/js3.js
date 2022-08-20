//Filter Method on Arrays
// const scores =[10,30,15,25,50,40,5];

// const Users =[
//     {name: "Austin", premium: true},
//     {name: "Shelly", premium: false},
//     {name: "Luigi", premium: true},
//     {name: "Shaun", premium: false}
// ];

// const users = Users.filter(user => user.premium);


// console.log(users);


//Map Methond
// const Users = [
//     {name: "Austin", price: 100},
//     {name: "Shelly", price: 70},
//     {name: "Luigi", price: 20},
//     {name: "Luigi", price: 50},
//     {name: "Jacky", price: 15},
// ];

// const users = Users.map((user) => {
//     if (user.price > 30) {
//         return {name: user.name, price: user.price /2};
//     } else {
//         return user;
//     }
// })

// console.log(users);


//Reduce Method
// const Users =[
//     {name: "Austin", premium: true},
//     {name: "Shelly", premium: false},
//     {name: "Luigi", premium: true},
//     {name: "Shaun", premium: false},
//     {name: "Joe", premium: true}
// ];

// const PreNum = Users.reduce((acc,curr)=>{
// if (curr.premium === true ) {
//     acc++;
// }
// return acc;
// },0)

// console.log(PreNum);

//Sort Method

// const scores =[10,30,15,25,50,40,5];

// scores.sort( (a,b)=> a-b );
// console.log(scores);


/**************/
//Add ToDo



const addForm = document.querySelector('.add');
const list = document.querySelector("todos");

generateTemplate = todo => {
    const html = `
    
    `;
}

addForm.addEventListener('submit', e => {
    e.preventDefault();
    todo = addForm.add.value.trim()
    
    if (todo.length) {
        generateTemplate(todo);
    }
})