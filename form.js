function formSub() {
    var emailValid = /^[\w\-\.\+]+\@[a-zA-Z0-9\. \-]+\.[a-zA-z0-9]{2,4}$/;
    var passwordValid =/ (?=^.{6,}$)(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[^A-Za-z0-9]).*/;
    var cnicValid = /^[0-9]{13}$/;
    var contactValid = /^[0-9]{11}$/;

    var targetField = document.getElementById("exampleInputEmail1");
    var passwordField = document.getElementById("exampleInputPassword1");
    var cnicField = document.getElementById("cnicNumber");
    var contactField = document.getElementById("contactNumber");

    // Email validation
    if (targetField.value.length === 0 || targetField.value !== emailValid) {
        alert("Please enter a valid email address");
        targetField.focus();
        targetField.style.background = "yellow";
        return false;
    }

    // Password validation
    if (passwordField.value.length === 0 || passwordField.value !== passwordValid) {
        alert("Please enter a strong password with at least 8 characters, including letters and numbers");
        passwordField.focus();
        passwordField.style.background = "yellow";
        return false;
    }

    // CNIC validation
    if (cnicField.value.length === 0 || !cnicValid.test(cnicField.value)) {
        alert("Please enter a valid 13-digit CNIC number");
        cnicField.focus();
        cnicField.style.background = "yellow";
        return false;
    }

    // Contact number validation
    if (contactField.value.length === 0 || !contactValid.test(contactField.value)) {
        alert("Please enter an 11-digit contact number");
        contactField.focus();
        contactField.style.background = "yellow";
        return false;
    }

    // Resetting the background color of fields upon successful validation
    targetField.style.background = "white";
    passwordField.style.background = "white";
    cnicField.style.background = "white";
    contactField.style.background = "white";

    // If all validations pass, allow the form to be submitted
    return true;
}
