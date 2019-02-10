import React, {Component} from 'react';
import {MDBContainer, MDBRow, MDBCol, MDBView} from 'mdbreact';
import { Helmet } from 'react-helmet';
import "./About_Cattolica.css";
import milan_campus from './milan_side.jpg';

class Milan_campus extends React.Component {
    render() {
        return (
            <div id="AboutCattolica">
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Notable Alumni</title>
                </Helmet>
                <MDBView className="banner_campus" />
                <br/>
                <MDBContainer>
                    <h1>
                        MILAN
                    </h1>

                    <strong className="colorChange">
                        Our Milan campus offers hundreds of programs with a number of degrees offered in English.
                    </strong>
                    <br/>
                    <hr/>
                    <MDBRow>
                        <MDBCol size="8">
                            <strong className="colorChange">
                                Quick facts:
                            </strong>
                            <br/>
                            <ul className="font-weight-bold">
                                <li>
                                    Over 27,200 students
                                </li>
                                <li>
                                    Based in a 8th century monastery. Renovated by Bramante in the 1600 hundreds. Renaissance architecture.
                                </li>
                                <li>
                                    8 Schools: Economics, Banking, Finance and Insurance Sciences, Humanities, Education, Psychology, Political and Social Sciences, Law, Foreign Languages and Literature
                                </li>
                            </ul>
                        </MDBCol>
                        <MDBCol size="3">
                            <img src={milan_campus} className="img_shadow img-fluid" />
                        </MDBCol>

                    </MDBRow>
                    <MDBRow className="posAdjust_side_img">
                        <MDBCol size="8">
                            <p>
                                Our main campus in Milan is an integral part of the local community. The bustling streets around our campus are full of cafés, restaurants and shops. Yet hidden discreetly within our perimeter are picturesque gardens and courtyards, all of which add to the unique ambience and conducive study environment.
                            </p>
                            <p>
                                Milan is the undisputed financial, commercial and industrial capital of the country and has a driving economy that makes it the only gate to international capital markets. It has over 8,600 registered active national and international financial and insurance businesses.
                            </p>
                            <p>
                                The Italian Stock Exchange, la Borsa Italiana, which has over 220 companies listed, is located 10 minutes away from our campus, a prime vicinity for those students studying in the fields of Economics, Management and Banking and Finance.
                            </p>
                        </MDBCol>
                        <MDBCol size="12">
                            <p>
                                Being headquarter to many of Italy’s multinational corporations and world famous brands, Cattolica students can breathe and live the energy of a business-centered city life right at the central campus doorstep, and are in the ideal position to put into practice the knowledge gained in the course whilst using their own language abilities and cultural competencies that are so valued and sought.
                            </p>
                            <p>
                                Milan will also host the Expo 2015 World Fair with the central theme of “Feeding the Planet, Energy for Life,” providing companies operating in a wide range of fields (from food and food biotechnologies, to renewable energies and logistics) the chance to network, discuss trends and encourage business and growth. Cattolica students are in an excellent position to closely observe and discuss the planning of this key event.
                            </p>
                            <p>
                                In short, Milan is a beautiful, cultured and dramatic city, offering a multitude of features that tourists rarely discover and an equal number of opportunities for international students to develop their academic and professional careers.
                            </p>
                        </MDBCol>
                    </MDBRow>

                </MDBContainer>
            </div>
        )
    }
}

export default Milan_campus;