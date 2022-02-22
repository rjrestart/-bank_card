import React from 'react'
import PageLayout  from './page/page-layout/page-layout';
import HomePage from './page/home-page/home-page'
// import ValidationCardPage  from './page/Validation-card-page/validation-card-page';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  return (
      <Router>
        <PageLayout>
          <Routes>
           <Route path ='/' exact element={HomePage}/>
          </Routes>
        </PageLayout>
      </Router>
  );
}

export default App;
