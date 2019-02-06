import React, {Component} from 'react';
import {MDBView, MDBContainer, MDBCol, MDBRow, MDBTableHead, MDBTableBody, MDBTable, MDBMask } from 'mdbreact';
import {Helmet} from 'react-helmet';
import "./Life.css";
import accom_side from './accom_milan_side.jpg';


class Living extends React.Component {
    render () {
        return (
            <div id="Life">
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Living in Milan</title>
                </Helmet>

                <MDBView className="banner"/>
                <br/>
                <MDBContainer>
                    <MDBRow>
                        <MDBCol size="10">
                            <h1>
                                Living in Milan
                            </h1>
                            <hr/>
                        </MDBCol>
                    </MDBRow>
                    <MDBRow>
                        <MDBCol size="10">
                            <h2>
                                Money Matters
                            </h2>
                        </MDBCol>
                    </MDBRow>
                    <MDBRow>
                        <MDBCol size="10">
                            <p className="font-weight-bold">
                                Avarage costs (per semester)
                            </p>
                        </MDBCol>
                    </MDBRow>
                    <MDBRow>
                        <MDBCol size="10">
                            <ul>
                                <li>
                                    Accommodation: € 2,700 to € 3,900
                                </li>
                                <li>
                                    Food: € 750 to € 1,000
                                </li>
                                <li>
                                    Personal expenses: € 200 to € 400 per month
                                </li>
                                <li>
                                    Books: € 200
                                </li>
                                <li>
                                    Local trasnportation: € 102
                                </li>

                            </ul>
                        </MDBCol>
                    </MDBRow>
                    <MDBRow>
                        <MDBCol size="10">
                            <p className="font-weight-bold">
                                Avarage single priced (food) items
                            </p>
                        </MDBCol>
                    </MDBRow>
                    <MDBRow>
                        <MDBCol size="10">
                            <ul>
                                <li>
                                    Pizza+Beer: € 15
                                </li>
                                <li>
                                    Cinema ticket: € 7.50
                                </li>
                                <li>
                                    <span className="font-italic">Gelato</span>: € 3
                                </li>
                                <li>
                                    <span className="font-italic">Panino</span>, sandwich: € 5
                                </li>
                                <li>
                                    <span className="font-italic">Caffè</span>, Coffee: € 1
                                </li>
                            </ul>
                        </MDBCol>
                    </MDBRow>

                    <br/>
                    <MDBRow>
                        <MDBCol size="8">
                            <h2>
                                Public Transport in Milan
                            </h2>
                        </MDBCol>
                    </MDBRow>
                    <MDBRow>
                        <MDBCol size="10">
                            <p>
                                Tha <span><a href="http://www.atm-mi.it/">Azienda Trasporti Milanesi (ATM) </a></span>operates within the metropolitan area, comprising of a metro, bus and tram network.
                            </p>
                        </MDBCol>
                    </MDBRow>

                    <MDBRow>
                        <MDBCol size="4">
                            <p className="font-weight-bold">
                                Bus
                            </p>
                        </MDBCol>
                    </MDBRow>

                    <MDBRow>
                        <MDBCol size="10">
                            <p>
                                Buses are always orange or green. The wide network of buses covers the entire city. It will allow you to access all major city attractions within 30 minutes.
                            </p>
                        </MDBCol>
                    </MDBRow>

                    <MDBRow>
                        <MDBCol size="4">
                            <p ><span className="font-weight-bold">Metro</span> (subway/underground)</p>
                        </MDBCol>
                    </MDBRow>

                    <MDBRow>
                        <MDBCol size="10">
                            <p>
                                The <span className="font-italic">metropolitana</span> (metro) has four primary lines: red (M1), green (M2), yellow (M3) and liliac (M5). Metro entrances are marked with a red square sign with a white "M". The Milano metro runs from 6.15 until 00.14</p>
                        </MDBCol>
                    </MDBRow>

                    <MDBRow>
                        <MDBCol size="4">
                            <p ><span className="font-weight-bold">Tram</span> (trolley car)</p>
                        </MDBCol>
                    </MDBRow>

                    <MDBRow>
                        <MDBCol size="10">
                            <p>
                                Run throughout the city. The older trams are orange whilst the modern trams are yellow with green interior. Tram stops as well as bus stops are marked by tall orange poles with a diagram of the tram or bus route.
                            </p>
                        </MDBCol>
                    </MDBRow>

                    <MDBRow>
                        <MDBCol size="4">
                            <p className="font-weight-bold">
                                Ticket
                            </p>
                        </MDBCol>
                    </MDBRow>

                    <MDBRow>
                        <MDBCol size="10">
                            <p >
                                All tickets for the public transportation system can be purchased at news kiosks, tabacco shops, from your smartphone downloading the ATM app, or in the metro stations from machines or ticket booths. The same ticket can be used on all three types of transport for up to 90 minutes, however cannot enter twice in the underground with the same ticket even within the 90 minutes. Note: You can not purchase tickets on the bus or trams.
                            </p>
                        </MDBCol>
                    </MDBRow>
                    <MDBRow>
                        <MDBCol size="4">
                            <p>
                                Ticket costs
                            </p>
                        </MDBCol>
                    </MDBRow>
                    <MDBRow>
                        <MDBCol size="10">
                            <ul>
                                <li>
                                    One ride is €1.50 each and is valid for 90 minutes.
                                </li>
                                <li>
                                    Carnet 10 rides of 90 minutes €13.80 (one per person, cannot be shared)
                                </li>
                                <li>
                                    We recommend that you purchase the monthly transportation pass for €22 (plus a €10 subscription fee). Information will be given at the Orientation Events.
                                </li>
                            </ul>
                        </MDBCol>
                    </MDBRow>

                    <MDBRow>
                        <MDBCol size="4">
                            <p className="font-weight-bold">
                                BikeMI
                            </p>
                        </MDBCol>
                    </MDBRow>

                    <MDBRow>
                        <MDBCol size="10">
                            <p>
                                If you enjoy riding a bike, you can subscribe to BikeMI (https://www.bikemi.com/), Milan's bike sharing easy, practical and ecological service. Cattolica students can have a discounted price (€ 25 instead of € 36) if they apply from their Icatt page.
                            </p>
                        </MDBCol>
                    </MDBRow>

                    <MDBRow>
                        <MDBCol size="4">
                            <p className="font-weight-bold">
                                Taxi
                            </p>
                        </MDBCol>
                    </MDBRow>

                    <MDBRow>
                        <MDBCol size="10">
                            <p>
                                If you need a taxi in Milan, you can call 02.77.77 or download the app Milano in Taxi
                            </p>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </div>
        )
    }
}

export default Living;
