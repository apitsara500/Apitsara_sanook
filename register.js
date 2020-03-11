
window.onload = pageLoad;
function pageLoad(){
    // var forms = document.getElementById("myForm");
    // forms.onsubmit = validateForm;
}

function validateForm() {
    var xz = document.forms["myForm"]["firstname"];
    if (xz == ""){
        alert("กรุณาใส่ชื่อ");
        return false;
    }

    var x = document.forms["myForm"]["password"];
    var y = document.forms["myForm"]["retypepassword"];
    if (x.value == y.value){
        alert("ลงทะเบียนสำเร็จ");
    }

    else{
        var error = document.getElementById("errormsg")
        error.innerHTML = "Error Password"
        return false;
    }
}