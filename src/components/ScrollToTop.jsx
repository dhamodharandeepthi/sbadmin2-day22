import React, { useState, useEffect } from 'react'

function ScrollToTop() {

    const [showTopBtn, setShowTopBtn] = useState(false)
    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 400) {
                setShowTopBtn(true)
            } else {
                setShowTopBtn(false)
            }
        })
    }, [])
    const goToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    }

    return (
        <div>
            {showTopBtn && (
                <a
                    className="scroll-to-top rounded"
                    href="#page-top"
                    style={{ display: 'inline' }}
                    onClick={goToTop}
                >
                    <i className="fas fa-angle-up"></i>
                </a>
            )}
        </div>
    )
}

export default ScrollToTop