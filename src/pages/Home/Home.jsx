import React, { Component } from 'react';
import "./Home.css";
import TopNavBar from "../../Component/TopNavBar/TopNavBar";
import {MDBView, MDBContainer, MDBCol, MDBRow, Animation} from 'mdbreact';
import Milan_Card from "../../Component/Card/milan_card";
import Cattolica_Footer from "../../Component/CattolicaFooter/Cattolica_Footer";
import {CircleArrow as ScrollUpButton} from "react-scroll-up-button";
import {Helmet} from "react-helmet";


class Home extends React.Component {
    render () {
        return (
            <div id="CattolicaHome">
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Study Abroad at UNIVERSITÀ CATTOLICA</title>
                </Helmet>

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
                                        <span><a href="https://emea.hobsonsradius.com/ssc/iform/x77d7c7fI670x6700oC675.ssc" className="white-text">Contact Us</a></span>
                                    </li>
                                    <hr className="white-text"/>
                                    <li className="left_nav">
                                        <span><a href="https://emea.hobsonsradius.com/ssc/aform/x8kk5pKM07020x670GS3K.ssc" className="white-text">Apply Now</a></span>
                                    </li>
                                    <hr className="white-text"/>
                                    <li className="left_nav">
                                        <span><a href="http://www.studyitaly.it/index.php?option=com_content&view=article&id=301&catid=88&Itemid=784" className="white-text">Download our Brochure</a></span>
                                    </li>
                                </ul>
                            </MDBCol>
                            <MDBCol size="4">
                                <Milan_Card/>
                            </MDBCol>
                        </MDBRow>
                    </MDBContainer>
                <Cattolica_Footer/>
                    <ScrollUpButton />
                </Animation>

            </div>
        )
    }
}

export default Home;