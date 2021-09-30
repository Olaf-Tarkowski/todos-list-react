import { useRef } from "react";

export const useFocus = () => {
    const inputRef = useRef(null);
    const focusInput = () => {
        inputRef.current.focus()
    };
    return { inputRef, focusInput };
};