import React from "react";
import classes from "./Header.module.css"

function Header() {
  return ( 
    <div className={classes.Header}>
      <div className={classes.hero}>
      <h1>Ищи работу/заказывай услугу через</h1>
      <button>Найти работу</button>
      <button>Заказать</button>
      </div>
      <div className={classes.background}>
       
      </div>
    </div>
   );
}

export default Header;