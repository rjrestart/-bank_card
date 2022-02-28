import React from "react";
import { css } from "aphrodite/no-important";
import styles from "./CardValidationIndicator.styles";

const CardValidationIndicator = props => {
  return (
    <div className={css(styles.indicator)}>
      {props.isValid ? (
        <img
          className={css(styles.icon)}
          src="https://uploads.codesandbox.io/uploads/user/eaffd13b-dfde-4d93-a8f6-a88a34f5c314/cRS0-ios-checkmark.svg"
          alt="Valid Card!"
        />
      ) : (
        <img
          className={css(styles.icon)}
          src="https://uploads.codesandbox.io/uploads/user/eaffd13b-dfde-4d93-a8f6-a88a34f5c314/F3dT-ios-warning.svg"
          alt="Invalid Card!"
        />
      )}
    </div>
  );
};

export default CardValidationIndicator;