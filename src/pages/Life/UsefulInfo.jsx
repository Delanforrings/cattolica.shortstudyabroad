import React, {Component} from 'react';
import {MDBView, MDBContainer, MDBCol, MDBRow, MDBTableHead, MDBTableBody, MDBTable, MDBMask } from 'mdbreact';
import {Helmet} from 'react-helmet';
import "./Life.css";
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';

class UsefulInfo extends React.Component {
    render () {
        return (
            <div id="Life">
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Useful Information Milan</title>
                </Helmet>

                <MDBView className="banner"/>
                <br/>
                <MDBContainer>
                    <MDBRow>
                        <MDBCol size="10">
                            <h1>
                                Useful Information in Milan
                            </h1>
                            <hr/>
                        </MDBCol>
                    </MDBRow>
                    <MDBRow>
                        <MDBCol size="10">
                            <h5>
                                Codice Fiscale
                            </h5>
                        </MDBCol>
                    </MDBRow>
                    <MDBRow>
                        <MDBCol size="10">
                            <p>
                                If you wish to open a bank account, rent an apartment or buy an Italian telephone card you will need a Tax Code “<span className="font-italic">Codice Fiscale</span>”. It is a 16-character alphanumeric code issued free of charge by the Revenue Agency (<span className="font-italic">Agenzia delle Entrate</span>) to identify Italian nationals and foreign residents in Italy. In order to request your codice fiscale, you can either:
                            </p>
                        </MDBCol>
                    </MDBRow>
                    <MDBRow>
                        <MDBCol size="10">
                            <ul>
                                <li>
                                    apply for it at the Italian Embassy in your country before your departure; or
                                </li>
                                <li>
                                    go to one of the branches of the Agenzia delle Entrate in Milan and submit a valid identity document (passport for non-EU students).
                                </li>
                            </ul>
                        </MDBCol>
                    </MDBRow>
                    <MDBRow>
                        <MDBCol size="10">
                            <p>
                                The main office is located in via della Moscova, 2 (Metro: green line, M2 MOSCOVA). Opening hours: Mon, Wed, Fri: from 8.30am to 1 pm -Tue, Thu from 8.30 am to 3.30 pm.
                            </p>
                            <p>
                                Degree-seeking students must submit their official <span className="font-italic">codice fiscale</span> in order to complete the enrollment at Università Cattolica.
                            </p>
                            <hr/>
                        </MDBCol>
                    </MDBRow>
                    <MDBRow>
                        <MDBCol size="10">
                            <h5>
                                Bank Account
                            </h5>
                        </MDBCol>
                    </MDBRow>
                    <MDBRow>
                        <MDBCol size="10">
                            <p>
                                The requirements to open an Italian bank account are:
                            </p>
                        </MDBCol>
                    </MDBRow>

                    <MDBRow>
                        <MDBCol size="10">
                            <ul>
                                <li>
                                    To be at least 18 years old
                                </li>
                                <li>
                                    To have a valid ID
                                </li>
                                <li>
                                    For non-EU students: to have a valid study visa and the receipt of the application for the <span className="font-italic">Permesso di Soggiorno</span>
                                </li>
                                <li>
                                    To have the Italian <span className="font-italic">codice fiscale</span>
                                </li>
                            </ul>
                        </MDBCol>
                    </MDBRow>

                    <MDBRow>
                        <MDBCol size="10">
                            <p>
                                Most banks are open from Monday to Friday, from 8.30 am to 4.00 pm. Check with UCSC International the availability of an English-speaking employee in one of the banks near the campus. “Banca Popolare di Sondrio” has recently opened a branch inside Cattolica main campus (Largo Gemelli, 1).
                            </p>
                        </MDBCol>
                    </MDBRow>

                    <MDBRow>
                        <MDBCol size="10">
                            <p>
                                For degree-seeking students only (except for specializing master students)
                            </p>
                            <p>
                                An agreement between the University and Banca Popolare di Sondrio makes it possible to set up the <span><a href="http://www.unicatt.it/ateneo-piu">ATENEO+ UNIVERSITY CARD</a></span> as a reloadable pre-paid bank card free of charge.
                            </p>
                        </MDBCol>
                    </MDBRow>

                    <MDBRow>
                        <MDBCol size="10">
                            <p>
                                If you do not need to open an Italian bank account, you may use your credit card at any Automatic Teller Machine (<span className="font-italic">Bancomat</span>) around the city. Note: “ATM” (Azienda Trasporti Milanesi) is the acronym used for the public transportation system in Milan, not to be confused with Automatic Teller Machine. When withdrawing money be attentive to the people around you. We advise you use Bancomats that are inside banks and not those right off the street. Unless necessary, do not use Bancomats inside or near stations.
                            </p>
                            <hr/>
                        </MDBCol>
                    </MDBRow>

                    <MDBRow>
                        <MDBCol size="10">
                            <h5>
                                Emergency Numbers
                            </h5>
                        </MDBCol>
                    </MDBRow>

                    <MDBRow>
                        <MDBCol size="10">
                            <p>
                                In case of emergency, dial the single number 112 (toll-free)
                            </p>
                        </MDBCol>
                    </MDBRow>

                    <MDBRow>
                        <MDBCol size="10">
                            <ul>
                                <li>
                                    <span className="font-weight-bold">112</span> is the universal emergency telephone number which can be dialled free of charge from any landline or mobile telephone to contact the emergency services (ambulance, fire & rescue, police) in many European countries, including all EU member states
                                </li>
                                <li>
                                    Emergency pharmacy <span className="font-weight-bold">800 801185</span> (toll-free)
                                </li>

                            </ul>
                            <hr/>
                        </MDBCol>
                    </MDBRow>

                    <MDBRow>
                        <MDBCol size="10">
                            <h5>
                                Mail and Packages
                            </h5>
                        </MDBCol>
                    </MDBRow>

                    <MDBRow>
                        <MDBCol size="10">
                            <p>
                                Receiving packages from non-EU countries can cost a lot in terms of taxes. Postal and custom taxes may be very high depending on the weight and value of the content. Please note that a few items, such as medications, electrical equipment and food may be blocked by the custom authorities. Carefully check the terms and conditions with the selected delivery company (postal service/courier) before you have anything sent to Italy.
                            </p>
                            <hr/>
                        </MDBCol>
                    </MDBRow>

                    <MDBRow>
                        <MDBCol size="10">
                            <h5>
                                How to reach Milan campus
                            </h5>
                        </MDBCol>
                    </MDBRow>

                    <MDBRow>
                        <MDBCol size="10">
                            <h6>
                                By Plane
                            </h6>
                            <p>
                                If you are coming to Milan by plane you will land either at the Intercontinental Airport of Malpensa, the largest airport in northern Italy, at Linate Airport or at Orio al Serio Airport.
                            </p>
                            <p>
                                The information number for Linate and Malpensa airports is +39 02 74852200.
                            </p>
                            <p>
                                The information number for Orio al Serio Airport is +39 035 326323.
                            </p>
                            <p>
                                For more information please visit: <span><a href="www.sea-aeroportimilano.it">www.sea-aeroportimilano.it</a></span>
                            </p>
                            <p>
                                For more information please visit: <span><a href="www.sacbo.it">www.sacbo.it</a></span>
                            </p>
                        </MDBCol>
                    </MDBRow>

                    <MDBRow>
                        <MDBCol size="10">
                            <p className="font-weight-bold">
                                Linate
                            </p>
                            <p>
                                Linate airport is just outside the city at a distance of only 7 km. There are two main connections from the airport to the city:
                            </p>
                            <ul>
                                <li>
                                    he number 73 bus to the city centre (running approx. every 10 minutes, final stop in Corso Europa – underground station S. Babila, Red line, i.e. line 1)
                                </li>
                                <li>
                                    the Air Bus shuttle running from the Central Railway Station (underground station Centrale, Green and Yellow lines, i.e. line 2 and line 3; every 30 minutes approx.)
                                </li>
                            </ul>
                        </MDBCol>
                    </MDBRow>

                    <MDBRow>
                        <MDBCol size="10">
                            <p className="font-weight-bold">
                                Malpensa
                            </p>
                            <p>
                                Malpensa airport is 45 km from the city. It has two terminals, connected by a shuttle bus. Please remember to check which terminal your plane will be landing at or leaving from.
                            </p>
                            <p>
                                Several services provide transportation between this airport and the centre of town: 1) the “Malpensa Express” train, to/from the centre of Milan (underground stations: Cadorna, Centrale and Garibaldi); 2) public bus connection to/from the Central Railway Station, every 20 minutes.
                            </p>

