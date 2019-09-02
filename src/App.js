import React, { Component } from 'react';
import ReactGA from 'react-ga';
import $ from 'jquery';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Components/Home';
import Resume from './Components/Resume';
import Projects from './Components/Projects';
import Personal from './Components/Personal';
import Contact from './Components/Contact';
import NotFound from './Components/NotFound';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      foo: 'bar',
      resumeData: {}
    };

    ReactGA.initialize('UA-110570651-1');
    ReactGA.pageview(window.location.pathname);

  }

  getResumeData(){
    $.ajax({
      url:'./resumeData.json',
      dataType:'json',
      cache: false,
      success: function(data){
        this.setState({resumeData: data});
      }.bind(this),
      error: function(xhr, status, err){
        console.log(err);
        alert(err);
      }
    });
  }

  componentDidMount(){
    this.getResumeData();
  }

  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
          <Route path="/home" exact render={(props) => (<Home data={this.state.resumeData.main}/>)} />
            <Route path="/" exact render={(props) => (<Home data={this.state.resumeData.main}/>)} />
            <Route path="/resume" exact render={(props) => (<Resume data={this.state.resumeData.resume}/>)} />
            <Route path="/projects" exact render={(props) => (<Projects data={this.state.resumeData.portfolio}/>)} />
            <Route path="/personal" exact render={(props) => (<Personal data={this.state.resumeData.personal}/>)} />
            <Route path="/contact" exact render={(props) => (<Contact data={this.state.resumeData.main}/>)} />
            <Route component={NotFound} />

          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
