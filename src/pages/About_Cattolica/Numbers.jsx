import React, { Component } from 'react';
import "./About_Cattolica.css";
import {MDBView, MDBContainer, MDBCol, MDBRow} from 'mdbreact';
import {Helmet} from "react-helmet";
import numbers_banner from "./NumbersCatt.png";

class Numbers extends React.Component {
    render () {
        return (
            <div id="AboutCattolica">
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Numbers Cattolica</title>
                </Helmet>
                <MDBView className="banner" />
                <br/>
                <MDBContainer>
                    <MDBRow>
                        <MDBCol size="8">
                            <h1>University Numbers</h1>
                            <hr/>
                            <p>
                                <span className="colorChange">Founded in Milan in 1921</span> by Father Agostino Gemelli, Università Cattolica del Sacro Cuore is Europe's most important Catholic university.
                            </p>
                            <p>
                                It is also the only university in Italy with <span className="colorChange">4 campuses</span> all over the country: in Milan, Piacenza-Cremona, Brescia and Rome
                            </p>
                            <p>
                                In choosing Cattolica, you will become part of a community of <span className="colorChange">40,000 students</span>, students and scholars who attend one of our <span className="colorChange">12 schools</span> and who access a library which contains over <span className="colorChange">2,000,000 volumes</span>.
                            </p>
                            <p>
                                Our alumni and academic community is extensive, with numerous world-leading researchers, scholars and academics.
                            </p>
                            <p>
                                Our industry and employer networks are truly remarkable, meaning that we can offer over <span className="colorChange">6,900 internships per year</span>.
                            </p>
                            <p>
                                We boast an <span className="colorChange">international community of more than 3,000 students from over 100 countries</span>.
                            </p>
                            <p>
                                We have <span className="colorChange">links with universities in over 60 countries</span>, from Australia, France and South Africa to India, China and Colombia.
                            </p>
                            <p>
                                In the renowned QS World University Rankings by Subject 2016, Cattolica’s ascendency placed the University in formidable company, with every discipline ranked in the top 200 in the world, or higher.
                            </p>
                        </MDBCol>
                        <MDBCol size="4" className="posAdjust">
                            <img src={numbers_banner} className="img-fluid" />
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>

            </div>

        )
    }
}

export default Numbers;