$(document).ready(function() {
    function validateForm() {
    
        var email = $("#email").val();
        var password = $("#password").val();
        var valid = true;

        
        $("#email-error").text("");
        $("#password-error").text("");

        
        var emailPattern = /^[a-z][a-z0-9_.]*@(gmail|yahoo|hotmail|outlook)\.com$/; 

        // email valid
        if (!emailPattern.test(email)) {
            $("#email-error").text("Please enter a valid email.");
            valid = false;
        }

        // pswd validation
        if (password.length < 6) {
            $("#password-error").text("Please enter a valid password (min. 6 characters).");
            valid = false;
        }

        // if not filled properly submit wont be enabled
        if (valid) {
            $("#submitBtn").prop("disabled", false);
        } else {
            $("#submitBtn").prop("disabled", true);
        }
    }

    // just like oninput in js
    $("#email, #password").on("input", function() {
        validateForm();
    });

    // 
    $("#log").on("submit", function(event) {
        if ($("#submitBtn").prop("disabled")) {
            event.preventDefault(); // Prevent form submission if button is disabled
        }
    });
});





/*jQuery('#log').validate({
	rules:{
		email:{
			required:true,
			email:true
		},
		password:{
			required:true,
			minlength:5
		},
	},messages:{
		email:{
			required:"Please enter valid email",
			email:"Please enter valid email",
		},
		password:{
			required:"Please enter your password",
			minlength:"Password must be 5 char long"
		},
	},
	submitHandler:function(form){
		form.submit();
	}
});*/