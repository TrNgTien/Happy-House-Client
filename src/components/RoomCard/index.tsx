import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';
import MapIcon from '../icons/bx_map';
import Link from 'next/link';
import RoomIcon from '../icons/room';
import LoginImage from '../../assets/images/login-img.png';
import { H2, H4, H5, P } from '../Typography';

const Wrapper = styled.div`
  background: #e8e1d7;
  box-shadow: 2px 4px 8px 4px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  cursor: pointer;
  &:hover {
    opacity: 0.75;
  }
`;
const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 14rem;
  border-radius: 8px 8px 0px 0px;
  overflow: hidden;
`;
const DescriptionWrapper = styled.div`
  padding: 1rem;
  color: #c45c31;
`;
const Description = styled.div`
  display: flex;
  align-items: center;
  gap: 0.125rem;
  font-size: 8px;
  color: #97826d;
`;
const TitleWrapper = styled.div`
  margin-bottom: 0.5rem;
`;

const RoomCard = ({items}: any) => {
    return (
      <Link href={`/manage/${items}`}>
    <Wrapper>   
      <ImageWrapper>
        <Image objectFit="cover" layout="fill" src={LoginImage} />
      </ImageWrapper>
      <DescriptionWrapper>
        <TitleWrapper>
          <H4>Thủ Đức 24 Linh Trung, Thủ Đức</H4>
        </TitleWrapper>
        <Description>
          <RoomIcon />
          <H5>Phòng trống: 3/36</H5>
        </Description>
        <Description>
          <MapIcon />
          <H5>Xem trên bản đồ</H5>
        </Description>
      </DescriptionWrapper>
    </Wrapper>
      </Link>
  );
};

export default RoomCard;