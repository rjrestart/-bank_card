import React from "react";
import "./bank-partners-page.scss";
import AfricBank from "../../img/bank/682-6828095_file-africanbanklogo-african-bank-hd-png-download-removebg-preview.png";
import PeryBank from "../../img/bank/logo_bank_per_bbva-removebg-preview.png";
import EgyptBank from "../../img/bank/png-clipart-national-bank-of-egypt-iso-9362-commercial-bank-egypt-text-egypt-thumbnail-removebg-preview.png";
import NcbBank from "../../img/bank/png-clipart-national-commercial-bank-finance-financial-services-bank-national-commercial-bank-bank-thumbnail-removebg-preview.png";
import IngBank from "../../img/bank/png-transparent-ing-group-logo-bank-business-bank-text-orange-investment-removebg-preview.png";
import SoutAfricaBank from "../../img/bank/png-transparent-south-african-reserve-bank-central-bank-payments-association-of-south-africa-pasa-finance-bank-text-logo-bank-thumbnail-removebg-preview.png";

import { Link } from "react-router-dom";

export function BankPartnersPage () {
    return (
        <div className="BankPartnersPage__style">
           <h2 className="BankPartnersPage__title">Банки-партнёры</h2>
          <section className="BankPartnersPage__block"> 
            <div className="BankPartners_one">  
             <img src={AfricBank}></img>
            </div>
            <div className="BankPartners_five">
             <img src={NcbBank}></img>
            </div>
            <div className="BankPartners_two"> 
             <img src={IngBank}></img>
            </div>
            <div className="BankPartners_four"> 
             <img src={EgyptBank}></img>
            </div>
            <div className="BankPartners_three"> 
             <img src={PeryBank}></img>
            </div>
            <div className="BankPartners_six"> 
             <img src={SoutAfricaBank}></img>
            </div>
          </section>
        </div>
       )

 }

 export default BankPartnersPage ()