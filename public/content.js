const addIconToMessageInput = () => {
  const messageInput = document.querySelector('.msg-form__contenteditable');
  if (messageInput) {


    // Creating an SVG element for the icon.

    const svgIcon = document.createElement('div')
    svgIcon.className = "svg-icon"
    svgIcon.innerHTML = `<svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g filter="url(#filter0_dd_3_37)">
  <rect x="5" y="1" width="32" height="32" rx="16" fill="white"/>
  <path d="M28.4667 18.7333C28.4667 18.8866 28.4063 19.0335 28.2989 19.1419C28.1915 19.2502 28.0458 19.3111 27.8938 19.3111H26.7482V20.4667C26.7482 20.6199 26.6879 20.7668 26.5804 20.8752C26.473 20.9836 26.3273 21.0444 26.1754 21.0444C26.0235 21.0444 25.8778 20.9836 25.7703 20.8752C25.6629 20.7668 25.6026 20.6199 25.6026 20.4667V19.3111H24.4569C24.305 19.3111 24.1593 19.2502 24.0519 19.1419C23.9445 19.0335 23.8841 18.8866 23.8841 18.7333C23.8841 18.5801 23.9445 18.4331 24.0519 18.3248C24.1593 18.2164 24.305 18.1555 24.4569 18.1555H25.6026V17C25.6026 16.8467 25.6629 16.6998 25.7703 16.5914C25.8778 16.4831 26.0235 16.4222 26.1754 16.4222C26.3273 16.4222 26.473 16.4831 26.5804 16.5914C26.6879 16.6998 26.7482 16.8467 26.7482 17V18.1555H27.8938C28.0458 18.1555 28.1915 18.2164 28.2989 18.3248C28.4063 18.4331 28.4667 18.5801 28.4667 18.7333ZM14.719 12.9555H15.8646V14.1111C15.8646 14.2643 15.925 14.4113 16.0324 14.5196C16.1398 14.628 16.2855 14.6889 16.4375 14.6889C16.5894 14.6889 16.7351 14.628 16.8425 14.5196C16.9499 14.4113 17.0103 14.2643 17.0103 14.1111V12.9555H18.1559C18.3078 12.9555 18.4535 12.8947 18.561 12.7863C18.6684 12.678 18.7287 12.531 18.7287 12.3778C18.7287 12.2245 18.6684 12.0776 18.561 11.9692C18.4535 11.8609 18.3078 11.8 18.1559 11.8H17.0103V10.6444C17.0103 10.4912 16.9499 10.3442 16.8425 10.2359C16.7351 10.1275 16.5894 10.0667 16.4375 10.0667C16.2855 10.0667 16.1398 10.1275 16.0324 10.2359C15.925 10.3442 15.8646 10.4912 15.8646 10.6444V11.8H14.719C14.5671 11.8 14.4214 11.8609 14.314 11.9692C14.2065 12.0776 14.1462 12.2245 14.1462 12.3778C14.1462 12.531 14.2065 12.678 14.314 12.7863C14.4214 12.8947 14.5671 12.9555 14.719 12.9555ZM23.8841 21.6222H23.3113V21.0444C23.3113 20.8912 23.2509 20.7442 23.1435 20.6359C23.0361 20.5275 22.8904 20.4667 22.7385 20.4667C22.5866 20.4667 22.4409 20.5275 22.3334 20.6359C22.226 20.7442 22.1657 20.8912 22.1657 21.0444V21.6222H21.5928C21.4409 21.6222 21.2952 21.6831 21.1878 21.7914C21.0804 21.8998 21.02 22.0467 21.02 22.2C21.02 22.3532 21.0804 22.5002 21.1878 22.6085C21.2952 22.7169 21.4409 22.7778 21.5928 22.7778H22.1657V23.3555C22.1657 23.5088 22.226 23.6557 22.3334 23.7641C22.4409 23.8724 22.5866 23.9333 22.7385 23.9333C22.8904 23.9333 23.0361 23.8724 23.1435 23.7641C23.2509 23.6557 23.3113 23.5088 23.3113 23.3555V22.7778H23.8841C24.036 22.7778 24.1817 22.7169 24.2892 22.6085C24.3966 22.5002 24.4569 22.3532 24.4569 22.2C24.4569 22.0467 24.3966 21.8998 24.2892 21.7914C24.1817 21.6831 24.036 21.6222 23.8841 21.6222ZM26.4124 13.5333L16.4375 23.5946C16.2226 23.8111 15.9313 23.9328 15.6276 23.9328C15.3239 23.9328 15.0326 23.8111 14.8178 23.5946L13.3356 22.101C13.2292 21.9937 13.1448 21.8663 13.0872 21.7261C13.0296 21.5859 13 21.4356 13 21.2838C13 21.1321 13.0296 20.9818 13.0872 20.8416C13.1448 20.7014 13.2292 20.574 13.3356 20.4667L23.3113 10.4054C23.4177 10.298 23.544 10.2129 23.683 10.1548C23.822 10.0967 23.971 10.0668 24.1215 10.0668C24.2719 10.0668 24.4209 10.0967 24.5599 10.1548C24.699 10.2129 24.8253 10.298 24.9317 10.4054L26.4124 11.8989C26.5188 12.0062 26.6032 12.1336 26.6608 12.2738C26.7184 12.4141 26.748 12.5644 26.748 12.7161C26.748 12.8679 26.7184 13.0182 26.6608 13.1584C26.6032 13.2986 26.5188 13.426 26.4124 13.5333ZM25.6026 12.7165L24.1211 11.2222L21.8298 13.5333L23.3113 15.0276L25.6026 12.7165Z" fill="#2563EB" />
  </g>
  <defs>
  <filter id="filter0_dd_3_37" x="0" y="0" width="42" height="42" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
  <feFlood flood-opacity="0" result="BackgroundImageFix"/>
  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
  <feMorphology radius="1" operator="erode" in="SourceAlpha" result="effect1_dropShadow_3_37"/>
  <feOffset dy="4"/>
  <feGaussianBlur stdDeviation="3"/>
  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/>
  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_3_37"/>
  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
  <feMorphology radius="2" operator="erode" in="SourceAlpha" result="effect2_dropShadow_3_37"/>
  <feOffset dy="2"/>
  <feGaussianBlur stdDeviation="2"/>
  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/>
  <feBlend mode="normal" in2="effect1_dropShadow_3_37" result="effect2_dropShadow_3_37"/>
  <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_3_37" result="shape"/>
  </filter>
  </defs>
  </svg>
  `
    svgIcon.alt = 'Input Icon';

    // Style the img element
    svgIcon.style.position = 'absolute';
    // svgIcon.style.right = '50px';  // Adjust to position inside input field
    svgIcon.style.top = '50%';
    svgIcon.style.transform = 'translateY(-50%)';
    svgIcon.style.right = "20px"
    svgIcon.style.width = '20px';   // Adjust icon size as needed
    svgIcon.style.height = '20px';  // Adjust icon size as needed
    svgIcon.style.pointerEvents = 'auto'; // Allow clicks on the icon
    svgIcon.style.zIndex = '1'; // Ensure it appears above other elements

    // Ensure the parent container is positioned relatively for absolute positioning to work
    messageInput.style.position = 'relative';
    messageInput.appendChild(svgIcon);

    // Add click event listener to the icon for alert
    svgIcon.addEventListener('click', (event) => {
      event.stopPropagation(); // Prevent click event from bubbling to the input field
      // console.log("Prajjwal")
      // alert('Icon clicked!');
      PopupModal()
      
    });
  }
  window.addEventListener('click', function (event) {
  // Check if the click is outside of the messageInput
  if (!messageInput.contains(event.target)) {
    // alert("BYYY");
    
    // Find the SVG icon that was added
    const svgIcon = messageInput.querySelector('.svg-icon');
    // Remove the icon if it exists
    if (svgIcon) {
      // alert("SBH")
      messageInput.removeChild(svgIcon); // Remove the icon from the message input
    }
  }
});
};




