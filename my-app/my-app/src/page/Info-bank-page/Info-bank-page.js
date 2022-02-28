import React from "react";
import "./Info-bank-page.scss";
import Director from "../../img/Director/i.jpeg"
import Klacsa from "../../img/Director/58b297db2d27015a79a13031-removebg-preview.png"
import Zam from "../../img/Director/43db22a626e0a64dbc8a2cf0d5d03cce.jpg"

export function InfoBankPage () {
    return (
        <div className="InfoBankPage__style">
           <h2 className="InfoBankPage__title">О нас</h2>
          <section className="InfoBankPage__block"> 
            <div className="InfoBankPage_director"> 
              <img src={Director}></img>
                <div className="InfoBankPage_info">
                 <h2> Хадсон Ниптун </h2>
                   <img src={Klacsa}></img>
                   <ul> 
                    <li>Генеральный директор Bank of Zimbambava</li> 
                    <li>Опыт работы более 30 лет</li> 
                    <li>Телефон +263-2222-12312-2</li>
                  </ul>
                </div>
            </div>
            <div className="InfoBankPage_zam"> 
              <img src={Zam}></img>
                <div className="InfoBankPage_info">
                 <h2> Этуэлл Загребельный </h2>
                   <img src={Klacsa}></img>
                  <ul> 
                    <li>Финансовый директор Bank of Zimbambava</li> 
                    <li>Опыт работы более 5 лет</li> 
                    <li>Телефон +263-2212-12312-2</li>
                  </ul>
                </div>
            </div>
          </section>
        </div>
       )

 }

 export default InfoBankPage ()