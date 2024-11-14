import React from 'react';
import styles from './Navbar.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
function navbar() {
  console.log(styles.navnar)
  return (

    <div className={styles.navbar}>
    <h2>Better</h2>
    <div className={styles.navlink}>
      <a>Buy</a>
      <a>Refinance</a>
      <a>HELOC</a>
      <a>Rates</a>
      <a>Better+</a>
    </div>
    <div className={styles.iconsignin}>
      <div className={styles.phone}>
        <FontAwesomeIcon icon={faPhone} />
      </div>
      <div className={styles.signin}>Sinin</div>
    </div>
  </div>
  )
}

export default navbar