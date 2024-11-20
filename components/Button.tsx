import {FC,variant} from 'react';

interface ButtonProps{
  variants?:"primary"|"secondary"|"outline";
  isFullSize?:boolean
  children:ReactNode
}

const Button : FC <ButtonProps> =({variants="primary",isFullSize,children})=>{
  return <button className={`btn ${
    variant==="primary"? "btn-primary":variant==="secondary"?"btn-secondary":"btn-outline"
  }`}>{children}</button>;
}

export default Button;