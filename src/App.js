import React from 'react';
import {blueGrey50, darkBlack} from 'material-ui/styles/colors';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import PortfolioCardsWrapper from './PortfolioCardsWrapper';
import SocialMediaIcon from './SocialMediaIcon';

const styles = {
  splash: {
    fontFamily: 'Roboto, sans-serif',
    height: '100vh',
    width: '100%',
    margin: '0 auto',
    padding: '0',
    backgroundColor: '#eceff1',
    color: 'rgba(0, 0, 0, 0.87)'
  },
  innerSplash: {
    boxSizing: 'border-box',
    textAlign: 'center',
    margin: '0 auto',
    padding: '25% 0 0'
  },
  header: {
    fontFamily: 'Roboto, sans-serif'
  },
  social: {
    boxSizing: 'border-box',
    textAlign: 'center',
    margin: '0 auto',
    padding: '10px'
  }
};

const cardsData = [
  {
    id: 0,
    title: "Cool Project",
    subtitle: "This project is pretty cool.", 
    imgSrc: "bin/images/ag.png",
    githubUrl: "",
    demoUrl: "" 
  },
  {
    id: 1,
    title: "Another Cool Project",
    subtitle: "This project is also pretty cool.", 
    imgSrc: "bin/images/calc.png",
    githubUrl: "",
    demoUrl: "" 
  },
  {
    id: 2,
    title: "Yet Another Project",
    subtitle: "This project another cool project.", 
    imgSrc: "bin/images/langs.png",
    githubUrl: "",
    demoUrl: "" 
  }
];

class App extends React.Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
        <div>
          <div style={styles.splash}>
            <div style={styles.innerSplash}>
              <h1>Keith Moore</h1>
              <h4>Software Engineer</h4>
            </div>
          </div>

          <div>
            <h2 style={styles.header}>Portfolio</h2>
          </div>

          <PortfolioCardsWrapper data={cardsData} />

          <div>
            <h2 style={styles.header}>Contact</h2>
          </div>

          <div style={styles.social}>
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