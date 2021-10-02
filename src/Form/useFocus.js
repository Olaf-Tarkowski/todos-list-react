import { useRef, useEffect } from "react";

export const useFocus = () => {
    const inputRef = useRef(null);
    useEffect(() => {
        inputRef.current.focus();
    });
    return { inputRef };
};