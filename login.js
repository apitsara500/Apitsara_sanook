function getParams() {
	var idx = document.URL.indexOf('?');
	var params = new Array();
	if (idx != -1) {
		var pairs = document.URL.substring(idx+1, document.URL.length).split('&');
		for (var i=0; i<pairs.length; i++) {
			nameVal = pairs[i].split('=');
			params[nameVal[0]] = nameVal[1];
		}
   }
	return params;
}

window.onload = loginLoad;
function loginLoad(){
  var loginpage = document.getElementById("myLogin");
  loginpage.onsubmit = checkLogin; 
  var parameter = getParams();
  console.log(parameter["username"]);
  console.log(parameter["password"]);
}

function checkLogin(){
	
  var parameter = getParams();
  var username = document.forms["myLogin"]["username"]
  var password = document.forms["myLogin"]["password"]

  if(parameter["username"] == username.value && parameter["password"] == password.value){
	  alert("ล็อคอินสำเร็จ")
  }
  else{
	  alert("รหัสผ่านไม่ถูกต้อง")
	  return false;
  }
}
			