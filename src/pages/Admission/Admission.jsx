import React, {Component} from 'react';
import {Helmet} from 'react-helmet';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import {MDBView, MDBContainer, MDBCol, MDBRow, MDBTableHead, MDBTableBody, MDBTable, MDBMask } from 'mdbreact';
import "./Admission.css";

class Admission extends React.Component {
    render () {
        const cattolica_blue = '#00538D';
        return (
            <div id="Admission">
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Admission to Study Abroad Program</title>
                </Helmet>

                <MDBView className="banner"/>
                <br/>
                <MDBContainer>
                    <MDBRow>
                        <MDBCol size="10">
                            <h1>
                                Admission to Study Abroad Program
                            </h1>
                            <hr/>
                        </MDBCol>
                    </MDBRow>
                    <MDBRow>
                        <MDBCol size="12">
                            <p>
                                If your home institution is not an existing Università Cattolica partner you can enroll directly to Cattolica as a Study Abroad student. We highly recommend you talk to your Study Abroad advisor about the eligibility requirements.
                            </p>
                        </MDBCol>
                    </MDBRow>
                    <MDBRow>
                        <MDBCol>
                            <Tabs defaultActiveKey="requirements" id="uncontrolled-tab-example">
                                <Tab eventKey="requirements" title="Requirements">
                                    <br/>
                                    <h3 className="colorChange">
                                        Requirements
                                    </h3>
                                    <hr/>
                                    <h5>
                                        Application deadline
                                    </h5>
                                    <p>
                                        May 15th
                                    </p>
                                    <br/>
                                    <h5>
                                        Documents you will need to upload while filling in the online application:
                                    </h5>
                                    <br/>
                                    <ol>
                                        <li>
                                            A passport size picture
                                        </li>
                                        <li>
                                            The scanned version of your passport or other ID documents
                                        </li>
                                        <li>
                                            The transcript of records
                                        </li>
                                        <li>
                                            Applicants applying for UCSC coursework in English, if non-native speakers, must give evidence of their language proficiency of a minimum B2 level or equivalent (ex. TOEFL Ibt 79, IELTS 6, First Certificate of English, Cambridge ESOL or other certification)
                                        </li>
                                        <li>
                                            Applicants applying for UCSC coursework in Italian are required to have a good knowledge of the language (B2 level is recommended) and must provide an Italian Language Proficiency Report. The form can be downloaded into the application
                                        </li>
                                    </ol>
                                    <br/>
                                    <h5>
                                        Programs requirements
                                    </h5>
                                    <br/>
                                    <ul >
                                        <li >
                                            Current enrollment at an institution of higher education
                                        </li>
                                        <li>
                                            Grade Point Average of a minimum 2.75, or equivalent in applicants own university grading system
                                        </li>
                                        <li>
                                            Completion of a minimum of 2 semesters at undergraduate level
                                        </li>
                                        <li>
                                            Good level of English. Non-native English speakers must give evidence of their language proficiency of a minimum B2 level or equivalent (ex: TOEFL Ibt 79, IELTS 6, First Certificate of English, Cambridge ESOL or other certification)
                                        </li>
                                        <li>
                                            Good knowledge of Italian language (B2 level is recommended) if applying for UCSC coursework in Italian
                                        </li>
                                    </ul>
                                </Tab>
                                <Tab eventKey="program_fees" title="Program fees">
                                    <br/>
                                    <h3 className="colorChange">
                                        Program fees
                                    </h3>
                                    <hr/>
                                    <p>
                                        Note that the tuition fee and program application are payable to Cattolica. Housing costs are paid separately either to the Cattolica housing provider or, if housing is found independently of Cattolica, directly to the renter. As registered Cattolica students, a discount is available on meal tickets for use at the university cafeteria.
                                    </p>
                                    <br/>
                                    <MDBTable className="fontChange" responsive>
                                        <MDBTableHead color="light-blue darken-3" textWhite >
                                            <tr>
                                                <th></th>
                                                <th><span className='font-weight-bold'>NON E.U. residents</span></th>
                                                <th><span className='font-weight-bold'>E.U. residents</span></th>
                                            </tr>
                                        </MDBTableHead>
                                        <MDBTableBody>
                                            <tr>

                                                <td>
                                                    <span className="font-weight-bold">Tuition fee</span> (4 courses comprising 12 US credits plus 90 contact hour language pre-session and semester course, orientation)
                                                </td>
                                                <td>
                                                    € 5,700
                                                </td>
                                                <td>
                                                    € 4,500
                                                </td>
                                            </tr>
                                            <tr>

                                                <td><span className='font-weight-bold'>Cost per additional course</span></td>
                                                <td>€ 1,400</td>
                                                <td>€ 900</td>
                                            </tr>
                                            <tr>

                                                <td><span className='font-weight-bold'>Program application Fee</span></td>
                                                <td>€ 75</td>
                                                <td>€ 75</td>
                                            </tr>
                                            <tr>

                                                <td>
                                                    <span className='font-weight-bold'>Housing (off campus). The cost varies according to the type of housing (shared apartment / dorm) and the proximity to the campus. The prices indicated are merely indicative.</span>
                                                </td>
                                                <td>€ 3,250 per semester</td>
                                                <td>€ 3,250 per semester</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <span className='font-weight-bold'>Meals and other estimated personal expenses</span>
                                                </td>
                                                <td>€ 550 per month	</td>
                                                <td>€ 550 per month</td>
                                            </tr>
                                        </MDBTableBody>

                                    </MDBTable>

                                </Tab>
                                <Tab eventKey="refund_policy" title="Refund Policy">
                                    <br/>
                                    <h3 className="colorChange">
                                        Refund Policy
                                    </h3>
                                    <hr/>
                                    <ul>
                                        <li>
                                            In case of withdrawal up until 16 days before the semester starts*: 500€ cancellation fee
                                        </li>
                                        <li>
                                            In case of withdrawal 15 calendar days or less before the semester starts*: 50% cancellation fee
                                        </li>
                                        <li>
                                            In case of withdrawal after the semester starts *: no refunds possible
                                        </li>
                                    </ul>
                                    <br/>
                                    <p>
                                        *Please note that Università Cattolica considers the first official arrival date of each semester as the official start of the semester
                                    </p>
                                    <br/>
                                    <p >
                                        <span className="font-weight-bold">NB: Please note that this refund policy refers to the tuition fee only</span>
                                    </p>
                                </Tab>
                            </Tabs>
                        </MDBCol>

                    </MDBRow>
                </MDBContainer>
            </div>
        )
    }
}

export default Admission;