// Use MutationObserver to detect when the LinkedIn DOM changes (e.g., message input field is loaded)
const observer = new MutationObserver((mutationsList, observer) => {
  const messageInput = document.querySelector('.msg-form__contenteditable');
  messageInput.addEventListener('click', () => {
    if (messageInput) {
    addIconToMessageInput();
    observer.disconnect(); // Stop observing once the input is found and the icon is injected
    }
  });


 
  
  })
  
// Start observing the document for changes
observer.observe(document.body, {
  childList: true,
  subtree: true
});

function PopupModal() {
  // Create modal elements
  const modal = document.createElement('div');
  const modalContent = document.createElement('div');
  const modalInput = document.createElement('input');
  const generateButton = document.createElement('button');
  const closeButton = document.createElement('span');
  const dummyTextContainer = document.createElement('div');  // New element for dummy text

  // Set attributes and styles for modal
  modal.style.position = 'fixed';
  modal.style.top = '50%';
  modal.style.left = '50%';
  modal.style.transform = 'translate(-50%, -50%)';
  modal.style.background = 'white';
  modal.style.padding = '20px';
  modal.style.border = '1px solid #ccc';
  modal.style.zIndex = '1000'; // Make sure it's on top
  modal.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';

  modalContent.style.position = 'relative';
  modalContent.style.width = '300px';
  modalContent.style.height = '150px';
  modalContent.style.padding = '10px';

  modalInput.setAttribute('placeholder', 'Your Prompt');
  modalInput.style.width = '100%';
  modalInput.style.marginBottom = '10px';

  generateButton.innerText = 'Generate';
  generateButton.style.padding = '10px 20px';
  generateButton.style.backgroundColor = '#007BFF';
  generateButton.style.color = '#fff';
  generateButton.style.border = 'none';
  generateButton.style.borderRadius = '4px';
  generateButton.style.cursor = 'pointer';

  closeButton.innerText = 'X';
  closeButton.style.position = 'absolute';
  closeButton.style.top = '10px';
  closeButton.style.right = '15px';
  closeButton.style.cursor = 'pointer';

  // Add styling for dummy text container
  dummyTextContainer.style.marginBottom = '10px';
  dummyTextContainer.style.color = '#333';  // Styling for the dummy text
  dummyTextContainer.style.fontSize = '14px';

  // Append elements to modal
  modalContent.appendChild(modalInput);
  modalContent.appendChild(dummyTextContainer); // Adding the dummy text container
  modalContent.appendChild(generateButton);
  modalContent.appendChild(closeButton);
  modal.appendChild(modalContent);
  document.body.appendChild(modal);

  // Close modal when clicking the close button
  closeButton.addEventListener('click', () => {
    document.body.removeChild(modal);
  });

  // Close modal when clicking outside of the modal content
  window.addEventListener('click', function (event) {
    if (!modalContent.contains(event.target)) {
      document.body.removeChild(modal); // Remove modal if clicking outside of the modal content
    }
  });

  // Add functionality to generate dummy text when the button is clicked
  generateButton.addEventListener('click', () => {
    const dummyText = "Thank you for the opportunity! If you have any more questions or if there's anything else I can help you with, feel free to ask."; // You can customize this
    generateButton.innerText = 'Regenerate';
    
    // Generating insert button
    const insertButton = document.createElement('button')

    insertButton.innerHTML = 'Insert'
    insertButton.style.padding = '10px 20px';
    insertButton.style.backgroundColor = 'green';
    insertButton.style.color = '#fff';
    insertButton.style.border = '1px solid black';
    insertButton.style.borderRadius = '4px';
    insertButton.style.cursor = 'pointer';

    modalContent.appendChild(insertButton);

    insertButton.addEventListener('click', () => {
        const messageInput = document.querySelector('.msg-form__contenteditable');
       const messagePlaceholder = document.querySelector('.msg-form__placeholder');

      messageInput.innerHTML = dummyText
      messagePlaceholder.style.display = 'none'
      document.body.removeChild(modal);
  }); 
      
      
    dummyTextContainer.innerHTML = dummyText;
  });
}


