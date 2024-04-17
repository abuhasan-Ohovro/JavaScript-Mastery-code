// Here we will discuss about inheritence of the JavaScript.

class User {
  constructor(userName) {
    this.userName = userName;
  }

  logMe() {
    console.log(`UserName is ${this.userName}`);
  }
}

class Teacher extends User{
    constructor(userName,email,password){
        super(userName);
        this.email = email;
        this.password = password;
    }
}
