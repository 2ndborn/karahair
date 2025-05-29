import { useEffect, useState } from 'react'

const useFadeUp = (delay = 1000) => {
    const [isLoaded, setIsLoaded] = useState(false);
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoaded(true);
        }, delay)
    
        return () => clearTimeout(timer);
    }, [delay])
    return isLoaded
}

export default useFadeUp