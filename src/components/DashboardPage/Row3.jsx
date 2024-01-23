import React from 'react'
import ColorCard from '../ComponentsPage/CardsPage/ColorCard'
import ProgressCard from '../ComponentsPage/CardsPage/ProgressCard'

function Row3() {

    const ProgressData = [
        {
            content: 'Server Migration',
            percentage: '20%',
            cardType: 'progress mb-4',
            barType: 'progress-bar bg-danger',
            width: '20%',
            ariavalue: '20',
        },
        {
            content: 'Sales Tracking',
            percentage: '40%',
            cardType: 'progress mb-4',
            barType: 'progress-bar bg-warning',
            width: '40%',
            ariavalue: '40',
        },
        {
            content: 'Customer Database',
            percentage: '60%',
            cardType: 'progress mb-4',
            barType: 'progress-bar',
            width: '60%',
            ariavalue: '60',
        },
        {
            content: 'Payout Details',
            percentage: '80%',
            cardType: 'progress mb-4',
            barType: 'progress-bar bg-info',
            width: '80%',
            ariavalue: '80',
        },
        {
            content: 'Account Setup',
            percentage: 'Complete!',
            cardType: 'progress',
            barType: 'progress-bar bg-success',
            width: '100%',
            ariavalue: '100',
        },
    ]
    const colorCardData = [
        {
            cardType: 'card bg-primary text-white shadow',
            cardHeading: 'Primary',
            content: '#4e73df',
            textColor: 'text-white-50 small',
        },
        {
            cardType: 'card bg-success text-white shadow',
            cardHeading: 'Success',
            content: '#1cc88a',
            textColor: 'text-white-50 small',
        },
        {
            cardType: 'card bg-info text-white shadow',
            cardHeading: 'Info',
            content: '#36b9cc',
            textColor: 'text-white-50 small',
        },
        {
            cardType: 'card bg-warning text-white shadow',
            cardHeading: 'Warning',
            content: '#f6c23e',
            textColor: 'text-white-50 small',
        },
        {
            cardType: 'card bg-danger text-white shadow',
            cardHeading: 'Danger',
            content: '#e74a3b',
            textColor: 'text-white-50 small',
        },
        {
            cardType: 'card bg-secondary text-white shadow',
            cardHeading: 'Secondary',
            content: '#858796',
            textColor: 'text-white-50 small',
        },
        {
            cardType: 'card bg-light text-black shadow',
            cardHeading: 'Light',
            content: '#f8f9fc',
            textColor: 'text-black-50 small',
        },
        {
            cardType: 'card bg-dark text-white shadow',
            cardHeading: 'Dark',
            content: '#5a5c69',
            textColor: 'text-white-50 small',
        },
    ]

    return (
        <div className="row">
            <div className="col-lg-6 mb-4">
                {/* <!-- Project Card Example --> */}
                <div className="card shadow mb-4">
                    <div className="card-header py-3">
                        <h6 className="m-0 font-weight-bold text-primary">Projects</h6>
                    </div>
                    <div className="card-body">
                        {ProgressData.map((card, index) => (
                            <ProgressCard
                                key={index}
                                content={card.content}
                                percentage={card.percentage}
                                cardType={card.cardType}
                                barType={card.barType}
                                width={card.width}
                                ariavalue={card.ariavalue}
                            />
                        ))}
                    </div>
                </div>
                <div className="row">
                    {colorCardData.map((card, index) => (
                        <ColorCard
                            key={index}
                            cardType={card.cardType}
                            cardHeading={card.cardHeading}
                            content={card.content}
                            textColor={card.textColor}
                        />
                    ))}
                </div>
            </div>

            <div className="col-lg-6 mb-4">
                {/* <!-- Illustrations --> */}
                <div className="card shadow mb-4">
                    <div className="card-header py-3">
                        <h6 className="m-0 font-weight-bold text-primary">Illustrations</h6>
                    </div>
                    <div className="card-body">
                        <div className="text-center">
                            <img
                                className="img-fluid px-3 px-sm-4 mt-3 mb-4"
                                style={{ width: '25rem' }}
                                src="img/undraw_posting_photo.svg"
                                alt="..."
                            />
                        </div>
                        <p>
                            Add some quality, svg illustrations to your project courtesy
                            of&nbsp;
                            <a target="_blank" rel="nofollow" href="https://undraw.co/">
                                unDraw
                            </a>
                            , a constantly updated collection of beautiful svg images that you
                            can use completely free and without attribution!
                        </p>
                        <a target="_blank" rel="nofollow" href="https://undraw.co/">
                            Browse Illustrations on unDraw &rarr;
                        </a>
                    </div>
                </div>

                {/* <!-- Approach --> */}
                <div className="card shadow mb-4">
                    <div className="card-header py-3">
                        <h6 className="m-0 font-weight-bold text-primary">
                            Development Approach
                        </h6>
                    </div>
                    <div className="card-body">
                        <p>
                            SB Admin 2 makes extensive use of Bootstrap 4 utility classes in
                            order to reduce CSS bloat and poor page performance. Custom CSS
                            classes are used to create custom components and custom utility
                            classes.
                        </p>
                        <p className="mb-0">
                            Before working with this theme, you should become familiar with
                            the Bootstrap framework, especially the utility classes.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Row3