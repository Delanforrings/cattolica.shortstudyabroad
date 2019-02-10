import React, {Component} from 'react';
import {MDBView, MDBContainer, MDBCol, MDBRow, MDBTableHead, MDBTableBody, MDBTable, MDBMask } from 'mdbreact';
import {Helmet} from 'react-helmet';
import "./Life.css";
import accom_side from './accom_milan_side.jpg';

class Accommodation extends React.Component {
    render () {
        return (
            <div id="Life">
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Accommodation in Milan</title>
                </Helmet>

                <MDBView className="banner"/>
                <br/>
                <MDBContainer>
                    <MDBRow>
                        <MDBCol size="10">
                            <h1>
                                Accommodation in Milan
                            </h1>
                            <hr/>
                        </MDBCol>
                    </MDBRow>
                    <MDBRow>
                        <MDBCol size="8">
                            <p>
                                Cattolica's student housing options are as numerous as they are varied. International students looking for accommodation in apartments can check:
                            </p>
                        </MDBCol>
                        <MDBCol size="3">
                            <img src={accom_side} className="img-fluid img_shadow" />
                        </MDBCol>
                    </MDBRow>
                    <MDBRow className="posAdjust">
                        <MDBCol size="8">
                            <h5>
                                Milano International Living Service (MIL Service)
                            </h5>
                        </MDBCol>
                    </MDBRow>
                    <MDBRow>
                        <MDBCol size="8">
                            <p>
                                Whether your housing is guaranteed by the exchange agreement between your own institution and Cattolica or not, or if you are a degree-seeking student, you may select a housing solution through Milano International Living Service (MIL Service) which offers single or shared rooms in a residence hall off-campus or fully furnished apartments with wireless internet connections, utilities (water and electricity), a cleaning service, basic cable television, plus extra amenities such as a kitchenware.
                            </p>
                        </MDBCol>
                    </MDBRow>
                    <MDBRow>
                        <MDBCol size="10">
                            <p>
                                Through a dedicated, team-oriented approach, MIL Service is committed to providing every student with the best residential experience.
                            </p>
                        </MDBCol>
                    </MDBRow>
                    <MDBRow>
                        <MDBCol size="10">
                            <p>
                                Their young and professional team is what makes the service competitive within the housing market since they understand the students' needs and wants, and respond with a quick and concrete solution. Find out more from <span><a href="www.milservice.com">www.milservice.com</a></span>.
                            </p>
                        </MDBCol>
                    </MDBRow>

                    <br/>
                    <MDBRow>
                        <MDBCol size="8">
                            <h5>
                                Seek assistance from the International Students Association
                            </h5>
                        </MDBCol>
                    </MDBRow>
                    <MDBRow>
                        <MDBCol size="10">
                            <p>
                                <span className="font-weight-bold">ESN</span>: email to <span><a href="mailto:housing.esnunicatt@gmail.com">housing.esnunicatt@gmail.com</a></span> specifying what you are looking for (double o single room, price and area in Milan). They will respond in a couple of days.
                            </p>
                        </MDBCol>
                    </MDBRow>
                    <br/>

                    <MDBRow>
                        <MDBCol size="8">
                            <h5>
                                Other useful sources
                            </h5>
                        </MDBCol>
                    </MDBRow>

                    <MDBRow>
                        <MDBCol size="10">
                            <ul>
                                <li>
                                    Visit the <span><a href="http://www.dotstay.com/cattolica/">Dotstay platform</a></span> (enter the code EDUCATT to receive a 10% discount)
                                </li>
                                <li>
                                    Visit the website of <span><a href="https://www.comune.milano.it/wps/portal/ist/st/Pagine_Giovani/studiare/Alloggi+per+studenti+a+Milano">Comune di Milano</a></span>
                                </li>
                                <li>
                                    <span><a href="https://www.roomtastic.it/">Roomtastic</a></span>
                                </li>

                            </ul>
                        </MDBCol>
                    </MDBRow>

                    <br/>
                    <MDBRow>
                        <MDBCol size="8">
                            <h5>
                                Non-UCSC partners
                            </h5>
                        </MDBCol>
                    </MDBRow>

                    <MDBRow>
                        <MDBCol size="10">
                            <ul>
                                <li>
                                    <span><a href="https://www.uniplaces.com/?utm_campaign=165028&campaign=165028&utm_medium=Cattolica+Sacro+Cuore&utm_source=ir&open-registration=yes&irgwc=1">Uniplaces</a></span>
                                </li>
                                <li>
                                    <span><a href="https://www.ucscinternational.it/files/Life%20at%20Cattolica%20/Housing_options_outside_MIL.pdf">Students residence halls</a></span>
                                </li>
                                <li>
                                    <span><a href="http://www.spotahome.com/">Spotahome</a></span>
                                </li>
                                <li>
                                    <span><a href="https://milanostanze.it/?lang=en&static_page=1#">MilanoStanze.it</a></span>
                                </li>
                                <li>
                                    <span><a href="https://www.gromia.com/it">Gromia</a></span>(Università Cattolica's students benefit of a 10% discount)
                                </li>
                                <li>
                                    <span><a href="https://www.studyabroadapartments.com/">Study Abroad Apartments</a></span>
                                </li>
                                <li>
                                    <span><a href="https://emea01.safelinks.protection.outlook.com/?url=https%3A%2F%2Fwww.zappyrent.com%2Fall%2Fproperties%2Fmap%3Fsearch_where_how_many%3D%25C2%25A0%26search_city%3Dmi%26search_type%3D%26search_where%3Dmi%26utm_source%3Dpartner%26utm_medium%3Dcattolica_web%26tr%3Dcatt-mi&data=02%7C01%7Cinternational.communications%40unicatt.it%7Cf422b7af2fc54cf1616108d64edfe462%7Cb94f7d7481ff44a9b5886682acc85779%7C0%7C0%7C636783120847364088&sdata=EuK%2BTxCCTVbiycQTXwcVAw%2B7Zi6JB1hXh7Kf7fKWNkA%3D&reserved=0">Zappyrent</a></span> (no commission)
                                </li>
                            </ul>
                        </MDBCol>
                    </MDBRow>

                    <br/>
                    <MDBRow>
                        <MDBCol size="8">
                            <h5>
                                Temporary accommodation
                            </h5>
                        </MDBCol>
                    </MDBRow>

                    <MDBRow>
                        <MDBCol size="10">
                            <p>
                                Here are the links to some hostels in Milan nearby Cattolica main campus:
                                You can also refer to this hostel-booking platform: <span><a href="www.italian.hostelworld.com">www.italian.hostelworld.com</a></span>
                            </p>
                        </MDBCol>
                    </MDBRow>

                    <MDBRow>
                        <MDBCol size="10">
                            <ul>
                                <li>
                                    <span><a href="www.ostellobello.com/">www.ostellobello.com/</a></span>
                                </li>

                                <li>
                                    <span><a href="www.hotel-bb.com/">www.hotel-bb.com/</a></span>
                                </li>

                            </ul>
                        </MDBCol>
                    </MDBRow>


                </MDBContainer>
            </div>
        )
    }
}

export default Accommodation;
