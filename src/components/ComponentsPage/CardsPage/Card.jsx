import React from 'react'

function Card({ cardType, textColor, heading, content, icon, progress }) {
    return (
        // <!-- Earnings (Monthly) Card Example -->
        <div className="col-xl-3 col-md-6 mb-4">
            <div className={cardType}>
                <div className="card-body">
                    <div className="row no-gutters align-items-center">
                        <div className="col mr-2">
                            <div className={textColor}>{heading}</div>
                            {progress ? (
                                <div className="row no-gutters align-items-center">
                                    <div className="col-auto">
                                        <div className="h5 mb-0 mr-3 font-weight-bold text-gray-800">
                                            50%
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="progress progress-sm mr-2">
                                            <div
                                                className="progress-bar bg-info"
                                                role="progressbar"
                                                style={{ width: '50%' }}
                                                aria-valuenow="50"
                                                aria-valuemin="0"
                                                aria-valuemax="100"
                                            ></div>
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <div className="h5 mb-0 font-weight-bold text-gray-800">
                                    {content}
                                </div>
                            )}
                        </div>
                        <div className="col-auto">
                            <i className={icon}></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Card