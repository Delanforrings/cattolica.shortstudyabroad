import React, {Component} from 'react';
import {MDBContainer, MDBRow, MDBCol, MDBView} from 'mdbreact';
import {Helmet} from "react-helmet";
import "./About_Cattolica.css";

import ornaghi from './alumnis/Ornaghi.png';
import prodi from './alumnis/Prodi.png';
import norsa from './alumnis/Norsa.png';
import augusto from './alumnis/Augusto_Marietti.jpg';
import altavilla from './alumnis/Altavilla.png';
import concetta from './alumnis/Concetta_Lanciaux.jpg';
import ignazio from './alumnis/Ignazio_Marino.jpg';
import gianlugi from './alumnis/Gianluigi_Zenti.jpg';
import igor from './alumnis/Igor_Cassina.jpg';
import monica from './alumnis/Monica_Maggioni.jpg';

class Alumni extends React.Component {
    render() {
        return (
            <div id="AboutCattolica">
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Notable Alumni</title>
                </Helmet>
                <MDBView className="banner" />
                <br/>
                <MDBContainer>
                    <MDBRow>
                        <MDBCol>
                            <h1>
                                Notable Alumni
                            </h1>
                            <hr/>
                            <p>
                                <strong>Cattolica is accustomed to providing outstanding graduates for both the private and public sectors.</strong>
                                <br/>
                                <strong>
                                Where could your program take you? Become part of Cattolica’s list of inspiring graduates.
                                </strong>
                            </p>
                        </MDBCol>
                    </MDBRow>

                    <MDBRow>
                        <MDBCol size="2" className="offset-md-1">
                            <img src={ornaghi} className="alumni_icon"/>
                        </MDBCol>
                        <MDBCol size="3" className="alumni_title">
                            <p>
                                <strong className="grey-text">
                                Lorenzo Ornaghi
                            </strong>
                                <br/>
                                <strong className="font-italic">
                                    Former Rector and Minister for Cultural Heritage
                                </strong>
                            </p>
                        </MDBCol>
                        <MDBCol size="2" className="offset-md-1">
                            <img src={prodi} className="alumni_icon"/>
                        </MDBCol>
                        <MDBCol size="3" className="alumni_title">
                            <p>
                                <strong className="grey-text">
                                    Romano Prodi
                                </strong>
                                <br/>
                                <strong className="font-italic">
                                    Former Prime Minister and EU Commission President
                                </strong>
                            </p>
                        </MDBCol>
                    </MDBRow>

                    <MDBRow>
                        <MDBCol size="2" className="offset-md-1">
                            <img src={norsa} className="alumni_icon"/>
                        </MDBCol>
                        <MDBCol size="3" className="alumni_title">
                            <p>
                                <strong className="grey-text">
                                    Michele Norsa
                                </strong>
                                <br/>
                                <strong className="font-italic">
                                    Salvatore Ferragamo CEO
                                </strong>
                            </p>
                        </MDBCol>
                        <MDBCol size="2" className="offset-md-1">
                            <img src={augusto} className="alumni_icon"/>
                        </MDBCol>
                        <MDBCol size="3" className="alumni_title">
                            <p>
                                <strong className="grey-text">
                                    Augusto Marietti
                                </strong>
                                <br/>
                                <strong className="font-italic">
                                    Internet entrepreneur
                                </strong>
                            </p>
                        </MDBCol>
                    </MDBRow>

                    <MDBRow>
                        <MDBCol size="2" className="offset-md-1">
                            <img src={altavilla} className="alumni_icon"/>
                        </MDBCol>
                        <MDBCol size="3" className="alumni_title">
                            <p>
                                <strong className="grey-text">
                                    Alfredo Altavilla
                                </strong>
                                <br/>
                                <strong className="font-italic">
                                    FCA Group EMEA
                                </strong>
                            </p>
                        </MDBCol>
                        <MDBCol size="2" className="offset-md-1">
                            <img src={concetta} className="alumni_icon"/>
                        </MDBCol>
                        <MDBCol size="3" className="alumni_title">
                            <p>
                                <strong className="grey-text">
                                    Concetta Lanciaux
                                </strong>
                                <br/>
                                <strong className="font-italic">
                                    Vice-President of fashion house Louis Vuitton Moët Hennessy
                                </strong>
                            </p>
                        </MDBCol>
                    </MDBRow>

                    <MDBRow>
                        <MDBCol size="2" className="offset-md-1">
                            <img src={ignazio} className="alumni_icon"/>
                        </MDBCol>
                        <MDBCol size="3" className="alumni_title">
                            <p>
                                <strong className="grey-text">
                                    Ignazio Marino
                                </strong>
                                <br/>
                                <strong className="font-italic">
                                    Surgeon and Former Mayor of Rome
                                </strong>
                            </p>
                        </MDBCol>
                        <MDBCol size="2" className="offset-md-1">
                            <img src={gianlugi} className="alumni_icon"/>
                        </MDBCol>
                        <MDBCol size="3" className="alumni_title">
                            <p>
                                <strong className="grey-text">
                                    Gianluigi Zenti
                                </strong>
                                <br/>
                                <strong className="font-italic">
                                    President of Academia Barilla
                                </strong>
                            </p>
                        </MDBCol>
                    </MDBRow>

                    <MDBRow>
                        <MDBCol size="2" className="offset-md-1">
                            <img src={ignazio} className="alumni_icon"/>
                        </MDBCol>
                        <MDBCol size="3" className="alumni_title">
                            <p>
                                <strong className="grey-text">
                                    Igor Cassina
                                </strong>
                                <br/>
                                <strong className="font-italic">
                                    Gymnast Gold Medal Winner Athens 2004
                                </strong>
                            </p>
                        </MDBCol>
                        <MDBCol size="2" className="offset-md-1">
                            <img src={gianlugi} className="alumni_icon"/>
                        </MDBCol>
                        <MDBCol size="3" className="alumni_title">
                            <p>
                                <strong className="grey-text">
                                    Monica Maggioni
                                </strong>
                                <br/>
                                <strong className="font-italic">
                                    Journalist and Director RaiNews24
                                </strong>
                            </p>
                        </MDBCol>
                    </MDBRow>

                </MDBContainer>

            </div>
        )
    }
}

export default Alumni;

