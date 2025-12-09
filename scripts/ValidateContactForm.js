/* Validate Email Script ver 1.0
 * Author: Jagger Walraven
 * Purpose: Validates email entry in contact form
 * Date Last Updated: 12/09/2025
 */

/* Changelog:
 * 12/09/2025 ver 1.0: Initial script
 */

//grab all relevant elements from document
const form = document.getElementById("contact-form");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");
const emailValidationSvg = document.getElementById("email-validation-svg");
const messageValidationSvg = document.getElementById("message-validation-svg");
const emailStatus = document.getElementById("email-status");
const messageStatus = document.getElementById("message-status");

//flags that determine if email or message are valid
let emailVerified = false;
let messageValid = false;

//submit button event
form.addEventListener("submit", function (event) {
    event.preventDefault(); //prevent form's default behavior

    if (!emailVerified && !messageValid) {
        alert("Email is invalid and message needs content!");
    }
    else if (!emailVerified) {
        alert("Email is invalid!");
    }
    else if (!messageValid) {
        alert("Message needs content!");
    }
    else {
        form.submit();
    }
});

//email input event
emailInput.addEventListener("input", () => {
    emailVerified = ValidateEmail();

    if (emailVerified) {
        emailValidationSvg.src = "images/svgs/check.svg";
        emailStatus.textContent = "Email is valid!"
    }
    else {
        emailValidationSvg.src = "images/svgs/warning.svg";
        emailStatus.textContent = "Email is invalid!"
    }
});

//message input event
messageInput.addEventListener("input", () => {
    messageValid = ValidateMessage();

    if (messageValid) {
        messageValidationSvg.src = "images/svgs/check.svg";
        messageStatus.textContent = "Message is valid!"
    }
    else {
        messageValidationSvg.src = "images/svgs/warning.svg";
        messageStatus.textContent = "Message is invalid!"
    }
});

//validates the email with regex
function ValidateEmail() {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; //matches user@example.com
    return emailRegex.test(emailInput.value.trim());
}

//validates the message by checking if its length is greater than 0
function ValidateMessage() {
    return messageInput.value.trim().length > 0;
}