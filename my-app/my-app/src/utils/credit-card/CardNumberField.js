import React, { Component } from 'react'
import { css } from 'aphrodite/no-important'
import cardValidator from 'card-validator'
import styles from './CardNumberField.styles'

class CardNumberField extends Component {
  formatNumber = e => {
    const value = e.target.value
      .trim()
      .replace(/\D|[ ]/g, '')
      .substr(0, 16)
    const split = value.match(/^\d{4}|((?<=\d{4})\d{1,4})/g)
    if (split) {
      const formatted = split.join(' ')
      this.props.onChange(formatted)
    } else {
      this.props.onChange(value)
    }
    const card = cardValidator.number(value)
    if (card.card) {
      console.log(card.card)
    }
  }
  render() {
    return (
      <div className={css(styles.wrapper)}>
        <input
          className={css(styles.input)}
          type="text"
          value={this.props.number}
          onChange={this.formatNumber}
        />
      </div>
    )
  }
}

export default CardNumberField
