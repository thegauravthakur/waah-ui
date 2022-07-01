import React from "react";

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
