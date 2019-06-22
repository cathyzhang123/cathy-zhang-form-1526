 //DECLARING VARIABLES 
// Declare variables that will
// store references for 
// <input type="button" id="submit-button">,
let btn = document.getElementById("sumbit-button");
// <input type="text" id="fullname">,
let fullname = document.getElementById("fullname");
// <input type="text" id="email">
let email = document.getElementById("email");
// <textarea id="message"></textarea>
let message = document.getElementById("message");
// Declare variable that will 
// store regular expression for email
let regEmail = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

// READY TO START CODING
// Start with your function here
// (come up with the meaningful name).
function validateForm() {
    console.clear();
    // START WITH INITIALLY 2 "EMPTY BUCKETS" (DATA/ERRORS) 
    // Declare object that will store the form-data
    let data = {};
    // Declare array that will store the errors
    let errors = [];

/*  +-----------+    
    | FULL NAME |
    +-----------+
    // Check if fullname is not empty.*/
    if (fullname.value !== "") {
    // If so:
       // Pass the collected value
       // to your object "data".
        data.fullname = fullname.value;
    // Otherwise:
       // Create a corresponding error-message
       // and add it to your array "errors".
      } else {
        errors.push("Full name is missing. Please enter your full name!");
    // End your conditional here.
      }

 /*  +-------+    
    | EMAIL | 
    +-------+
    // Check if email is not empty.*/
    if (email.value !== "") {
       // Check if email is valid.
       if (email.value.match(regEmail)) {
       // If so:
          // Pass the collected value
          // to your object "data".
          data.email = email.value;
        } else {
       // Otherwise:
          // Create a corresponding error-message
          // and add it to your array "errors".
          errors.push("You have entered an invalid email address!");
       // End your nested conditional here.
        }
    // Otherwise:
       // Create a corresponding error-message
      } else {
       // and add it to your array "errors"
       errors.push("Email is missing. Please enter your email!");
    // End your outer conditional here.
      }


 /*   +---------+    
    | MESSAGE | 
    +---------+
    // Check if message is not empty.*/
    if (message.value !== "") {
    // If so:
       // Pass the collected value
       // to your object "data".
        data.message = message.value;
      } else {
    // Otherwise:
       // Create a corresponding error-message
       // and add it to your array "errors"
        errors.push("Message is missing. Please enter your message!")
    // End your conditional here.
      }

  /*  +-----------------+
    | FEEDBACK/ERRORS |
    +-----------------+
    // Check if there is anything in array errors*/
    if (errors.length !== 0) {
       // If so: 
       // Print it in JavaScript console.
        // 1. print in line
        console.log(`ERRORS:  ${errors} `);
        // 2. print in object type
        console.log("ERRORS: ", errors);
    // Otherwise:
       // Print the data in JavaScript console.
      } else {          
         // 1. print in line   
        console.log(`Your full name is: ${data.fullname}`);
        console.log(`Your email is: ${data.email}`);
        console.log(`Your message is: ${data.message}`);
        // 2. print in object type
        console.log("COLLECTED DATA: ", data);
       // Clear text-fields 
        fullname.value = "";
        email.value = "";
        message.value = "";
    // End your conditional here.
      }
// Close your function here
 }   

// Register your form to "click" event.*/
btn.addEventListener("click", validateForm);



    
   
    
    

