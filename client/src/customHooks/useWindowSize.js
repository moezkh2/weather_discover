import React, { useLayoutEffect, useState, useRef } from 'react';

function useWindowSize() {
    const [isScrollVissible, setScrollVissible] = useState(false);
    const reff = useRef()
    useLayoutEffect(() => {
        function updateSize() {
            if (reff.current.scrollWidth > reff.current.clientWidth) {
                console.log(`${reff.current.scrollLeft}/${reff.current.scrollWidth}`)
                setScrollVissible(true);
            } else {
                setScrollVissible(false);
            }

        }
        window.addEventListener('resize', updateSize);
        updateSize();
        return () => window.removeEventListener('resize', updateSize);
    });
    return [isScrollVissible, reff];
}

export default useWindowSize