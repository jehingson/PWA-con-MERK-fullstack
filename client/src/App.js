import React, { Suspense } from "react";
import { Logo } from "./components/Logo";
import { GlobalStyle } from "./styles/GlobalStyles";
import { DataProvider } from "./GlobalContext";
import { Navbar } from './components/Navbar';
import { BrowserRouter as Router } from 'react-router-dom';
import { Pages } from "./pages/Pages";

import { createBrowserHistory } from 'history';
import ReactGA from 'react-ga';
  
const history = createBrowserHistory()

console.log('history', history)

ReactGA.initialize('UA-000000-01')
ReactGA.pageview(window.location.pathname + window.location.search)

history.listen(function(location){
  ReactGA.pageview(window.location.pathname + window.location.search)
})

export const App = () => { 

  return (
    <DataProvider>
    <Suspense fallback={<div>Loadings...</div>}>
      <GlobalStyle />
      <Router history={history}>
          <Logo />
          <Pages />
          <Navbar/>
      </Router>
    </Suspense>
    </DataProvider>
  );
};

