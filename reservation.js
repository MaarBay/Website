// Add the novalidate attribute when JS loads
let forms = document.querySelectorAll (".validate");
 
for (let i = 0; i < forms.length; i++) {
     forms[i].setAttribute ("novalidate", true);
 }
// Validate the field
  function hasError (field) {
    // Don't validate buttons and submits
    if (field.type === "submit" || field.type === "button") 
    return;

// Get validity
 let validity = field.validity;

 // If valid, return null
 if (validity.valid) return;

 //If field is required and empty
if (validity.valueMissing) return "Please fill out this field.";

 //If not the right type
if (validity.typeMismatch) return "Please enter the correct email address";

 //If number isn't input number
if (validity.stepMismatch) return "Please enter a number";

// Otherwise, generic error 
return "There is nothing else left, fix it!";

};

// Show an error message
   function showError (field, error) {
    // Add error class to the field
        field.classList.add ("error");
    
        // Get field id or name
        let id = field.id || field.name;
        if (!id) return;
    
    // Create error message
    let message = field.form.querySelector(".error-message#error-for-" + id);
    if (!message) {
    let message = document.createElement ("div");
    message.className = ("error-message");
    message.id = "error-for-" + id;
    field.parentNode.insertBefore (message, field.nextSibling);
    }
    
    // Update error message
    message.innerHTML = error;
    
    //Show error message
    
    message.style.display = "block";
    message.style.visibility = "visible";
    
    };

function removeError (field) {

// Remove error class to field
field.classList.remove ("error");
// get field id or name
let id = field.id || field.name;
if (!id) return;

// Check if an error message is in the DOM
let message = field.form.querySelector (".error-message#error-for-" + id + "");
if (!message) return;

// If so, hide it
message.innerHTML = "";
message.style.display = "none";
message.style.visibility = "hidden";

};

// Listen to all blur events
document.addEventListener ("blur", function (event){
    // Only run if the field is in a form to be validated
       if (!event.target.form.classList.contains ("validate"))
       return;
   // validate the field
       let error = hasError(event.target);
       //console.log(error);

      // If there is an error, show it
      if (error) {
          showError(event.target, error);
          return;
      }
// Otherwise, remove any existing error message
        removeError(event.target);

   // useCapture argument set to true
   }, true);

   // Check all fields on submit
document.addEventListener ("submit", function (event){

    // Only run on forms flagged for validation
    if (!event.target.classList.contains ("validate")) return;

    // Get all of the form elements
    let fields = event.target.elements;

    //Validate each field and store the first field with an error
    // to a variable so we can bring it into focus later

    let error, hasErrors;
    for (let i = 0; i < fields.length; i++) {
        error = hasError (fields[i]);
        if (error) {
            showError (fields[i], error);
            if (!hasErrors) {
                hasErrors = fields [i];
            }
        }
    }

    // If there are errors don't submit

    if (hasErrors) {
        event.preventDefault();
        hasErrors.focus();
    }

    // Otherwise, let the form submit normally

}, false )