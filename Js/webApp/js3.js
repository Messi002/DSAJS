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

// filteredTerm = term => {
//    Array.from(list.children)
//     .filter((todo)=>{
//         console.log(todo.textContent.includes(term));
//         return !todo.textContent.toLowerCase().includes(term); 
//     }).forEach((item)=>{
//         item.classList.add('filtered');
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


//********************************************** */
//Building a CLOCK....

// const clock = document.querySelector('.clock');

// tick = () => {
//     const now = new Date();
//     let hour = now.getHours();
//     let mins = now.getMinutes();
//     let secs = now.getSeconds();

//     const html = `
//         <span>${hour}</span>:
//         <span>${mins}</span>:
//         <span>${secs}</span>
//     `;
    
//     clock.innerHTML = html;
// }

// setInterval(tick,1000);


//********************************************** */



//********************************************** */
//Asynchronous Programming...
// const getTodos = callbckfn => {
//     const request = new XMLHttpRequest;

// request.addEventListener('readystatechange', ()=>{
//     if (request.readyState === 4 && request.status === 200) {
//         // console.log(request, request.responseText);
//         callbckfn(undefined, request.responseText);
//     }else if(request.readyState === 4){
//         // console.log('could not fetch data');
//         callbckfn('could not fetch data', undefined);
//     }
// } )

// request.open('GET','https://jsonplaceholder.typicode.com/todos/')
// request.send();

// }

// getTodos((err, data)=>{
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(data);
//     }
// })

//********************************************** */


//********************************************** */
// Weather Pasrt

const cityForm = document.querySelector('form');
const card = document.querySelector('.card');
const details = document.querySelector('.details');
const time = document.querySelector('img .time');
const icon = document.querySelector('.icon img');


const updateUI = (data) => {
    // const cityDets = data.cityDets;
    // const weather = data.weather;

    //destructing objects...
    const {cityDets, weather} = data;

    //update details template
    details.innerHTML = `
    <h5 class="my-3">${cityDets.EnglishName} </h5>
    <div class="my-3">${weather.WeatherText}</div>
    <div class="text-muted display-4 my-4">
        <span class="text-muted">${weather.Temperature.Metric.Value}</span>
        <span class="text-muted">&deg;C</span>
    `;

    // update the night/dary & icon images

    let timeSrc = null;
    if (weather.IsDayTime) {
        timeSrc = `img/day.svg`;
    } else {
        timeSrc = `img/night.svg`;
        
    }
    time.setAtrribute('src', timeSrc)


    //remove the d-none class if present

    if (card.classList.contains('d-none')) {
        card.classList.remove('d-none');
    }
}

const updateCity = async (city) => {
    const cityDets = await getCity(city);
    const weather = await getWeather(cityDets.key);

    return {
         cityDets,
         weather
    }
}

cityForm.addEventListener('submit', e => {
    e.preventDefault();
    const city= cityForm.city.value.trim();
    cityForm.reset();

    //update the ui with new city
    updateCity(city)
    .then( data => updateUI( data))
    .catch( err => console.log(err))

    localStorage.setItem('city',city);
})

if (localStorage.getItem('city')) {
    updateCity(localStorage.getItem('city'))
    .then(data => updateUI(data))
    .catch(err => console.log(err))
}

//********************************************** */
