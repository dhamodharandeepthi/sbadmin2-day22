import React from 'react'

function ColorCard({ cardType, cardHeading, content, textColor }) {
    return (
        <div className="col-lg-6 mb-4">
            <div className={cardType}>
                <div className="card-body">
                    {cardHeading}
                    <div className={textColor}>{content}</div>
                </div>
            </div>
        </div>
    )
}

export default ColorCard