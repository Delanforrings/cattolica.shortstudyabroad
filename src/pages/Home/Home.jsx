import React, { Component } from 'react';
import "./Home.css";
import TopNavBar from "../../Component/TopNavBar/TopNavBar";
import {MDBView, MDBContainer, MDBCol, MDBRow, Animation, MDBIcon} from 'mdbreact';
import Milan_Card from "../../Component/Card/milan_card";
import Cattolica_Footer from "../../Component/CattolicaFooter/Cattolica_Footer";
import {Helmet} from "react-helmet";
import { css } from '@emotion/core';
// First way to import
import { CircleLoader } from 'react-spinners';

const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
`;


class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true
        }
    }

    componentDidMount() {
        this.setState({loading: 'false'});
    }


    render () {

        return (
            <div id="CattolicaHome">
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Study Abroad at UNIVERSITÀ CATTOLICA</title>
                </Helmet>
                <Animation type="fadeIn">
                    <div>
                        <CircleLoader
                            css={override}
                            sizeUnit={"px"}
                            size={150}
                            color={'#123abc'}
                            loading={this.state.loading}
                        />
                        <MDBView className="banner" />
                    </div>


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
                                        <span><a href="https://emea.hobsonsradius.com/ssc/iform/x77d7c7fI670x6700oC675.ssc" className="white-text">Contact Us <MDBIcon icon="phone" /></a> </span>
                                    </li>
                                    <hr className="white-text"/>
                                    <li className="left_nav">
                                        <span><a href="https://emea.hobsonsradius.com/ssc/aform/x8kk5pKM07020x670GS3K.ssc" className="white-text">Apply Now <MDBIcon far icon="edit" /></a> </span>
                                    </li>
                                    <hr className="white-text"/>
                                    <li className="left_nav">
                                        <span><a href="http://www.studyitaly.it/index.php?option=com_content&view=article&id=301&catid=88&Itemid=784" className="white-text">Download our Brochure <MDBIcon icon="download" /></a></span>
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