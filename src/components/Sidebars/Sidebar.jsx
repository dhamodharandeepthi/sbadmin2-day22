import React, { useEffect } from 'react'
import Collapse from 'react-bootstrap/Collapse'
import { Link } from 'react-router-dom'




function Sidebar({ sidebarToggle, setSidebarToggle, handleSidebar, handleOpen, handleOpen1, handleOpen2, open, open1, open2, setOpen,
    setOpen1, setOpen2 }) {

    let sidebarClasses = ''

    sidebarClasses += sidebarToggle
        ? 'navbar-nav bg-gradient-primary sidebar sidebar-dark accordion'
        : 'navbar-nav bg-gradient-primary sidebar sidebar-dark accordion toggled'

    let margin = ''

    margin += sidebarToggle ? '8.5px' : ''

    useEffect(() => {
        window.addEventListener('resize', function () {
            if (window.innerWidth < 496) {
                setSidebarToggle(false)
            } else {
                setSidebarToggle(true)
            }
        })
    })






    return (



        <ul className={sidebarClasses} id="accordionSidebar">

            {/* <!-- Sidebar - Brand --> */}
            <a className="sidebar-brand d-flex align-items-center justify-content-center" href="/">
                <div className="sidebar-brand-icon rotate-n-15">
                    <i className="fas fa-laugh-wink"></i>
                </div>
                <div className="sidebar-brand-text mx-3">SB Admin <sup>2</sup></div>
            </a>

            {/* <!-- Divider --> */}
            <hr className="sidebar-divider my-0" />

            {/* <!-- Nav Item - Dashboard --> */}
            <li className="nav-item active">
                <Link to='/dashboard' style={{ textDecoration: 'none' }}
                    className="nav-link" href="index.html">
                    <i className="fas fa-fw fa-tachometer-alt"></i>
                    <span>Dashboard</span>

                </Link>
            </li>

            {/* <!-- Divider --> */}
            <hr className="sidebar-divider" />

            {/* <!-- Heading --> */}
            <div className="sidebar-heading">
                Interface
            </div>

            {/* <!-- Nav Item - Pages Collapse Menu --> */}
            <li className="nav-item">
                <a className="nav-link collapsed"
                    data-toggle="collapse"
                    data-target="#collapseTwo"
                    aria-expanded={open}
                    aria-controls="collapseTwo"
                    onClick={handleOpen}
                >
                    <i className="fas fa-fw fa-cog"></i>
                    <span>Components</span>
                </a>

                <Collapse in={open} >

                    <div id="collapseTwo"
                        className="collapse"
                        aria-labelledby="headingTwo"
                        data-parent="#accordionSidebar"
                    >
                        <div className="bg-white py-2 collapse-inner rounded">
                            <h6 className="collapse-header">Custom Components:</h6>
                            <Link to="/buttons" style={{ textDecoration: "none" }}
                                className="collapse-item" href="buttons.html">
                                Buttons

                            </Link>
                            <Link to="/cards" style={{ textDecoration: "none" }}
                                className="collapse-item" href="cards.html">
                                Cards

                            </Link>
                        </div>
                    </div>
                </Collapse>
            </li>

            {/* <!-- Nav Item - Utilities Collapse Menu --> */}
            <li className="nav-item">
                <a className="nav-link collapsed"
                    href="#"
                    data-toggle="collapse"
                    data-target="#collapseUtilities"
                    aria-expanded={open1}
                    aria-controls="collapseUtilities"
                    onClick={handleOpen1}
                >
                    <i className="fas fa-fw fa-wrench"
                        style={{ marginRight: margin }}>
                    </i>
                    <span>Utilities</span>
                </a>

                <Collapse in={open1} >

                    <div id="collapseUtilities"
                        className="collapse"
                        aria-labelledby="headingUtilities"
                        data-parent="#accordionSidebar"
                    >
                        <div className="bg-white py-2 collapse-inner rounded">
                            <h6 className="collapse-header">Custom Utilities:</h6>
                            <Link to="/colors" style={{ textDecoration: 'none' }}
                                className="collapse-item" href="utilities-color.html">
                                Colors

                            </Link>
                            <Link to="/borders" style={{ textDecoration: 'none' }}
                                className="collapse-item" href="utilities-border.html">
                                Borders

                            </Link>
                            <Link to="/animations" style={{ textDecoration: 'none' }}
                                className="collapse-item" href="utilities-animation.html">
                                Animations

                            </Link>
                            <Link to="/others" style={{ textDecoration: 'none' }}
                                className="collapse-item" href="utilities-other.html">
                                Other

                            </Link>
                        </div>
                    </div>
                </Collapse>
            </li>

            {/* <!-- Divider --> */}
            <hr className="sidebar-divider" />

            {/* <!-- Heading --> */}
            <div className="sidebar-heading">
                Addons
            </div>

            {/* <!-- Nav Item - Pages Collapse Menu --> */}
            <li className="nav-item">
                <a className="nav-link collapsed"
                    href="#"
                    data-toggle="collapse"
                    data-target="#collapsePages"
                    aria-expanded={open2}
                    onClick={handleOpen2}
                    aria-controls="collapsePages"
                >
                    <i className="fas fa-fw fa-folder"
                        style={{ marginRight: margin }}
                    >
                    </i>
                    <span>Pages</span>
                </a>
                <Collapse in={open2}>
                    <div id="collapsePages"
                        className="collapse"
                        ria-labelledby="headingPages"
                        data-parent="#accordionSidebar"
                    >
                        <div className="bg-white py-2 collapse-inner rounded">
                            <h6 className="collapse-header">Login Screens:</h6>
                            <Link to='/login' style={{ textDecoration: 'none' }}
                                className="collapse-item" href="login.html">
                                Login

                            </Link>
                            <Link to='/register' style={{ textDecoration: 'none' }}
                                className="collapse-item" href="register.html">
                                Register

                            </Link>
                            <Link to='/forgotpassword' style={{ textDecoration: 'none' }}
                                className="collapse-item" href="forgot-password.html">
                                Forgot Password

                            </Link>
                            <div className="collapse-divider"></div>
                            <h6 className="collapse-header">Other Pages:</h6>
                            <Link to='/errorpage' style={{ textDecoration: 'none' }}
                                className="collapse-item" href="404.html">
                                404 Page

                            </Link>
                            <Link to='/blankpage' style={{ textDecoration: 'none' }}
                                className="collapse-item" href="blank.html">
                                Blank Page

                            </Link>
                        </div>
                    </div>
                </Collapse>
            </li>

            {/* <!-- Nav Item - Charts --> */}
            <li className="nav-item">
                <Link to="/charts" style={{ textDecoration: 'none' }}
                    className="nav-link" href="charts.html">
                    <i className="fas fa-fw fa-chart-area"
                        style={{ marginRight: margin }}
                    >
                    </i>
                    <span>Charts</span>

                </Link>

            </li>

            {/* <!-- Nav Item - Tables --> */}
            <li className="nav-item">
                <Link
                    className="nav-link" href="tables.html">
                    <i className="fas fa-fw fa-table"
                        style={{ marginRight: margin }}
                    >

                    </i>
                    <span>Tables</span>

                </Link>
            </li>

            {/* <!-- Divider --> */}
            <hr className="sidebar-divider d-none d-md-block" />

            {/* <!-- Sidebar Toggler (Sidebar) --> */}
            <div className="text-center d-none d-md-inline">
                <button
                    className="rounded-circle border-0"
                    id="sidebarToggle"
                    onClick={handleSidebar}
                ></button>
            </div>

            {/* <!-- Sidebar Message --> */}
            <div className="sidebar-card d-none d-lg-flex">
                <img className="sidebar-card-illustration mb-2"
                    src="img/undraw_rocket.svg"
                    alt="..."
                />
                <p className="text-center mb-2">
                    <strong>SB Admin Pro</strong> is packed with premium features, components, and more!
                </p>
                <a className="btn btn-success btn-sm" href="https://startbootstrap.com/theme/sb-admin-pro"
                >
                    Upgrade to Pro!
                </a>
            </div>

        </ul>



    )
}

export default Sidebar