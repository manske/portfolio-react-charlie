import React, { Component } from "react";
import {MainTemplate, Hero, ChunkyIndent} from "../main_template.jsx";
import {WorkCardsMain} from "../work_template.jsx";
import GLOBALS from '../globals.js';

export default class Work extends Component {

  componentDidMount(){
    document.title = "Work — " + GLOBALS.TITLE_BASE
  }

  render() {
    return (
      <MainTemplate name="work">

          <Hero hasImg={false}> 
            <h1>Work </h1>
            <p className="sub">Featured projects </p>
          </Hero> 


          <WorkCardsMain />


      </MainTemplate>
        
    );
  }
}