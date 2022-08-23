// class User{
    
//     constructor(name='Austin',email='Austin@mirsquared.cm'){
//         this.name = name,
//         this.email=email,
//         this.score = 0;
//     }

//     login(){
//         console.log(`${this.name} just logged in...`);
//         return this;
//     }
//     logout(){
//         console.log(`${this.name} just logged out...`);
//         return this;
//     }
//     incScore(){
//         this.score++;
//         console.log(`${this.name} has a score of ${this.score}`);
//         return this;
//     }
// }

// function User(username='Austin', email='Austin@mirsquared.cm') {
//     this.username = username;
//     this.email = email;
    
// }

// User.prototype.login = function (params) {
//     console.log(`${this.username} has logged in`);
//     return this;
// }

// User.prototype.logout = function (params) {
//     console.log(`${this.username} has logged out`);
//     return this;
// }

// const userOne = new User('Lareth','Lareth@mirsquared.cm');
// console.log(userOne);

// const userOne = new User();
// const userThree = new User('Gareth');
// const userSix = new User('Rareth');
// const userFour = new User('Dareth');
// const userFive = new User('Mareth');
// console.log(userOne.name, userOne.email);
// const userTwo = new User('Lareth','lareth@mirsquared.com');
// console.log(userTwo.name,userTwo.email);
// userOne.login().logout().incScore().incScore();
// userTwo.login();

// let users = [userOne, userTwo,userThree,userFour,userFive,userSix];

// class Admin extends User{
//     deleteUser(user){
//        const userNum= users.filter(userCheck => userCheck != user);
//       console.log(userNum);
//     }
// }

// const AdminOne = new Admin();

// AdminOne.deleteUser(userSix)

