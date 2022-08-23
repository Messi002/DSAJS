class User{
    
    constructor(name='Austin',email='Austin@mirsquared.cm'){
        this.name = name,
        this.email=email
    }

    login(){
        console.log(`${this.name} just logged in...`);
    }
}

const userOne = new User();
console.log(userOne.name, userOne.email);
const userTwo = new User('Lareth','lareth@mirsquared.com');
console.log(userTwo.name,userTwo.email);
userOne.login();
userTwo.login();

