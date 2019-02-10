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

                    <MDBRow>
                        <MDBCol>
                            <h5>
                                Politics
                            </h5>
                            <p>
                                <strong>
                                    <span className="grey-text">Oscar Luigi Scalfaro,</span> <span className="font-italic">Former President of the Italian Republic</span>
                                </strong>
                                <br/>
                                <strong>
                                    <span className="grey-text">Ciriaco de Mita,</span> <span className="font-italic">Former Prime Minister</span>
                                </strong>
                                <br/>
                                <strong>
                                    <span className="grey-text">Amintore Fanfani,</span> <span className="font-italic">Former Prime Minister</span>
                                </strong>
                                <br/>
                                <strong>
                                    <span className="grey-text">Giovanni Maria Flick,</span> <span className="font-italic">Former Minister of Justice and Constitutional Court President</span>
                                </strong>
                                <br/>
                                <strong>
                                    <span className="grey-text">Angelino Alfano,</span> <span className="font-italic">Minister of Internal Affairs</span>
                                </strong>
                                <br/>
                            </p>
                            <hr/>
                            <h5>
                                Business
                            </h5>
                            <p>
                                <strong>
                                    <span className="grey-text">Angelo Caloia,</span> <span className="font-italic">Banker</span>
                                </strong>
                                <br/>
                                <strong>
                                    <span className="grey-text">Enrico Mattei,</span> <span className="font-italic">ENI founder</span>
                                </strong>
                                <br/>
                                <strong>
                                    <span className="grey-text">Nicola Trussardi,</span> <span className="font-italic">Fashion designer</span>
                                </strong>
                                <br/>
                                <strong>
                                    <span className="grey-text">Luigi Pasinetti,</span> <span className="font-italic">Post-Keynesian Economist</span>
                                </strong>
                                <br/>
                                <strong>
                                    <span className="grey-text">Anna Maria Tarantola,</span> <span className="font-italic">President RAI</span>
                                </strong>
                                <br/>
                                <strong>
                                    <span className="grey-text">Giacomo Campora,</span> <span className="font-italic">Allianz Bank Financial Advisors S.p.a. CEO</span>
                                </strong>
                                <br/>
                                <strong>
                                    <span className="grey-text">Pasquale Cannatelli,</span> <span className="font-italic">Fininvest CEO</span>
                                </strong>
                                <br/>
                                <strong>
                                    <span className="grey-text">Gabriele Del Torchio,</span> <span className="font-italic">Alitalia Vice President and CEO</span>
                                </strong>
                                <br/>
                                <strong>
                                    <span className="grey-text">Dino Piero Giarda,</span> <span className="font-italic">Banca Popolare Italiana President and Banco Popolare Vice-President</span>
                                </strong>
                                <br/>
                            </p>
                            <hr/>
                            <h5>
                                Agri-food sector
                            </h5>
                            <p>
                                <strong>
                                    <span className="grey-text">Pasquale Cetola,</span> <span className="font-italic">Specialist in technological innovation and sustainable use of PPPs at Agrofarma</span>
                                </strong>
                                <br/>
                            </p>
                            <hr/>
                            <h5>
                                Medicine
                            </h5>
                            <p>
                                <strong>
                                    <span className="grey-text">Francesco Rubino,</span> <span className="font-italic">World first Professor of Metabolic Surgery – King’s College</span>
                                </strong>
                                <br/>
                                <strong>
                                    <span className="grey-text">Lorenzo Bonomo,</span> <span className="font-italic">European Society of Radiology President</span>
                                </strong>
                                <br/>
                            </p>
                            <hr/>
                            <h5>
                                Arts, humanities and show business
                            </h5>
                            <p>
                                <strong>
                                    <span className="grey-text">Roberto Vecchioni,</span> <span className="font-italic">Singer</span>
                                </strong>
                                <br/>
                                <strong>
                                    <span className="grey-text">Chiara Galiazzo,</span> <span className="font-italic">The X Factor Italia Winner 2012</span>
                                </strong>
                                <br/>
                                <strong>
                                    <span className="grey-text">Aldo Grasso,</span> <span className="font-italic">TV critic of Corriere della Sera</span>
                                </strong>
                                <br/>
                                <strong>
                                    <span className="grey-text">Valerio Massimo Manfredi,</span> <span className="font-italic">Archaeologist and Novelist</span>
                                </strong>
                                <br/>
                            </p>
                            <hr/>
                            <h5>
                                Sports
                            </h5>
                            <p>
                                <strong>
                                    <span className="grey-text">Michela Cerruti,</span> <span className="font-italic">A2014 Italian GT Championship European F3 Open Championship Toyota Racing Series</span>
                                </strong>
                                <br/>
                                <strong>
                                    <span className="grey-text">Simon Barjie,</span> <span className="font-italic">AGambian Footballer</span>
                                </strong>
                                <br/>
                            </p>
                        </MDBCol>
                    </MDBRow>

                </MDBContainer>

            </div>
        )
    }
}

export default Alumni;

