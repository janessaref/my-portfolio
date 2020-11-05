// $(document).ready(function() {
//     // Getting references to our form and input
//     var contactForm = $("form.contactForm");
//     var emailInput = $("input#emailInput");
//     var nameInput = $("input#nameInput");
//     var messageInput = $("input#messageInput");

//     // When the signup button is clicked, we validate the email and password are not blank as well as the username
//     contactForm.on("submit", function(event) {
//         event.preventDefault();
//         var userData = {
//             name: nameInput.val().trim(),
//             email: emailInput.val().trim(),
//             message: messageInput.val().trim()
//         };

//         contactMe(userData.name, userData.email, userData.message);
//         nameInput.val("");
//         emailInput.val("");
//         messageInput.val("");
//     });

//     // Does a post to the signup route. If successful, we are redirected to the members page
//     // Otherwise we log any errors
//     function contactMe(name, email, message) {
//         $.post("/api/contacts", {
//             name: name,
//             email: email,
//             message: message
//         });
//     }
// });