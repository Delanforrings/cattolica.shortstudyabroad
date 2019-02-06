import React, {Component} from 'react';
import {MDBContainer, MDBRow, MDBCol, MDBTable, MDBTableHead, MDBTableBody, MDBView} from 'mdbreact';
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
                                        <p className="colorChange sizeChange">
                                            UCSC International Curriculum
                                        </p>
                                        <h5>

                                        </h5>
                                    </Tab.Pane>

                                    {/*Pre-arrival and orientation*/}
                                    <Tab.Pane eventKey="orientation">
                                        <p>
                                            yoyo2
                                        </p>
                                    </Tab.Pane>

                                    {/*Italian Language Course*/}
                                    <Tab.Pane eventKey="course">
                                        <p>
                                            yoyo2
                                        </p>
                                    </Tab.Pane>

                                    {/*Admission and application process*/}
                                    <Tab.Pane eventKey="admission">
                                        <p>
                                            yoyo2
                                        </p>
                                    </Tab.Pane>

                                    {/*Housing*/}
                                    <Tab.Pane eventKey="housing">
                                        <p>
                                            yoyo2
                                        </p>
                                    </Tab.Pane>

                                    {/*Program Fees*/}
                                    <Tab.Pane eventKey="fees">
                                        <p>
                                            yoyo2
                                        </p>
                                    </Tab.Pane>

                                    {/*Dual Citizenship Scholarship*/}
                                    <Tab.Pane eventKey="scholarship">
                                        <p>
                                            yoyo2
                                        </p>
                                    </Tab.Pane>

                                    {/*FAQ*/}
                                    <Tab.Pane eventKey="faq">
                                        <p>
                                            yoyo2
                                        </p>
                                    </Tab.Pane>
                                </Tab.Content>
                            </MDBCol>
                            <MDBCol size="2.5">
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