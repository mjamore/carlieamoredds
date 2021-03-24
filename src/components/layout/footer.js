import * as React from 'react';
import * as styles from './footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footerContainer}>
      <a href='https://www.facebook.com/carlie.amore' target='_blank' rel='noreferrer' aria-label="Facebook link to Carlie Amore\'s profile page">
        <i className={'fa fa-facebook'}></i>
      </a>
      <a href='https://twitter.com/hopinmycarl' target='_blank' rel='noreferrer' aria-label="Twitter link to Carlie Amore\'s profile page">
        <i className={'fa fa-twitter'}></i>
      </a>
      <a href='https://www.instagram.com/' target='_blank' rel='noreferrer' aria-label="Instagram link to Carlie Amore\'s profile page">
        <i className={'fa fa-instagram'}></i>
      </a>
      <a href='https://www.snapchat.com/' target='_blank' rel='noreferrer' aria-label="Snapchat link to Carlie Amore\'s profile page">
        <i className={'fa fa-snapchat'}></i>
      </a>
      <a href='https://www.linkedin.com/' target='_blank' rel='noreferrer' aria-label="LinkedIn link to Carlie Amore\'s profile page">
        <i className={'fa fa-linkedin'}></i>
      </a>
      <p className={styles.copyrightStatement}>© 2021 Carlie Amore, DDS | All Rights Reserved.</p>
    </footer>
  )
}

export default Footer;