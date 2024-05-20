import React, { ButtonHTMLAttributes, forwardRef } from "react"
import { twMerge } from "tailwind-merge";


type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {};


    const Button = forwardRef<HTMLButtonElement,ButtonProps >(({
        className, 
        children, 
        disabled, 
        type='button',
        onClick,
        ...props
    }, ref) => {
        return (
            <button type={type}
            className={twMerge(`w-full rounded-xl bg-green-400 border border-transparent px-2 py-2 disabled:cursor-not-allowed disabled:opacity-50 text-black font-medium hover:opacity-75 transition  text-sm`, className)}
            disabled={disabled}
            onClick={onClick}
            ref={ref}
            >
                {children}
            </button>
        )
    })

    Button.displayName = "Button"
    
    export default Button
    