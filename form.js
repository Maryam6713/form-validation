function formSub() {
    // Validation regex patterns
    var emailValid = /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-Z]{2,4}$/;
    var passwordValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/; 
    var cnicValid = /^[0-9]{5}-[0-9]{7}-[0-9]{1}$/;
    var contactValid = /^03[0-9]{2}[0-9]{7}$/;

    // Target fields
    var emailField = document.getElementById("exampleInputEmail1");
    var passwordField = document.getElementById("exampleInputPassword1");
    var cnicField = document.getElementById("cnicNumber");
    var contactField = document.getElementById("contactNumber");

    // Email validation
    if (!emailValid.test(emailField.value)) {
        swal("Please enter a valid email address");
        emailField.focus();
        emailField.style.background = "yellow";
        return false;
    }

    // Password validation
    if (!passwordValid.test(passwordField.value)) {
        swal("Password must contain at least 6 characters, including uppercase, lowercase, number, and a special character.");
        passwordField.focus();
        passwordField.style.background = "yellow";
        return false;
    }

    // CNIC validation
    if (!cnicValid.test(cnicField.value)) {
        swal("Please enter a valid 13-digit CNIC number in the format XXXXX-XXXXXXX-X");
        cnicField.focus();
        cnicField.style.background = "yellow";
        return false;
    }

    // Contact number validation
    if (!contactValid.test(contactField.value)) {
        swal("Please enter a valid 11-digit contact number starting with 03");
        contactField.focus();
        contactField.style.background = "yellow";
        return false;
    }

    // Reset field background colors upon successful validation
    emailField.style.background = "white";
    passwordField.style.background = "white";
    cnicField.style.background = "white";
    contactField.style.background = "white";

    // If all fields are valid, form submission proceeds
    swal("Form successfully submitted!");
    return true;
}
