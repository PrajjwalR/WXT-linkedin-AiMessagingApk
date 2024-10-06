// document.addEventListener('DOMContentLoaded', () => {
//     const popup = document.getElementById('popup');
//     const inputArea = document.getElementById('inputArea');
//     const generateBtn = document.getElementById('generateBtn');

//     // Show popup when the icon is clicked
//     chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
//         if (request.action === "openPopup") {
//             popup.style.display = 'flex';
//         }
//     });

//     // Hide the popup when clicking outside of it
//     document.addEventListener('click', (event) => {
//         if (!popup.contains(event.target) && event.target.id !== 'iconId') { // Replace 'iconId' with your actual icon ID if needed
//             popup.style.display = 'none';
//         }
//     });

//     // Add functionality to the generate button
//     generateBtn.addEventListener('click', () => {
//         const userPrompt = inputArea.value;
//         console.log("User Prompt: ", userPrompt);
//         // Add functionality to handle the prompt here
//         // You might want to send this to your background script or perform an action
//     });
// });


alert("Hello")