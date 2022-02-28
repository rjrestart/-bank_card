import React from "react";
import Card from "../../utils/credit-card/Card"
import "./validation-card-page.scss"


export function ValidationCardPage() {
    return (
        <div className="CreditCardPage">
            <h2>Авторизируйтесь</h2>
            <div className="Credit-card"> 
             <Card/>
            </div>
            <p className="CreditCardPage_info">
               В данной Политике обработки персональных данных мы информируем Вас о порядке обработки Ваших персональных данных при использовании нашего веб-сайта Bank of Zimbambava, далее — «Сайт».
               Мы обязуемся обеспечить конфиденциальность полученных от Вас персональных данных для целей, указанных в настоящей Политике обработки персональных данных, а также безопасность при их обработке в соответствии с требованиями Законодательства Zimbambava. 
            </p>
        </div>
       )
 }
 export default ValidationCardPage()
