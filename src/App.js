import React from 'react';
import ReactDOM from 'react-dom';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import PortfolioCard from './PortfolioCard';

const splashStyle = {
	height: '100vh',
	width: '100%',
	textAlign: 'center'
};

const innerSplashStyle = {
	margin: '25% 0 0'
};

const gridStyle = {
	display: 'inline-block',
	width: '30%',
	margin: '10px'
};

const App = () => (
	<div>
		<div style={splashStyle}>
			<MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
				<div style={innerSplashStyle}>
					<h1>Keith Moore</h1>
					<h5>Web Developer</h5>
				</div>
			</MuiThemeProvider>
		</div>
		<div><h2>Portfolio</h2></div>
		<div style={gridStyle}>
			<MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
				<PortfolioCard title="Cool Project" subtitle="This project is pretty cool." imgSrc="bin/images/ag.png" />
			</MuiThemeProvider>
		</div>
		<div style={gridStyle}>
			<MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
				<PortfolioCard title="Another Cool Project" subtitle="This project is also pretty cool." imgSrc="bin/images/calc.png" />
			</MuiThemeProvider>
		</div>
		<div style={gridStyle}>
			<MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
				<PortfolioCard title="Yet Another Cool Project" subtitle="This project is still pretty cool." imgSrc="bin/images/langs.png" />
			</MuiThemeProvider>
		</div>
	</div>
);
 
ReactDOM.render(
  <App />,
  document.getElementById('app')
);