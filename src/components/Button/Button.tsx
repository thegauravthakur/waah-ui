import styled from '@emotion/styled';
import React, {ButtonHTMLAttributes, forwardRef, HTMLProps} from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
}

const StyledButton = styled.button`
  background-color: rgb(0, 112, 243);
  outline: 1px solid rgb(0, 112, 243);
  color: white;
  border: none;
  font-size: 14px;
  padding: 8px 10px;
  border-radius: 7px;
  transition: color 250ms ease-in-out, background-color 250ms ease-in-out;

  &:hover {
    background-color: white;
    color: rgb(0, 112, 243);
    cursor: pointer;
  }
`;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    (props, ref) => (
        <StyledButton
            {...props}
            ref={ref}
        />
    ),
);

