import React from 'react';
import ReactDOM from 'react-dom';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import PortfolioCard from './PortfolioCard';

const gridStyle = {
	display: 'inline-block',
	width: '30%',
	margin: '10px'
};

const App = () => (
	<div>
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