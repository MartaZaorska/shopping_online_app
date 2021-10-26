import { FC } from 'react';

const Newsletter: FC = () => {
  return (
    <section className="newsletter">
      <form>
        <label htmlFor="email">Sign up for <span>newsletter</span></label>
        <input type="email" id="email" placeholder="E-mail" />
      </form>
    </section>
  )
}

export default Newsletter;