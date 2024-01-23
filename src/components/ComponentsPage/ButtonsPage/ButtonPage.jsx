import React, { useState } from 'react'
import Footer from '../../Footer'
import Navbar from '../../Navbar'
import ScrollToTop from '../../ScrollToTop'
import Button from './Button'
import SplitButton from './SplitButton'
import Sidebar from '../../Sidebars/Sidebar'
import LogoutModal from '../../LogoutModal'

function ButtonPage({ handleOpen, handleOpen1, handleOpen2, open, open1, open2, setOpen,
    setOpen1, setOpen2 }) {

    const buttonDefault = [
        {
            btnClass: 'btn btn-primary btn-circle',
            iconClass: 'fab fa-facebook-f',
        },
        {
            btnClass: 'btn btn-success btn-circle ',
            iconClass: 'fas fa-check',
        },
        {
            btnClass: 'btn btn-info btn-circle ',
            iconClass: 'fas fa-info-circle',
        },
        {
            btnClass: 'btn btn-warning btn-circle ',
            iconClass: 'fas fa-exclamation-triangle',
        },
        {
            btnClass: 'btn btn-danger btn-circle ',
            iconClass: 'fas fa-trash',
        },
    ]

    const buttonSmall = [
        {
            btnClass: 'btn btn-primary btn-circle btn-sm',
            iconClass: 'fab fa-facebook-f',
        },
        {
            btnClass: 'btn btn-success btn-circle btn-sm',
            iconClass: 'fas fa-check',
        },
        {
            btnClass: 'btn btn-info btn-circle btn-sm',
            iconClass: 'fas fa-info-circle',
        },
        {
            btnClass: 'btn btn-warning btn-circle btn-sm',
            iconClass: 'fas fa-exclamation-triangle',
        },
        {
            btnClass: 'btn btn-danger btn-circle btn-sm',
            iconClass: 'fas fa-trash',
        },
    ]

    const buttonLarge = [
        {
            btnClass: 'btn btn-primary btn-circle btn-lg',
            iconClass: 'fab fa-facebook-f',
        },
        {
            btnClass: 'btn btn-success btn-circle btn-lg',
            iconClass: 'fas fa-check',
        },
        {
            btnClass: 'btn btn-info btn-circle btn-lg',
            iconClass: 'fas fa-info-circle',
        },
        {
            btnClass: 'btn btn-warning btn-circle btn-lg',
            iconClass: 'fas fa-exclamation-triangle',
        },
        {
            btnClass: 'btn btn-danger btn-circle btn-lg',
            iconClass: 'fas fa-trash',
        },
    ]

    const splitButtons = [
        {
            button: 'btn btn-primary btn-icon-split',
            text: 'icon text-white-50',
            icon: 'fas fa-flag',
            content: 'Split Button Primary',
        },
        {
            button: 'btn btn-success btn-icon-split',
            text: 'icon text-white-50',
            icon: 'fas fa-flag',
            content: 'Split Button Success',
        },
        {
            button: 'btn btn-info btn-icon-split',
            text: 'icon text-white-50',
            icon: 'fas fa-flag',
            content: 'Split Button Info',
        },
        {
            button: 'btn btn-warning btn-icon-split',
            text: 'icon text-white-50',
            icon: 'fas fa-flag',
            content: 'Split Button Warning',
        },
        {
            button: 'btn btn-danger btn-icon-split',
            text: 'icon text-white-50',
            icon: 'fas fa-flag',
            content: 'Split Button Danger',
        },
        {
            button: 'btn btn-secondary btn-icon-split',
            text: 'icon text-white-50',
            icon: 'fas fa-arrow-right',
            content: 'Split Button Secondary',
        },
        {
            button: 'btn btn-light btn-icon-split',
            text: 'icon text-gray-600',
            icon: 'fas fa-arrow-right',
            content: 'Split Button Light',
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
                            <h1 className="h3 mb-4 text-gray-800">Buttons</h1>
                            <div className="row">
                                <div className="col-lg-6">
                                    {/* <!-- Circle Buttons --> */}
                                    <div className="card shadow mb4">
                                        <div className="card-header py-3">
                                            <h6 className="m-0 font-weight-bold text-primary">
                                                Circle Buttons
                                            </h6>
                                        </div>
                                        <div className="card-body">
                                            <p>
                                                Use Font Awesome Icons (included with this theme
                                                package) along with the circle buttons as shown in the
                                                examples below!
                                            </p>
                                            {/* <!-- Circle Buttons (Default) --> */}
                                            <div className="mb-2">
                                                <code>.btn-circle</code>
                                            </div>
                                            {buttonDefault.map((btn) => (
                                                <Button
                                                    btnClass={btn.btnClass}
                                                    iconClass={btn.iconClass}
                                                />
                                            ))}
                                            {/* <!-- Circle Buttons (Small) --> */}
                                            <div className="mt-4 mb-2">
                                                <code>.btn-circle .btn-sm</code>
                                            </div>
                                            {buttonSmall.map((btn) => (
                                                <Button
                                                    btnClass={btn.btnClass}
                                                    iconClass={btn.iconClass}
                                                />
                                            ))}
                                            {/* <!-- Circle Buttons (Large) --> */}
                                            <div className="mt-4 mb-2">
                                                <code>.btn-circle .btn-lg</code>
                                            </div>
                                            {buttonLarge.map((btn) => (
                                                <Button
                                                    btnClass={btn.btnClass}
                                                    iconClass={btn.iconClass}
                                                />
                                            ))}
                                        </div>
                                    </div>

                                    {/* <!-- Brand Buttons --> */}
                                    <div className="card shadow mb-4 my-4">
                                        <div className="card-header py-3">
                                            <h6 className="m-0 font-weight-bold text-primary">
                                                Brand Buttons
                                            </h6>
                                        </div>
                                        <div className="card-body">
                                            <p>
                                                Google and Facebook buttons are available featuring each
                                                company's respective brand color. They are used on the
                                                user login and registration pages.
                                            </p>
                                            <p>
                                                You can create more custom buttons by adding a new color
                                                variable in the
                                                <code>_variables.scss</code>
                                                file and then using the Bootstrap button variant mixin
                                                to create a new style, as demonstrated in the
                                                <code>_buttons.scss</code>
                                                file.
                                            </p>
                                            <a href="#" className="btn btn-google btn-block">
                                                <i className="fab fa-google fa-fw"></i>
                                                .btn-google
                                            </a>
                                            <a href="#" className="btn btn-facebook btn-block">
                                                <i className="fab fa-facebook-f fa-fw"></i>
                                                .btn-facebook
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-6">
                                    <div className="card shadow mb-4">
                                        <div className="card-header py-3">
                                            <h6 className="m-0 font-weight-bold text-primary">
                                                Split Buttons with Icon
                                            </h6>
                                        </div>
                                        <div className="card-body">
                                            <p>
                                                Works with any button colors, just use the
                                                <code> .btn-icon-split </code>
                                                class and the markup in the examples below. The examples
                                                below also use the
                                                <code> .text-white-50 </code>
                                                helper class on the icons for additional styling, but it
                                                is not required.
                                            </p>
                                            {splitButtons.map((btn) => (
                                                <SplitButton
                                                    button={btn.button}
                                                    text={btn.text}
                                                    icon={btn.icon}
                                                    content={btn.content}
                                                />
                                            ))}

                                            <p>Also works with small and large button classes!</p>
                                            <a
                                                href="#"
                                                className="btn btn-primary btn-icon-split btn-sm"
                                            >
                                                <span className="icon text-white-50">
                                                    <i className="fas fa-flag"></i>
                                                </span>
                                                <span className="text">Split Button Small</span>
                                            </a>
                                            <div className="my-2"></div>
                                            <a
                                                href="#"
                                                className="btn btn-primary btn-icon-split btn-lg"
                                            >
                                                <span className="icon text-white-50">
                                                    <i className="fas fa-flag"></i>
                                                </span>
                                                <span className="text">Split Button Large</span>
                                            </a>
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

export default ButtonPage