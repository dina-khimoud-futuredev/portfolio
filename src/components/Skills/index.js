import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1100px;
  gap: 12px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

export const Title = styled.div`
  font-size: 42px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

export const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  max-width: 600px;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const SkillsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap; /* permet aux groupes de passer à la ligne si besoin */
  margin-top: 30px;
  gap: 30px;
  justify-content: center; /* centre les groupes horizontalement */
`;


const Philosophy = styled.div`
  text-align: center;
  max-width: 800px;
  margin: 40px auto 0; 

  strong {
    display: block;        
    font-size: 30px;
    margin-bottom: 10px;
    color: ${({ theme }) => theme.text_primary};
  }

  p {
    font-size: 20px;
    line-height: 1.6;
    color: ${({ theme }) => theme.text_secondary};
  }

  @media (max-width: 768px) {
    strong {
      font-size: 55px;
    }

    p {
      font-size: 55px;
    }
  }
`;


const Skill = styled.div`
  flex: 1 1 300px; /* chaque groupe prend au moins 300px, peut s'étendre */
  max-width: 400px; /* largeur max d’un groupe */
  background: ${({ theme }) => theme.card};
  border: 0.1px solid #854CE6;
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
  border-radius: 16px;
  padding: 18px 36px;
  @media (max-width: 768px) {
    max-width: 100%;
    padding: 10px 36px;
  }
`;


const SkillTitle = styled.h2`
  font-size: 28px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_secondary};
  margin-bottom: 20px;
  text-align: center;
`;

const SkillList = styled.div`
  display: flex;
  justify-content: center; 
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 20px;
`;

const SkillItem = styled.div`
  font-size: 16px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_primary + 80};
  border: 1px solid ${({ theme }) => theme.text_primary + 80};
  border-radius: 12px;
  padding: 12px 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  @media (max-width: 768px) {
    font-size: 14px;
    padding: 8px 12px;
  }
  @media (max-width: 500px) {
    font-size: 14px;
    padding: 6px 12px;
  }
`;

const SkillImage = styled.img`
  width: 24px;
  height: 24px;
`;

const Skills = ({ skillsData }) => {
  return (
    <Container id="skills">
      <Wrapper>
        <Title>Skills</Title>
        <Desc>Here are some of my skills on which I have been working!</Desc>
        <SkillsContainer>
          {skillsData.map((skill, index) => (
            <Skill key={index}>
              <SkillTitle>{skill.title}</SkillTitle>
              <SkillList>
                {skill.skills.map((item, i) => (
                  <SkillItem key={i}>
                    {/* Supprime l'image */}
                    {item.name}
                  </SkillItem>
                ))}
              </SkillList>
            </Skill>
          ))}
        </SkillsContainer>


        <Philosophy>
          <strong>Programming</strong>
          <p>
            Code is only the visible part of programming. The real value lies in logic, analysis, and problem-solving.
            Programming languages and frameworks are merely tools that allow us to turn complex requirements into effective and concrete solutions.
          </p>
        </Philosophy>


      </Wrapper>
    </Container>
  );
};


export default Skills;
