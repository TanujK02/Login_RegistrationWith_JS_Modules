var login = (function(){
	  
function validate()
{
    
	var email = document.loginform.loginemail.value;
    var pass = document.loginform.loginpass.value;
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var passformat = /^(?=.*\d)(?=.*[a-zA-Z]).{6,20}$/;
    
    if(   email == null || email =="" ||
      	  !mailformat.test(email) ||  pass == null || pass =="" ||  pass.length<6  ||  !passformat.test(pass)
      	  
         )
       {
			if(email == null || email =="")
				 {
				        document.getElementById('sidlemail').innerHTML="** Please Enter your email id";
				 		//return false;
				 }
			else if(!mailformat.test(email))
				 {
				        document.getElementById('sidlemail').innerHTML="** Please Enter a valid email id";
				 		//return false;
				 }
			else
				 {
				 		document.getElementById('sidlemail').innerHTML="";
				 }
			if(pass == null || pass =="")
				 {
				        document.getElementById('sidlpass').innerHTML="** Please Enter your secret password";
				 		//return false;
				 }
			else if(pass.length<6)
				 {
				        document.getElementById('sidlpass').innerHTML="** Length of password should be at least 6 letters";
				 		//return false;
				 }
			else if(!passformat.test(pass))
				 {
				        document.getElementById('sidlpass').innerHTML="** Password should contain at least one alphabate and one digit";
				 		//return false;
				 }
			else
				 {
				 		document.getElementById('sidlpass').innerHTML="";
				 }
			return false;
       }
    else
    	{
    			return true;
    	}
			}
return {
    validate:validate

  };
})();