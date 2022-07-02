import React, { HTMLAttributes } from 'react';
import './FancyButton.css';

export interface FancyButtonProps extends HTMLAttributes<HTMLElement> {
    href: string;
    children: string;
}

export function FancyButton({ className, href, ...rest }: FancyButtonProps) {
    const classes = className
        ? 'fancy-button ' + className.trim()
        : 'fancy-button';
    if (href) return <a className={classes} {...rest} />;
    return <button className={classes} {...rest} />;
}
