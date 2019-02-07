import React from 'react';
import { MDBContainer, MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink, MDBIcon, MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBBadge } from 'mdbreact';
import "./TopNavBar.css";

class TopNavBar extends React.Component {
    state = {
        isOpen: false
    };

    toggleCollapse = () => {
        this.setState({ isOpen: !this.state.isOpen });
    }

    constructor(props) {
        super(props)
        this.state = { isOpen: false }
    }

    handleOpen = () => {
        this.setState({ isOpen: true })
    }

    handleClose = () => {
        this.setState({ isOpen: false })
    }


    render() {
        const bgPink = {backgroundColor: '#00609d'}
        return(
            <div id="CattolicaNav">
                <header>
                    <MDBNavbar style={bgPink} dark expand="md" scrolling>
                        <MDBContainer>
                            <MDBNavbarToggler onClick={this.toggleCollapse} />
                            <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
                                <MDBNavbarNav>
                                    <MDBNavItem>
                                        <MDBNavLink to="/" className="Cattolica_tabs">Home</MDBNavLink>
                                    </MDBNavItem>

                                    <MDBNavItem>
                                        <MDBDropdown>
                                            <MDBDropdownToggle nav caret className="Cattolica_tabs_d">
                                                <div className="d-md-inline" >About Cattolica</div>
                                            </MDBDropdownToggle>
                                            <MDBDropdownMenu right>
                                                <MDBDropdownItem disabled className="Cattolica_tabs_dd">
                                                    <MDBDropdownItem header>UNIVERSITÀ CATTOLICA</MDBDropdownItem>
                                                    <hr className="hr_style"/>
                                                </MDBDropdownItem>
                                                <MDBDropdownItem href="/about-cattolica" className="Cattolica_tabs_dd_item">
                                                    <h3>About Cattolica</h3>
                                                </MDBDropdownItem>

                                                <MDBDropdownItem href="#!" disabled className="Cattolica_tabs_dd">
                                                    <MDBDropdownItem header>CAMPUSES - Milan</MDBDropdownItem>
                                                    <hr className="hr_style"/>
                                                </MDBDropdownItem>
                                                <MDBDropdownItem href="#!" disabled className="Cattolica_tabs_dd">
                                                    <MDBDropdownItem header>GLOBAL ENGAGEMENT</MDBDropdownItem>
                                                    <hr className="hr_style"/>
                                                </MDBDropdownItem>
                                                <MDBDropdownItem href="#!" className="Cattolica_tabs_dd_item">
                                                    <h3>International Links</h3>
                                                </MDBDropdownItem>
                                                <MDBDropdownItem href="#!" className="Cattolica_tabs_dd_item">
                                                    <h3>Representatives</h3>
                                                </MDBDropdownItem>
                                                <MDBDropdownItem href="#!" className="Cattolica_tabs_dd_item">
                                                    <h3>Cooperation Projects</h3>
                                                </MDBDropdownItem>
                                                <MDBDropdownItem href="#!" className="Cattolica_tabs_dd_item">
                                                    <h3>CHEI - Center for Higher Education Internationalization</h3>
                                                </MDBDropdownItem>
                                                <MDBDropdownItem href="#!" className="Cattolica_tabs_dd_item">
                                                    <h3>Confucius Institute</h3>
                                                </MDBDropdownItem>
                                                <MDBDropdownItem href="#!" className="Cattolica_tabs_dd_item">
                                                    <h3>Africa Scholars Program</h3>
                                                </MDBDropdownItem>
                                            </MDBDropdownMenu>
                                        </MDBDropdown>
                                    </MDBNavItem>

                                    <MDBNavItem>
                                        <MDBDropdown>
                                            <MDBDropdownToggle nav caret className="Cattolica_tabs_d" >
                                                <div className="d-md-inline" >Programs</div>
                                            </MDBDropdownToggle>
                                            <MDBDropdownMenu right>
                                                <MDBDropdownItem  disabled className="Cattolica_tabs_dd">
                                                    <MDBDropdownItem header>Study Abroad Program</MDBDropdownItem>
                                                    <hr className="hr_style"/>
                                                </MDBDropdownItem>
                                                <MDBDropdownItem href="/program_milan" className="Cattolica_tabs_dd_item">
                                                    <h3>In Milan</h3>
                                                </MDBDropdownItem>
                                            </MDBDropdownMenu>
                                        </MDBDropdown>
                                    </MDBNavItem>

                                    <MDBNavItem>
                                        <MDBNavLink to="/admission" className="Cattolica_tabs">Admission</MDBNavLink>
                                    </MDBNavItem>

                                    <MDBNavItem>
                                        <MDBDropdown>
                                            <MDBDropdownToggle nav caret className="Cattolica_tabs_d">
                                                <div className="d-md-inline" >Student Services</div>
                                            </MDBDropdownToggle>
                                            <MDBDropdownMenu right>
                                                <MDBDropdownItem href="#!" disabled className="Cattolica_tabs_dd">
                                                    <MDBDropdownItem header>MILAN CAMPUS</MDBDropdownItem>
                                                    <hr className="hr_style"/>
                                                </MDBDropdownItem>
                                                <MDBDropdownItem href="#!" className="Cattolica_tabs_dd_item">
                                                    <h3>Italian Language Course</h3>
                                                </MDBDropdownItem>
                                                <MDBDropdownItem href="#!" className="Cattolica_tabs_dd_item">
                                                    <h3>Support Services</h3>
                                                </MDBDropdownItem>
                                                <MDBDropdownItem href="#!" className="Cattolica_tabs_dd_item">
                                                    <h3>Campus Facilities</h3>
                                                </MDBDropdownItem>
                                                <MDBDropdownItem href="#!" className="Cattolica_tabs_dd_item">
                                                    <h3>Orientation Event</h3>
                                                </MDBDropdownItem>
                                                <MDBDropdownItem href="#!" className="Cattolica_tabs_dd_item">
                                                    <h3>Student Associations</h3>
                                                </MDBDropdownItem>
                                                <MDBDropdownItem href="#!" className="Cattolica_tabs_dd_item">
                                                    <h3>Health Services</h3>
                                                </MDBDropdownItem>
                                                <MDBDropdownItem href="#!" className="Cattolica_tabs_dd_item">
                                                    <h3>Sport Facilities at Cattolica</h3>
                                                </MDBDropdownItem>
                                                <MDBDropdownItem href="#!" className="Cattolica_tabs_dd_item">
                                                    <h3>Social Activities</h3>
                                                </MDBDropdownItem>


                                            </MDBDropdownMenu>
                                        </MDBDropdown>
                                    </MDBNavItem>

                                    <MDBNavItem>
                                        <MDBDropdown>
                                            <MDBDropdownToggle nav caret className="Cattolica_tabs_d" >
                                                <div className="d-md-inline" >Life At Cattolica</div>
                                            </MDBDropdownToggle>
                                            <MDBDropdownMenu right>
                                                <MDBDropdownItem href="#!" disabled className="Cattolica_tabs_dd">
                                                    <MDBDropdownItem header>LIFE IN MILAN</MDBDropdownItem>
                                                    <hr className="hr_style"/>
                                                </MDBDropdownItem>
                                                <MDBDropdownItem href="/life_accommodation" className="Cattolica_tabs_dd_item">
                                                    <h3>Accommodation in Milan</h3>
                                                </MDBDropdownItem>
                                                <MDBDropdownItem href="/life_living" className="Cattolica_tabs_dd_item">
                                                    <h3>Living in Milan</h3>
                                                </MDBDropdownItem>
                                                <MDBDropdownItem href="/life_having_fun" className="Cattolica_tabs_dd_item">
                                                    <h3>Having fun in Milan</h3>
                                                </MDBDropdownItem>
                                                <MDBDropdownItem href="/life_useful_info" className="Cattolica_tabs_dd_item">
                                                    <h3>Useful Information</h3>
                                                </MDBDropdownItem>

                                            </MDBDropdownMenu>
                                        </MDBDropdown>
                                    </MDBNavItem>

                                    <MDBNavItem>
                                        <MDBNavLink to="http://www.facebook.com/UCSC.International" className="Cattolica_tabs"><MDBIcon fab icon="facebook-square" /></MDBNavLink>
                                    </MDBNavItem>
                                    <MDBNavItem>
                                        <MDBNavLink to="http://instagram.com/ucscinternational" className="Cattolica_tabs"><MDBIcon fab icon="instagram" /></MDBNavLink>
                                    </MDBNavItem>
                                    <MDBNavItem>
                                        <MDBNavLink to="https://www.youtube.com/user/MyCattolica" className="Cattolica_tabs"><MDBIcon fab icon="youtube-square" /></MDBNavLink>
                                    </MDBNavItem>
                                    <MDBNavItem>
                                        <MDBNavLink to="https://twitter.com/ucsc_int" className="Cattolica_tabs"><MDBIcon fab icon="twitter-square" /></MDBNavLink>
                                    </MDBNavItem>

                                </MDBNavbarNav>
                            </MDBCollapse>
                        </MDBContainer>

                    </MDBNavbar>
                </header>
            </div>
        );
    }
}

export default TopNavBar;