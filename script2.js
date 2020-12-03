var generateBtn = document.querySelector("#generate");

//random password values
    var lenghtEl = 8;
    var yesUpperEl = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var yesLowerEl = "abcdefghijklmnopqrstuvwxyz";
    var yesNumberEl = "0123456789";
    var yesSymbolEl = "!@#$%^&*()_+-=|?.<>,";


// Write password to the #password input 
function writePassword() {
    
    // Verify lenght
    getPasswordLength = parseInt(prompt('How long do you require your password? '));
    if (getPasswordLength >= 8 && getPasswordLength <= 128) {   //string?? min-8 max-128
        
        // Confirm criteria 
        var finalPassword = confirm("Would you like to include an UPPERCASE?") ? yesUpperEl : '';
            //console.log(finalPassword.value);
            finalPassword = confirm("Would you like to include a lowercase?") ? finalPassword + yesLowerEl : finalPassword;
            //console.log (finalPassword.value);
            finalPassword = confirm("Would you like to include Numbers(0-9)?") ? finalPassword + yesNumberEl : finalPassword;
            //console.log (finalPassword.value);
            finalPassword = confirm("Would you like to include some Special Characters?") ? finalPassword + yesSymbolEl : finalPassword;
            //console.log (finalPassword.value);
    
           
        if (finalPassword) {
           function generatePassword() {
                let password = '';

                for(var i = 0; i < getPasswordLength; i++) {
                    password = password + finalPassword.charAt(Math.floor(Math.random() * finalPassword.length));
                };

                return password;
            };

            var password = generatePassword()

            var passwordText = document.querySelector("#password");
    
            passwordText.value = password;
            //console.log(password.value);
        }
        
        else {
            alert ("You must select a criteria, Please try again");
        };
    }

    else {
        alert("Passwords are minimum 8 digits but not over 128. Please try again");
    };
    
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

