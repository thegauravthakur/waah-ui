import React, {ButtonHTMLAttributes, forwardRef} from 'react';
import './FancyButton.css';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
}

export const FancyButton = forwardRef<HTMLButtonElement, ButtonProps>(
    ({className, ...props}, ref) => {
        const classes = className ? 'fancy-button ' + className.trim(): 'fancy-button';
        return (<button
            className={classes}
            {...props}
            ref={ref}
        />)
    },
);

