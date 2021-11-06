import { FC } from 'react';

const Newsletter: FC = () => {
  const submitHandler = (e: React.SyntheticEvent<HTMLFormElement>): void => {
    e.preventDefault()
    e.currentTarget.reset();
  }

  return (
    <section className="newsletter">
      <form onSubmit={submitHandler}>
        <label htmlFor="email">Sign up for <span>newsletter</span></label>
        <input type="email" id="email" placeholder="E-mail" />
      </form>
    </section>
  )
}

export default Newsletter;