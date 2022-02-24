import React from "react";
import "./home-page.scss";
import webIcon from "../../utils/icon/1f7c4fa02806385f69528d6d04b00dff.png";
import mobileIcon from "../../utils/icon/552cdc5b8d4e1411a6fff384450f79dc.png";
import Security from "../../utils/icon/fdb8b04b137be00e456eec72d145734c.png";



export function НomePage () {
    return (
        <div className="Home-page__style">
          <section className="hello-section__one">
            <h1> Луший  банк по всему  Zimbambava</h1>
            <p>У нас более 10000 клиентов</p>
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
          <section className="hello-section__avto">
          <h1> Купить супер-кар?</h1>
        
          </section>
        </div>
       )

 }

 export default НomePage ()