import React, {ForwardedRef, forwardRef, HTMLAttributes} from 'react';
import './FancyButton.css';

export interface ButtonProps extends HTMLAttributes<HTMLElement> {
    href?: string;
}

export const FancyButton = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
    ({className, href, ...props}, ref) => {
        const classes = className ? 'fancy-button ' + className.trim(): 'fancy-button';
        if (href) return <a {...props} href={href} className={classes} />
        return (<button
            className={classes}
            {...props}
            ref={ref as ForwardedRef<HTMLButtonElement>}
        />)
    },
);

