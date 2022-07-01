import React from "react";
import './Button.css';

interface ButtonProps {
    type: 'button' | 'submit' | 'reset';
}
export function Button({type}: ButtonProps) {
    return (
        <button type={type}>
            hey
        </button>
    )
}
