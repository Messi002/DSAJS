// let ans = null;

// console.log(ans);
// fullName = "Hello World"
// email = "larethgang@gmail.com.cm"

// console.log(fullName[3]);
// console.log(fullName.length);
// console.log(fullName.toUpperCase()); //Methods end with ()
// console.log(email);
// let index = email.indexOf("@"); 
// console.log(index);

// let result = email.lastIndexOf("l");
// console.log(result);

//slice, sliice a section from the string

// let result = email.slice(4,10);
// console.log(result);

// let result1 = email.substr(4,10);
// console.log(result1);

// let result = email.replace('g','O');
// console.log(result);


// let radius = 10;
// const pi = 3.14;

// let result = pi * radius**2;
// console.log(result);

//order of operation - B I D M A S  where the I refers to indices like **

// radius +=10;
// console.log("10" / 2);

// console.log(`This is anothery way of writing text by using template literals ${result}`);

//creating html templates
// let html= `
// <h2>${radius}</h2>
// <p>${pi}</p>
// `;

// let ninjas = ["shaun",'ryu','chun-li'];

// ninjas[1]='ken';

// console.log(ninjas[1]);
// console.log(ninjas.length);
// let result = ninjas.join(" ")
// console.log(result);
// console.log(ninjas.indexOf("ryu"));
//also concat
// console.log(ninjas.push("ken"));
// console.log(ninjas);
// let ages = ["shaun",'ryu','chun-li'];

// ninjas[1]='ken';

// console.log(ninja[1]);

// let email = 'lareth@gmail.com'
// let result = email.includes("@");
//includes equivalent to contain in dart
// console.log(result);

// console.log(25 !== "25");
 
// String() converting to a string
// Boolean 0, empty string are considered as a falsey value. 
// console.log(score + 1);
// console.log(typeof score);


// password = "lareth@gmail.com"

// console.log(password.includes("@")
// );

// const array = [5,100,10,80,50,1000,10];

// let item =0;

// for (let i = 0; i < array.length; i++) {
//     if (array[i] > item) {
//         item = array[i];
//     }    
// }

// console.log(item);

// const speak = ()=>{
//  console.log('hello');
// }


//Function hoisting means declare function before calling it
// speak();


//Objects


// let user = {
//     name : "Austin",
//     age: 19,
//     email : "lareth@gmail.com",
//     blogs : [
//         {title: "10 things to know", likes: 30},
//         {title : "10 things to know", likes:45}
//     ],
    // login : () => console.log("The user is logged in"),
    // logBlogs(params) {
        // console.log("You can follow the blogs:");
        // this.blogs.forEach( blog => console.log(blog.title, blog.likes));
        // this.blogs.map( (blog)=> console.log(`<h1> ${blog} </h1>`)  )
//     }
// }

// console.log(user.name);
// console.log(user.age);
// user.age = 18;
// console.log(user.age);
// user["email"];
// console.log(user['email']="gareth@gmail.com");

// user.login();
// user.logBlogs();


//math object

console.log(Math);
 num1 = 8.2;
num2 = 5.8;
 console.log(Math.floor(num1));
 console.log(Math.ceil(num2));
 console.log(Math.trunc(num2));
 console.log(Math.round(num2));

 let random = Math.random();

 console.log(Math.round(random * 100));