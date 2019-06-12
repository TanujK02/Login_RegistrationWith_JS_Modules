var register = (function(){
	
	
	
	function validate(){
		alert("hi");
		
		 var name = document.idregform.name.value;
	     var email = document.idregform.email.value;
	     var pass = document.idregform.pass.value;
	     var confpass = document.idregform.confpass.value;
	     
	     
	     
	     var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	     var passformat = /^(?=.*\d)(?=.*[a-zA-Z]).{6,20}$/;
	     
	     
	     if(  name == null || name =="" || name.length<3 || !isNaN(name) || email == null || email =="" ||
	    	  !mailformat.test(email) ||  pass == null || pass =="" ||  pass.length<6  ||  !passformat.test(pass)
	    	  || confpass == null || confpass ==""  ||  pass != confpass
	       )
	     {
	    	 alert("hi");
	    	 if(name == null || name =="")
	    	 {
	    	        document.getElementById('sidname').innerHTML="** Please Enter your Name";
	    	 		//return false;
	    	 }   	 
	    	 else if(name.length<3)
			     {
				        document.getElementById('sidname').innerHTML="** Name Should be at least 3 characters";
				 		//return false;
				 }
	    	 else if(!isNaN(name))
			     {
				        document.getElementById('sidname').innerHTML="** only alphabates are allowed";
				 		//return false;
				 }
	    	 else
	    		 {
	    		 		document.getElementById('sidname').innerHTML="";
	    		 }
		     if(email == null || email =="")
				 {
				        document.getElementById('sidemail').innerHTML="** Please Enter your email id";
				 		//return false;
				 }
		     else if(!mailformat.test(email))
				 {
				        document.getElementById('sidemail').innerHTML="** Please Enter a valid email id";
				 		//return false;
				 }
		     else
		    	 {
		    	 		document.getElementById('sidemail').innerHTML="";
		    	 }
		     if(pass == null || pass =="")
				 {
				        document.getElementById('sidpass').innerHTML="** Please Enter your secret password";
				 		//return false;
				 }
		     else if(pass.length<6)
				 {
				        document.getElementById('sidpass').innerHTML="** Length of password should be at least 6 letters";
				 		//return false;
				 }
		     else if(!passformat.test(pass))
				 {
				        document.getElementById('sidpass').innerHTML="** Password should contain at least one alphabate and one digit";
				 		//return false;
				 }
		     else
		    	 {
		    	 		document.getElementById('sidpass').innerHTML="";
		    	 }
		     if(confpass == null || confpass =="")
				 {
				        document.getElementById('sidconfpass').innerHTML="** Please confirm your secret password";
				 		//return false;
				 }
		     else if(pass != confpass)
		    	 {
		    	 		document.getElementById('sidconfpass').innerHTML="** Password and confirm password field are not same";
				 		//return false;
		    	 }
		     else
		     	 {
		    	 		document.getElementById('sidconfpass').innerHTML="";
		     	 }
		     
		     return false;
	     }
	     
	     else
	     	{
			    	 alert('true');
			         return true;
	     	}
	}
	
	return {
		validate:validate
	};
	
})();