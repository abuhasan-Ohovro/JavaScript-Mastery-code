const user = {
    userName : "Hasan",
    loginCount : 8,
    signedIN : true,

    getUserDetails : function(){
        console.log(`UserName : ${this.userName}`);
        console.log(this);
    }
}
console.log(user.getUserDetails());
console.log(this)

// Discussion about costructor function

