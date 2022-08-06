import { useEffect, useState } from 'react';

const useDarkMode = () => {
    const [isDarkMode, setIsDarkMode] = useState<boolean | undefined>();

    useEffect(() => {
        setIsDarkMode(window.matchMedia('(prefers-color-scheme: dark)').matches);
    }, []);

    return isDarkMode;
}

export default useDarkMode;
