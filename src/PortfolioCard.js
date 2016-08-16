import React from 'react';
import {Card, CardActions, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
 
const PortfolioCard = ({title, subtitle, imgSrc}) => (
  <Card>
    <CardMedia>
      <img src={imgSrc} />
    </CardMedia>
    <CardTitle title={title} subtitle={subtitle} />
    <CardText>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
      Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
      Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
    </CardText>
    <CardActions>
      <FlatButton label="GitHub" />
      <FlatButton label="Demo" />
    </CardActions>
  </Card>
);
 
export default PortfolioCard;