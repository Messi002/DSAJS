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
feedback = document.querySelector(".feedback")

form.addEventListener('submit', e => {
        e.preventDefault();
        // console.log( form.username.value);
const username = form.username.value;
const usernamePattern = /^[a-zA-Z]{6,12}$/;

if (usernamePattern.test(username)) {
 feedback.textContent = 'Valid username';
}else{

        feedback.textContent = 'Invalid username must contain 6-12 characters and only characters';}


})

// regex101.com for pattern creation