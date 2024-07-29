"use client"
import { useState, useEffect } from 'react';

// Custom hook to get the window width
function useWindowWidth() {
    const [windowWidth, setWindowWidth] = useState(window && window.innerWidth);

    useEffect(() => {
        // Handler to call on window resize
        function handleResize() {
            setWindowWidth(window && window.innerWidth);
        }

        // Add event listener
        window && window.addEventListener('resize', handleResize);

        // Call handler right away so state gets updated with initial window size
        handleResize();

        // Remove event listener on cleanup
        return () => window && window.removeEventListener('resize', handleResize);
    }, []); // Empty array ensures that effect is only run on mount and unmount

    return windowWidth;
}

export default useWindowWidth;
