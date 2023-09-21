
export function getIsMobile( setIsMobile, setIsCollapsed ) { 
    const mediaQuery = window.matchMedia('(max-width: 500px)');

    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
        setIsMobile(event.matches);
        if(setIsCollapsed){
            setIsCollapsed(event.matches);
        }
    }
    mediaQuery.addEventListener('change', handleMediaQueryChange);

    return () => {
        mediaQuery.removeEventListener('change', handleMediaQueryChange);
    }
}