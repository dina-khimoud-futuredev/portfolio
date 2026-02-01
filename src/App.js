import React, { useState, Suspense } from "react";
import { Routes, Route, HashRouter as Router } from 'react-router-dom'; 
import { ThemeProvider } from "styled-components";
import styled from "styled-components";

// Import du thème
import { darkTheme } from './utils/Themes.js';

// Import des pages
import Home from "./pages/Home";
import AllProjects from "./pages/AllProjects.jsx";
import TermsandConditions from "./pages/TermsandConditions.jsx";

// Import des données locales
import { firebaseData } from './data/data';

// Définir le Body
const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
`;

const App = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [openModal, setOpenModal] = useState({ state: false, project: null });

  return (
    <ThemeProvider theme={darkTheme}>
      <Router>
        <Suspense>
          <Body>
            <Routes>
              <Route path="/" element={
                <Home firebaseData={firebaseData} openModal={openModal} setOpenModal={setOpenModal} />
              } />
              <Route path="/AllProjects" element={
                <AllProjects firebaseData={firebaseData} openModal={openModal} setOpenModal={setOpenModal} />
              } />
              <Route path="/TermsandConditions" element={<TermsandConditions firebaseData={firebaseData}/>} />
              <Route path="*" element={
                <Home firebaseData={firebaseData} openModal={openModal} setOpenModal={setOpenModal} />
              } />
            </Routes>
          </Body>
        </Suspense>
      </Router>
    </ThemeProvider>
  );
};

export default App;
