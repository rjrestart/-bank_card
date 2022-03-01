import React, { Component } from "react";
import { BrowserRouter as Router,Routes,Route,Navigate } from 'react-router-dom';
import { css } from "aphrodite/no-important";
import cardValidator, { number } from "card-validator";
import styles from "./Card.styles";
import axios from "axios";
import {Redirect} from 'react-router-dom';

import PersonalAreaCard from "../../page/personal-area-card/personal-area-card"
import CardType from "./CardType";
import CardNumberField from "./CardNumberField";
import CardExpiryField from "./CardExpiryField";
import CardValidationIndicator from "./CardValidationIndicator";

class Card extends Component {
  constructor() {
    super();
    this.state = {
      number: "",
      type: "",
      expiry: "",
      potentiallyValid: true,
      valid: false
    };
  }

  handleExpiry = date => {
    this.setState(() => ({
      expiry: date
    }));
  };

 
  activatePost = () =>{ 
   
  let cartNumberValid = this.state.number.split(' ')
  let cardCodePost = cartNumberValid.join('');
   
  let requestOptions = {
  method: 'GET',
  redirect: 'follow',
  headers: {
    'apikey': 'uz37C1BoonXudkHhTErSn4o1bXlomUBV',
    'Access-Control-Allow-Origin' : '*',
  }
 };
    axios.get(`https://api.apilayer.com/bincheck/${cardCodePost}`, requestOptions) 
      .then(function (response) {
          if(response) { 
          // valid code "302596"
            alert("Данные верны!");
        <Navigate replace="/personal-area-card"/>
        }
      }
    )
        .catch(function (error) {
          alert("Номер карты не найден");
        })
      .then(function () {
      });  

  };

  validateCard = num => {
    const card = cardValidator.number(num);
    this.setState(() => ({
      number: num,
      type: card.card ? card.card.type : "",
      expiry: "",
      potentiallyValid: card.isPotentiallyValid,
      valid: card.isValid
    }));
  };

  render() {
    const classes = css(
      styles.card,
      this.state.type === "visa" && styles.isVisa,
      this.state.type === "mastercard" && styles.isMastercard,
      this.state.type === "american-express" && styles.isAmericanExrpess,
      this.state.type === "discover" && styles.isDiscover,
      this.state.type === "maestro" && styles.isMaestro,
      this.state.type === "diners club" &&  styles.isDinersClub
    );
    return (
      <>
      <div className={classes}>
        <CardValidationIndicator
          isMaybeValid={this.state.potentiallyValid}
          isValid={this.state.valid}
        />
        <div className={css(styles.cardRow)}>
          <div className={css(styles.chip)} />
          <CardType type={this.state.type} />
        </div>
        <div className={css(styles.cardRow)}>
          <CardNumberField
            number={this.state.number}
            onChange={this.validateCard}
          />
        </div>
        <div className={css(styles.cardRow)}>
          <CardExpiryField
            date={this.state.expiry}
            onChange={this.handleExpiry}
          />
        </div>
      </div>
      <button  className="Credit-card-button" onClick={this.activatePost}>
        Отправить
      </button>
      </>
    );
  }
}

export default Card;
