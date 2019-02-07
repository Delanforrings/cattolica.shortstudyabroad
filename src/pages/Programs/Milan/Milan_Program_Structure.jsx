import React, {Component} from 'react';
import {MDBContainer, MDBRow, MDBCol, MDBTable, MDBTableHead, MDBTableBody, MDBView, MDBBtn, MDBIcon, MDBBtnGroup } from 'mdbreact';
import {Helmet} from 'react-helmet';
import "./Milan_Program_Structure.css";
import TabContent from 'react-bootstrap/TabContent';
import TabPane from 'react-bootstrap/TabPane';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import TabContainer from 'react-bootstrap/TabContainer';
import Nav from 'react-bootstrap/Nav';
import milan_program_home_banner from './cattolica_SA.jpg';

class Milan_Program_Structure extends React.Component {
    constructor(props){
        super(props);
        this.handleClick_intl = this.handleClick_intl.bind(this);
        this.handleClick_uni = this.handleClick_uni.bind(this);
    }

    handleClick_intl () {
        document.getElementById('curriculum').click();
    }

    handleClick_uni () {
        document.getElementById('uni').click();
    }
    render () {
        return(
            <div id="Milan_Program">
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Study Abroad in Milan</title>
                </Helmet>

                <MDBView className="banner"/>
                <MDBContainer>
                    <br/>
                    <Tab.Container id="left-tabs-example" defaultActiveKey="Home">
                        <MDBRow>
                            <MDBCol size="9">
                                <Tab.Content>
                                    {/*Home*/}
                                    <Tab.Pane eventKey="Home">
                                        <h1>
                                            Study Abroad program in Milan
                                        </h1>
                                        <hr/>
                                        <MDBRow>
                                            <MDBCol size="8">
                                                <p>
                                                    If your home institution is not an existing Università Cattolica partner you can enroll directly to Cattolica as a Study Abroad student. We highly recommend you talk to your Study Abroad advisor about the eligibility requirements.
                                                </p>
                                            </MDBCol>
                                            <MDBCol size="3">
                                                <img src={milan_program_home_banner} />
                                            </MDBCol>
                                        </MDBRow>
                                        <MDBRow className="posAdjust">
                                            <MDBCol size="8">
                                                <p>
                                                    Milan is our largest campus and it is located in the very heart of Milan, surrounded by tree-lined boulevards, piazzas, basilicas and parklands.
                                                </p>
                                            </MDBCol>
                                        </MDBRow>
                                        <MDBRow>
                                            <MDBCol size="8">
                                                <p className="font-weight-bold">
                                                    Milan, a city of culture and style. A living, vibrant city. And a once-in-a-lifetime opportunity for students from around the world to experience a contemporary education within an unforgettable place.
                                                </p>
                                            </MDBCol>
                                        </MDBRow>
                                    </Tab.Pane>

                                    {/*Program Options*/}
                                    <Tab.Pane eventKey="program_option">
                                        <h1>
                                            Program Options
                                        </h1>
                                        <hr/>
                                        <p>
                                            To all international students, Università Cattolica del Sacro Cuore offers two different curricula of study with a wide variety of courses. Students can choose to create their own semester of study by selecting courses from either of the two curricula:
                                        </p>
                                        <br/>
                                        <MDBTable bordered>
                                            <MDBTableHead>
                                                <tr>
                                                    <th></th>
                                                    <th>UCSC International
                                                        Curriculum
                                                    </th>
                                                    <th>UCSC University Academic Curriculum</th>

                                                </tr>
                                            </MDBTableHead>
                                            <MDBTableBody>
                                                <tr>
                                                    <td className="font-weight-bold">Language of Instruction</td>
                                                    <td>English</td>
                                                    <td>English and Italian</td>

                                                </tr>
                                                <tr>
                                                    <td className="font-weight-bold">Curriculum details</td>
                                                    <td><a onClick={this.handleClick_intl} className="a_link">Read more here</a></td>
                                                    <td><a onClick={this.handleClick_uni} className="a_link">Read more here</a></td>
                                                </tr>
                                                <tr>
                                                    <td className="font-weight-bold">Requirements</td>
                                                    <td>
                                                        <ul>
                                                            <li>
                                                                Current enrollment at an institution of higher education
                                                            </li>
                                                            <li>
                                                                Good academic standing
                                                            </li>
                                                            <li>
                                                                Grade Point Average of 2.75 or higher, or equivalent
                                                            </li>
                                                            <li>
                                                                Completion of a minimum of 2 semesters at undergraduate level
                                                            </li>
                                                            <li>
                                                                English proficiency: for non-native speaker, applicants need to submit a min. TOEFL score of 79 iBT, an IELTS score of 6 or an equivalent certificate (First Certificate of English - Cambridge ESOL / ISE II - Trinity College, London); or have successfully completed a degree program taught in English; or currently studying in English at their home institution.
                                                            </li>
                                                        </ul>
                                                    </td>
                                                    <td>
                                                        <ul>
                                                           <li>
                                                               Current enrollment at an institution of higher education
                                                           </li>
                                                            <li>
                                                                Good academic standing
                                                            </li>
                                                            <li>
                                                                Completion of a minimum of 2 semesters at undergraduate level
                                                            </li>
                                                            <li>
                                                                Applicants for UCSC coursework in Italian are required to have a good knowledge of the language (B2 level is recommended) and must provide an Italian Language Proficiency Report
                                                            </li>
                                                            <li>
                                                                Applicants for UCSC coursework in English, if non-native speaker, need to submit a min. TOEFL score of 79 iBT, an IELTS score of 6 or an equivalent certificate (First Certificate of English - Cambridge ESOL / ISE II - Trinity College, London); or have successfully completed a degree program taught in English; or currently studying in English at their home institution.
                                                            </li>
                                                        </ul>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="font-weight-bold">Calendar</td>
                                                    <td><span><a href="http://www.ucscinternational.it/files/UCSC_International_Curriculum_Calendar_Fall_2018.pdf" className="a_link">September / December</a></span> – <span><a href="http://www.ucscinternational.it/files/UCSC_International_Curriculum_Calendar_Spring_2019.pdf" className="a_link">February / May</a></span></td>
                                                    <td><span><a href="http://www.ucscinternational.it/files/Semester/Calendario_accademico_18_19.pdf" className="a_link">September / February</a></span> – <span><a href="http://www.ucscinternational.it/files/Semester/Calendario_accademico_18_19.pdf" className="a_link">February / July</a></span></td>
                                                </tr>

                                                <tr>
                                                    <td className="font-weight-bold">Class Profile</td>
                                                    <td>Mostly International Students</td>
                                                    <td>Mostly Italian Students</td>
                                                </tr>

                                                <tr>
                                                    <td className="font-weight-bold">Course Specifics</td>
                                                    <td>
                                                        <ul>
                                                            <li>
                                                                Required attendance
                                                            </li>
                                                            <li>
                                                                Expected participation
                                                            </li>
                                                            <li>
                                                                One midterm and final examination
                                                            </li>
                                                        </ul>
                                                    </td>
                                                    <td>
                                                        <ul>
                                                            <li>
                                                                Attendance not formally required
                                                            </li>
                                                            <li>
                                                                Three possible final examination dates for each course* (courses from the Faculty of Economics - coursework in English - have two possible examination dates at the end of each quarter)
                                                            </li>
                                                        </ul>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="font-weight-bold">Registration</td>
                                                    <td>
                                                        Required before beginning of classes
                                                    </td>
                                                    <td>
                                                        Course selection after beginning of classes; individual registration for examination required
                                                    </td>
                                                </tr>
                                            </MDBTableBody>
                                        </MDBTable>
                                        <p>* Non-European students can request an early exam session in December / May</p>
                                    </Tab.Pane>

                                    {/*UCSC International Curriculum*/}
                                    <Tab.Pane eventKey="intl_curriculum">
                                        <h1>
                                            UCSC International Curriculum
                                        </h1>
                                        <hr/>
                                        <p>
                                            The courses within the UCSC International Curriculum will be mainly offered on a semester basis (both Spring and Fall); however, as changes may occur, applicants will be advised on the effective and definitive list of courses available two months before the semester starts.
                                        </p>
                                        <p>
                                            The courses bear the equivalent of <span className="font-weight-bold">3 <a href="https://www.ucscinternational.it/files/Semester/2017-US_Credit_System.pdf" className="a_link">U.S. Credits</a></span>, however within the European Exchange framework these same courses have the value of 6 ECTS. The conversion from US or ECTS credits to your credit system is defined by your home institution. Please refer to your Study Abroad Advisor for detailed information.
                                        </p>
                                        <p>
                                            Please view the <span className="font-weight-bold"><a href="https://www.ucscinternational.it/files/Semester/Academic_Policies_2018.pdf" className="a_link"> Academic Policies</a></span> for the UCSC International Curriculum.
                                        </p>
                                        <MDBContainer className="rgba-blue-grey-slight container_size">
                                            <h5>
                                                Business and Economics
                                            </h5>
                                            <hr/>
                                            <a className="a_link" href="https://www.ucscinternational.it/files/International%20Curriculum/AY%202018-2019/BE1819-Strategic_Management_Entrepreneurship__The_Italian_Perspective_Spring_2018.pdf">
                                                Strategic Management & Entrepreneurship: the Italian Perspective
                                            </a>
                                            <hr/>
                                            <a className="a_link" href="https://www.ucscinternational.it/files/International%20Curriculum/AY%202018-2019/BE1819-Entrepreneurship_lab__Creating_a_new_business_Spring_2019.pdf">
                                                Entrepreneurship Lab: Creating a New Business
                                            </a>
                                            <hr/>
                                            <a className="a_link" href="https://www.ucscinternational.it/files/Semester/Exchange_Milan_Syllabi_1819/BE1819-Green_management_sustainability.pdf">
                                                Green Management & Sustainability
                                            </a>
                                            <hr/>
                                            <a className="a_link" href="https://www.ucscinternational.it/files/International%20Curriculum/AY%202017-2018/BE1718-Entrepreneurial_Finance.pdf">
                                                Entrepreneurial Finance
                                            </a>
                                            <hr/>
                                            <a className="a_link" href="https://www.ucscinternational.it/files/International%20Curriculum/AY%202018-2019/BE1819-Business_government_and_the_global_economy_Spring_2019.pdf">
                                                Business, Government and the Global Economy
                                            </a>
                                            <hr/>
                                            <a className="a_link" href="https://www.ucscinternational.it/files/Semester/Exchange_Milan_Syllabi_1819/BE1819-The_Economics_of_the_European_integration.pdf">
                                                The Economics of the European integration
                                            </a>
                                            <hr/>
                                            <a className="a_link" href="https://www.ucscinternational.it/files/Semester/Exchange_Milan_Syllabi_1819/BE1819-The_Globalization_of_Finance_Managing_Returns_and_Risks.pdf">
                                                The Globalization of Finance: Managing Returns and Risks
                                            </a>
                                            <hr/>
                                            <a className="a_link" href="https://www.ucscinternational.it/files/International%20Curriculum/AY%202016-2017/BE1617-Business_Ethics.pdf">
                                                Business Ethics
                                            </a>
                                            <hr/>
                                            <a className="a_link" href="https://www.ucscinternational.it/files/International%20Curriculum/AY%202018-2019/BE1819-Leadership_Coaching_Bringing_Potential_to_the_Stage_of_Work.pdf">
                                                Leadership Coaching: Bringing Potential to the Stage of WorkBusiness Ethics
                                            </a>
                                        </MDBContainer>
                                        <br/>
                                        <MDBContainer className="rgba-blue-grey-slight container_size">
                                            <h5>
                                                International Relations
                                            </h5>
                                            <hr/>
                                            <a className="a_link" href="https://www.ucscinternational.it/files/International%20Curriculum/AY%202017-2018/IR1718-_The_European_Union_in_the_world__Crisis_or_Transformation.pdf">
                                                The European Union in the World: Crisis or Transformation?
                                            </a>
                                            <hr/>
                                            <a className="a_link" href="https://www.ucscinternational.it/files/International%20Curriculum/AY%202017-2018/IR1718_-_International_Relations_and_the_Middle_East_A_Comparative_European_Perspective.pdf">
                                                International Relations and the Middle East: A Comparative European Perspective
                                            </a>
                                        </MDBContainer>
                                        <br/>
                                        <MDBContainer className="rgba-blue-grey-slight container_size">
                                            <h5>
                                                Italian Culture: Literature, Theatre, Cinema, Music and Philosophy
                                            </h5>
                                            <hr/>
                                            <a className="a_link" href="https://www.ucscinternational.it/files/Semester/Exchange_Milan_Syllabi_1819/LTCMP1819_-_Methods_of_Illusion_The_Mise-en-scene_from_Drama_to_Fiction_and_Visual_Arts.pdf">
                                                Methods of Illusion: la mise-en-scéne from Drama to Fiction and Visual Arts
                                            </a>
                                            <hr/>
                                            <p>
                                                <span><a className="a_link" href="https://www.ucscinternational.it/files/International%20Curriculum/AY%202016-2017/LTCMP1617_-_Writers_and_Painters_Words_and_Colours__Italy_and_the_Arts.pdf">Writers & Paintings Words and Colours: Italy and the Arts</a></span> - Spring 2019 only
                                            </p>
                                            <hr/>
                                            <a className="a_link" href="https://www.ucscinternational.it/files/International%20Curriculum/AY%202016-2017/LTCMP1614_-_Creative_Italian_Storytelling_from_Literature_to_Cinema_to_other_Forms_of_Fiction.pdf">
                                                Creative Italian Storytelling: from Literature to Cinema to other Forms of Fiction
                                            </a>
                                            <hr/>
                                            <a className="a_link" href="https://www.ucscinternational.it/files/International%20Curriculum/AY%202017-2018/LTCMP1718_-_Drama_The_Word_to_The_Action_in_the_Italian_Commedia_dellArte.pdf">
                                                Drama: "The Word to the Action" in the Italian <span className="font-italic">Commedia dell'Arte</span>
                                            </a>
                                            <hr/>
                                            <a className="a_link" href="https://www.ucscinternational.it/files/International%20Curriculum/AY%202018-2019/LTCMP1819_-_The_Discovery_of_Italy_through_its_Culinary_Traditions_Spring19.pdf">
                                                The Discovery of Italy through its Culinary Traditions
                                            </a>
                                            <hr/>
                                            <a className="a_link" href="https://www.ucscinternational.it/files/Semester/Syllabi%201718/LTCMP1617_-_A_Mafia_Story_Its_Representation_in_Literature_Cinema_and_Television.pdf">
                                                A Mafia Story: Its Representation in Literature, Cinema and Television
                                            </a>
                                            <hr/>
                                            <a className="a_link" href="https://www.ucscinternational.it/files/Semester/Syllabi%201718/LTCMP1617_-_Citizenship_and_Religion_in_a_Multicultural_Society_a_New_Clash_of_Identities_in_Italy_and_Europe.pdf">
                                                Citizenship and Religion in a Multicultural Society: a New Clash of Identities in Italy and Europe
                                            </a>
                                            <hr/>
                                            <p>
                                                <span><a className="a_link" href="https://www.ucscinternational.it/files/International%20Curriculum/AY%202017-2018/LTCMP-1718_-_The_Female_Character_in_Italian_Contemporary_Literature_and_Culture.pdf">The Female Character in Italian Contemporary Literature and Culture</a></span> - Fall 2018 only
                                            </p>
                                        </MDBContainer>
                                        <br/>
                                        <MDBContainer className="rgba-blue-grey-slight container_size">
                                            <h5>
                                                Italian Culture: Literature, Theatre, Cinema, Music and Philosophy
                                            </h5>
                                            <hr/>
                                            <a className="a_link" href="https://www.ucscinternational.it/files/Semester/Exchange_Milan_Syllabi_1819/LTCMP1819_-_Methods_of_Illusion_The_Mise-en-scene_from_Drama_to_Fiction_and_Visual_Arts.pdf">
                                                Methods of Illusion: la mise-en-scéne from Drama to Fiction and Visual Arts
                                            </a>
                                            <hr/>
                                            <p>
                                                <span><a className="a_link" href="https://www.ucscinternational.it/files/International%20Curriculum/AY%202016-2017/LTCMP1617_-_Writers_and_Painters_Words_and_Colours__Italy_and_the_Arts.pdf">Writers & Paintings Words and Colours: Italy and the Arts</a></span> - Spring 2019 only
                                            </p>
                                            <hr/>
                                            <a className="a_link" href="https://www.ucscinternational.it/files/International%20Curriculum/AY%202016-2017/LTCMP1614_-_Creative_Italian_Storytelling_from_Literature_to_Cinema_to_other_Forms_of_Fiction.pdf">
                                                Creative Italian Storytelling: from Literature to Cinema to other Forms of Fiction
                                            </a>
                                            <hr/>
                                            <a className="a_link" href="https://www.ucscinternational.it/files/International%20Curriculum/AY%202017-2018/LTCMP1718_-_Drama_The_Word_to_The_Action_in_the_Italian_Commedia_dellArte.pdf">
                                                Drama: "The Word to the Action" in the Italian <span className="font-italic">Commedia dell'Arte</span>
                                            </a>
                                            <hr/>
                                            <a className="a_link" href="https://www.ucscinternational.it/files/International%20Curriculum/AY%202018-2019/LTCMP1819_-_The_Discovery_of_Italy_through_its_Culinary_Traditions_Spring19.pdf">
                                                The Discovery of Italy through its Culinary Traditions
                                            </a>
                                            <hr/>
                                            <a className="a_link" href="https://www.ucscinternational.it/files/Semester/Syllabi%201718/LTCMP1617_-_A_Mafia_Story_Its_Representation_in_Literature_Cinema_and_Television.pdf">
                                                A Mafia Story: Its Representation in Literature, Cinema and Television
                                            </a>
                                            <hr/>
                                            <a className="a_link" href="https://www.ucscinternational.it/files/Semester/Syllabi%201718/LTCMP1617_-_Citizenship_and_Religion_in_a_Multicultural_Society_a_New_Clash_of_Identities_in_Italy_and_Europe.pdf">
                                                Citizenship and Religion in a Multicultural Society: a New Clash of Identities in Italy and Europe
                                            </a>
                                            <hr/>
                                            <p>
                                                <span><a className="a_link" href="https://www.ucscinternational.it/files/International%20Curriculum/AY%202017-2018/LTCMP-1718_-_The_Female_Character_in_Italian_Contemporary_Literature_and_Culture.pdf">The Female Character in Italian Contemporary Literature and Culture</a></span> - Fall 2018 only
                                            </p>
                                        </MDBContainer>
                                        <br/>
                                        <MDBContainer className="rgba-blue-grey-slight container_size">
                                            <h5>
                                                Fashion and Design
                                            </h5>
                                            <hr/>
                                            <a className="a_link" href="https://www.ucscinternational.it/files/International%20Curriculum/AY%202016-2017/FD_1617-Fashion_images_and_the_city_of_Milan__A_sociological_perspective_on_modern_Italian_fashion.pdf">
                                                Fashion Images and the City of Milan. A Sociological Perspective on Modern Italian Fashion
                                            </a>
                                            <hr/>
                                            <p>
                                                <span><a className="a_link" href="https://www.ucscinternational.it/files/International%20Curriculum/AY%202016-2017/FD1617-What_is_design__The_fundamentals_of_Italian_industry.pdf">What is Design? The Fundamentals of an Italian Industry</a></span> - Spring 2019 only
                                            </p>
                                            <hr/>
                                            <a className="a_link" href="https://www.ucscinternational.it/files/Semester/Exchange_Milan_Syllabi_1819/FD1819-The_fashion_market___Structure_Players_and_Success_Factors.pdf">
                                                The Fashion Market: Structure, Players and Success Factors
                                            </a>
                                            <hr/>
                                            <a className="a_link" href="https://www.ucscinternational.it/files/Winter%20Programs/2018-2019/FD1819-Luxury_business_insights.pdf">
                                                Luxury Business Insights
                                            </a>
                                            <hr/>
                                            <a className="a_link" href="https://www.ucscinternational.it/files/International%20Curriculum/AY%202016-2017/FD1617-A_fashion_brand_from_line_creation_to_market_placement__A_case_study.pdf">
                                                A Fashion Brand: from Line Creation to Market Placement. A case study
                                            </a>

                                        </MDBContainer>
                                        <br/>
                                        <MDBContainer className="rgba-blue-grey-slight container_size">
                                            <h5>
                                                Media and Communications
                                            </h5>
                                            <hr/>
                                            <a className="a_link" href="https://www.ucscinternational.it/files/International%20Curriculum/AY%202016-2017/MCS1617_-_Federico_Fellini_and_Contemporary_Italian_Cinema.pdf">
                                                Federico Fellini and Contemporary Italian Cinema
                                            </a>
                                            <hr/>
                                            <a className="a_link" href="https://www.ucscinternational.it/files/Semester/MCS1617_-_Digital_Journalism_and_Digital_Media_in_Italy2017.pdf">
                                                Digital Journalism and Digital Media in Italy
                                            </a>
                                            <hr/>
                                            <a className="a_link" href="https://www.ucscinternational.it/files/International%20Curriculum/AY%202016-2017/MCS1617_-_Publishing_Publicity_and_Cultural_Journalism.pdf">
                                                Publishing, Publicity and Cultural Journalism

                                            </a>
                                            <hr/>
                                            <a className="a_link" href="https://www.ucscinternational.it/files/Semester/Exchange_Milan_Syllabi_1819/MCS1819_-_Purpose_Brands_Tansforming_and_Communicating_for_a_Sustainable_Change.pdf">
                                                Purpose Brands Transforming and Communicating for a Sustainable Change
                                            </a>
                                            <hr/>
                                            <a className="a_link" href="https://www.ucscinternational.it/files/Semester/Exchange_Milan_Syllabi_1819/MCS1819_-_Purpose_Brands_Tansforming_and_Communicating_for_a_Sustainable_Change.pdf">
                                                Purpose Brands Transforming and Communicating for a Sustainable Change
                                            </a>
                                            <hr/>
                                            <p>
                                                <span><a className="a_link" href="https://www.ucscinternational.it/files/International%20Curriculum/AY%202016-2017/MCS1617_-_Green_is_the_new_black_Asset_and_Appeal_of_the_Value_Enviroment_in_Global_Business_Communication.pdf">"Green is the New Black": Asset and Appeal of the Value "Environment" in Global Business Communication</a></span> - Fall 2018 only
                                            </p>
                                            <hr/>
                                            <a className="a_link" href="https://www.ucscinternational.it/files/Semester/Syllabi%201718/MCS1718_-_Television_Advertising_Music_the_Italian_Approachto_the_Media.pdf">
                                                Television, Advertising, Music: The Italian Approach to the Media
                                            </a>
                                            <hr/>
                                            <a className="a_link" href="https://www.ucscinternational.it/files/International%20Curriculum/AY%202016-2017/MCS1617_-_From_Strategy_to_Effective_Presentations.pdf">
                                                From Strategy to Effective Presentations - Methodologies to Write and Present Convincing and Engaging Communications
                                            </a>
                                            <hr/>
                                            <p>
                                                <span><a className="a_link" href="https://www.ucscinternational.it/files/International%20Curriculum/AY%202017-2018/MCS1718_-_Luxury_for_Sustainability_How_Values_Meet_and_Cross_in_Corporate_and_Brand_Communication.pdf">"Luxury for Sustainability": How Values Meet and Cross in Corporate and Brand Communication </a></span> - Spring 2019 only
                                            </p>
                                        </MDBContainer>
                                        <br/>
                                        <MDBContainer className="rgba-blue-grey-slight container_size">
                                            <h5>
                                                Sociology and Psychology
                                            </h5>
                                            <hr/>
                                            <p>
                                                <span><a className="a_link" href="https://www.ucscinternational.it/files/International%20Curriculum/AY%202016-2017/MCS1617_-_Green_is_the_new_black_Asset_and_Appeal_of_the_Value_Enviroment_in_Global_Business_Communication.pdf">Reading Milan and Italian Cities: Place-making and Cultural Resources</a></span> - Spring 2019 only
                                            </p>
                                            <hr/>
                                            <p>
                                                <span><a className="a_link" href="https://www.ucscinternational.it/files/Semester/Syllabi%201718/MCS1617_-_Are_Individuals_the_same_in_the_East_and_West_Cultural_Differences_in_Social_Psychological_Processes.pdf">Are Individuals the Same in the East and West? Cultural Differences in Social Psychological Processes</a></span> - Spring 2019 only
                                            </p>
                                            <hr/>
                                            <p>
                                                <span><a className="a_link" href="https://www.ucscinternational.it/files/International%20Curriculum/AY%202017-2018/MCS1718_-_Discovering_the_Mystery_of_the_Ordinary_Life__Social_Psychology_in_Action.pdf">Discovering the Mystery of the Ordinary Life. Social Psychology in Action </a></span>- Fall 2018 only
                                            </p>
                                            <hr/>
                                            <p>
                                                <span><a className="a_link" href="https://www.ucscinternational.it/files/International%20Curriculum/AY%202017-2018/MCS1718_-_Roman_Law_and_Common_Law_Two_Jurisprudential_Traditions_in_Comparison.pdf">Roman Law and Common Law. Two Jurisprudential Traditions in Comparison</a></span> - Spring 2019 only
                                            </p>
                                            <hr/>
                                            <p>
                                                <span><a className="a_link" href="https://www.ucscinternational.it/files/Semester/Exchange_Milan_Syllabi_1819/MCSP1819-Social_Psychology_in_Theatre.pdf">Social Psychology in Theatre</a></span> - Fall 2018 only
                                            </p>
                                        </MDBContainer>


                                    </Tab.Pane>

                                    {/*UCSC University Academic Curriculum*/}
                                    <Tab.Pane eventKey="uni_curriculum">
                                        <h1>
                                            UCSC University Academic Curriculum
                                        </h1>
                                        <hr/>
                                        <p>
                                            Depending on the degree and type of program, the courses of UCSC University Academic Curriculum in English and in Italian may follow different calendars. Courses can be:
                                        </p>
                                        <ul>
                                            <li className="colorChange font-weight-bold">
                                                Annual courses:
                                            </li>
                                            <p>End of September / End of July </p>
                                            <br/>
                                            <li className="colorChange font-weight-bold">
                                                Semester courses:
                                            </li>
                                            <p>Fall Semester: End of September / End of February (exams included)</p>
                                            <p>Spring Semester: End of February / End of July (exams included)</p>
                                            <br/>
                                            <li className="colorChange font-weight-bold">
                                                Quarter courses - only for the Faculty of Economics and Management, Undergraduate (LT) and Graduate (LM) level
                                            </li>
                                            <p>I  Quarter: Third week of September / Mid of December (exams included)</p>
                                            <p>II Quarter: Beginning of January / Beginning of April (exams included)</p>
                                            <p>III Quarter: Mid April / End of July (exams included)</p>

                                        </ul>
                                        <p>The courses bear <span><a href="https://www.ucscinternational.it/images/stories/EUROPEAN_CREDIT_TRANSFER_SYSTEM.pdf" className="a_link">ECTS credits</a></span></p>
                                        <hr/>
                                        <h3>
                                            Coursework in English
                                        </h3>
                                        <br/>
                                        <p>
                                            Students have the chance to choose among a variety of courses taught in English in the field of Economics, International Management, Banking & Finance, International Relations and Political Sciences and Political and Social Sciences - Law. For course listings and descriptions, please <span><a className="a_link" href="http://ects.unicatt.it/ects/">check our ECTS guide</a></span>.
                                        </p>

                                        <p>
                                            <span className="font-weight-bold">Please note</span>: If you plan to select courses belonging to the Faculty of Economics - Coursework in English - bachelor (Laurea Triennale - LT) degree you have to comply with the <span><a className="a_link" href="https://www.ucscinternational.it/files/Semester/Lauree_triennali_tabella_propedeucita.pdf">prerequisites listed here</a></span>. Make sure to check and meet the requirements before filling in your Learning Agreement /Course Request list enclosed in your online application.
                                        </p>
                                        <br/>
                                        <p>
                                            Follow the Steps:
                                        </p>
                                        <ol>
                                            <li>
                                                Choose <span className="font-italic">Anno Accademico</span> 2017/2018 (Academic year 2017/2018). If you are looking up for courses before July 2017, we suggest to insert the <span className="font-italic">Anno Accademico</span> 2016/2017
                                            </li>
                                            <li>
                                                Choose <span className="font-italic">sede di Milano</span> (Milan campus)
                                            </li>
                                            <li>
                                                Choose the Faculty (<span className="font-italic">Facoltà</span>) you are interested in (PLEASE NOTE that the list is in Italian: <span><a className="a_link" href="https://www.ucscinternational.it/files/school.pdf">check the translation</a></span> before starting
                                            </li>
                                            <li>
                                                Choose the <span className="font-italic">Periodo di lezione</span> (Lesson period): either Annual - 1st Semester (courses for Quarter I belong to this semester) - 2nd semester (courses for Quarters II and III belong to this semester)
                                            </li>
                                            <li>
                                                Choose <span className="font-italic">Lingua Inglese</span> (English Language)
                                            </li>
                                            <li>
                                                Click on <span className="font-italic">Cerca</span>
                                            </li>
                                            <li>
                                                You will find the list of courses taught in English. If you click on each of them, you will see the name of the professor who teaches the course
                                            </li>
                                            <li>
                                                By clicking on the name of the professor, you will find the number of credits, the schedule (<span className="font-italic"> Orario lezioni</span>) and the description (<span className="font-italic">Programma del corso</span>). Note that LAUREA TRIENNALE (LT) means undergraduate level courses and LAUREA MAGISTRALE (LM) means graduate level courses.
                                            </li>
                                        </ol>
                                        <hr/>
                                        <h3>
                                            Coursework in Italian
                                        </h3>
                                        <br/>
                                        <p>
                                            Students with adequate Italian Language Proficiency may also choose courses from the 9 Facoltà (Schools) and over 30 curricula either at the undergraduate or graduate level. <span><a href="http://ects.unicatt.it/ects/" className="a_link">View course description and timetable</a></span>
                                        </p>
                                        <br/>
                                        <p>
                                            Follow the Steps:
                                        </p>
                                        <br/>
                                        <ol>
                                            <li>
                                                Choose <span className="font-italic">Anno Accademico</span> 2017/2018 (Academic year 2017/2018). If you are looking up for courses before July 2017, we suggest to insert the <span className="font-italic">Anno Accademico</span> 2016/2017
                                            </li>
                                            <li>
                                                Choose <span className="font-italic">sede di Milano</span> (Milan campus)
                                            </li>
                                            <li>
                                                Choose the Faculty (<span className="font-italic">Facoltà</span>) you are interested in
                                            </li>
                                            <li>
                                                Choose the <span className="font-italic">Periodo di lezione</span> (Lesson period): either Annual - 1st Semester (courses for Quarter I belong to this semester) - 2nd semester (courses for Quarters II and III belong to this semester)
                                            </li>
                                            <li>
                                                Choose <span className="font-italic">Lingua Inglese</span> (English Language)
                                            </li>
                                            <li>
                                                Click on <span className="font-italic">Cerca</span>
                                            </li>
                                            <li>
                                                You will find the list of courses taught in Italian. If you click on each of them, you will see the name of the professor who teaches the course
                                            </li>
                                            <li>
                                                By clicking on the name of the professor, you will find the number of credits, the schedule (<span className="font-italic"> Orario lezioni</span>) and the description (<span className="font-italic">Programma del corso</span>). Note that LAUREA TRIENNALE (LT) means undergraduate level courses and LAUREA MAGISTRALE (LM) means graduate level courses.
                                            </li>
                                        </ol>
                                        <p>
                                            Upon arrival, you will have two weeks to make the necessary changes to your learning agreement / course request list.
                                        </p>
                                        <p>
                                            No registration is required for courses belonging to the UCSC University Academic Curriculum. Students will be invited in specific info sessions upon thier arrival to complete their Study Plan and to register to the exam.
                                        </p>
                                    </Tab.Pane>

                                    {/*Program Dates*/}
                                    <Tab.Pane eventKey="dates">
                                        <h1>
                                            Program dates
                                        </h1>
                                        <hr/>
                                        <h3>
                                            Application Deadline
                                        </h3>
                                        <ul>
                                            <li>
                                                Fall / Full-year Application Deadline: May 15
                                            </li>
                                            <li>
                                                Spring Application Deadline: October 15
                                            </li>
                                        </ul>
                                        <br/>
                                        <h3>
                                            Academic Calendar
                                        </h3>
                                        {/*UCSC Internation Curriculum*/}
                                        <p className="colorChange sizeChange">
                                            UCSC International Curriculum
                                        </p>
                                        <h6>
                                            Semester 1 (Fall 2018)
                                        </h6>
                                        <strong>
                                            <span className="font-weight-bold">Arrival 1</span>: August 27, 2018
                                        </strong>
                                        <br/>
                                        <strong>
                                            <span className="font-weight-bold">Orientation 1</span>: August 28-30 2018
                                        </strong>
                                        <br/>
                                        <br/>
                                        <strong>
                                            <span className="font-weight-bold">Italian pre-session intensive language course</span>: September 3, 2018 – September 14, 2018
                                        </strong>
                                        <br/>
                                        <br/>
                                        <strong>
                                            <span className="font-weight-bold">Arrival 2</span>: September 10, 2018
                                        </strong>
                                        <br/>
                                        <strong>
                                            <span className="font-weight-bold">Orientation 2</span>: September 11-13, 2018
                                        </strong>
                                        <br/>
                                        <strong>
                                            <span className="font-weight-bold">Beginning of classes</span>: September 17, 2018
                                        </strong>
                                        <br/>
                                        <strong>
                                            <span className="font-weight-bold">Fall Break</span>: November 1, 2018 – November 4, 2018
                                        </strong>
                                        <br/>
                                        <strong>
                                            <span className="font-weight-bold">Public Holidays</span>: November 1, 2018; December 7-8, 2018
                                        </strong>
                                        <br/>
                                        <strong>
                                            <span className="font-weight-bold">End of classes/exams</span>: December 14, 2018
                                        </strong>
                                        <br/>
                                        <br/>
                                        <h6>
                                            Semester 2 (Spring 2019)
                                        </h6>
                                        <br/>
                                        <strong>
                                            <span className="font-weight-bold">Arrival 1</span>: January 28, 2019
                                        </strong>
                                        <br/>
                                        <strong>
                                            <span className="font-weight-bold">Orientation 1</span>: January 29-31, 2019
                                        </strong>
                                        <br/>
                                        <br/>
                                        <strong>
                                            <span className="font-weight-bold">Italian pre-session intensive language course</span>: February 4, 2019 – February 15, 2019
                                        </strong>
                                        <br/>
                                        <br/>
                                        <strong>
                                            <span className="font-weight-bold">Arrival 2</span>: February 11, 2019
                                        </strong>
                                        <br/>
                                        <strong>
                                            <span className="font-weight-bold">Orientation 2</span>: February 12-14-, 2019
                                        </strong>
                                        <br/>
                                        <br/>
                                        <strong>
                                            <span className="font-weight-bold">Beginning of classes</span>: February 18, 2019
                                        </strong>
                                        <br/>
                                        <strong>
                                            <span className="font-weight-bold">Spring/Easter Break</span>: April 15, 2019 – April 22, 2019
                                        </strong>
                                        <br/>
                                        <strong>
                                            <span className="font-weight-bold">Public Holidays</span>: April 22, April 25, May 1, 2019
                                        </strong>
                                        <br/>
                                        <strong>
                                            <span className="font-weight-bold">End of classes/exams</span>: May 24, 2019
                                        </strong>
                                        <br/>
                                        <br/>
                                        <a className="a_link" href="https://www.ucscinternational.it/files/UCSC_International_Curriculum_Calendar_Fall_2018.pdf">
                                            View here a day-to-day program of Fall 2018 semester.
                                        </a>
                                        <br/>

                                        <a className="a_link" href="https://www.ucscinternational.it/files/UCSC_International_Curriculum_Calendar_Spring_2019.pdf">
                                            View here a day-to-day program of Spring 2019 semester.
                                        </a>
                                        <br/>
                                        <p>
                                            Note that the day-to-day program is subject to change at any time. It will be confirmed upon arrival.
                                        </p>
                                        <hr/>
                                        {/*UCSC University Academic Curriculum*/}
                                        <p className="colorChange sizeChange">
                                            UCSC University Academic Curriculum
                                        </p>
                                        <h6>
                                            Semester 1 (Fall 2018)
                                        </h6>
                                        <br/>
                                        <strong>
                                            <span className="font-weight-bold">Arrival 1</span>: August 27, 2018
                                        </strong>
                                        <br/>
                                        <strong>
                                            <span className="font-weight-bold">Orientation 1</span>: August 28-30 2018
                                        </strong>
                                        <br/>
                                        <br/>
                                        <strong>
                                            <span className="font-weight-bold">Italian pre-session intensive language course</span>: September 3, 2018 – September 14, 2018
                                        </strong>
                                        <br/>
                                        <br/>
                                        <strong>
                                            <span className="font-weight-bold">Arrival 2</span>: September 10, 2018
                                        </strong>
                                        <br/>
                                        <strong>
                                            <span className="font-weight-bold">Orientation 2</span>: September 11-13, 2018
                                        </strong>
                                        <br/>
                                        <strong>
                                            <span className="font-weight-bold">Beginning of classes</span>: September 17, 2018
                                        </strong>
                                        <br/>
                                        <strong>
                                            <span className="font-weight-bold">Public Holidays</span>: November 1, 2018; December 7-8, 2018
                                        </strong>
                                        <br/>
                                        <strong>
                                            <span className="font-weight-bold">End of classes</span>: December 21, 2018
                                        </strong>
                                        <br/>
                                        <strong>
                                            <span className="font-weight-bold">Christmas Holidays</span>: December 23, 2018 – January 6, 2019
                                        </strong>
                                        <br/>
                                        <strong>
                                            <span className="font-weight-bold">Examination Session</span>: January 7, 2019 – February 22, 2019
                                        </strong>
                                        <br/>
                                        <br/>
                                        <h6>
                                            Semester 2 (Spring 2019)
                                        </h6>
                                        <br/>
                                        <strong>
                                            <span className="font-weight-bold">Arrival 1</span>: January 28, 2019
                                        </strong>
                                        <br/>
                                        <strong>
                                            <span className="font-weight-bold">Orientation 1</span>: January 29-31, 2019
                                        </strong>
                                        <br/>
                                        <br/>
                                        <strong>
                                            <span className="font-weight-bold">Italian pre-session intensive language course</span>: February 4, 2019 – February 15, 2019
                                        </strong>
                                        <br/>
                                        <br/>
                                        <strong>
                                            <span className="font-weight-bold">Arrival 2</span>: February 11, 2019
                                        </strong>
                                        <br/>
                                        <strong>
                                            <span className="font-weight-bold">Orientation 2</span>: February 12-14-, 2019
                                        </strong>
                                        <br/>
                                        <br/>
                                        <strong>
                                            <span className="font-weight-bold">Beginning of classes</span>: February 18, 2019
                                        </strong>
                                        <br/>
                                        <strong>
                                            <span className="font-weight-bold">Spring/Easter Break</span>: April 18, 2019 – April 22, 2019
                                        </strong>
                                        <br/>
                                        <strong>
                                            <span className="font-weight-bold">End of classes</span>: June 1, 2019
                                        </strong>
                                        <br/>
                                        <strong>
                                            <span className="font-weight-bold">Public Holidays</span>: April 22, April 25, May 1, June 28 2019
                                        </strong>
                                        <br/>
                                        <strong>
                                            <span className="font-weight-bold">Examination Session</span>: June 3, 2019 - July 26, 2019
                                        </strong>
                                        <br/>
                                        <br/>
                                        <a className="a_link" href="https://www.ucscinternational.it/files/Semester/Calendario_accademico_18_19.pdf">
                                            View here a day-to-day program of 2018/2019 academic year.
                                        </a>
                                        <br/>
                                        <p>
                                            Please note that the courses from the School of Economics – English coursework – are organized in quarters:
                                        </p>
                                        <ul>
                                            <li>
                                                Quarter 1: September 18 – December 22 (Including mid-term and final exams)
                                            </li>
                                            <li>
                                                Quarter 2: January 8 – April 6 (Including mid-term and final exams)
                                            </li>
                                            <li>
                                                Quarter 3: April 9 – July 28 (Including mid-term and final exams)
                                            </li>
                                        </ul>
                                        <p>
                                            Students planning to take courses of the second quarter have to arrive in Milan on January 3, 2019 since on on January 4, 2019 they will have to attend a dedicated info-session.
                                        </p>
                                    </Tab.Pane>

                                    {/*Pre-arrival and orientation*/}
                                    <Tab.Pane eventKey="orientation">
                                        <h1>
                                            Pre-arrival and Orientation
                                        </h1>
                                        <hr/>
                                        <p>Please <span className="font-weight-bold"><a className="a_link" href="https://www.ucscinternational.it/student-services-at-cattolica/students-services-in-milan-campus/orientation-in-milan">read here the information about Pre-Arrival and Orientation</a></span> in Milan.</p>
                                    </Tab.Pane>

                                    {/*Italian Language Course*/}
                                    <Tab.Pane eventKey="course">
                                        <h1>
                                            Italian Language Course
                                        </h1>
                                        <hr/>
                                        <p>Please <span className="font-weight-bold"><a className="a_link" href="http://www.ucscinternational.it/student-services-at-cattolica/students-services-in-milan-campus/italian-language-culture-course-in-milan#study-abroad"> read here the information about the Italian Language and Culture Course</a></span> in Milan.</p>
                                    </Tab.Pane>

                                    {/*Admission and application process*/}
                                    <Tab.Pane eventKey="admission">
                                        <h1>
                                            Admission and application process
                                        </h1>
                                        <hr/>
                                        <p>
                                            Please <span className="font-weight-bold"><a className="a_link" href="https://www.ucscinternational.it/admission-at-ucsc/short-term-and-semester/admission-to-study-abroad"> read here the information about the admission and application process for study abroad programs.</a></span>
                                        </p>
                                    </Tab.Pane>

                                    {/*Housing*/}
                                    <Tab.Pane eventKey="housing">
                                        <h1>
                                            Housing
                                        </h1>
                                        <hr/>
                                        <p>
                                            Please <span className="font-weight-bold"><a className="a_link" href="https://www.ucscinternational.it/life-at-cattolica-2/life-in-milan/accommodation-in-milan"> read here information about Housing in Milan.</a></span>
                                        </p>
                                    </Tab.Pane>

                                    {/*Program Fees*/}
                                    <Tab.Pane eventKey="fees">
                                        <h1>
                                            Program fees
                                        </h1>
                                        <hr/>
                                        <p>
                                            Note that the tuition fee and program application are payable to Cattolica. Housing costs are paid separately either to the Cattolica housing provider or, if housing is found independently of Cattolica, directly to the renter. As registered Cattolica students, a discount is available on meal tickets for use at the university cafeteria.
                                        </p>
                                        <br/>
                                        <MDBTable bordered>
                                            <MDBTableHead>
                                                <tr>

                                                    <th></th>
                                                    <th>Non E.U. residents</th>
                                                    <th>E.U. residents</th>
                                                </tr>
                                            </MDBTableHead>
                                            <MDBTableBody>
                                                <tr>

                                                    <td>
                                                        <strong><span className="font-weight-bold"> Tuition fee</span></strong>
                                                        <br/>
                                                        <strong>(4 courses comprising 12 US credits plus 90 contact hour language Pre-session and semester course, orientation)</strong>
                                                    </td>
                                                    <td>€ 5,700</td>
                                                    <td>€ 4,500</td>
                                                </tr>
                                                <tr>
                                                    <td><span className="font-weight-bold">Cost per additional course</span></td>
                                                    <td>€ 1,400</td>
                                                    <td>€ 900</td>
                                                </tr>
                                                <tr>
                                                    <td><span className="font-weight-bold">Program application Fee</span></td>
                                                    <td>€ 75</td>
                                                    <td>€ 75</td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <strong><span className="font-weight-bold">Housing (off campus)</span></strong>
                                                        <br/>
                                                        <strong>
                                                            The cost varies according to the type of housing (shared apartment/dorm) and the proximity to the campus. The prices indicated are merely indicative.
                                                        </strong>
                                                    </td>
                                                    <td>€ 3,250 per semester</td>
                                                    <td>€ 3,250 per semester</td>
                                                </tr>
                                                <tr>
                                                    <td><span className="font-weight-bold">Meals and other estimated personal expenses</span></td>
                                                    <td>€ 550 per month</td>
                                                    <td>€ 550 per month</td>
                                                </tr>
                                            </MDBTableBody>
                                        </MDBTable>
                                        <br/>
                                        <strong className="font-italic">
                                            Fees are subject to change.
                                        </strong>
                                    </Tab.Pane>

                                    {/*Dual Citizenship Scholarship*/}
                                    <Tab.Pane eventKey="scholarship">
                                        <h1>
                                            Dual Citizenship Scholarship
                                        </h1>
                                        <hr/>
                                        <p>
                                            Università Cattolica is pleased to introduce the UCSC Dual Citizenship scholarship applicable toward its semester study abroad program. UCSC wishes to encourages students who have Italian together with any other citizenship to experience their Italian heritage by studying at UCSC for a semester or year.
                                        </p>
                                        <p>
                                            Students can apply for the scholarship by simply uploading their Italian passport when completing the on-line application form. Students will need to fulfill all the requirements for the Study Abroad program in order to be eligible for the scholarship.
                                        </p>
                                        <p>
                                            If accepted on the program, they will automatically obtain a discount on the semester fee. For further information on the scholarship discount rates, please email <span><a className="a_link" href="mailto:international.inquirySA@unicatt.it">international.inquirySA@unicatt.it</a></span>.
                                        </p>
                                        <br/>
                                        <hr/>
                                        <h5>
                                            Conditions and requirements:
                                        </h5>
                                        <p>
                                            Students who are awarded the scholarship will have to fulfill the following:
                                        </p>
                                        <ol>
                                            <li>
                                                <strong>Take at least one <a className="a_link">Italian language course</a> offered at UCSC</strong>
                                                <br/>
                                                <strong>or</strong>
                                            </li>
                                            <li>
                                                Take at least one Italian-taught course of the University Academic Curriculum (a B2 level is required)
                                            </li>
                                            <li>
                                                Provide a written reflective report on their study abroad experience
                                            </li>
                                            <li>
                                                Support and take part in UCSC International activities on campus (i.e. UCSC International Day / Photo Casting Call / Focus Group)
                                            </li>
                                        </ol>
                                    </Tab.Pane>

                                    {/*FAQ*/}
                                    <Tab.Pane eventKey="faq">
                                        <h1>
                                            FAQ - Frequently Asked Question
                                        </h1>
                                        <hr/>
                                        <h2>
                                            Application
                                        </h2>
                                        <br/>
                                        <h5>
                                            Where can I find the the link to the application?
                                        </h5>
                                        <p>
                                            <strong>
                                                Before starting the application online procedure, check if your home institution has already a partnership agreement in place with Università Cattolica del Sacro Cuore by looking at: <a className="a_link" href="http://www.ucscinternational.it/files/Eu_partner_university.pdf">List of EU Partner Institution</a> - <a className="a_link" href="http://www.ucscinternational.it/files/Non_Eu_partner_university.pdf">List of non-EU Partner Institution</a>
                                            </strong>
                                            <br/>
                                            <strong>
                                                If a partnership agreement is in place, talk to your Advisor and ask him/her to e-nominate you to Università Cattolica del Sacro Cuore. UCSC will proceed in acknowledging your e-nomination and will send you back a link to the application online.
                                            </strong>
                                            <br/>
                                            <strong>
                                                If there is no partnership agreement in place, please proceed in filling the application.
                                            </strong>
                                        </p>
                                        <br/>
                                        <h5>
                                            When is the application deadline?
                                        </h5>
                                        <p>
                                            Applicants are required to submit their application by May 15 in order to study at UCSC for the Fall Semester or by October,15 for the Spring Semester.
                                        </p>
                                        <br/>
                                        <h5>
                                            Am I requested to submit the application in paper version?
                                        </h5>
                                        <p>
                                            No, the submission is online only.
                                        </p>
                                        <br/>
                                        <h5>
                                            What are the documents I need to include into the application?
                                        </h5>
                                        <p>
                                            You need to complete the application by including:
                                        </p>
                                        <ul>
                                            <li>
                                                a passport size picture
                                            </li>
                                            <li>
                                                the scanned version of your passport or other ID documents
                                            </li>
                                            <li>
                                                the Transcript of Records from you Home University
                                            </li>
                                            <li>
                                                the learning agreement/course request list duly signed by both the student and the home University
                                            </li>
                                            <li>
                                                certificates assessing the knowledge of the English Language (if willing to take courses taught in English)
                                            </li>
                                            <li>
                                                certificates assessing the knowledge of the Italian Language or the Italian Language Proficiency Report (if willing to take courses taught in Italian).
                                            </li>
                                        </ul>
                                        <br/>
                                        <h5>
                                            What are the English Language Proficiency requirements if I’m non-native English speaking?
                                        </h5>
                                        <p>
                                            Applicants for UCSC coursework in English, need to submit a min. TOEFL score of 79 iBT, an IELTS score of 6 or an equivalent certificate (First Certificate of English - Cambridge ESOL / ISE II - Trinity College, London); or have successfully completed a degree program taught in English; or currently studying in English at their home institution.
                                        </p>
                                        <br/>
                                        <h5>
                                            What is the Italian Proficiency Report and in which case do I have to submit the Report enclosed to the application?
                                        </h5>
                                        <p>
                                            The Italian Language Proficiency Report is required for applicants planning to pursue coursework, besides language courses, in ITALIAN. The report needs to be completed and attached to the application. The first part of the report is to be completed by you. The second part of the report is to be completed by a language instructor and sent directly to UCSC. Both parts of the report need to be completed.
                                        </p>
                                        <br/>
                                        <h5>
                                            What are the differences between the UCSC International Curriculum and the UCSC Academic Curriculum?
                                        </h5>
                                        <p>
                                            <strong>
                                                UCSC International Curriculum is made of courses offered on a semester basis (both Spring and Fall). The courses bear the equivalent of 6 ECTS, corresponding to 3 U.S. Credits.
                                            </strong>
                                            <br/>
                                            <strong>
                                                Courses are all taught in English and classes are mainly made of International Students.
                                            </strong>
                                            <br/>
                                            <strong>
                                                Please note that since changes may occur in the list of courses offered per semester, applicants will be advised on the effective and definitive list of courses available two months before the semester starts.
                                            </strong>
                                            <br/>
                                            <strong>
                                                UCSC Academic Curriculum is made of courses from the 9 Facoltà (schools) at UCSC and over 30 curricula either at undergraduate and graduate level.
                                            </strong>
                                            <br/>
                                            <strong>
                                                Students can both choose to attend UCSC Academic Curriculum taught in English in the field of Economics, International Management, Banking & Finance, International Relations and Political Sciences and Political and Social Sciences - Law. All the other courses offered are in Italian Language. Students will have to prove their knowledge of Italian Language in order to take courses from the UCSC Academic Curriculum taught in Italian.
                                            </strong>
                                        </p>
                                        <br/>
                                        <h5>
                                            When do I receive an acceptance notice?
                                        </h5>
                                        <p>
                                            <strong>
                                                An acceptance notice will be sent out in 1 month from the reception of your complete application. Nevertheless, UCSC International Staff may contact you if you have not completed successfully the online application process before the mentioned deadline. You can be contacted both in case of lacking of required supporting documents and in case further information from your side is needed to complete the application assessment.
                                            </strong>
                                            <br/>
                                            <strong>
                                                Please be sure to read carefully the text of the acceptance notice.
                                            </strong>
                                        </p>
                                        <hr/>
                                        <h2>
                                            CURRICULA and COURSES OFFER
                                        </h2>
                                        <br/>
                                        <h5>
                                            Being a Study Abroad student, how many courses can I choose from the two Curricula: UCSC Academic CV and UCSC International CV?
                                        </h5>
                                        <p>
                                            Being a Study Abroad student, you are free to take the courses you want both from the UCSC Academic Curriculum and the International Curriculum. Please note that the average workload per semester is 30 ECTS (about 4 courses).
                                        </p>
                                        <br/>
                                        <h5>
                                            Being a Study Abroad student, will I be able to change the courses I indicated into my Learning Agreement during the application process?
                                        </h5>
                                        <p>
                                            Yes, you can modify your Learning Agreement by adding and dropping courses once you are at Università Cattolica premises. Please turn directly to the UCSC International Staff to have your new Learning Agreement signed and in case you need advice on the courses.
                                        </p>
                                        <br/>
                                        <h5>
                                            If I selected courses from the UCSC International Curriculum, will I be able to change afterward the courses I selected into my Registration Form?
                                        </h5>
                                        <p>
                                            Yes, if you have selected courses from the UCSC International Curriculum, you will have a two-weeks ADD and DROP period once at Università Cattolica premises that will allow you to modify your course list, upon availability of spots into the new course/es selected.
                                        </p>
                                        <br/>
                                        <h5>
                                            From the UCSC Academic Curriculum, can I take courses from all the Facoltà/Schools at UCSC?
                                        </h5>
                                        <p>
                                            Yes, students can choose to take courses from all the Facoltà (schools) at UCSC. Despite this, we invite students to look up for courses in the subject area that best suits their home university requirements.
                                        </p>
                                        <br/>
                                        <h5>
                                            Where can In find courses from the UCSC International Curriculum?
                                        </h5>
                                        <p>
                                            Courses from the UCSC International Curriculum are listed on the <a className="a_link" onClick={this.handleClick_intl}>UCSC International website</a>. By clicking on the course title the course outline is displayed. Please note that the list of courses is subject to update.
                                        </p>
                                        <br/>
                                        <h5>
                                            Are all the courses from UCSC International Curriculum in English?
                                        </h5>
                                        <p>
                                            Yes, all the courses from the UCSC International Curriculum are taught in English and students will mostly seat in an international classroom.
                                        </p>
                                        <br/>
                                        <h5>
                                            How do I look up UCSC Academic Curriculum courses?
                                        </h5>
                                        <p>
                                            <strong>
                                                In order to look up for courses of the UCSC Academic Curriculum, you have to search into the ECTS Guide at the following link: <a className="a_link" href="http://ects.unicatt.it/ects/index.html?lang=en&search.anno=2015">http://ects.unicatt.it/ects/index.html?lang=en&search.anno=2015</a>
                                            </strong>
                                            <br/>
                                            <strong>
                                                Please consider that in order to look up for the course you will have to enter in order one of the options displayed in the fields: the Academic Year, the Campus, the Faculty, the Language of Instruction and click on SEARCH. All the courses available per Faculty will be displayed.
                                            </strong>
                                            <br/>
                                            <strong>
                                                If you need to verify in which semester the course is offered please select from the drop down menu of the field PERIODO DI LEZIONE: Annuale – courses that last an academic year – 1° Semestre - courses scheduled in the Fall Semester – 2° Semestre - courses scheduled in the Spring Semester.
                                            </strong>
                                        </p>
                                        <br/>
                                        <h5>
                                            Are all the courses from UCSC Academic Curriculum in Italian?
                                        </h5>
                                        <p>
                                            No. The UCSC Academic Curriculum has the majority of courses taught in Italian and a few number of courses taught in English in the field of Economics, International Management, Banking & Finance.
                                        </p>
                                        <br/>
                                        <h5>
                                            Do I have to register to courses before coming over to Italy?
                                        </h5>
                                        <p>
                                            <strong>
                                                UCSC International Curriculum only requires that you proceed to the online registration. UCSC International Office will send to students who selected courses from the UCSC International Curriculum specific emails communication to allow them to create their own ICATT credentials, have a look at the courses schedule and proceed to the online registration.
                                            </strong>
                                            <br/>
                                            <strong>
                                                Please note that the Registration into course is on a first come first serve basis. UCSC Academic Curriculum does not require a registration to courses.
                                            </strong>
                                        </p>
                                        <br/>
                                        <h5>
                                            When the Registration to UCSC International Curriculum courses is going to start?
                                        </h5>
                                        <p>
                                            You will be advised on the registration process two months before the semester starts.
                                        </p>
                                        <br/>
                                        <h5>
                                            I have never studied Italian Language, despite this can I take courses from the UCSC Academic Curriculum - Italian Coursework?
                                        </h5>
                                        <p>
                                            <strong>
                                                Yes. If you cannot submit an Italian Language Proficiency Report and have not an adequate level of Italian knowledge (B2 according to European Language Framework), you must enroll into the Pre-session Intensive Italian Language Course and/or the Semester Italian Course offered at UCSC premises. You will receive specific information on both courses before your departure from home country/university by e-mail.
                                            </strong>
                                            <br/>
                                            <strong>
                                                The Pre-session Intensive and the Semester courses are worth 6 ECTS each for 45 hours courses each.
                                            </strong>
                                        </p>
                                        <br/>
                                        <h5>
                                            How do I enroll in the Italian Language Course?
                                        </h5>
                                        <p>
                                            You will receive an e-mail with all the details after the acceptance notice at UCSC.
                                        </p>
                                        <br/>
                                        <h5>
                                            Is the Italian Language Course included in my tuition?
                                        </h5>
                                        <p>
                                            If you are a Study Abroad student the course is included into your benefits and you won’t have to pay to enroll. You will receive an e-mail asking you to proceed to answer to an online survey.
                                        </p>
                                        <br/>
                                        <hr/>
                                        <h2>
                                            ACADEMIC and INTERNATIONAL CALENDAR
                                        </h2>
                                        <br/>
                                        <h5>
                                            Are the program dates the same for the UCSC International Curriculum and the UCSC Academic Curriculum?
                                        </h5>
                                        <p>
                                            <strong>No, you are invited to look up for program dates (start and end dates as well as exams sessions) on <a className="a_link" onClick={this.handleClick_intl}>UCSC International website</a>.</strong>
                                            <br/>
                                            <strong>Be sure to check the correct dates for your Semester and Curriculum.</strong>
                                            <br/>
                                            <strong>
                                                Please note that non-European students can request an early exam session in December/May.
                                            </strong>
                                        </p>
                                        <br/>
                                        <h5>
                                            When am I expected to come over to Italy for the beginning of my exchange/study abroad period?
                                        </h5>
                                        <p>
                                            <strong>UCSC organized two Orientation Events at the beginning of each semester.</strong>
                                            <br/>
                                            <strong>The first orientation event is compulsory if you decided to take the Pre-session Intensive Italian Language Course.</strong>
                                            <br/>
                                            <strong>
                                                    A specific e-mail informing on the orientation dates and asking for your attendance is sent out before your departure from home country/university by e-mail. Please be sure to answer back indicating your preference otherwise you will not receive the detailed program of the orientation.
                                            </strong>
                                        </p>
                                        <br/>
                                        <h5>
                                            I saw there are two orientation events per semester, how do I know which one I should attend?
                                        </h5>
                                        <p>
                                            <strong>
                                                It is up to you to select the orientation event that best suits your schedule.
                                            </strong>
                                            <br/>
                                            <strong>
                                                Please note that if you decided to take the Pre-session Intensive Italian Language Course you must take part to the first orientation event only.
                                            </strong>
                                        </p>
                                        <br/>
                                        <p>
                                            Additionally, if you intend to take courses from the Faculty of Economics – coursework in English – 2° quarter courses, please do note that you will have to come to Milan by January, 4 2018 and attend a dedicated info session on January, 5 2018.
                                        </p>
                                        <br/>
                                        <hr/>
                                        <h2>
                                            VISA and PERMIT of STAY
                                        </h2>
                                        <br/>
                                        <h5>
                                            Do I need a VISA to come to Italy?
                                        </h5>
                                        <p>
                                            <strong>If you do not have a European passport or European citizenship a VISA for study reason is required. UCSC International will send out to your Home University International Office/to ISEP Central Office/ to you directly two Invitation Letters: 1 in Italian and 1 in English.</strong>
                                            <br/>
                                            <strong>Please note that the statement ‘the student will be accommodated at the University International dorm in Piazza Buonarroti, 30 – 20149 Milano’ is a standard address in order for you to receive a study visa.</strong>
                                        </p>
                                        <br/>
                                        <h5>
                                            What is the Permit of Stay?
                                        </h5>
                                        <p>
                                            The permit of stay is a document you will be asked to apply for upon arrival in order to be legally register for you to stay in Italy.
                                        </p>
                                        <br/>
                                        <h5>
                                            How should I deal with the Permit of Stay once in Italy?
                                        </h5>
                                        <p>
                                            <strong>
                                                During the Orientation Events, a specific session on the Permit of Stay is organized and the UCSC International Staff is at disposal to help and support you in filling in the documents requested for the Permit of Stay issuing.
                                            </strong>
                                            <br/>
                                            <strong>Please remember that, in order to get the permit request filled you need the following documents:</strong>
                                        </p>
                                        <ol>
                                            <li>
                                                passport and photocopy of student’s personal data page and VISA
                                            </li>
                                            <li>
                                                photocopy of VISA documentation and of any letter issued and stamped by Consulate
                                            </li>
                                            <li>
                                                the certificate of enrolment/Admission Letter issued by UCSC
                                            </li>
                                            <li>
                                                photocopy of health insurance coverage
                                            </li>
                                            <li>
                                                a revenue stamp (Marca da bollo) of €16 (to purchase at any tobacco shop)
                                            </li>
                                        </ol>
                                        <br/>
                                        <hr/>
                                        <h2>
                                            Accommodation in Milan
                                        </h2>
                                        <br/>
                                        <h5>
                                            How do I look for an accommodation in Milan?
                                        </h5>
                                        <p>
                                            <strong>
                                                UCSC International will send you a specific communication on accommodation solutions available in Milan.
                                            </strong>
                                            <br/>
                                            <strong>
                                                UCSC offers its international students a limited number of off-campus apartments and rooms in a residence through MIL Service (Milano International Living Service).
                                            </strong>
                                            <br/>
                                            <strong>
                                                If you look for temporary solutions upon your arrival, please turn to the Pre-arrival guide that UCSC will send you.
                                            </strong>
                                            <br/>
                                            <strong>
                                                In addition, the Erasmus Student Network (ESN) is a European student association which has a representation at UCSC too. You will meet ESN at the Orientation Event and on Campus to receive support in the research of accommodation.
                                            </strong>
                                        </p>
                                        <br/>
                                        <h5>
                                            I am an ISEP students, are meals included in my program?
                                        </h5>
                                        <p>
                                            If you are an ISEP EXCHANGE student meals are included in your benefits. ISEP DIRECT program do not include meals.
                                        </p>
                                    </Tab.Pane>
                                </Tab.Content>
                            </MDBCol>
                            <MDBCol size="2.5">
                                <MDBBtnGroup vertical className="btns">
                                    <MDBBtn size="sm" color="primary" href="https://emea.hobsonsradius.com/ssc/aform/x8kk5pKM07020x670GS3K.ssc">
                                        Apply Now  <MDBIcon far icon="edit" />
                                    </MDBBtn>
                                    <MDBBtn size="sm" color="primary" outline href="https://emea.hobsonsradius.com/ssc/iform/x77d7c7fI670x6700oC675.ssc">
                                        Contact Us <MDBIcon icon="phone" />
                                    </MDBBtn>
                                </MDBBtnGroup>
                                <br/>
                                <br/>

                                <Nav variant="pills" className="flex-column font_adjust">

                                    <Nav.Item>
                                        <Nav.Link eventKey="Home">Study Abroad program in Milan </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="program_option">Program Options</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="intl_curriculum" ><div id="curriculum">UCSC International Curriculum</div></Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="uni_curriculum"><div id="uni">UCSC University Academic Curriculum</div></Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="dates">Program Dates</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="orientation">Pre-arrival and orientation</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="course">Italian Language Course</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="admission">Admission and application process</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="housing">Housing</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="fees">Program Fees</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="scholarship">Dual Citizenship Scholarship</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="faq">FAQ</Nav.Link>
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

export default Milan_Program_Structure;