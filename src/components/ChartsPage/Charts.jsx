import React, { useState } from 'react'
import Footer from '../Footer'
import LogoutModal from '../LogoutModal'
import Navbar from '../Navbar'
import ScrollToTop from '../ScrollToTop'
import Sidebar from '../Sidebars/Sidebar'
import AreaChart from './AreaChart'
import BarChart from './BarChart'
import DonutChart from './DonutChart'

function Charts({ handleOpen, handleOpen1, handleOpen2, open, open1, open2, setOpen,
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
                            <h1 className="h3 mb-2 text-gray-800">Charts</h1>
                            <p className="mb-4">
                                Chart.js is a third party plugin that is used to generate the
                                charts in this theme. The charts below have been customized -
                                for further customization options, please visit the{' '}
                                <a target="_blank" href="https://www.chartjs.org/docs/latest/">
                                    official Chart.js documentation
                                </a>
                                .
                            </p>

                            {/* <!-- Content Row --> */}
                            <div className="row">
                                <div className="col-xl-8 col-lg-7">
                                    {/* <!-- Area Chart --> */}
                                    <div className="card shadow mb-4">
                                        <div className="card-header py-3">
                                            <h6 className="m-0 font-weight-bold text-primary">
                                                Area Chart
                                            </h6>
                                        </div>
                                        <div className="card-body">
                                            <div className="chart-area">
                                                <AreaChart />
                                            </div>
                                            <hr />
                                            Styling for the area chart can be found in the
                                            <code>/js/demo/chart-area-demo.js</code> file.
                                        </div>
                                    </div>

                                    {/* <!-- Bar Chart --> */}
                                    <div className="card shadow mb-4">
                                        <div className="card-header py-3">
                                            <h6 className="m-0 font-weight-bold text-primary">
                                                Bar Chart
                                            </h6>
                                        </div>
                                        <div className="card-body">
                                            <div className="chart-bar">
                                                <BarChart />
                                            </div>
                                            <hr />
                                            Styling for the bar chart can be found in the
                                            <code>/js/demo/chart-bar-demo.js</code> file.
                                        </div>
                                    </div>
                                </div>

                                {/* <!-- Donut Chart --> */}
                                <div className="col-xl-4 col-lg-5">
                                    <div className="card shadow mb-4">
                                        {/* <!-- Card Header - Dropdown --> */}
                                        <div className="card-header py-3">
                                            <h6 className="m-0 font-weight-bold text-primary">
                                                Donut Chart
                                            </h6>
                                        </div>
                                        {/* <!-- Card Body --> */}
                                        <div className="card-body">
                                            <div className="chart-pie" style={{ width: "95%" }}>
                                                <DonutChart />
                                            </div>
                                            <hr />
                                            Styling for the donut chart can be found in the
                                            <code>/js/demo/chart-pie-demo.js</code> file.
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

export default Charts