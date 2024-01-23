import React, { useState } from 'react'
import Footer from '../../Footer'
import LogoutModal from '../../LogoutModal'
import Navbar from '../../Navbar'
import ScrollToTop from '../../ScrollToTop'
import Sidebar from '../../Sidebars/Sidebar'

function Borders({ handleOpen, handleOpen1, handleOpen2, open, open1, open2, setOpen,
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
                            {/* <!-- Page Heading --> */}
                            <h1 className="h3 mb-1 text-gray-800">Border Utilities</h1>
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
                                {/* <!-- Border Left Utilities --> */}
                                <div className="col-lg-6">
                                    <div className="card mb-4 py-3 border-left-primary">
                                        <div className="card-body">.border-left-primary</div>
                                    </div>

                                    <div className="card mb-4 py-3 border-left-secondary">
                                        <div className="card-body">.border-left-secondary</div>
                                    </div>

                                    <div className="card mb-4 py-3 border-left-success">
                                        <div className="card-body">.border-left-success</div>
                                    </div>

                                    <div className="card mb-4 py-3 border-left-info">
                                        <div className="card-body">.border-left-info</div>
                                    </div>

                                    <div className="card mb-4 py-3 border-left-warning">
                                        <div className="card-body">.border-left-warning</div>
                                    </div>

                                    <div className="card mb-4 py-3 border-left-danger">
                                        <div className="card-body">.border-left-danger</div>
                                    </div>

                                    <div className="card mb-4 py-3 border-left-dark">
                                        <div className="card-body">.border-left-dark</div>
                                    </div>
                                </div>

                                {/* <!-- Border Bottom Utilities --> */}
                                <div className="col-lg-6">
                                    <div className="card mb-4 py-3 border-bottom-primary">
                                        <div className="card-body">.border-bottom-primary</div>
                                    </div>

                                    <div className="card mb-4 py-3 border-bottom-secondary">
                                        <div className="card-body">.border-bottom-secondary</div>
                                    </div>

                                    <div className="card mb-4 py-3 border-bottom-success">
                                        <div className="card-body">.border-bottom-success</div>
                                    </div>

                                    <div className="card mb-4 py-3 border-bottom-info">
                                        <div className="card-body">.border-bottom-info</div>
                                    </div>

                                    <div className="card mb-4 py-3 border-bottom-warning">
                                        <div className="card-body">.border-bottom-warning</div>
                                    </div>

                                    <div className="card mb-4 py-3 border-bottom-danger">
                                        <div className="card-body">.border-bottom-danger</div>
                                    </div>

                                    <div className="card mb-4 py-3 border-bottom-dark">
                                        <div className="card-body">.border-bottom-dark</div>
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

export default Borders