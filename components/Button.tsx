type buttonProps = {
    label:string,
    textColor:string,
    backgroundColour:string,
    borderColor:string,
    hoverTextColor:string, 
    hoverBorderColor:string
}

function Button({label, textColor, backgroundColour, borderColor, hoverTextColor, hoverBorderColor}: buttonProps) {
  return (
    <button className={`border-[2px] ${borderColor} ${textColor} ${backgroundColour} py-3 px-8 shadow-xl text-sm rounded-md hover:bg-white ${hoverTextColor} ${hoverBorderColor} max-lg:px-3`}>
        {label}
    </button>
  )
}

export default Button