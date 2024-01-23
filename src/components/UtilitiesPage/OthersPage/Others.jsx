import React, { useState } from 'react'
import Footer from '../../Footer'
import LogoutModal from '../../LogoutModal'
import Navbar from '../../Navbar'
import ScrollToTop from '../../ScrollToTop'
import Sidebar from '../../Sidebars/Sidebar'


function Others({ handleOpen, handleOpen1, handleOpen2, open, open1, open2, setOpen,
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
                            <h1 className="h3 mb-1 text-gray-800">Other Utilities</h1>
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
                                <div className="col-lg-6">
                                    {/* <!-- Overflow Hidden --> */}
                                    <div className="card mb-4">
                                        <div className="card-header py-3">
                                            <h6 className="m-0 font-weight-bold text-primary">
                                                Overflow Hidden Utilty
                                            </h6>
                                        </div>
                                        <div className="card-body">
                                            Use <code>.o-hidden</code> to set the overflow property of
                                            any element to hidden.
                                        </div>
                                    </div>

                                    {/* <!-- Progress Small --> */}
                                    <div className="card mb-4">
                                        <div className="card-header py-3">
                                            <h6 className="m-0 font-weight-bold text-primary">
                                                Progress Small Utility
                                            </h6>
                                        </div>
                                        <div className="card-body">
                                            <div className="mb-1 small">Normal Progress Bar</div>
                                            <div className="progress mb-4">
                                                <div
                                                    className="progress-bar"
                                                    role="progressbar"
                                                    style={{ width: '75%' }}
                                                    aria-valuenow="75"
                                                    aria-valuemin="0"
                                                    aria-valuemax="100"
                                                ></div>
                                            </div>
                                            <div className="mb-1 small">Small Progress Bar</div>
                                            <div className="progress progress-sm mb-2">
                                                <div
                                                    className="progress-bar"
                                                    role="progressbar"
                                                    style={{ width: '75%' }}
                                                    aria-valuenow="75"
                                                    aria-valuemin="0"
                                                    aria-valuemax="100"
                                                ></div>
                                            </div>
                                            Use the <code>.progress-sm</code> className along
                                            with&nbsp;
                                            <code>.progress</code>
                                        </div>
                                    </div>

                                    {/* <!-- Dropdown No Arrow --> */}
                                    <div className="card mb-4">
                                        <div className="card-header py-3">
                                            <h6 className="m-0 font-weight-bold text-primary">
                                                Dropdown - No Arrow
                                            </h6>
                                        </div>
                                        <div className="card-body">
                                            <div className="dropdown no-arrow mb-4">
                                                <button
                                                    className="btn btn-secondary dropdown-toggle"
                                                    type="button"
                                                    id="dropdownMenuButton"
                                                    data-toggle="dropdown"
                                                    aria-haspopup="true"
                                                    aria-expanded="false"
                                                >
                                                    Dropdown (no arrow)
                                                </button>
                                                <div
                                                    className="dropdown-menu"
                                                    aria-labelledby="dropdownMenuButton"
                                                >
                                                    <a className="dropdown-item" href="#">
                                                        Action
                                                    </a>
                                                    <a className="dropdown-item" href="#">
                                                        Another action
                                                    </a>
                                                    <a className="dropdown-item" href="#">
                                                        Something else here
                                                    </a>
                                                </div>
                                            </div>
                                            Add the <code>.no-arrow</code> className alongside
                                            the&nbsp;
                                            <code>.dropdown</code>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-6">
                                    {/* <!-- Roitation Utilities --> */}
                                    <div className="card">
                                        <div className="card-header py-3">
                                            <h6 className="m-0 font-weight-bold text-primary">
                                                Rotation Utilities
                                            </h6>
                                        </div>
                                        <div className="card-body text-center">
                                            <div className="bg-primary text-white p-3 rotate-15 d-inline-block my-4">
                                                .rotate-15
                                            </div>
                                            <hr />
                                            <div className="bg-primary text-white p-3 rotate-n-15 d-inline-block my-4">
                                                .rotate-n-15
                                            </div>
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

export default Others