import { FC } from 'react';

const Footer: FC = () => {
  return (
    <footer className="footer">
      <section className="stripe">
        <p>&copy; Created by <a href="https://martazaorska.github.io/portfolio/" aria-label="Link to my portfolio" target="_blank" rel="noreferrer">Marta Zaorska</a> {new Date().getFullYear()}</p>
      </section>
    </footer>
  )
}

export default Footer;