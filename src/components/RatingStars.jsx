import React from 'react';
import { StarFilled, StarOutlined } from '@ant-design/icons';

const RatingStars = ({ rating }) => {
  const totalStars = 5;
  const filledStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  const renderStars = () => {
    const stars = [];

    for (let i = 1; i <= totalStars; i++) {
      if (i <= filledStars) {
        stars.push(<StarFilled key={i} style={{ color: '#faad14' }} />);
      } else if (hasHalfStar && i === filledStars + 1) {
        stars.push(<StarOutlined key={i} style={{ color: '#faad14' }} />);
      } else {
        stars.push(<StarOutlined key={i} style={{ color: '#faad14' }} />);
      }
    }

    return stars;
  };

  return <div style={{ display: 'flex' }}>{renderStars()}</div>;
};

export default RatingStars;
