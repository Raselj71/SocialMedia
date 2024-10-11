import React from 'react'

interface ButtonProps {
    text: string;
    onClick ?: () => void;
    buttonType?: 'button' | 'submit' | 'reset';  
    isLoading?: boolean;  
    loadingText:string;
    className?: string;  
    disabled?: boolean;  
}
function Button({text, onClick,buttonType,isLoading,loadingText, className,disabled}:ButtonProps) {
  return (
    <button
    type={buttonType}
    onClick={onClick}
    disabled={isLoading || disabled}
    className={`${className}`}
    >
    {isLoading? loadingText:text}
    </button>
  )
}

export default Button