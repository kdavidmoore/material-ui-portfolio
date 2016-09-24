import React from 'react';
import {Card, CardActions, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
 
const PortfolioCard = ({title, subtitle, imgSrc, githubUrl, demoUrl}) => (
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
);
 
export default PortfolioCard;