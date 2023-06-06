import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import appLogo from "../../logos/appLogo.svg";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.logo}>
        <Link to="/" className={styles.Link}>
          <img src={appLogo} alt="" />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
