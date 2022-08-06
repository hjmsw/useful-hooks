import React, { useEffect } from "react";

//Adapted from code example here: https://stackoverflow.com/a/42234988
const useOutsideClick = (ref: React.MutableRefObject<any>, callback: () => any) => {
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (ref.current && !ref.current.contains(event.target)) {
                callback();
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref]);
}

export default useOutsideClick;
