import React, {Component} from 'react';
import {MDBContainer, MDBRow, MDBCol, MDBView} from 'mdbreact';
import {Helmet} from 'react-helmet';
import Tab from 'react-bootstrap/Tab';
import Nav from 'react-bootstrap/Nav';
import "./Student_Service.css";

class Italian_Lang_Course extends React.Component {
    render() {
        return (
            <div id="StudentService">
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Italian Language Course in Milan</title>
                </Helmet>
                <MDBView className="banner"/>
                <br/>

                <MDBContainer>
                    <Tab.Container id="left-tabs-example" defaultActiveKey="lang_course">
                        <MDBRow>
                            <MDBCol size="8">
                                <h1>
                                    Italian Language Course
                                </h1>
                                <hr/>
                                <br/>
                                <Tab.Content>
                                    <Tab.Pane eventKey="lang_course">
                                        <p>
                                            Costs, deadlines and credit award rules are different depending on the category of international student you belong to.
                                        </p>
                                        <p>
                                            Click on the menu on the right-side of the page to view information for each category.
                                        </p>
                                        <ul>
                                            <li className="font-weight-bold">
                                                Exchange/Direct Enrolment (UCSC Partnerships):
                                            </li>
                                            <strong>
                                                In order to come to Cattolica for a semester or a year as an Exchange student, your home institution must be a Cattolica partner, either within Europe (<span><a href="https://www.ucscinternational.it/files/Semester/Template_UCSC_Eu_partner_university_2018.pdf" className="a_link">List of EU Partner Institutions</a></span>) or outside (<span><a href="https://www.ucscinternational.it/files/Semester/Template_UCSC_Non_Eu_partner_university_2018.pdf" className="a_link">List of NON-EU Partner Institutions</a></span>) or an ISEP member institution (<span><a href="http://www.isep.org/" className="a_link">ISEP Network</a></span>).
                                            </strong>
                                            <br/>
                                            <br/>
                                            <li className="font-weight-bold">
                                                Study abroad:
                                            </li>
                                            <strong>
                                                If your home institution is not an existing Università Cattolica partner you can enroll directly to Cattolica as a Study Abroad student, which means you study at Cattolica for a limited period of time (semester or a year only) and then graduate at your home institution.
                                            </strong>
                                            <br/>
                                            <br/>
                                            <li className="font-weight-bold">
                                                Degree Seeking:
                                            </li>
                                            <strong>
                                                Students who enroll in a degree program: corso di Laurea, corso di Laurea Magistrale or Master Universitario (Specializing Master), and receive a Diploma issued by Università Cattolica upon graduation.
                                            </strong>
                                        </ul>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="exchange">
                                        <p />
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="study_abroad">
                                        <p />
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="degree_seeking">
                                        <p />
                                    </Tab.Pane>
                                </Tab.Content>
                            </MDBCol>
                            <MDBCol size="4">
                                <Nav variant="pills" className="flex-column">
                                    <Nav.Item>
                                        <Nav.Link eventKey="lang_course">Italian Language Course</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="exchange">Exchange</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="study_abroad">Study Abroad</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="degree_seeking">Degree-seeking</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                            </MDBCol>
                        </MDBRow>
                    </Tab.Container>
                </MDBContainer>



            </div>
        )
    }
}

export default Italian_Lang_Course;