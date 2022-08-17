// button = document.querySelector("button");
// popup = document.querySelector(".wrapper");
// closeup = document.querySelector(".close");

// button.addEventListener('click', () =>{
//  popup.style.display = "block";
// });

// closeup.addEventListener('click', (e) =>{
//         console.log('closeup fired here!');
//         popup.style.display = "none";
//         e.stopPropagation();
//        });

// popup.addEventListener('click', (e) =>{
//         console.log('popup fired here!');
//         popup.style.display = "none";
//         e.stopPropagation();

//        });



// form = document.querySelector(".signup-form");
// feedback = document.querySelector(".feedback");
// const usernamePattern = /^[a-zA-Z]{6,12}$/;


// form.addEventListener('submit', e => {
//         e.preventDefault();
        // console.log( form.username.value);
// const username = form.username.value;

// if (usernamePattern.test(username)) {
//  feedback.setAttribute("id",'success');
//  feedback.textContent = 'Valid username';
// }else{
//  feedback.setAttribute("id",'error');
// feedback.textContent = 'Invalid username must contain 6-12 characters and only characters';
// }

// })

// regex101.com for pattern creation
// form.username.addEventListener('keyup', e => {
//         if (usernamePattern.test(e.target.value)) {
//                 form.username.setAttribute('class','success');
//         } else {
//                 form.username.setAttribute('class','error');  
                
//         }
// })


const correctAnswers = ['B','B','B','B'];
const form = document.querySelector('.quiz-form');
const answerDiv = document.querySelector(".answer-here");

form.addEventListener('submit', e =>{
 e.preventDefault();
 
 let score = 0;
 const userAnswers = [form.q1.value,form.q2.value,form.q3.value,form.q4.value];
console.log(userAnswers);
 userAnswers.forEach( (answer, index)=>{
        if (answer === correctAnswers[index]) {
                score +=25;
        }
 } )

answerDiv.textContent= `${score}%`;
});