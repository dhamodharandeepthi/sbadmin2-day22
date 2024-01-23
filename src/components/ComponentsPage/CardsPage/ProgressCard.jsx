import React from 'react'

function ProgressCard({
    content,
    percentage,
    cardType,
    barType,
    width,
    ariavalue,
}) {

    return (
        <div>
            <h4 className="small font-weight-bold">
                {content}
                <span className="float-right">{percentage}</span>
            </h4>
            <div className={cardType}>
                <div
                    className={barType}
                    role="progressbar"
                    style={{ width: width }}
                    aria-valuenow={ariavalue}
                    aria-valuemin="0"
                    aria-valuemax="100"
                ></div>
            </div>
        </div>
    )
}

export default ProgressCard