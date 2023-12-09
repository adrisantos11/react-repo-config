import {useState, useEffect} from 'react'

export interface IScreenSize {
    width: number;
    height: number;
}

export const useScreenSize = () => {
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