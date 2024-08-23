$(document).ready(function() {
    function validateForm() {
        let firstName = $("#firstName").val();
        let lastName = $("#lastName").val();
        let email = $("#email").val();
        let password = $("#password").val();
        let confirmPassword = $("#confirmPassword").val();
        let phone = $("#phone").val();
        let gender = $("input[name='gender']:checked").val();
        let state = $("#state").val();
        let city = $("#city").val();
        let dob = $("#dob").val();
        let username = $("#username").val();
        let address = $("#address").val();
        
        let valid = true;

        $("#firstName-error").text("");
        $("#lastName-error").text("");
        $("#email-error").text("");
        $("#password-error").text("");
        $("#confirmPassword-error").text("");
        $("#phone-error").text("");
        $("#gender-error").text("");
        $("#state-error").text("");
        $("#city-error").text("");
        $("#dob-error").text("");
        $("#username-error").text("");
        $("#address-error").text("");

        let namePattern = /^[A-Za-z]+$/;
        let usernamePattern = /^[A-Za-z0-9_]{8}$/;

        if (!namePattern.test(firstName)) {
            $("#firstName-error").text("Please enter a valid first name.");
            valid = false;
        }
        
        if (!namePattern.test(lastName)) {
            $("#lastName-error").text("Please enter a valid last name.");
            valid = false;
        }

        let emailPattern = /^[a-z][a-z0-9_.]*@(gmail|yahoo|hotmail|outlook)\.com$/;
        
        if (!emailPattern.test(email)) {
            $("#email-error").text("Please enter a valid email.");
            valid = false;
        }

        if (password.length < 6) {
            $("#password-error").text("Please enter a valid password (min. 6 characters).");
            valid = false;
        }

        if (password !== confirmPassword) {
            $("#confirmPassword-error").text("Passwords do not match.");
            valid = false;
        }

        if (!usernamePattern.test(username)) {
            $("#username-error").text("Username must be 8 characters long and can only contain letters, numbers, and underscores.");
            valid = false;
        }

        let phonePattern = /^[6-9]\d{9}$/;
        if (!phonePattern.test(phone)) {
            $("#phone-error").text("Please enter a valid phone number.");
            valid = false;
        }

        if (!gender) {
            $("#gender-error").text("Please select your gender.");
            valid = false;
        }

        if (!state) {
            $("#state-error").text("Please select a state.");
            valid = false;
        }

        if (address.trim() === "") {
            $("#address-error").text("Please type your address.");
            valid = false;
        } else {
            let addressPattern = /^[a-zA-Z0-9\s,.-]*$/; 
            if (!addressPattern.test(address)) {
                $("#address-error").text("Address contains invalid characters.");
                valid = false;
            }
        }

        if (!city) {
            $("#city-error").text("Please select a city.");
            valid = false;
        }

        if (dob) {
            let selectedDate = new Date(dob);
            let day = selectedDate.getDate();
            let month = selectedDate.getMonth();
            let year = selectedDate.getFullYear();

            let ageLimit = 18;

            let mydate = new Date();
            mydate.setFullYear(year, month, day);

            let currdate = new Date();
            currdate.setFullYear(currdate.getFullYear() - ageLimit);

            let currentDate = new Date();
            if (mydate > currentDate) {
                $("#dob-error").text("Future date is not allowed.");
                valid = false;
            } else if (currdate < mydate) {
                $("#dob-error").text("Person must be at least 18 years old.");
                valid = false;
            }
        }

        if (valid) {
            $("#submitBtn").prop("disabled", false);
        } else {
            $("#submitBtn").prop("disabled", true);
        }
    }

    $("input, textarea, select").focus(function() {
        $(this).css({
            "transition": "0.5s", 
            "border-color": "rgb(178, 34, 34)", 
            "background-color": "rgb(255, 245, 240)" 
        });
    });

    $("input, textarea, select").blur(function() {
        $(this).css({
            "border-color": "rgb(221, 221, 221)", 
            "background-color": "rgb(255, 255, 255)" 
        });
    });

    $("#firstName,#lastName,#email,#password,#username,#confirmPassword,#phone,#address,input[name='gender'], #state,#city,#dob").on("input change", function() {
        validateForm();
    });

    $("#regForm").on("submit", function(event) { //fyi there is also a .off() to remove event handlers.
        if ($("#submitBtn").prop("disabled")) {
            event.preventDefault();
        }
    });
});
