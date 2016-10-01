import React from 'react';
import {blueGrey50, darkBlack} from 'material-ui/styles/colors';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import PortfolioCardsWrapper from './PortfolioCardsWrapper';

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
    fontFamily: 'Roboto, sans-serif',
    padding: '20px'
  },
  linksWrapper: {
    fontFamily: 'Roboto, sans-serif',
    textAlign: 'center',
    margin: '0 auto',
    maxWidth: '80%',
  },
  link: {
    color: 'rgb(30, 30, 30)',
    textDecoration: 'none'
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
        <div id="top">
          <div style={styles.splash}>
            <div style={styles.innerSplash}>
              <a style={styles.link}
              href="#portfolio">
                <h1>Keith Moore</h1>
                <h4>Software Engineer</h4>
              </a>
            </div>
          </div>

          <div id="portfolio">
            <h2 style={styles.header}>Portfolio</h2>
            <PortfolioCardsWrapper data={cardsData} />
          </div>

          <div id="contact">
            <h2 style={styles.header}>Contact</h2>
            <div style={styles.linksWrapper}>
              <h3>
                <a style={styles.link}
                href="http://kdavidmoore.com/kdmoore_resume.pdf">
                resume
                </a>
              </h3>

              <h3>
                <a style={styles.link}
                href="https://github.com/kdavidmoore">
                github
                </a>
              </h3>

              <h3>
                <a style={styles.link}
                href="https://linkedin.com/in/kdavidmoore">
                linkedin
                </a>
              </h3>
              
              <h3>
                <a style={styles.link}
                href="https://www.instagram.com/rocks.and.stuff/">
                instagram
                </a>
              </h3>
            </div>
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;