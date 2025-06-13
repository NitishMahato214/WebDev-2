function validation(){

    let a=document.getElementById("id").value;
    let b=document.getElementById("name").value;
    let c=document.getElementById("mob").value;
    let d=document.getElementById("mail").value;
    var e=document.getElementById("pass").value;
    var f=document.getElementById("cpass").value;

    

    if(a==""|| b==""||c==""||d==""||e==""||f==""){
        alert("All fields are mandatory");
        return false;
    }

    if(isNaN(a)){
        alert("ID should be number please enter a valid id");
        return false;
    }
    if(b.length<2){
        alert("enter a valid name");
        return false;

    }

    if(c.length<10 ||c.length>10){
        alert(" Mob N. should be of 10 digit   Plese enter a valid no");
        return false;
    }
    if(d.length<6){
        alert("Please enter a valid mail ");
        return false;
    }
    while(e!=f){
        alert("Please enter same password");
        return false;
    }
    
    alert("YOUR DATA HAS BEEN SUBMITTED SUCCESSFULLY");    
    return true;
    
    
}