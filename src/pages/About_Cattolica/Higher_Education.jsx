import React, {Component} from 'react';
import {MDBContainer, MDBRow, MDBCol, MDBView} from 'mdbreact';
import {Helmet} from 'react-helmet';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import "./About_Cattolica.css";
import higher_edu from "./Italian_higher_education_system.jpg";

class Higher_Education extends React.Component {
    render() {
        return (
            <div id="AboutCattolica">
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>The Higher Education System</title>
                </Helmet>

                <MDBView className="banner"/>
                <br/>

                <MDBContainer>
                    <MDBRow>
                        <MDBCol>
                            <Tabs>
                                <Tab eventKey="education_system" title="The Italian Higher Education System">
                                    <br/>
                                    <h1>
                                        The Italian Higher Education System
                                    </h1>
                                    <hr/>
                                    <p>The higher education system in Italy is structured as follows:</p>
                                    <img src={higher_edu} className="img-fluid" />
                                    <hr/>
                                    <h5>
                                        Undergraduate degree/Bachelor of Science - B.Sc. (“Laurea Triennale e a Ciclo Unico”)
                                    </h5>
                                    <p>
                                        <strong>
                                            <span className="font-weight-bold colorChange">Course duration:</span> 3, 5 or 6 years
                                        </strong>
                                        <br/>
                                        <strong>
                                            <span className="font-weight-bold colorChange">ECTS/Credit points:</span> 180, 300 or 360
                                        </strong>
                                    </p>
                                    <p>
                                        Aims to provide a solid foundation in the core subjects as well as more specialized, professional training. Students holding a 3-year undergraduate degree or Laurea a Ciclo Unico can either enter the job market or continue their studies by applying for a Master of Science or Specializing Master program.
                                    </p>
                                    <br/>
                                    <h5>
                                        Graduate degree/Master of Science - M.Sc. (“Laurea Magistrale”)
                                    </h5>
                                    <p>
                                        <strong>
                                            <span className="font-weight-bold colorChange">Course duration:</span> 2 years
                                        </strong>
                                        <br/>
                                        <strong>
                                            <span className="font-weight-bold colorChange">ECTS/Credit points:</span> 120
                                        </strong>
                                    </p>
                                    <p>
                                        Undertaken after the undergraduate degree and aims to provide rigorous, advanced training in more highly specialized areas.
                                    </p>
                                    <br/>
                                    <h5>
                                        Specializing Master (“Master Universitario”)
                                    </h5>
                                    <p>
                                        <strong>
                                            <span className="font-weight-bold colorChange">Course duration:</span> 1 year
                                        </strong>
                                        <br/>
                                        <strong>
                                            <span className="font-weight-bold colorChange">ECTS/Credit points:</span> 60
                                        </strong>
                                    </p>
                                    <p>
                                        A professionalizing program providing practical knowledge and training through coursework, consultancy projects and internships. These masters programs within the Italian education system do not generally allow access to a Ph.D. program upon completion of the Master. Recognition of the Specializing Master towards a Ph.D. program outside of Italy will depend on local state regulations or individual doctoral programs.

                                    </p>
                                    <br/>
                                    <h5>
                                        Doctoral Program - Ph.D. (“Dottorato di Ricerca”)
                                    </h5>
                                    <p>
                                        <strong>
                                            <span className="font-weight-bold colorChange">Course duration:</span> 3 years
                                        </strong>
                                        <br/>
                                        <strong>
                                            <span className="font-weight-bold colorChange">ECTS/Credit points:</span> 180
                                        </strong>
                                    </p>
                                    <p>
                                        Undertaken after the completion of a Master of Science or an equivalent graduate degree. It aims to develop the professional competence to carry out high level research in manufacturing and service companies, public bodies and universities.
                                    </p>
                                </Tab>

                                <Tab eventKey="credit_system" title="The Italian grading and credit system">
                                    <br/>
                                    <h1>
                                        The Italian grading and credit system
                                    </h1>
                                    <hr/>
                                    <p>
                                        The Italian grading system for exams registered in the study plan ranges from 18/30 to 30/30. The highest mark is 30/30eLode (with high distinction). All the exams with a score lower than 18/30 are considered as not passed and thus are not registered on the transcript of the academic records.
                                    </p>
                                    <p>
                                        The grading system for the final grade (graduation mark) ranges from 66/110 to 110/110, the highest mark being 110/110eLode (with high distinction).
                                    </p>
                                    <p>
                                        ECTS (European Credit Transfer System) is a numerical value allocated to measure courses' workload. The workload includes lectures, practical work, seminars, tutorials, fieldwork, home study and examinations or other assessment activities.
                                    </p>
                                    <p>
                                        Degree programs are usally structured with a workload of 60 ECTS per year:
                                    </p>
                                    <ul>
                                        <li>
                                            1 ECTS corresponds to 1 CFU (Credito Formativo Universitario)
                                        </li>
                                        <li>
                                            1 CFU corresponds to 25 hours of work and home study
                                        </li>
                                    </ul>

                                </Tab>
                            </Tabs>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </div>
        )
    }
}

export default Higher_Education;