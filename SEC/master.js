function snackbar() {
    document.getElementById("snackbar").style.bottom = "38px";
}

function nosnackbar() {
    document.getElementById("snackbar").style.bottom = "-300px";
}

function validate(){
    var mail = document.forms['mform']['Email'].value;
    var name = document.forms['mform']['Name'].value;
    var contact = document.forms['mform']['Whatsapp'].value;
    var sweet = document.forms['mform']['Sweets'].value;

    if (mail == "" || name == "" || contact == "" || sweet == ""){
        alert("Please fill all Details");
    }
    else{
        snackbar()
    }
}
// function snackbar(){
   
//     snack = document.getElementById("snackbar");
//     snack.style.display = "block";
    
    
// }
// function nosnackbar() {

//     snack = document.getElementById("snackbar");
//     snack.style.display = "none";


// }

