import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Footer from '../Footer'
import LogoutModal from '../LogoutModal'
import Navbar from '../Navbar'
import ScrollToTop from '../ScrollToTop'
import Sidebar from '../Sidebars/Sidebar'


function ErrorPages({ handleOpen, handleOpen1, handleOpen2, open, open1, open2, setOpen,
    setOpen1, setOpen2 }) {

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
                            {/* <!-- 404 Error Text --> */}
                            <div className="text-center">
                                <div className="error mx-auto" data-text="404">
                                    404
                                </div>
                                <p className="lead text-gray-800 mb-5">Page Not Found</p>
                                <p className="text-gray-500 mb-0">
                                    It looks like you found a glitch in the matrix...
                                </p>
                                <Link to="/dashboard">
                                    <a href="index.html">&larr; Back to Dashboard</a>
                                </Link>
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

export default ErrorPages