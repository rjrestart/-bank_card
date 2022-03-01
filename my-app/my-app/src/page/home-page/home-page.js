import React from "react";
import "./home-page.scss";
import FinSystem  from "../../img/finSystem/png-transparent-credit-card-american-express-visa-logo-payment-credit-card-payment-logo-internet-removebg-preview.png";
import ZimMap from "../../img/zimbabwe-map.png";
import Planet from "../../img/3IsN.gif";
import webIcon from "../../utils/icon/1f7c4fa02806385f69528d6d04b00dff.png";
import mobileIcon from "../../utils/icon/552cdc5b8d4e1411a6fff384450f79dc.png";
import Security from "../../utils/icon/fdb8b04b137be00e456eec72d145734c.png";
import Ziguli from "../../img/auto/17.png";
import Yaz from "../../img/auto/uaz_PNG23.png";
import Volvo from "../../img/auto/volvo-740-760.png";
import AfricBank from "../../img/bank/682-6828095_file-africanbanklogo-african-bank-hd-png-download-removebg-preview.png";
import PeryBank from "../../img/bank/logo_bank_per_bbva-removebg-preview.png";
import EgyptBank from "../../img/bank/png-clipart-national-bank-of-egypt-iso-9362-commercial-bank-egypt-text-egypt-thumbnail-removebg-preview.png";
import NcbBank from "../../img/bank/png-clipart-national-commercial-bank-finance-financial-services-bank-national-commercial-bank-bank-thumbnail-removebg-preview.png";
import IngBank from "../../img/bank/png-transparent-ing-group-logo-bank-business-bank-text-orange-investment-removebg-preview.png";
import SoutAfricaBank from "../../img/bank/png-transparent-south-african-reserve-bank-central-bank-payments-association-of-south-africa-pasa-finance-bank-text-logo-bank-thumbnail-removebg-preview.png";

import { Link } from "react-router-dom";

export function НomePage () {
    return (
        <div className="Home-page__style">
          <section className="hello-section__one">
            <div className="hello-section"> 
              <h1> Луший  банк по всему  Zimbambava</h1>
              <p>У нас более 10000 клиентов</p>
              <img src={FinSystem}></img>
             </div>
            <img src={ZimMap}></img>
          </section>
          <section className="home-page__Achievements"> 
            <div className="home-page__Achievements-card">  
             <img src={webIcon}></img>
             <p>Наш сайт доступен в интернете!</p>
            </div>
            <div className="home-page__Achievements-card"> 
             <img src={mobileIcon}></img>
             <p>У нас есть мобильный банкинг</p>
            </div>
            <div className="home-page__Achievements-card"> 
             <img src={Security}></img>
             <p>Мы вырубаем электричество каждый час! </p>
            </div>
          </section>
           <h2 className="auto-section-title"> Выгодное кредитование на автомобили*</h2>
          <section className="home-page__Achievements-auto"> 
            <div className="home-page__Achievements-card-auto">  
             <img src={Ziguli}></img>
             <p>Спортивный автомобиль ВАЗ 2120</p>
            </div>
            <div className="home-page__Achievements-card-auto"> 
             <img src={Yaz}></img>
             <p>Семейный  автомобиль YAZ</p>
            </div>
            <div className="home-page__Achievements-card-auto"> 
             <img src={Volvo}></img>
             <p>Городской автомобиль Volvo 740</p>
            </div>
          </section>
           <h2 className="auto-section-title">Банки-партнёры</h2>
          <section className="home-page__Achievements-bank"> 
            <div className="home-page__Achievements-card-auto">  
             <img src={AfricBank}></img>
            </div>
            <div className="home-page__Achievements-card-bank"> 
             <img src={IngBank}></img>
            </div>
            <div className="home-page__Achievements-card-bank"> 
             <img src={PeryBank}></img>
            </div>
            <div className="home-page__Achievements-card-bank"> 
             <img src={EgyptBank}></img>
            </div>
            <div className="home-page__Achievements-card-bank"> 
             <img src={NcbBank}></img>
            </div>
            <div className="home-page__Achievements-card-bank"> 
             <img src={SoutAfricaBank}></img>
            </div>
          </section>
           <h2 className="auto-section-title">
             Международные переводы по всему миру
           </h2>
          <section className="home-page__Achievements-planet">
            <div className="home-page__Achievements-planet-info">
              <ul className="home-page__planet-bank-info">
                <li>Наш банк ежедневно производит более 10 переводов по всему миру.</li>
                <li>Коммиссия составляет всего 34% от суммы.</li>
                <li>Мы гарантируем  сохранность средств.</li>
                <li>Сотрудники нашего банка делают свою работу профессионально и качественно.</li> 
              </ul>
             <img src={Planet}></img>
            </div>
          </section>
        </div>
       )

 }

 export default НomePage ()