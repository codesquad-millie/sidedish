import React, { useState } from 'react';
import {
  CardWrapper,
  SubTitle,
  Title,
  Thumbnail,
  PriceBox,
  SalePrice,
  Badge,
  DescriptionWrapper,
  DeliveryIcon,
} from './Card.style';

const Card = ({ data, size }) => {
  const [isMouseEnter, setIsMouseEnter] = useState(false);

  const handleThumbnailMouseEnter = () => {
    setIsMouseEnter(true);
  };

  const handleThumbnailMouseLeave = () => {
    setIsMouseEnter(false);
  };

  return (
    <CardWrapper>
      <Thumbnail
        src={data.thumbnail}
        size={size}
        onMouseEnter={handleThumbnailMouseEnter}
        onMouseLeave={handleThumbnailMouseLeave}
      >
        {isMouseEnter && <DeliveryIcon />}
      </Thumbnail>
      <DescriptionWrapper>
        <Title size={size}>{data.name}</Title>
        {size !== 'small' && <SubTitle>{data.description}</SubTitle>}
        <PriceBox>
          <Title>{data.normalPrice.toLocaleString('ko-KR')}원</Title>
          <SalePrice>{(data.normalPrice * 0.9).toLocaleString('ko-KR')}원</SalePrice>
        </PriceBox>
      </DescriptionWrapper>
      {size !== 'small' && <Badge>런칭특가</Badge>}
    </CardWrapper>
  );
};

export default Card;
