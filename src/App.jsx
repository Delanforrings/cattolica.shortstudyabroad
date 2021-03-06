import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Home from "./pages/Home/Home";
import About_Cattolica from "./pages/About_Cattolica/About_Cattolica";
import Admission from "./pages/Admission/Admission";
import TopNavBar from "./Component/TopNavBar/TopNavBar";
import CattolicaFooter from "./Component/CattolicaFooter/Cattolica_Footer";
import Accommodation from "./pages/Life/Accommodation";
import Living from "./pages/Life/Living";
import HavingFun from "./pages/Life/HavingFun";
import {CircleArrow as ScrollUpButton} from "react-scroll-up-button";
import UsefulInfo from "./pages/Life/UsefulInfo";
import Milan_Program_Structure from "./pages/Programs/Milan/Milan_Program_Structure";
import Numbers from "./pages/About_Cattolica/Numbers";
import Alumni from "./pages/About_Cattolica/Alumni";
import Milan_campus from "./pages/About_Cattolica/Milan_campus";
import {Animation} from 'mdbreact';
import Higher_Education from "./pages/About_Cattolica/Higher_Education";
import Italian_Lang_Course from "./pages/Student_Services/Italian_Lang_Course";



class App extends Component {
  render() {
    return (
            <Router>
                <div>
                    <TopNavBar/>
                    <Animation type="fadeIn">
                        <Route exact path="/" component={Home} />
                        <Route path="/about-cattolica" component={About_Cattolica} />
                        <Route path="/numbers" component={Numbers} />
                        <Route path="/alumni" component={Alumni} />
                        <Route path="/the-italian-higher-education-system" component={Higher_Education} />
                        <Route path="/italian_lang_course" component={Italian_Lang_Course} />
                        <Route path="/campus_milan" component={Milan_campus} />
                        <Route path="/admission" component={Admission} />
                        <Route path="/life_accommodation" component={Accommodation} />
                        <Route path="/life_living" component={Living} />
                        <Route path="/life_having_fun" component={HavingFun} />
                        <Route path="/life_useful_info" component={UsefulInfo} />
                        <Route path="/program_milan" component={Milan_Program_Structure} />
                    </Animation>

                    <ScrollUpButton/>
                    <CattolicaFooter/>
                </div>
            </Router>


    );
  }
}

export default App;
