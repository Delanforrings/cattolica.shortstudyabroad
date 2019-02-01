import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter, MDBView, MDBMask, MDBIcon } from "mdbreact";
import Footer_img from "./footerlogo-5.jpg";
import "./Cattolica_Footer.css";

const FooterPage = () => {
    return (
        <div id="Cattolica_Footer">
            <MDBFooter className="font-small pt-4 mt-4">
                <MDBContainer fluid className="text-center text-md-left footer_bg">
                    <MDBRow>
                        <MDBCol size="2" className="offset-md-1">
                            <ul>
                                <li className="list-unstyled">
                                    <MDBIcon icon="angle-right" className="icon_color"/> <a href="#!">Programs</a>
                                </li>
                                <li className="list-unstyled">
                                    <MDBIcon icon="angle-right" className="icon_color"/> <a href="#!">Contacts</a>
                                </li>
                                <li className="list-unstyled">
                                    <MDBIcon icon="angle-right" className="icon_color"/> <a href="#!">Brochures</a>
                                </li>
                            </ul>
                        </MDBCol>
                        <MDBCol size="5">
                            <ul>
                                <li className="list-unstyled">
                                    <MDBIcon icon="angle-right" className="icon_color"/> <a href="#!">Admissions</a>
                                </li>
                                <li className="list-unstyled">
                                    <MDBIcon icon="angle-right" className="icon_color"/> <a href="#!">Life at Cattolica</a>
                                </li>
                                <li className="list-unstyled">
                                    <MDBIcon icon="angle-right" className="icon_color"/> <a href="#!">Our Video</a>
                                </li>
                            </ul>
                        </MDBCol>
                        <MDBCol size="4">
                            <img src={Footer_img} className="img-fluid"/>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
                <div className="footer-copyright text-center py-3 footer_bg">
                    <MDBContainer fluid>
                        &copy; {new Date().getFullYear()} Copyright: <a href="#!"> shortstudyabroad.com </a>
                    </MDBContainer>
                </div>
            </MDBFooter>
        </div>

    );
}

export default FooterPage;