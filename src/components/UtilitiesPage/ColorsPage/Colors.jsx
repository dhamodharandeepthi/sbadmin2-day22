import React, { useState } from 'react'
import Footer from '../../Footer'
import LogoutModal from '../../LogoutModal'
import Navbar from '../../Navbar'
import ScrollToTop from '../../ScrollToTop'
import Sidebar from '../../Sidebars/Sidebar'
import CustomBackground from './CustomBackground'
import CustomGrayscale from './CustomGrayscale'
import CustomText from './CustomText'


function Colors({ handleOpen, handleOpen1, handleOpen2, open, open1, open2, setOpen,
    setOpen1, setOpen2 }) {

    const customTexts = [
        {
            classes: 'text-gray-100 p-3 bg-dark m-0',
            content: '.text-gray-100',
        },
        {
            classes: 'text-gray-200 p-3 bg-dark m-0',
            content: '.text-gray-100',
        },
        {
            classes: 'text-gray-300 p-3 bg-dark m-0',
            content: '.text-gray-300',
        },
        {
            classes: 'text-gray-400 p-3 bg-dark m-0',
            content: '.text-gray-400',
        },
        {
            classes: 'text-gray-500 p-3 m-0',
            content: '.text-gray-500',
        },
        {
            classes: 'text-gray-600 p-3 m-0',
            content: '.text-gray-600',
        },
        {
            classes: 'text-gray-700 p-3 m-0',
            content: '.text-gray-700',
        },
        {
            classes: 'text-gray-800 p-3 m-0',
            content: '.text-gray-800',
        },
        {
            classes: 'text-gray-900 p-3 m-0',
            content: '.text-gray-900',
        },
    ]
    const customBackgrounds = [
        {
            classes: 'px-3 py-5 bg-gradient-primary text-white',
            content: '.bg-gradient-primary',
        },
        {
            classes: 'px-3 py-5 bg-gradient-secondary text-white',
            content: '.bg-gradient-secondary',
        },
        {
            classes: 'px-3 py-5 bg-gradient-success text-white',
            content: '.bg-gradient-success',
        },
        {
            classes: 'px-3 py-5 bg-gradient-info text-white',
            content: '.bg-gradient-info',
        },
        {
            classes: 'px-3 py-5 bg-gradient-warning text-white',
            content: '.bg-gradient-warning',
        },
        {
            classes: 'px-3 py-5 bg-gradient-danger text-white',
            content: '.bg-gradient-danger',
        },
        {
            classes: 'px-3 py-5 bg-gradient-light text-white',
            content: '.bg-gradient-light',
        },
        {
            classes: 'px-3 py-5 bg-gradient-dark text-white',
            content: '.bg-gradient-dark',
        },
    ]
    const customGrayscales = [
        {
            classes: 'p-3 bg-gray-100',
            content: '.bg-gray-100',
        },
        {
            classes: 'p-3 bg-gray-200',
            content: '.bg-gray-200',
        },
        {
            classes: 'p-3 bg-gray-300',
            content: '.bg-gray-300',
        },
        {
            classes: 'p-3 bg-gray-400',
            content: '.bg-gray-400',
        },
        {
            classes: 'p-3 bg-gray-500 text-white',
            content: '.bg-gray-500',
        },
        {
            classes: 'p-3 bg-gray-600 text-white',
            content: '.bg-gray-600',
        },
        {
            classes: 'p-3 bg-gray-700 text-white',
            content: '.bg-gray-700',
        },
        {
            classes: 'p-3 bg-gray-800 text-white',
            content: '.bg-gray-800',
        },
        {
            classes: 'p-3 bg-gray-900 text-white',
            content: '.bg-gray-900',
        },
    ]
    const [sidebarToggle, setSidebarToggle] = useState(true)
    const handleSidebar = () => {
        setSidebarToggle((prevSidebarToggle) => !prevSidebarToggle)
    }

    return (
        <>
            <div id="wrapper">
                <Sidebar
                    sidebarToggle={sidebarToggle}
                    setSidebarToggle={setSidebarToggle}
                    handleSidebar={handleSidebar}
                    open={open}
                    setOpen={setOpen}
                    handleOpen={handleOpen}
                    open1={open1}
                    setOpen1={setOpen1}
                    handleOpen1={handleOpen1}
                    open2={open2}
                    setOpen2={setOpen2}
                    handleOpen2={handleOpen2}
                />
                {/* Content Wrapper */}
                <div id="content-wrapper" className="d-flex flex-column">
                    {/* Main Content */}
                    <div id="content">
                        {/* Topbar */}
                        <Navbar
                            sidebarToggle={sidebarToggle}
                            setSidebarToggle={setSidebarToggle}
                            handleSidebar={handleSidebar}
                        />
                        {/* Begin Page Content */}
                        <div className="container-fluid">
                            {/* <!-- Page Heading --> */}
                            <h1 className="h3 mb-1 text-gray-800">Color Utilities</h1>
                            <p className="mb-4">
                                Bootstrap's default utility classes can be found on the
                                official&nbsp;
                                <a href="https://getbootstrap.com/docs">
                                    Bootstrap Documentation
                                </a>{' '}
                                page. The custom utilities below were created to extend this
                                theme past the default utility classes built into Bootstrap's
                                framework.
                            </p>

                            {/* <!-- Content Row --> */}
                            <div className="row">
                                {/* <!-- First Column --> */}
                                <div className="col-lg-4">
                                    {/* <!-- Custom Text Color Utilities --> */}
                                    <div className="card shadow mb-4">
                                        <div className="card-header py-3">
                                            <h6 className="m-0 font-weight-bold text-primary">
                                                Custom Text Color Utilities
                                            </h6>
                                        </div>
                                        <div className="card-body">
                                            {customTexts.map((text) => (
                                                <CustomText
                                                    className={text.classes}
                                                    content={text.content}
                                                />
                                            ))}
                                        </div>
                                    </div>

                                    {/* <!-- Custom Font Size Utilities --> */}
                                    <div className="card shadow mb-4">
                                        <div className="card-header py-3">
                                            <h6 className="m-0 font-weight-bold text-primary">
                                                Custom Font Size Utilities
                                            </h6>
                                        </div>
                                        <div className="card-body">
                                            <p className="text-xs">.text-xs</p>
                                            <p className="text-lg mb-0">.text-lg</p>
                                        </div>
                                    </div>
                                </div>

                                {/* <!-- Second Column --> */}
                                <div className="col-lg-4">
                                    {/* <!-- Background Gradient Utilities --> */}
                                    <div className="card shadow mb-4">
                                        <div className="card-header py-3">
                                            <h6 className="m-0 font-weight-bold text-primary">
                                                Custom Background Gradient Utilities
                                            </h6>
                                        </div>
                                        <div className="card-body">
                                            {customBackgrounds.map((background) => (
                                                <CustomBackground
                                                    className={background.classes}
                                                    content={background.content}
                                                />
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* <!-- Third Column --> */}
                                <div className="col-lg-4">
                                    {/* <!-- Grayscale Utilities --> */}
                                    <div className="card shadow mb-4">
                                        <div className="card-header py-3">
                                            <h6 className="m-0 font-weight-bold text-primary">
                                                Custom Grayscale Background Utilities
                                            </h6>
                                        </div>
                                        <div className="card-body">
                                            {customGrayscales.map((grayscale) => (
                                                <CustomGrayscale
                                                    className={grayscale.classes}
                                                    content={grayscale.content}
                                                />
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- /.container-fluid --> */}
                    </div>
                    {/* <!-- End of Main Content --> */}
                    {/* <!-- Footer --> */}
                    <Footer />
                    {/* <!-- End of Footer --> */}
                </div>
                {/* <!-- End of Content Wrapper --> */}
            </div>
            {/* <!-- End of Page Wrapper --> */}

            <ScrollToTop />
            <LogoutModal />
        </>
    )
}

export default Colors