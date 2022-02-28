import React, { Component } from "react";
import { css } from "aphrodite/no-important";
import styles from "./CardExpiryField.styles";

class CardExpiryField extends Component {
  formatExpiry = e => {
    const value = e.target.value
      .trim()
      .replace(/\D|[ ]/g, "")
      .substr(0, 4);
    const split = value.match(/^\d{2}|((?<=\d{2})\d{1,2})/g);
    if (split) {
      const formatted = split.join("/");
      this.props.onChange(formatted);
    } else {
      this.props.onChange(value);
    }
  };
  render() {
    return (
      <div className={css(styles.wrapper)}>
        <input
          className={css(styles.inputMM)}
          type="text"
          placeholder="mm/yy"
          value={this.props.date}
          onChange={this.formatExpiry}
        />
      </div>
    );
  }
}

export default CardExpiryField;