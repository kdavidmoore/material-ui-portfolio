import React from 'react';
import {Card, CardActions, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
 
const gridStyle = {
  display: 'inline-block',
  width: '30%',
  margin: '10px'
};

const PortfolioCard = ({id, title, subtitle, imgSrc, githubUrl, demoUrl}) => (
  <div style={gridStyle}>
    <Card>
      <CardMedia>
        <img src={imgSrc} />
      </CardMedia>
      <CardTitle title={title} subtitle={subtitle} />
      <CardText></CardText>
      <CardActions>
        <a href={githubUrl}><FlatButton label="GitHub" /></a>
        <a href={demoUrl}><FlatButton label="Demo" /></a>
      </CardActions>
    </Card>
  </div>
);
 
export default PortfolioCard;