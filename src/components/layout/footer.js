import * as React from 'react';
import FooterNavigation from './footerNavigation';
import ContactForm from '../contactForm';

const Footer = () => (
  <footer className='bg-aliceblue flex flex-col items-stretch justify-around md:flex-row md:items-center py-12 px-5 shadow-container text-center'>
    <FooterNavigation />
    <div className='md:order-none my-12 order-3 self-end'>
      <a href='https://www.facebook.com/carlie.amore' target='_blank' rel='noreferrer' aria-label="Facebook link to Carlie Amore\'s profile page">
        <i className='fa fa-facebook' />
      </a>
      <a href='https://twitter.com/hopinmycarl' target='_blank' rel='noreferrer' aria-label="Twitter link to Carlie Amore\'s profile page">
        <i className='fa fa-twitter' />
      </a>
      <a href='https://www.instagram.com/' target='_blank' rel='noreferrer' aria-label="Instagram link to Carlie Amore\'s profile page">
        <i className='fa fa-instagram' />
      </a>
      <a href='https://www.snapchat.com/' target='_blank' rel='noreferrer' aria-label="Snapchat link to Carlie Amore\'s profile page">
        <i className='fa fa-snapchat' />
      </a>
      <a href='https://www.linkedin.com/' target='_blank' rel='noreferrer' aria-label="LinkedIn link to Carlie Amore\'s profile page">
        <i className='fa fa-linkedin' />
      </a>
      <p className='mt-5'>© 2021 Carlie Amore, DDS | All Rights Reserved.</p>
    </div>
    <ContactForm />
  </footer>
);

export default Footer;