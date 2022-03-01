import React from "react";
import './credit-page.scss'

export function CreditPage () {
    return (
        <div className="Credit-page__style">
          <section className="Credit-page__Achievements"> 
            <div className="Credit-page__Achievements-card">  
              <h2>Используйте свою кредитную историю</h2>
              <p>Проанализируем вашу кредитную историю, при составлении заявки сделаем акцент на преимуществах</p>
              <img src="https://cdn-icons-png.flaticon.com/512/1802/1802328.png"/>
            </div>
            <div className="Credit-page__Achievements-card"> 
              <h2>Получайте кредит по выгодным ставкам</h2>
              <p>Поможем получить одобрение в нескольких банках, подберем лучшие условия кредитования</p>
              <img src="https://cdn-icons-png.flaticon.com/512/584/584052.png"/>
            </div>
            <div className="Credit-page__Achievements-card"> 
              <h2>Экономьте время на одобрении</h2>
              <p>Согласуем вашу заявку только с теми банками, которые готовы выделить вам денежные средства</p>
              <img src="https://cdn-icons-png.flaticon.com/512/1611/1611261.png"/>
            </div>
            <div className="Credit-page__Achievements-card"> 
              <h2>Оплачивайте по факту получения денег</h2>
              <p>Получаем вознаграждение после выполненной работы - когда вы получите желаемую сумму</p>
              <img src="https://cdn-icons-png.flaticon.com/512/438/438526.png"/>
            </div>
          </section>
        </div>
       )
 }

 export default CreditPage ()