import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { Link } from 'react-router-dom';


const Home = () => {
    return (
      <main className="home">
        <section className="home__row home__row--three">
          <div className="home__item">¡Hola equipo en Fox Ordering!</div>
          <div className="home__item">Diana Gómez</div>
          <div className="home__item"> 
            <div className="home__socials">
              <a
                href="https://github.com/dialgoav"
                target="_blank"
                aria-label="GitHub"
                className="home__icon"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
                        <a
                            href="https://www.linkedin.com/in/diana-gomez-avendano/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LinkedIn"
                            className="home__icon"
                        >
                        <FontAwesomeIcon icon={faLinkedin} />
                        </a>
                        <a
                            href="https://x.com/dialgoav9"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Twitter"
                            className="home__icon"
                        >
                        <FontAwesomeIcon icon={faTwitter} />
                        </a>
                </div>            
          </div>
        </section>
        <section className="home__row home__row--two">
          <Link to="/movies" className="home__item">
            Catálogo de películas
          </Link>
          <Link to="/words" className="home__item">
            El removedor de vocales
          </Link>
        </section>
      </main>
    );
}

export default Home