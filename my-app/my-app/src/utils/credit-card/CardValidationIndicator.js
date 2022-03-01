import React from "react";
import { css } from "aphrodite/no-important";
import styles from "./CardValidationIndicator.styles";

const CardValidationIndicator = props => {
  return (
    <div className={css(styles.indicator)}>
      {props.isValid ? (
        <img
          className={css(styles.icon)}
          src="https://free-png.ru/wp-content/uploads/2021/06/free-png.ru-39.png"
          alt="Valid Card!"
        />
      ) : (
        <img
          className={css(styles.icon)}
          src="https://w7.pngwing.com/pngs/258/656/png-transparent-delete-remove-cross-red-cancel-abort-error-red-cross-thumbnail.png"
          alt="Invalid Card!"
        />
      )}
    </div>
  );
};

export default CardValidationIndicator;