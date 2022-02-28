import React, { Component } from "react";
import { css } from "aphrodite/no-important";
import cardValidator from "card-validator";
import styles from "./Card.styles";
import axios from "axios";

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
  activateLasers = () =>{ 
   let validNumber = this.state.number
   axios.get('/....',{
      params: { 
        cardNumber: validNumber,
    }
   })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    })
    .then(function () {
      // always executed
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
      <button className="Credit-card-button" onClick={this.activateLasers}>
        Отправить
      </button>
      </>
    );
  }
}

export default Card;
