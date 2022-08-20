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
const list = document.querySelector(".todos");
const search = document.querySelector(".search > input");

// generateTemplate = todo => {
//     const html = `
//     </li> <li class="list-group-item d-flex justify-content-between align-items-center">
//     <span>${todo}</span>
//     <i class="far fa-trash-alt delete">x</i>
// </li>
//     `;

//     list.innerHTML += html; 

// }

// addForm.addEventListener('submit', e => {
//     e.preventDefault();
//     todo = addForm.add.value.trim()
    
//     if (todo.length) {
//         generateTemplate(todo);
//         addForm.reset();
//     }
// })

//Delete todos 

// list.addEventListener('click', e => {
//     if (e.target.classList.contains('delete')) {
//         e.target.parentElement.remove();
//     }
// });

filteredTerm = term => {
   Array.from(list.children)
    .filter((todo)=>{
        console.log(todo.textContent.includes(term));
        return !todo.textContent.toLowerCase().includes(term); 
    }).forEach((item)=>{
        item.classList.add('filtered');
        // item.classList.remove('filtered');

        
    // })

//     Array.from(list.children)
//     .filter((todo)=>{
//         console.log(todo.textContent.includes(term));
//         return todo.textContent.toLowerCase().includes(term); 
//     }).forEach((item)=>{
//         item.classList.remove('filtered');
        
//     })


// }

// keyup events
// search.addEventListener('keyup', (e)=> {
//     e.preventDefault();
//     term = search.value.trim().toLowerCase();
//     filteredTerm(term);
    
// } )

// const num = [1,2,5,8,10,60,50];
 
// const fil = num.filter((item)=>{
//     return item > 20;
// })

// console.log(fil);