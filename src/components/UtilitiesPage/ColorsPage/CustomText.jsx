import React from 'react'

function CustomText({ className, content }) {
    return (
        <p className={className}>{content}</p>
    )
}

export default CustomText