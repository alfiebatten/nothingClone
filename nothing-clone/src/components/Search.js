import React, { useState } from 'react';

function Search({ className }) {
    const [placeholder, setPlaceholder] = useState('search...');

    const handleFocus = () => {
        setPlaceholder('');
    };

    const handleBlur = () => {
        setPlaceholder('search...');
    };

    return (
        <div className={`searchContainer ${className}`}>
            <div className='search'>
                <input
                    type='text'
                    placeholder={placeholder}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                />
                <button className='arrow'>
                    <svg width="71" height="58" viewBox="0 0 71 58" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M38.3 1.99922C36.9 3.39922 36.9 5.69922 38.3 6.89922L57.1 25.4992H4C2.1 25.4992 0.5 27.0992 0.5 28.9992C0.5 30.8992 2.1 32.4992 4 32.4992H57.1L38.3 51.0992C36.9 52.4992 36.9 54.5992 38.3 55.9992C39.7 57.3992 41.8 57.3992 43.2 55.9992L70.5 28.9992L43 1.99922C41.8 0.599219 39.5 0.599219 38.3 1.99922Z" fill="black"/>
                    </svg>
                </button>
            </div>
            <button className='explore'>Explore</button>
        </div>
    );
}

export default Search;
