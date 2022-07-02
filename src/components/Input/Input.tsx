import React, { InputHTMLAttributes } from 'react';
import './Input.css';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export function Input({ className, ...rest }: InputProps) {
    const classes = className ? 'input' + className.trim() : 'input';
    return <input className={classes} {...rest} />;
}
