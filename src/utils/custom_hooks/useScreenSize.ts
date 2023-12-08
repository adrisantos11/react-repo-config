import {useState, useEffect} from 'react'

interface IScreenSize {
    width: number;
    height: number;
}

const useScreenSize = () => {
    const [size, setSize] = useState<IScreenSize>({
        width: window.innerWidth,
        height: window.innerHeight
    });

    useEffect(() => {
        const handleWindowSize = () => 
            setSize({
                width: window.innerWidth,
                height: window.innerHeight
            })
        
        window.addEventListener('resize', handleWindowSize);

        return () => removeEventListener('resize', handleWindowSize)
    }, [])

    return { size };
}

export default useScreenSize;