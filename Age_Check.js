function checkAge() {
    // Get the user's age from the input field
    var age = parseInt(document.getElementById("ageInput").value);

    // Check if the age is valid
    if (isNaN(age)) {
        document.getElementById("result").innerText = "Please enter a valid age.";
        return;
    }

    // Check age conditions
    if (age >= 19) {
        document.getElementById("result").innerText = "You are old enough to drive, visit a casino, and purchase alcohol in Ontario.";
    } else if (age >= 16) {
        document.getElementById("result").innerText = "You are old enough to drive in Ontario, but not old enough to visit a casino or purchase alcohol.";
    } else {
        document.getElementById("result").innerText = "You are not old enough to drive, visit a casino, or purchase alcohol in Ontario.";
    }
}