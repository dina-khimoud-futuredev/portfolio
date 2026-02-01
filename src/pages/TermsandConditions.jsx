import { React, useEffect } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import Header from '../components/Header/Header.jsx';
import Footer from '../components/Footer/index.js';
import { darkTheme } from '../utils/Themes.js';
import { Helmet } from 'react-helmet';

const FooterWrapper = styled.footer`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 14px;
  align-items: center;
  background-color: ${({ theme }) => theme.BgLight};
`;

const Body = styled.div`
  background: linear-gradient(343.07deg, rgba(132, 59, 206, 0.06) 5.71%, rgba(132, 59, 206, 0) 60.83%);
  padding-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const TermsContainer = styled.div`
  max-width: 800px;
  color: ${({ theme }) => theme.white};
  padding: 50px 20px;

  h2 {
    font-size: 1.2rem;
    font-weight: 600;
    padding: 0.5rem 0;
    color: ${({ theme }) => theme.primary};
  }

  p {
    line-height: 1.6;
    font-size: 1rem;
    padding-bottom: 10px;
    color: ${({ theme }) => theme.text_secondary};
  }
`;

const BoldText = styled.span`
  font-weight: 600;
`;

const TermsandConditions = ({ firebaseData }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Mentions légales | Mon Portfolio</title>
        <meta charset="utf-8" />
        <meta name="author" content="Dina KHIMOUD" />
        <meta name="description" content="Mon portfolio, réalisé dans le cadre de mon M1 Ingénierie des Logiciels Libres, pour présenter mes compétences et projets et rechercher un stage ou une alternance." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Helmet>

      <ThemeProvider theme={darkTheme}>
        <Body>
          <Header Title="Legal Notice" />
          <TermsContainer>
            <h2>1. Ownership</h2>
            <p>
              All content on my website, including text, images, and code, belongs to me.
              Please do not copy or share this content without my permission.
            </p>

            <h2>2. Purpose of my portfolio</h2>
            <p>
              I created this portfolio as part of my Master 1 in  Software Engineering
              to showcase my skills, projects, and experiences, and to support my search for
              an internship or apprenticeship.
            </p>

            <h2>3. Website use</h2>
            <p>
              You are free to browse my website, but any reproduction or use of the content
              without permission is not allowed.
            </p>

            <h2>4. Contact</h2>
            <p>
              If you are a recruiter or want to collaborate with me, feel free to contact me
              using the information available on this site.
            </p>

          </TermsContainer>
        </Body>
        <FooterWrapper>
          <Footer footerData={firebaseData.Bio || {}} links={[]} />
        </FooterWrapper>
      </ThemeProvider>
    </>
  );
}

export default TermsandConditions;