                        </MDBCol>
                    </MDBRow>

                    <MDBRow>
                        <MDBCol size="10">
                            <p className="font-weight-bold">
                                Malpensa
                            </p>
                            <p>
                                Malpensa airport is 45 km from the city. It has two terminals, connected by a shuttle bus. Please remember to check which terminal your plane will be landing at or leaving from.
                            </p>
                            <p>
                                Several services provide transportation between this airport and the centre of town:
                            </p>
                            <p>
                                1) the “Malpensa Express” train, to/from the centre of Milan (underground stations: Cadorna, Centrale and Garibaldi);
                            </p>
                            <p>
                                2) public bus connection to/from the Central Railway Station, every 20 minutes.
                            </p>

                        </MDBCol>
                    </MDBRow>

                    <MDBRow>
                        <MDBCol size="10">
                            <p className="font-weight-bold">
                                Orio al Serio
                            </p>
                            <p>
                                Milano - Orio al Serio airport is 45 km from the city. The airport has road connections with the Central Railway Station.
                            </p>
                            <p>
                                The “Autostradale” bus company service connects the airport to the Central Railway Station in about one hour. It runs every 15 or 30 minutes depending on the time of day.
                            </p>
                            <p>
                                Alternatively you can reach the Central Station in about 50 minutes using the “Orioshuttle” bus service. It runs every 30 minutes.
                            </p>
                        </MDBCol>
                    </MDBRow>

                    <MDBRow>
                        <MDBCol size="10">
                            <h6>
                                By Train
                            </h6>
                            <p>
                                The main railway station in Milan is Milano Centrale (Central Station). Once you reach the Central Station, you will find many different connections to other areas:
                            </p>
                            <ul>
                                <li>
                                    Underground: two underground lines cross at the Central Station, the Green line (line 2) and the Yellow line (line 3). By underground you can also reach the other railway stations in Milan (Cadorna, Rogoredo, Garibaldi and Lambrate)
                                </li>
                                <li>
                                    Several different buses and trams connect the railway station to the various parts of town
                                </li>
                                <li>
                                    Shuttle buses to and from the airports of Linate, Malpensa and Orio al Serio
                                </li>
                            </ul>
                            <p>
                                For information on trains in Italy please consult the following website: <span><a href="www.trenitalia.it">www.trenitalia.it</a></span>.
                            </p>
                        </MDBCol>
                    </MDBRow>

                    <MDBRow>
                        <MDBCol size="10">
                            <h6>
                                By Car
                            </h6>
                            <p>
                                Milan has the biggest Italian highway system. Milan's ring road is the end point of highway A4 coming from Turin, the A4 from Venice and Verona; A1 connecting Milan and Bologna, Florence and Rome; the A7 coming from Genoa and Liguria; and the A8/A9 that go to Switzerland as well as Lake Como and Lake Maggiore. The ring road is divided in Tangenziale Est and Tangenziale Ovest.
                            </p>

                        </MDBCol>
                    </MDBRow>

                </MDBContainer>
            </div>
        )
    }
}

export default UsefulInfo;
