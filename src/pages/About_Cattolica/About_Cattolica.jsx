import React, {Component} from 'react';
import TopNavBar from "../../Component/TopNavBar/TopNavBar";
import FooterPage from "../../Component/CattolicaFooter/Cattolica_Footer";
import {Helmet} from "react-helmet";
import {MDBView, MDBContainer, MDBCol, MDBRow, Animation, MDBIcon} from 'mdbreact';
import "./About_Cattolica.css";
import YouTube from 'react-youtube';


class About_Cattolica extends React.Component{
    render (){
        const opts = {
            height: '390',
            width: '640',
            playerVars: { // https://developers.google.com/youtube/player_parameters
                autoplay: 0
            }
        };
        return(

            <div id="AboutCattolica">
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>About Cattolica</title>
                </Helmet>
                <Animation type="fadeIn">
                    <MDBView className="banner">
                    </MDBView>
                    <br/>
                    <MDBContainer>
                        <MDBRow>
                            <MDBCol size="4">
                                <h1>
                                    About Cattolica
                                </h1>
                                <hr/>
                            </MDBCol>
                        </MDBRow>

                        <MDBRow>
                            <MDBCol size="12">
                                <p>
                                    Our full name may be Università Cattolica del Sacro Cuore, however we are affectionately known as Cattolica.
                                </p>
                            </MDBCol>
                        </MDBRow>
                        <MDBRow>
                            <MDBCol size="12">
                                <p>
                                    Our students and alumni feel fortunate to be part of a university with a recognized academic profile, one that is reflected by its academics, reputation, and global network.
                                </p>
                            </MDBCol>
                        </MDBRow>
                        <MDBRow>
                            <MDBCol size="12">
                                <p>
                                    At Cattolica your choices are endless: we offer an <span className="colorChange">impressive range of innovative programs</span> in the fields of Economics & Business, Accounting & Finance, Agriculture, Psychology and Linguistics, as well as Philosophy and the Arts.
                                </p>
                            </MDBCol>
                        </MDBRow>
                        <MDBRow>
                            <MDBCol size="12">
                                <p>
                                    In the renowned QS World University Rankings by Subject 2016, Cattolica’s ascendency placed the University in formidable company, with <span className="colorChange">every discipline ranked in the top 200 in the world</span>, or higher.
                                </p>
                            </MDBCol>
                        </MDBRow>
                        <MDBRow>
                            <MDBCol size="12">
                                <p>
                                    Whilst at Cattolica we pride ourselves on our academic reputation, what truly distinguishes our University is the <span className="colorChange">campus diversity</span> and endless possibilities. You will be sure to choose a program and learning environment that is the best fit for you, and one that will facilitate the growth of skills and competencies towards your brighter future.
                                </p>
                            </MDBCol>
                        </MDBRow>
                        <MDBRow>
                            <MDBCol size="12">
                                <p>
                                    Cattolica puts <span className="colorChange">you first</span>. The professional academic staff believes in you and helps to connect your learning and desired career path. And our range of campus facilities and services ensures that every international student has access to all of the support, information and mentoring which international students seek. These include a dedicated international student center, a housing service, health center, sports facilities and international student associations.
                                </p>
                            </MDBCol>
                        </MDBRow>
                        <MDBRow>
                            <MDBCol size="12">
                                <p>
                                    Cattolica works continuously towards developing new and emerging programs. Become part of a contemporary reality, and embrace the new opportunities and options available to students.
                                </p>
                            </MDBCol>
                        </MDBRow>
                        <MDBRow>
                            <MDBCol size="12">
                                <p>
                                    From your first day at Cattolica, you will not only feel part of our University, you will be a welcome part of our community Cattolica.
                                </p>
                            </MDBCol>
                        </MDBRow>
                        <MDBRow>
                            <MDBCol size="12">
                                <p className="colorChange">
                                    What better place to study?
                                </p>
                            </MDBCol>
                        </MDBRow>
                    </MDBContainer>
                    <br/>
                    <MDBContainer>
                        <MDBRow>
                            <MDBCol>
                                <h1>
                                    Our video
                                </h1>
                            </MDBCol>
                        </MDBRow>
                        <MDBRow>
                            <MDBCol>
                                <p className="colorChange">
                                    <MDBIcon icon="video" /> Welcome to Cattolica! Discover here the amazing study experience that we offer in Milan, Italy.
                                </p>
                                <hr/>
                            </MDBCol>
                        </MDBRow>

                        <MDBRow>
                            <MDBCol>
                                <YouTube
                                    videoId="JAxUmR5wEdM"
                                    opts={opts}
                                    onReady={this._onReady}
                                />
                            </MDBCol>
                        </MDBRow>
                    </MDBContainer>
                </Animation>

                <MDBView>
                </MDBView>
            </div>

        )
    }
    _onReady(event) {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
    }
}

export default About_Cattolica;