import React from 'react';
import {blueGrey50, darkBlack} from 'material-ui/styles/colors';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import PortfolioCard from './PortfolioCard';
import SocialMediaIcon from './SocialMediaIcon';

const muiTheme = getMuiTheme(darkBaseTheme);

const splashStyle = {
  fontFamily: 'Roboto, sans-serif',
  height: '100vh',
  width: '100%',
  margin: '0 auto',
  padding: '0',
  backgroundColor: '#eceff1',
  color: 'rgba(0, 0, 0, 0.87)'
};

const innerSplashStyle = {
  boxSizing: 'border-box',
  textAlign: 'center',
  margin: '0 auto',
  padding: '25% 0 0'
};

const headerStyle = {
  fontFamily: 'Roboto, sans-serif'
};

const cardsWrapperStyle = {
  margin: '0 auto'
};

const gridStyle = {
  display: 'inline-block',
  width: '30%',
  margin: '10px'
};

const socialStyle = {
  boxSizing: 'border-box',
  textAlign: 'center',
  margin: '0 auto',
  padding: '10px'
};

class App extends React.Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div>
          <div style={splashStyle}>
            <div style={innerSplashStyle}>
              <h1>Keith Moore</h1>
              <h4>Software Engineer</h4>
            </div>
          </div>

          <div>
            <h2 style={headerStyle}>Portfolio</h2>
          </div>

          <div stype={cardsWrapperStyle}>
            <div style={gridStyle}>
              <PortfolioCard 
              title="Cool Project" 
              subtitle="This project is pretty cool." 
              imgSrc="bin/images/ag.png" 
              githubUrl=""
              demoUrl="" 
              />
            </div>

            <div style={gridStyle}>
              <PortfolioCard
              title="Another Cool Project"  
              subtitle="This project is also pretty cool." 
              imgSrc="bin/images/calc.png"
              githubUrl="" 
              demoUrl="" 
              />
            </div>

            <div style={gridStyle}>
              <PortfolioCard
              title="Yet Another Cool Project" 
              subtitle="This project is still pretty cool." 
              imgSrc="bin/images/langs.png" 
              githubUrl="" 
              demoUrl="" 
              />
            </div>
          </div>

          <div>
            <h2 style={headerStyle}>Contact</h2>
          </div>

          <div style={socialStyle}>
            <SocialMediaIcon
            linkUrl="http://kdavidmoore.com/kdmoore_resume.pdf" 
            icon="fa fa-file-text fa-stack-1x fa-inverse" 
            />
            <SocialMediaIcon
            linkUrl="https://github.com/kdavidmoore" 
            icon="fa fa-github fa-stack-1x fa-inverse" 
            />
            <SocialMediaIcon
            linkUrl="https://linkedin.com/in/kdavidmoore" 
            icon="fa fa-linkedin fa-stack-1x fa-inverse" 
            />
            <SocialMediaIcon
            linkUrl="https://www.instagram.com/rocks.and.stuff/"
            icon="fa fa-instagram fa-stack-1x fa-inverse"
            />
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;