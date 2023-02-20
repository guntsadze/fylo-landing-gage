import { useState } from "react";
import RenderFooter from "./components/header-footer/RenderFooter";
import RenderHeader from "./components/header-footer/RenderHeader";
import RenderHeroHeader from "./components/hero/RenderHeroHeader";
import RenderQuestions from "./components/hero/RenderQuestions";
import RenderSectionHero from "./components/hero/RenderSectionHero";
import { GlobalStyle } from "./reset";

function App() {
  return (
    <>
      <GlobalStyle />
      <RenderHeader />
      <RenderHeroHeader />
      <RenderSectionHero />
      <RenderQuestions />
      <RenderFooter />
    </>
  );
}

export default App;
