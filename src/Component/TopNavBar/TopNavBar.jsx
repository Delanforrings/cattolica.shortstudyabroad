import React from 'react';
import { MDBContainer, MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink, MDBIcon, MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBBadge } from 'mdbreact';
import "./TopNavBar.css";

class NavbarPage extends React.Component {
    state = {
        isOpen: false
    };

    toggleCollapse = () => {
        this.setState({ isOpen: !this.state.isOpen });
    }


    render() {
        const bgPink = {backgroundColor: '#106BAD'}
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
                                                <MDBDropdownItem href="#!" className="Cattolica_tabs_dd">
                                                    <h3>
                                                        UNIVERSITÀ CATTOLICA
                                                    </h3>
                                                    <MDBDropdownItem divider />
                                                </MDBDropdownItem>

                                                <MDBDropdownItem href="#!" className="Cattolica_tabs_dd">
                                                    <h3>CAMPUSES</h3>
                                                </MDBDropdownItem>
                                                <MDBDropdownItem href="#!" className="Cattolica_tabs_dd">
                                                    <h3>GLOBAL ENGAGEMENT</h3>
                                                </MDBDropdownItem>
                                            </MDBDropdownMenu>
                                        </MDBDropdown>
                                    </MDBNavItem>

                                    <MDBNavItem>
                                        <MDBNavLink to="#!" className="Cattolica_tabs">Program</MDBNavLink>
                                    </MDBNavItem>

                                    <MDBNavItem>
                                        <MDBNavLink to="#!" className="Cattolica_tabs">Adimission</MDBNavLink>
                                    </MDBNavItem>

                                    <MDBNavItem>
                                        <MDBDropdown>
                                            <MDBDropdownToggle nav caret className="Cattolica_tabs_d">
                                                <div className="d-md-inline" >Student Services</div>
                                            </MDBDropdownToggle>
                                            <MDBDropdownMenu right>
                                                <MDBDropdownItem href="#!" className="Cattolica_tabs_dd">
                                                    <h3>MILAN CAMPUS</h3>
                                                    <MDBDropdownItem divider />
                                                </MDBDropdownItem>

                                            </MDBDropdownMenu>
                                        </MDBDropdown>
                                    </MDBNavItem>

                                    <MDBNavItem>
                                        <MDBDropdown>
                                            <MDBDropdownToggle nav caret className="Cattolica_tabs_d">
                                                <div className="d-md-inline" >Life At Cattolica</div>
                                            </MDBDropdownToggle>
                                            <MDBDropdownMenu right>
                                                <MDBDropdownItem href="#!" className="Cattolica_tabs_dd">
                                                    <h3>LIFE IN MILAN</h3>
                                                    <MDBDropdownItem divider />
                                                </MDBDropdownItem>

                                            </MDBDropdownMenu>
                                        </MDBDropdown>
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

export default NavbarPage;