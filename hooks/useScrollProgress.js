import React, { useState, useEffect } from 'react'

const useScrollProgress = () => {
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScroll = window.scrollY;
            const scrollHeight = document.body.scrollHeight - window.innerHeight;
            
            if(scrollHeight) {
                setScrollProgress(Number(currentScroll / scrollHeight).toFixed(2) * 100);
            }
        };
            // Add event listener when component mounts
        window.addEventListener('scroll', handleScroll);
        // Remove event listener when component unmounts
        return () => window.removeEventListener('scroll', handleScroll);
}, []);

  return ( scrollProgress );
};

export default useScrollProgress;