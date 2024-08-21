function checkFirstName() {
    var isName = /^[a-zA-Z]+$/; 
    let nameInput = document.getElementById("fname");

    if (nameInput.value.trim() === "") {
        setError(nameInput, "First name cannot be empty");
    } else if (!isName.test(nameInput.value.trim())) {
        setError(nameInput, "First name cannot contain numbers or special characters");
    } else {
        setSuccess(nameInput);
    }
}

function checkLastName() {
    var isName = /^[a-zA-Z]+$/; 
    let nameInput = document.getElementById("lname");

    if (nameInput.value.trim() === "") {
        setError(nameInput, "Last name cannot be empty");
    } else if (!isName.test(nameInput.value.trim())) {
        setError(nameInput, "Last name cannot contain numbers or special characters");
    } else {
        setSuccess(nameInput);
    }
}

//Parents name check below

function checkpFirstName() {
    var isName = /^[a-zA-Z]+$/; 
    let nameInput = document.getElementById("pfname");

    if (nameInput.value.trim() === "") {
        setError(nameInput, "First name cannot be empty");
    } else if (!isName.test(nameInput.value.trim())) {
        setError(nameInput, "First name cannot contain numbers or special characters");
    } else {
        setSuccess(nameInput);
    }
}


function checkpLastName() {
    var isName = /^[a-zA-Z]+$/; 
    let nameInput = document.getElementById("plname");

    if (nameInput.value.trim() === "") {
        setError(nameInput, "Last name cannot be empty");
    } else if (!isName.test(nameInput.value.trim())) {
        setError(nameInput, "Last name cannot contain numbers or special characters");
    } else {
        setSuccess(nameInput);
    }
}

//dob

function checkDOB() {
    let dobInput = document.getElementById("dob");
    let dobValue = dobInput.value.trim();
    let errorElement = document.getElementById("dob-error");

    if (dobValue === "") {
        setError(dobInput, "Date of birth cannot be empty");
    } else {
        let currentDate = new Date();
        let selectedDate = new Date(dobValue);

        if (selectedDate > currentDate) {
            setError(dobInput, "Date of birth cannot be a future date");
        } else {
            
            let age = currentDate.getFullYear() - selectedDate.getFullYear();
            let monthDifference = currentDate.getMonth() - selectedDate.getMonth();
            if (monthDifference < 0 || (monthDifference === 0 && currentDate.getDate() < selectedDate.getDate())) {
                age--;
            }

        
            if (age < 18) {
                setError(dobInput, "You must be at least 18 years old");
            } else {
                setSuccess(dobInput);
            }
        }
    }
}




//state

function checkState() {
    let stateInput = document.getElementById("state");
    let errorElement = document.getElementById("state-error");

    if (stateInput.value === "") {
        setError(stateInput, "Please select your state.");
    } else {
        setSuccess(stateInput);
    }
}

//grade

function checkGrade() {
    var gradePattern = /^[0-9]{1,2}$/; 
    let gradeInput = document.getElementById("grade");

    if (gradeInput.value.trim() === "") {
        setError(gradeInput, "Grade cannot be empty");
    } else if (!gradePattern.test(gradeInput.value.trim())) {
        setError(gradeInput, "Please enter a valid grade");
    } else {
        setSuccess(gradeInput);
    }
}




//email of both student and parent beloww

function checkEmail() {
    
    var emailPattern = /^[a-z][a-z0-9_.]*@(gmail|yahoo|hotmail|outlook)\.com$/; 
    let emailInput = document.getElementById("email");

    if (emailInput.value.trim() === "") {
        setError(emailInput, "Email cannot be empty");
    } else if (!emailPattern.test(emailInput.value.trim())) {
        setError(emailInput, "Please enter a valid email (gmail, yahoo, hotmail, outlook).");
    } else {
        setSuccess(emailInput);
    }
}

function checkpEmail() {
    var emailPattern = /^[a-z][a-z0-9_.]*@(gmail|yahoo|hotmail|outlook)\.com$/; 
    let emailInput = document.getElementById("pemail");

    if (emailInput.value.trim() === "") {
        setError(emailInput, "Email cannot be empty");
    } else if (!emailPattern.test(emailInput.value.trim())) {
        setError(emailInput, "Please enter a valid email (gmail, yahoo, hotmail, outlook).");
    } else {
        setSuccess(emailInput);
    }
}

//phone number check

