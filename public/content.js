// content.js

// // This script will run in the context of LinkedIn's pages
// document.addEventListener('click', (event) => {
//   // Check if the clicked element is an input field
//   const target = event.target;
//   console.log("Aman")
//   if (target.classList.contains('msg-form__contenteditable')) {
//     console.log("Hello")
//   alert('LinkedIn message input field clicked!');
// }

// });


// content.js

// Function to add the event listener to the LinkedIn message input field
const addEventListenerToMessageInput = () => {
  const messageInput = document.querySelector('.msg-form__contenteditable');
  console.log("Prajjwal")
  if (messageInput) {
    messageInput.addEventListener('click', () => {
      console.log("Aman")
      alert('LinkedIn message input field clicked!');
    });
  }
};

// Use MutationObserver to detect when the LinkedIn DOM changes (e.g., message input field is loaded)
const observer = new MutationObserver((mutationsList, observer) => {
  // Check if the message input field exists on the page
  if (document.querySelector('.msg-form__contenteditable')) {
    addEventListenerToMessageInput();
    observer.disconnect(); // Stop observing once the input is found and event is attached
  }
});

// Start observing the document for changes
observer.observe(document.body, {
  childList: true,
  subtree: true
});
