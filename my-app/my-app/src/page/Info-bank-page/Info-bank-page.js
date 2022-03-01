import React from "react";
import './Info-bank-page.scss'

export function InfoPage () {
    return (
        <div className="Info-page__style">
          <section className="Info-page__Achievements"> 
           <h1> Новости Bank of Zimbambava </h1>
           <h2>Уровень Инфляции</h2>
            <div className="Info-page__Achievements-card">  
              <img  className="Inflaciya"src="https://img.take-profit.org/graphs/indicators/cpi-housing-utilities/cpi-housing-utilities-zimbabwe.png"/>
              <p>Всё под контролем!</p>
            </div>
            <div className="Info-page__Achievements-card"> 
              <h3>Bank of Zimbambava продолжил тренд на повышение ключевой ставки</h3>
              <p>С учетом растущих инфляционных ожиданий баланс рисков для инфляции значимо смещен в сторону проинфляционных. Это может привести к более значительному и продолжительному отклонению инфляции вверх от цели. Проводимая Bankом of Zimbambava денежно-кредитная политика направлена на ограничение этого риска и возвращение инфляции к 234%», — отмечается в релизе...</p>
            </div>
            <div className="Info-page__Achievements-card"> 
              <h3>Отрицательный процент: кто в Zimbambava выигрывает от него, и кто проигрывает?</h3>
              <p>Отрицательные процентные ставки, введенные Bank of Zimbambava уже пять лет назад, оказывают все более весомое воздействие на социально-экономическое положение страны. Несмотря на всю критику в свой адрес, банк не хочет отменять это решение, считая его эффективным и необходимым инструментом противодействия чрезмерному удорожанию Zimbambinskogo pesso...</p>
            </div>
            <div className="Info-page__Achievements-card"> 
              <h3>Bank of Zimbambava пріобрел более 3 слитков золата у SaydiDelEmemBank</h3>
              <p>Таким образом золотовалютные резервы страны выросли на 128%, при этом ...</p>
            </div>
          </section>
        </div>
       )
 }

 export default InfoPage ()