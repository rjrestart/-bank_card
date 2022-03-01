import React from "react";
import { css } from "aphrodite/no-important";
import styles from "./CardType.styles";

const CardType = props => {
  const logos = {
    visa:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/2560px-Visa_Inc._logo.svg.png",
    mastercard:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/MasterCard_Logo.svg/2560px-MasterCard_Logo.svg.png",
    maestro: 
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Maestro_logo.svg/1280px-Maestro_logo.svg.png",
    discover: 
      "https://www.freepnglogos.com/uploads/discover-png-logo/credit-cards-discover-png-logo-4.png",
    "american-express": 
     "https://upload.wikimedia.org/wikipedia/commons/b/bf/American_Express_Logo.svg",
    "diners-club" : 
     "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Diners_Club_Logo3.svg/1945px-Diners_Club_Logo3.svg.png",
  };
  return (
    <div>
      {logos[props.type] ? (
        <img src={logos[props.type]} className={css(styles.logo)} />
      ) : (
        <span className={css(styles.placeholder)}>{props.type}</span>
      )}
    </div>
  );
};

export default CardType;
