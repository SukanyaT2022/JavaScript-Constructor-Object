//username-admin and password-123
//LogIn is object
//constructor is log in --- object is approve

function logIn(){
    this.userName = "admin";
    this.password = "123"
}

 function check(){
    var approve = new logIn()//object is only this line var approve = 
    // new logIn when we call constructor to create object.
     approve.password ="456"// this line we change password
    //read value from text box html
 var un = document.getElementById("user").value;
 var ps = document.getElementById("password").value;
 if (un == approve.userName && ps == approve.password){
    document.write("log in successful")
 }else{
    document.write("log in fail")
 }
 }

 //change pasword we use new fuction

 
