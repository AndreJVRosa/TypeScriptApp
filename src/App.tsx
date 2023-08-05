import React from "react";
//Rounting
import { BrowserRouter as Router, Routes, Route  } from "react-router-dom";

//Components
import Header from "./componentes/Header";
import Home from "./componentes/Home";
import Movie from "./componentes/Movie";
import NotFound from "./componentes/NotFound";

//Styles
import { GlobalStyle } from "./GlobalStyle";





const App: React.FC = () => (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/:movieId" element={<Movie />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
      <GlobalStyle />
    </Router>
  );

export default App;
