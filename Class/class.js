/* Classes are a template for creating objects. They encapsulate data with code to work on that data. Classes in JS are built on prototypes but also have some syntax and semantics that are unique to classes. */

class user{
    constructor(username,email,password){
        this.username = username;
        this.email = email;
        this.password = password;
    }

    encryptpassword(){
        return `${this.password}245abc`
    }

    changerUserName(){
        return `${this.username.toUpperCase()}`
    }
}
// program to encrypt the password

 const demo = new user("hasan","hasan@gamil,com","hasan");
 console.log(demo.encryptpassword());
 console.log(demo.changerUserName());

//Now we will see if the same work without class and constructor.

function User(userName,email,password){

      this.userName = userName;
      this.email = email;
      this.password = password;
}

User.prototype.encryptpassword = function(){
    return `${this.password}456xyz`
}

User.prototype.changerUserName = function (){
    return  `${this.userName.toUpperCase()}`
}

const demo_02 = new User("korim","korim@gmail.com","Korim");

console.log(demo_02.encryptpassword());
console.log(demo_02.changerUserName());
