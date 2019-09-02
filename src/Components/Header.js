import React, { Component } from 'react';
import $ from 'jquery';

class Header extends Component {

  componentDidMount() {
    $(document).ready(function() {
      $("[href]").each(function() {
          if (this.href === window.location.href) {
              $(this).addClass("active");
          }
      });
  });
  }

  render() {
    return (
          <div id="header">
         <nav id="nav-wrap">

         <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
         <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>

         <ul id="nav" className="nav">
            <li><a href="./home">Home</a></li>
            <li ><a href="./resume">Resume</a></li>
            <li><a href="./projects">Projects</a></li>
            <li><a href="./personal">Personal</a></li>
            <li><a href="./contact">Contact</a></li>
         </ul>

          

         </nav>
         </div>
    );
    
  }
  
}

export default Header;
