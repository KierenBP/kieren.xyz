import React from 'react';
import { HashRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom';
import ReactDOM from 'react-dom';

import Projects from './projects/view.jsx';
import Gallery from './gallery/view.jsx';
import Background from './core/background.jsx';

export default class App extends React.Component {
 render() {
   return(
    <Router>
        <div>
          <Switch>
            <Route exact path="/" component={Homepage}/>
            <Route exact path="/projects" component={Projects}/>
            <Route exact path="/gallery" component={Gallery}/>
            <Route component={NotFound}/>
          </Switch>
        </div>
    </Router>
   )
 } 
}


class NavBar extends React.Component {
  render() {
    return (
      <div className="navbar">
        <h1>Kieren BP</h1>
        {/*<nav>
          <ul>
            <Link to="/"><li>Home</li></Link>
            <Link to="/projects"><li>Projects</li></Link>
            <Link to="/gallery"><li>Gallery</li></Link>
          </ul>
        </nav>*/}
      </div>
    )
  }
}


class SideNav extends React.Component {
  render() {
    return (
      <div className="sidenav">
          <div className="profile">
            <img src="http://www.sheffield.com/wp-content/uploads/2013/06/placeholder.png" />
            <h1>Kieren BP</h1>
          </div>
          <div className="social-links">
            <a href="https://www.linkedin.com/in/kierenbp/" target="_blank"><i className="fa fa-linkedin-square fa-2x" /></a>
            <a href="https://github.com/kierenbp" target="_blank"><i className="fa fa-github fa-2x" /></a>
            <a href="http://codepen.io/imkieren" target="_blank"><i className="fa fa-codepen fa-2x" /></a>
            <a href="mailto:kieren@kieren.xyz" target="_blank"><i className="fa fa-envelope fa-2x" /></a>
          </div>
      </div>
    )
  }
}


class Homepage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            intro: 'Hi! My name is Kieren Butcher-Penrose. I am 17 years old and I was born in New Zealand.',
            background: 'From an early age, I formed an interest in computers. I started helping teachers in my primary school solve their computer issues, set up printers or projectors and became widely known as the ‘Tech Kid’. At the age of nine, I received my first laptop which kickstarted my passion for technology. A year later, I installed Linux which was the foundation for vastly improving my computer knowledge. Throughout the ages of 13 to 15, I started to use Linux in server environments to host gaming servers with custom modifications for friends. Hosting community forums using MyBB with Apache. \n I started coding with HTML and CSS in 2014 before moving on to Javascript. I learned these skills through self learning courses like Lynda.com, Teamtreehouse, Code School, multiple books and practicing. My high school later gave me 4 periods a week where I could continue to learn and further develop my programming skills. In 2015, I started my first paid job for Maketu Pies. Then moving on to more complex development with Wordpress for pilatesfitnessltd.com. At the start of 2016 I took up an unpaid internship at Ashley Cho I.T. Solutions which consists of me developing frontend and backend applications using Javascript/NodeJS, React and MySQL. I also helped change their development process by introducing Git version control to the team.',
            experiences: [{
              title: 'Ashley Cho I.T. Solutions - Web Software Engineer - Feb 2016 – Present',
              desc: 'Unpaid internship, one full work day a week, plus extra work at home. Worked on designing and building websites like http://tauhara.school.nz. Started development for an \'API first\' internal management system using: Node, React and MySQL (https://github.com/kierenbp/acms). Introduced Git source control to the team to help with project collaboration.'
            },{
              title: 'Pilates Fitness Ltd. - Freelance Web Developer - Dec 2015 – Jan 2016',
              desc: 'Built website using Wordpress, SASS and HTML5. Deployed with shared PHP hosting and CloudFlare. Used Git for source control. Contained online ecommerce shop and restricted videos for paying customers. Included information about studio times, fees and benefits of program. Communicated via email. Designed website, using Bohemian Sketch3, to be mobile friendly. Evolved design from client\'s feedback.'
            },{
              title: 'Maketu Pies - Freelance Web Developer - Aug 2015 – Sep 2015',
              desc: 'First paid project. Spent two months designing, developing and improving site with client feedback. Built in JQuery, HTML and SASS. Communication with client done via email and phone. http://maketupies.co.nz'
            }],
            skills: ['Javascript', 'HTML + CSS', 'SASS', 'Git', 'React', 'Linux'],
            goals: '',
            education: 'I have passed level 1 and 2 of NECA and am working towards level 3 at Tauhara College. Digital Technology, Electronics, English and Maths are the classes I am taking in 2017. All my classes are picked with technology in mind.'
        };
    }
    componentWillMount() {
        // Fetch Bio text from API and update bio state
    }
  render() {
    return (
      <div className="homepage">
        <SideNav />
        <div className="bio">
          <p className="bio-text">
            <h1>Introduction</h1>
            {this.state.intro}
            <h1>Background</h1>
            {this.state.background}
            <h1>Experiences</h1>
            <dl>
            {this.state.experiences.map((exp) => {
              return (
                <div>
                  <dt style={{fontWeight: 'bold'}}>{exp.title}</dt>
                  <dd>{exp.desc}</dd>
                </div>);
            })}
            </dl>
            <h1>Skills</h1>
            {this.state.skills.map((skill) => {
              return <li>{skill}</li>;
            })}
            <h1>Goals</h1>
            {this.state.goals}
            <h1>Education</h1>
            {this.state.education}
          </p>
        </div>
      </div>
    )
  }
}

const NotFound = () => (
    <div>
      <h1>404 .:. This page is not found!</h1>
      <Link to="/">Go Home!</Link>
    </div>
)
ReactDOM.render(<App />, document.getElementById('app'));