import React, { useState } from 'react';
import styled from 'styled-components';
import { FaGithub, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { RiHeartAddFill } from "react-icons/ri";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";



const Arrow = styled.div`
  display: flex !important;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;
  width: 40px;
  height: 40px;
  background: rgba(0,0,0,0.6);
  border-radius: 50%;
  cursor: pointer;
  color: white;
  font-size: 20px;
`;

const PrevArrow = ({ onClick }) => (
  <Arrow style={{ left: 10 }} onClick={e => { e.stopPropagation(); onClick(); }}>
    <FaArrowLeft />
  </Arrow>
);

const NextArrow = ({ onClick }) => (
  <Arrow style={{ right: 10 }} onClick={e => { e.stopPropagation(); onClick(); }}>
    <FaArrowRight />
  </Arrow>
);

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  prevArrow: <PrevArrow />,
  nextArrow: <NextArrow />,
};

// Styled components
const Card = styled.article`
  width: 330px;
  background-color: ${({ theme }) => theme.card};
  cursor: pointer;
  border-radius: 10px;
  box-shadow: 0 0 12px 4px rgba(0,0,0,0.4);
  overflow: hidden;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  position: relative;
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 260px;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 0 12px rgba(0,0,0,0.3);
`;

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const Tag = styled.span`
  font-size: 12px;
  font-weight: 400;
  color: ${({ theme }) => theme.primary};
  background-color: ${({ theme }) => theme.primary + 15};
  padding: 2px 8px;
  border-radius: 10px;
`;

const Title = styled.h2`
  font-size: 20px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_secondary};
`;

const Date = styled.time`
  font-size: 12px;
  color: ${({ theme }) => theme.text_secondary + 80};
`;

const DescriptionWrapper = styled.div`
  position: relative;
  max-height: 140px; /* limite à environ 4 lignes */
  overflow: hidden;
`;

const GradientOverlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background: linear-gradient(to top, ${({ theme }) => theme.card}, transparent);
  pointer-events: none;
`;

const Description = styled.p`
  font-weight: 400;
  color: ${({ theme }) => theme.text_secondary + 99};
  margin: 0;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
`;

const SeeMore = styled.span`
  display: flex;
  align-items: center;
  font-size: 12px;
  font-weight: 600;
  color: ${({ theme }) => theme.primary};
  cursor: pointer;
  margin-top: 4px;
  gap: 4px;
`;

const CardDataHolder = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Members = styled.div`
  display: flex;
  align-items: center;
`;

const Avatar = styled.img`
  width: 38px;
  height: 38px;
  border-radius: 50%;
  margin-left: -10px;
  border: 2px solid ${({ theme }) => theme.card};
`;

const CardIcons = styled.div`
  display: flex;
  gap: 8px;
`;

const SocialMediaIcon = styled.a`
  font-size: 1.3rem;
  color: ${({ theme }) => theme.text_primary};
  &:hover {
      color: ${({ theme }) => theme.primary};
  }
`;


// Component
const ProjectCards = ({ project, setOpenModal }) => {
  if (!project) return null;

  const handleIconClick = e => e.stopPropagation();

  return (
    <Card onClick={() => setOpenModal({ state: true, project })}>
      <ImageWrapper>
        <Slider {...sliderSettings}>
          {project.images?.map((img, index) => (
            <div key={index}>
              <img
                src={img}
                alt={`Project ${index}`}
                style={{ width: "100%", height: "260px", objectFit: "contain" }}
              />
            </div>
          ))}
        </Slider>
      </ImageWrapper>

      <Tags>
        {project.tags?.map((tag, index) => (
          <Tag key={index}>{tag}</Tag>
        ))}
      </Tags>

      <Title>{project.title}</Title>
      <Date>{project.date}</Date>

      <DescriptionWrapper>
        <Description>{project.description}</Description>
        <GradientOverlay />
      </DescriptionWrapper>
      <SeeMore>Voir plus →</SeeMore>

      <CardDataHolder>
        <Members>
          {project.member?.map((member, index) => (
            <Avatar key={index} src={member.img} alt={member.name} />
          ))}
        </Members>
        <CardIcons>
          {project.github && (
            <SocialMediaIcon href={project.github} target="_blank" onClick={handleIconClick}>
              <FaGithub size={24} />
            </SocialMediaIcon>
          )}
          
        </CardIcons>
      </CardDataHolder>
    </Card>
  );
};

export default ProjectCards;
