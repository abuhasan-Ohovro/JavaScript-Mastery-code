const user = {
    username : "hasan",
    price : 199,

    welcomeMassage : function(){
        console.log(`${this.username}, Welcome to our website`);
    }
}
user.welcomeMassage()
user.username = "Shainndha"
user.welcomeMassage()