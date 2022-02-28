import React from 'react'
import PageLayout  from './page/page-layout/page-layout';
import HomePage from './page/home-page/home-page'
import BankPartnersPage from './page/bank-partners-page/bank-partners-page';
import InfoBankPage from './page/Info-bank-page/Info-bank-page';
import ValidationCardPage from './page/Validation-card-page/validation-card-page'
import FormCreditCard from './utils/credit-card/Card';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  return (
      <Router>
        <PageLayout>
          <Routes>
           <Route path ='/' exact element={HomePage}/>
           <Route path ='/bank-partners' exact element={BankPartnersPage}/>
           <Route path ='/o-nas' exact element={InfoBankPage}/>
           <Route path ='/validations' exact element={ValidationCardPage}/>
          </Routes>
        </PageLayout>
      </Router>
  );
}

export default App;
