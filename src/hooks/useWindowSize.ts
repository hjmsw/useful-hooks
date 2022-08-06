import { useState, useEffect } from 'react';

type windowDimensions = {
    width: number | undefined,
    height: number | undefined,
}

//Adapted from code example here: https://stackoverflow.com/a/63408216
const useWindowSize = (): windowDimensions => {
    const [windowSize, setWindowSize] = useState<windowDimensions>({ width: undefined, height: undefined });

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const handleResize = () => {
                setWindowSize({
                    width: window.innerWidth,
                    height: window.innerHeight,
                });
            }

            window.addEventListener("resize", handleResize);

            handleResize();

            return () => window.removeEventListener("resize", handleResize);
        }

        return;
    }, []);
    return windowSize;
}

export default useWindowSize;