function checkPhoneNumber() {
    var phonePattern = /^[6-9]\d{9}$/;
    let phoneInput = document.getElementById("pphone");

    if (phoneInput.value.trim() === "") {
        setError(phoneInput, "Phone number cannot be empty");
    } else if (!phonePattern.test(phoneInput.value.trim())) {
        setError(phoneInput, "Please enter a valid 10-digit phone number starting with 6, 7, 8, or 9");
    } else {
        setSuccess(phoneInput);
    }
}

//address check

function checkFirstAddress() {
    var addressPattern = /^[a-zA-Z0-9\s,]+$/; 
    let addressInput = document.getElementById("address1");

    if (addressInput.value.trim() === "") {
        setError(addressInput, "Address cannot be empty");
    } else if (!addressPattern.test(addressInput.value.trim())) {
        setError(addressInput, "Can only contain letters, numbers, ',' and space");
    } else {
        setSuccess(addressInput);
    }
}

function checkSecondAddress() {
    var addressPattern = /^[a-zA-Z0-9\s,]+$/; 
    let addressInput = document.getElementById("address2");

    if (addressInput.value.trim() === "") {
        setError(addressInput, "Address cannot be empty");
    } else if (!addressPattern.test(addressInput.value.trim())) {
        setError(addressInput, "Can only contain letters, numbers, ',' and space");
    } else {
        setSuccess(addressInput);
    }
}



// city check

function cityCheck() {
    var isName = /^[a-zA-Z]+$/; 
    let nameInput = document.getElementById("city");

    if (nameInput.value.trim() === "") {
        setError(nameInput, "City name cannot be empty");
    } else if (!isName.test(nameInput.value.trim())) {
        setError(nameInput, "City name cannot contain numbers or special characters");
    } else {
        setSuccess(nameInput);
    }
}

// Tshirt

function checkTshirtSize() {
    let tshirtInput = document.getElementById("tshirt");
    let errorElement = document.getElementById("tshirt-error");

    // Check if the T-shirt size is selected
    if (tshirtInput.value === "") {
        errorElement.innerText = "Please select your T-shirt size.";
        errorElement.style.display = "block";  // shows the error message
    } else {
        errorElement.innerText = ""; 
        errorElement.style.display = "none"; 
    }
}


// instrument

function checkInstrument() {
    let instrumentInput = document.getElementById("instrument");
    let errorElement = document.getElementById("instrument-error");

    // Check if the instrument field is empty
    if (instrumentInput.value === "") {
        errorElement.innerText = "Please select your instrument.";
        errorElement.style.display = "block";  // Show the error message
    } else {
        errorElement.innerText = ""; 
        errorElement.style.display = "none";  // Hide the error message
    }
}

//zipcode

function checkZipCode() {
    var zipPattern = /^[0-9]{6}$/; 
    let zipInput = document.getElementById("zip");

    if (zipInput.value.trim() === "") {
        setError(zipInput, "Zip Code cannot be empty");
    } else if (!zipPattern.test(zipInput.value.trim())) {
        setError(zipInput, "Please enter a valid 6-digit Zip Code (numbers only)");
    } else {
        setSuccess(zipInput);
    }
}

//allergies

function checkAllergies() {
    let yesOption = document.getElementById("allyes");
    let noOption = document.getElementById("allno");
    let errorElement = document.getElementById("allergies-error");

    // Check if neither option is selected
    if (!yesOption.checked && !noOption.checked) {
        errorElement.innerText = "Please select an option.";
        errorElement.style.display = "block";  
    } else {
        errorElement.innerText = ""; 
        errorElement.style.display = "none"; 
    }
}


function setError(input, message) {
    let errorShow = document.getElementById(input.id + "-error");
    errorShow.innerText = message;
    errorShow.style.display = "block";  
}

function setSuccess(input) {
    let errorShow = document.getElementById(input.id + "-error");
    errorShow.innerText = ""; 
    errorShow.style.display = "none";  
}

function checkFields(event) {
    checkFirstName();
    checkLastName();
    checkpFirstName();
    checkpLastName();
    checkEmail();
    checkpEmail();
    checkPhoneNumber();
    cityCheck();
    checkFirstAddress();
    checkSecondAddress();
    checkZipCode();
    checkAllergies();
    checkGrade();
    checkState();
    checkDOB();
    checkInstrument();
    checkTshirtSize();

   
}
