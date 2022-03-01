import React from 'react'
import PageLayout  from './page/page-layout/page-layout';
import HomePage from './page/home-page/home-page'
import BankPartnersPage from './page/bank-partners-page/bank-partners-page';
import ValidationCardPage from './page/Validation-card-page/validation-card-page'
import PersonalAreaCard from './page/personal-area-card/personal-area-card'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import InfoPage from './page/Info-bank-page/Info-bank-page'
import ManagementPage from "./page//management-page/Management-Page"
import CreditPage from './page/credit-page/credit-page';
function App() {
  return (
      <Router>
        <PageLayout>
          <Routes>
           <Route path ='/bank-partners' exact element={BankPartnersPage}/>
           <Route path ='/o-nas' exact element={ManagementPage}/>
           <Route path ='/validations' exact element={ValidationCardPage}/>
           <Route path ='/personal-area-card' exact element={PersonalAreaCard}/>
           <Route path ='/credit' exact element={CreditPage}/>
           <Route path ='/info' exact element={InfoPage}/>
           <Route path ='/' exact element={HomePage}/>
          </Routes>
        </PageLayout>
      </Router>
  );
}

export default App;
