import React from 'react'
import Card from './Card'
import Footer from '../../Footer'
import LogoutModal from '../../LogoutModal'
import Navbar from '../../Navbar'
import ScrollToTop from '../../ScrollToTop'
import Sidebar from '../../Sidebars/Sidebar'
import { useState } from 'react'

function Cards({ handleOpen, handleOpen1, handleOpen2, open, open1, open2, setOpen,
    setOpen1, setOpen2 }) {

    const cardData = [
        {
            cardtype: 'card border-left-primary shadow h-100 py-2',
            textcolor: 'text-xs font-weight-bold text-primary text-uppercase mb-1',
            heading: 'Earnings (Monthly)',
            content: '$40,000',
            progress: false,
            icon: 'fas fa-calendar fa-2x text-gray-300',
        },
        {
            cardtype: 'card border-left-success shadow h-100 py-2',
            textcolor: 'text-xs font-weight-bold text-success text-uppercase mb-1',
            heading: 'Earnings (Annual)',
            content: '$215,000',
            progress: false,
            icon: 'fas fa-dollar-sign fa-2x text-gray-300',
        },
        {
            cardtype: 'card border-left-info shadow h-100 py-2',
            textcolor: 'text-xs font-weight-bold text-info text-uppercase mb-1',
            heading: 'Tasks',
            content: '50%',
            progress: true,
            icon: 'fas fa-clipboard-list fa-2x text-gray-300',
        },
        {
            cardtype: 'card border-left-warning shadow h-100 py-2',
            textcolor: 'text-xs font-weight-bold text-warning text-uppercase mb-1',
            heading: ' Pending Requests',
            content: '18',
            progress: false,
            icon: 'fas fa-comments fa-2x text-gray-300',
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
                            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                                <h1 className="h3 mb-0 text-gray-800">Cards</h1>
                            </div>
                            <div className="row">
                                {cardData.map((card) => (
                                    <Card
                                        cardType={card.cardtype}
                                        textColor={card.textcolor}
                                        heading={card.heading}
                                        content={card.content}
                                        progress={card.progress}
                                        icon={card.icon}
                                    />
                                ))}
                            </div>
                            <div className="row">
                                <div className="col-lg-6">
                                    {/* <!-- Default Card Example --> */}
                                    <div className="card mb-4">
                                        <div className="card-header">Default Card Example</div>
                                        <div className="card-body">
                                            This card uses Bootstrap's default styling with no utility
                                            classNamees added. Global styles are the only things modifying
                                            the look and feel of this default card example.
                                        </div>
                                    </div>

                                    {/* <!-- Basic Card Example --> */}
                                    <div className="card shadow mb-4">
                                        <div className="card-header py-3">
                                            <h6 className="m-0 font-weight-bold text-primary">
                                                Basic Card Example
                                            </h6>
                                        </div>
                                        <div className="card-body">
                                            The styling for this basic card example is created by
                                            using default Bootstrap utility classNamees. By using utility
                                            classNamees, the style of the card component can be easily
                                            modified with no need for any custom CSS!
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-6">
                                    {/* <!-- Dropdown Card Example --> */}
                                    <div className="card shadow mb-4">
                                        {/* <!-- Card Header - Dropdown --> */}
                                        <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                                            <h6 className="m-0 font-weight-bold text-primary">
                                                Dropdown Card Example
                                            </h6>
                                            <div className="dropdown no-arrow">
                                                <a
                                                    className="dropdown-toggle"
                                                    href="#"
                                                    role="button"
                                                    id="dropdownMenuLink"
                                                    data-toggle="dropdown"
                                                    aria-haspopup="true"
                                                    aria-expanded="false"
                                                >
                                                    <i className="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
                                                </a>
                                                <div
                                                    className="dropdown-menu dropdown-menu-right shadow animated--fade-in"
                                                    aria-labelledby="dropdownMenuLink"
                                                >
                                                    <div className="dropdown-header">Dropdown Header:</div>
                                                    <a className="dropdown-item" href="#">
                                                        Action
                                                    </a>
                                                    <a className="dropdown-item" href="#">
                                                        Another action
                                                    </a>
                                                    <div className="dropdown-divider"></div>
                                                    <a className="dropdown-item" href="#">
                                                        Something else here
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!-- Card Body --> */}
                                        <div className="card-body">
                                            Dropdown menus can be placed in the card header in order
                                            to extend the functionality of a basic card. In this
                                            dropdown card example, the Font Awesome vertical ellipsis
                                            icon in the card header can be clicked on in order to
                                            toggle a dropdown menu.
                                        </div>
                                    </div>

                                    {/* <!-- Collapsable Card Example --> */}
                                    <div className="card shadow mb-4">
                                        {/* <!-- Card Header - Accordion --> */}
                                        <a
                                            href="#collapseCardExample"
                                            className="d-block card-header py-3"
                                            data-toggle="collapse"
                                            role="button"
                                            aria-expanded="true"
                                            aria-controls="collapseCardExample"
                                        >
                                            <h6 className="m-0 font-weight-bold text-primary">
                                                Collapsable Card Example
                                            </h6>
                                        </a>
                                        {/* <!-- Card Content - Collapse --> */}
                                        <div className="collapse show" id="collapseCardExample">
                                            <div className="card-body">
                                                This is a collapsable card example using Bootstrap's
                                                built in collapse functionality.{' '}
                                                <strong>Click on the card header</strong> to see the
                                                card body collapse and expand!
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

export default Cards