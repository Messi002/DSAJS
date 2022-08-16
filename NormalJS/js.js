// button = document.querySelector("button");
// popup = document.querySelector(".wrapper");
// closeup = document.querySelector(".close");

// button.addEventListener('click', () =>{
//         console.log('Button fired here!');
//  popup.style.display = "block";
// });

// closeup.addEventListener('click', () =>{
//         console.log('closeup fired here!');
//         popup.style.display = "none";
//        });

// popup.addEventListener('click', () =>{
//         console.log('popup fired here!');
//         popup.style.display = "none";
//        });

form = document.querySelector(".signup-form");
form.addEventListener('submit', e => {
        e.preventDefault();
        console.log( form.username.value);
})