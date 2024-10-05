import React, { useState, useRef } from 'react';
import './popup.css';

const PopupComponent = () => {
    const [isPopupOpen, setPopupOpen] = useState(false);
    const popupRef = useRef(null);

    const togglePopup = () => {
        setPopupOpen(!isPopupOpen);
    };

    const handleClickOutside = (event) => {
        if (popupRef.current && !popupRef.current.contains(event.target)) {
            setPopupOpen(false);
        }
    };

    const handleGenerate = () => {
        // Your generate logic here
        console.log('Generating with prompt:', document.getElementById('prompt-input').value);
    };

    // Add event listener to close popup when clicking outside
    React.useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className="icon-container">
            <svg
                width="42"
                height="42"
                viewBox="0 0 42 42"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                onClick={togglePopup}
            >
                {/* SVG content here */}
                <g filter="url(#filter0_dd_3_37)">
                    <rect x="5" y="1" width="32" height="32" rx="16" fill="white" />
                    <path d="M28.4667 18.7333C28.4667 18.8866 ..." fill="#2563EB" />
                </g>
                <defs>
                    <filter id="filter0_dd_3_37" x="0" y="0" width="42" height="42" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        {/* Filter definitions */}
                    </filter>
                </defs>
            </svg>

            {isPopupOpen && (
                <div className="popup" ref={popupRef}>
                    <input
                        type="text"
                        id="prompt-input"
                        placeholder="Your Prompt"
                        className="prompt-input"
                    />
                    <button onClick={handleGenerate}>Generate</button>
                </div>
            )}
        </div>
    );
};

export default PopupComponent;
