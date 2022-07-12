import React from "react";
import NewsPortal2 from "../NewsPortal2/NewsPortal2";
import classes from "./NewsPortal.module.css";


function NewsPortal() {
  return (
    <>
      <div className={classes.columns}>
        <div className={classes.main_column}>
          <h1>Новостной портал</h1>
          <div className={classes.columns}>
            <div className={classes.main_column1}>
              <a href="#">
                <h3>Hello world</h3>
                <img src="img" />
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora, nobis.</p>
              </a>
              <footer className={classes.footer_display}>
                <div>500</div>
                <div>11.07.22</div>
              </footer>
            </div>
            <div className={classes.main_column1}>
              <a href="#">
                <h3>Hello world</h3>
                <img src="img" />
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora, nobis.</p>
              </a>
              <footer className={classes.footer_display}>
                <div>500</div>
                <div>11.07.22</div>
              </footer>
            </div>
            <div className={classes.main_column1}>
              <a href="#">
                <h3>Hello world</h3>
                <img src="img" />
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora, nobis.</p>
              </a>
              <footer className={classes.footer_display}>
                <div>500</div>
                <div>11.07.22</div>
              </footer>
            </div>
          </div>
        </div>
        <div className={classes.column}>
          <input type="search" title="Поиск" placeholder="Поиск..." name="search" />
        </div>
      </div>



      <hr />



      <NewsPortal2 />
    </>
  );
}

export default NewsPortal;
