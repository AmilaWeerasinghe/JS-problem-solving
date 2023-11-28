var userOne = {
    name:'Amila',
    email: "test@gmail.com",
    login(){
        console.log(this.name+' loggedin');
    }
}

userOne.login()

class User {
    constructor(email,name){
        this.email = email;
        this.name = name;
        this.score =0; 
    }

    login(){
        console.log(this.name+' Logged in');
        return this;
    }

    updateScore(){
        this.score++;
        console.log(this.score);
    }
}

const user1= new User('test@email.com','testName');

user1.login().updateScore(); // method chaning with return this
user1.updateScore();

const user2 = new User('est@gmial.com','testName2');

let users = [user1,user2];

class Admin extends User {
    deleteUser (user){
        users = users.filter(u=> {
            return u.name != user.name
        })

    }
}

const admin = new Admin('testmail','testAdminName');

admin.deleteUser(user2);

console.log(users);