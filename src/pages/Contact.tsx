import { FC } from 'react';

import { IoMail, IoPhonePortrait, IoLocationSharp } from 'react-icons/io5';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import Form from '../components/Form';
import Newsletter from '../components/Newsletter';

const Contact: FC = () => {
  return (
    <>
      <Newsletter />
      <section className="contact content">
        <div className="contact__wrapper">
          <header>
            <h3>Contact Us</h3>
            <p>Any question or remarks? Just write us a message!</p>
          </header>
          <section className="contact__content">
            <address className="address">
              <p><IoPhonePortrait className="icon" /> +0123 4567 8910</p>
              <p><IoMail className="icon" /> maquillage@example.com</p>
              <p><IoLocationSharp className="icon" /> New York, USA</p>
            </address>
            <section className="social-media">
              <h4>Follow Us On:</h4>
              <div className="social-media__content">
                <a href="https://facebook.com/"  rel="noreferrer" target="_blank"><FaFacebookF className="icon" /></a>
                <a href="https://www.instagram.com/"  rel="noreferrer" target="_blank"><FaInstagram className="icon" /></a>
                <a href="https://twitter.com/"  rel="noreferrer" target="_blank"><FaTwitter className="icon" /></a>
              </div>
            </section>
          </section>
        </div>
        <Form />
      </section>
    </>
  )
}

export default Contact;
