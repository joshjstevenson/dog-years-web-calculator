
// Manually check if the user has inputted a valid age.
function validateHumanAge(humanAge) {
    // Age value must be a whole number up to 3 digits.
    if (humanAge !== '' && /^\d{1,3}$/.test(humanAge)) {
        return true;
    } else {
        return false;
    }
}

// Take user input for dogYears function.
function userData() {
    // Accessing form data.
    let humanName = document.getElementById("humanName").value;
    var humanAge = document.getElementById("humanAge").value;
    // Call dogYears function using form data only if a valid age is given.
    if (validateHumanAge(humanAge) === true) {
        dogYears(humanName, humanAge);
    } else {
        alert("Age value must be a whole number up to three digits [0-9].");
    }
}

// Calculate dog years based on human age and return message.
function dogYears(humanName, humanAge) {
    // Calculate human years into dog years.
    let earlyYears = 2;
    earlyYears = earlyYears * 10.5;
    let laterYears = humanAge - 2;
    laterYears *= 4;
    let humanAgeInDogYears = earlyYears + laterYears;
    /* Message to user, providing calculation result.
    Also takes the user's name and sets the first
    letter to upper case if not already. If no user name
    is given, user name defaults to 'User'.
    */
    humanName = humanName.charAt(0).toUpperCase() + humanName.slice(1);
    let userName = humanName || 'User';
    // Calls displayOutput function to show output String on HTML.
    displayOutput(`Hello ${userName}, you are ${humanAge} human years old, \n that makes you ${humanAgeInDogYears} in dog years!`);
}

// Display dog years message to HTML.
function displayOutput(message) {
    // Display dog years calculation to the outputArea div
    document.getElementById('outputArea').innerText = message;
}

