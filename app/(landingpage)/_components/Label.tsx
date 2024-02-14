import React from 'react'

interface LabelProps {
    text?: string;
    bgColor?: string,
    textColor?: string
    icon?: string
    width?: string
}

const Label : React.FC<LabelProps>  = ({text, bgColor, textColor, icon, width}) => {
  return (

    <label className= {`py-1 px-3 items-center text-center rounded-md ${bgColor} ${width}`}>
        
        {icon}
        
        <small className={`${textColor}`}>{text}</small>
    </label>
  )
}

export default Label