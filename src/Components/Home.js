import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';

class Home extends Component {
  render() {

    if(this.props.data){
     // var logo = "images/"+this.props.data.logo;
      var name = this.props.data.name;
      var profilepic= "images/"+this.props.data.image;
      var school = this.props.data.school;
      var bio = this.props.data.bio;
      var city = this.props.data.address.city;
      var state = this.props.data.address.state;
      var zip = this.props.data.address.zip;
      var phone= this.props.data.phone;
      var email = this.props.data.email;
      var email2 = this.props.data.email2;
      var resumeDownload = this.props.data.resumedownload;
    }

    if(this.props.data){
      var occupation= this.props.data.occupation;
      var description= this.props.data.description;
      var area= this.props.data.area;
    }

    return (
      
      <div>
         <Header/>
            <header id="home">
         <div className="row banner">
            <div className="banner-text">
               {/* <h1 className="responsive-headline">
                  <img className="logo"  src={logo} alt="big logo" />
               </h1> */}
               <h2 >Hi! I'm {name},</h2>
               <h3>{area}<span>{occupation}</span> in the <span>Honors Program at SUNY Stony Brook University. </span>
                      I'm a sophomore double majoring in <span>Statistics and Computer Science</span> with a minor in <span>Mathematics.</span>
                      <br></br>
                      <span>Seeking data science/software engineering internships (almost) anywhere in the world for winter and summer 2020.</span></h3>
               <hr />
            </div>
         </div>

         <p className="scrolldown">
            <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
         </p>

      </header>

      <section id="about">

      <div className="row">
         <div className="three columns">
            <img className="profile-pic"  src={profilepic} alt="Tim Baker Profile Pic" />
         </div>
         <div className="nine columns main-col">
            <h2>About Me</h2>

            <p>I am an avid learner and problem solver who loves looking at real world applications of math and computer science.
               I have deep interests in data viz tools and am experienced with data cleaning.
               I'm starting to dig into machine learning uses and uncover more about its statistical backbone.
               I also have experience with frontend development, specifically with ReactJS.
               
               
               <br></br>
               
               I am also a passionate educator. In everything I do, I seek to use my experience 
               and knowledge to benefit those in my community. This is why in my spare time I teach coding to kids, 
               organize hackathons, and serve as a mentor for students transitioning to college. 
               I also developed an application to help hackathon-goers form teams (see more in project). </p>
            <div className="row">
               <div className="columns contact-details">
                  <h2>Contact Details</h2>
                  <p className="address">
						   <span>{name}</span><br />
						   <span>
						         {city}, {state} {zip}
                   </span><br />
						   <span>{email}</span><br />
                     <span>{email2}</span><br />
                     <span>{phone}</span>
					   </p>
               </div>
               <div className="columns download">
                  <p>
                     <a href="https://drive.google.com/file/d/1iIuCvMMXkbKwcAusWbixNaiVqCTMqOJ1/view?usp=sharing" className="button"><i className="fa fa-download"></i>Download Resume</a>
                  </p>
               </div>
            </div>
         </div>
      </div>

   </section>
    <Footer data={this.props.data}/>
   </div>
    );
  }
}

export default Home;
