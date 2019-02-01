import React, { Component } from 'react';
import "./Home.css";
import TopNavBar from "../../Component/TopNavBar/TopNavBar";
import {MDBView, MDBContainer, MDBCol, MDBRow, Animation} from 'mdbreact';
import Milan_Card from "../../Component/Card/milan_card";


class Home extends React.Component {
    render () {
        return (
            <div id="CattolicaHome">
                <TopNavBar/>
                <Animation type="fadeIn">
                    <MDBView className="banner">
                    </MDBView>
                    <br/>
                    <MDBContainer>
                        <MDBRow>
                            <MDBCol size="4">
                                <h1 >
                                    Study Abroad
                                </h1>
                            </MDBCol>
                        </MDBRow>
                        <MDBRow>
                            <MDBCol size="8">
                                <h3>
                                    Spend a semester or a year with us!
                                </h3>
                            </MDBCol>
                        </MDBRow>
                        <hr className="hr-dark"/>
                        <MDBRow>
                            <MDBCol size="12">
                                <p>
                                    If your home institution is not an existing Università Cattolica partner you can enroll directly to Cattolica as a Study Abroad student. We highly recommend you talk to your Study Abroad advisor about the eligibility requirements.
                                </p>
                            </MDBCol>
                        </MDBRow>
                        <MDBRow>
                            <MDBCol size="8">
                                <p>
                                    Study Abroad programs are available at the following locations:
                                </p>
                            </MDBCol>
                        </MDBRow>
                        <MDBRow>
                            <MDBCol size="3">
                                <ul style={{ listStyleType: "none", padding: 0 }}>
                                    <li className="left_nav">
                                        <span><a href="#!" className="white-text">Contact Us</a></span>
                                    </li>
                                    <hr className="white-text"/>
                                    <li className="left_nav">
                                        <span><a href="#!" className="white-text">Apply Now</a></span>
                                    </li>
                                    <hr className="white-text"/>
                                    <li className="left_nav">
                                        <span><a href="#!" className="white-text">Download our Brochure</a></span>
                                    </li>
                                </ul>
                            </MDBCol>
                            <MDBCol size="4">
                                <Milan_Card/>
                            </MDBCol>
                        </MDBRow>
                    </MDBContainer>

                </Animation>

            </div>
        )
    }
}

export default Home;