import React from 'react';
import '../components/css/card.css';

const Card = (props) => {
  return <div className={`card ${props.className}`}>{props.children}</div>;
};

export default Card;
