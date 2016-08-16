import React from 'react';
import {blueGrey50, darkBlack} from 'material-ui/styles/colors';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import PortfolioCard from './PortfolioCard';

const muiTheme = getMuiTheme(darkBaseTheme);

const splashStyle = {
	height: '100vh',
	width: '100%',
	textAlign: 'center',
	margin: '0 auto',
	backgroundColor: '#eceff1',
	color: 'rgba(0, 0, 0, 0.87)'
};

const innerSplashStyle = {
	boxSizing: 'border-box',
	padding: '25% 0 0',
	margin: '0 auto'
};

const gridStyle = {
	display: 'inline-block',
	width: '30%',
	margin: '10px'
};

const App = () => (
	<MuiThemeProvider muiTheme={muiTheme}>
		<div>
			<div style={splashStyle}>
				<div style={innerSplashStyle}>
					<h1>Keith Moore</h1>
					<h5>Web Developer</h5>
				</div>
			</div>

			<div>
				<h2>Portfolio</h2>
			</div>

			<div style={gridStyle}>
				<PortfolioCard title="Cool Project" subtitle="This project is pretty cool." imgSrc="bin/images/ag.png" />
			</div>

			<div style={gridStyle}>
				<PortfolioCard title="Another Cool Project" subtitle="This project is also pretty cool." imgSrc="bin/images/calc.png" />
			</div>

			<div style={gridStyle}>
				<PortfolioCard title="Yet Another Cool Project" subtitle="This project is still pretty cool." imgSrc="bin/images/langs.png" />
			</div>
		</div>
	</MuiThemeProvider>
);

export default App;