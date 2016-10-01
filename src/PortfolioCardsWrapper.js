import React from 'react';
import PortfolioCard from './PortfolioCard';

const cardsWrapperStyle = {
  margin: '0 auto'
};

const PortfolioCardsWrapper = ({data}) => {
  const cardNodes = data.map((card) => {
    return (
      <PortfolioCard
      key={card.id}
      title={card.title}
      subtitle={card.subtitle}
      imgSrc={card.imgSrc}
      githubUrl={card.githubUrl}
      demoUrl={card.demoUrl}
      />
    );
  });
  return (
    <div style={cardsWrapperStyle}>
      {cardNodes}
    </div>
  );
}

export default PortfolioCardsWrapper;