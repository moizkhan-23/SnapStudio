import React from "react";

export default function Button({
    children,
    type = "button",
    bgColor = "",
   
   
    textColor = "text-white",
    className = "",
    ...props
}) {
    return (
        <button className={`px-4 py-2 ${bgColor}  rounded-lg transition duration-200 hover:scale-95   ${textColor} ${className}`}  {...props} >
            {children}
        </button>
    );
}

// style={{backgroundColor:'#8b1a12', }}