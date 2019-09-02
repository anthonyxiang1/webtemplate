import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';

class Resume extends Component {
  render() {

    if(this.props.data){
      var skillmessage = this.props.data.skillmessage;
      var education = this.props.data.education.map(function(education){
        return <div key={education.school}><h3>{education.school}</h3>
        <p className="info">{education.degree} <span>&bull;</span><em className="date">{education.graduated}</em>
            <span>&bull;</span><em className="date">GPA: {education.gpa}</em></p>
        <p>Activities: {education.description}</p>
        <p>Coursework: {education.courses}</p>
        <p>Awards: {education.desc2}</p>
        </div>
      })
      var work = this.props.data.work.map(function(work){
        return <div key={work.company}><h3>{work.company}</h3>
            <p className="info">{work.title}<span>&bull;</span> <em className="date">{work.years}</em></p>
            <p>{work.d1} <br/> {work.d2} <br/> {work.d3} <br/> {work.d4}</p>
        </div>
      })
      var activities = this.props.data.activities.map(function(activities){
        return <div key={activities.company}><h3>{activities.company}</h3>
            <p className="info">{activities.title}<span>&bull;</span> <em className="date">{activities.years}</em></p>
            <p>{activities.description}</p>
        </div>
      })
      var skills = this.props.data.skills.map(function(skills){
        var className = 'bar-expand '+skills.name.toLowerCase();
        return <li key={skills.name}><span style={{width:skills.level}}className={className}></span><em><strong>{skills.level}</strong>: {skills.name}</em></li>
      })
    }

    return (
      <div>
        <Header/>
        <section id="resume">

      <div className="row education">
         <div className="three columns header-col">
            <h1><span>Education</span></h1>
         </div>

         <div className="nine columns main-col">
            <div className="row item">
               <div className="twelve columns">
                 {education}
               </div>
            </div>
         </div>
      </div>

      <div className="row skill">

              <div className="three columns header-col">
                  <h1><span>Skills</span></h1>
              </div>

              <div className="nine columns main-col">

                  <p>{skillmessage}
                  </p>


                <ul className="skills">
                   {skills}
                </ul>

            </div>
            </div>


      <div className="row work">

         <div className="three columns header-col">
            <h1><span>Work</span></h1>
         </div>

         <div className="nine columns main-col">
          {work}
        </div>
      </div>

      <div className="row activities">

         <div className="three columns header-col">
            <h1><span>Activities</span></h1>
         </div>

         <div className="nine columns main-col">
          {activities}
        </div>
      </div>

            
   </section>
   <Footer/>
   </div>
    );
  }
}

export default Resume;