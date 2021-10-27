import { FC } from 'react';

const Form: FC = () => {
  return (
    <form className="form">
      <div className="form__box">
        <input type="text" placeholder="First Name" className="input__text" />
        <input type="text" placeholder="Last Name" className="input__text" />
      </div>
      <div className="form__box">
        <input type="email" placeholder="E-mail" className="input__email" />
        <input type="tel" placeholder="Telephone" className="input__tel" />
      </div>
      <input type="text" placeholder="Message" className="input__message" />
      <button type="submit" className="form__button">Send Message</button>
    </form>
  );
}

export default Form;