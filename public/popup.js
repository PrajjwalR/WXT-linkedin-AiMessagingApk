// document.addEventListener('DOMContentLoaded', () => {
//     const popup = document.getElementById('popup');
//     const inputArea = document.getElementById('inputArea');
//     const generateBtn = document.getElementById('generateBtn');

//     chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
//         if (request.action === "openPopup") {
//             popup.style.display = 'flex';
//         }
//     });

//     document.addEventListener('click', (event) => {
//         if (!popup.contains(event.target) && event.target.id !== 'iconId') { 
//             popup.style.display = 'none';
//         }
//     });

//     generateBtn.addEventListener('click', () => {
//         const userPrompt = inputArea.value;
//         console.log("User Prompt: ", userPrompt);
//     });
// });


alert("Hello, good to see you!")