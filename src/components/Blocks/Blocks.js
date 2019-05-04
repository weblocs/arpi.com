import React from "react";
import { Link } from "gatsby";
import PropTypes from "prop-types";

const Hero = props => {
  const { scrollToContent, backgrounds, theme } = props;

  return (
    <React.Fragment>
      <section className="blocks">
        <div className="row">
            <div className="column">
                <h3>O nas</h3>
                <p>Jesteśmy pionierami innowacyjnej edukacji i wiemy, że codzienność nie jest nudna! 
                Celem naszej pracy, jest pokazanie dzieciom, że nauka nie jest nudna, a wręcz przeciwnie - fascynująca.</p>
                <div>
                <Link className="button" to="/about">
                    Dowiedź się więcej
                </Link>
                </div>
            </div>
            <div className="column">
                <h3>Dlaczego my</h3>
                <p>Dzięki naszym metodykom stworzyliśmy unikatowy program edukacyjny.
                    Jeteśmy najszybciej rozwijającą się szkołą Minecrafta w Polsce!</p>
                <Link className="button" to="/about">
                    Poznaj szczegóły
                </Link>
            </div>
            <div className="column">
                <h3>Co oferujemy</h3>
                <p>Prowadzimy szkolenia, zajmujemy się administracją, metodyką oraz marketingiem.
                    Przeczytaj więcej o szczegółach naszej oferty.
                </p>
                <Link className="button" to="/about">
                    Nasza oferta
                </Link>
            </div>
            <div className="column">
                <h3>Kontakt</h3>
                <p>Jesteś gotowy, aby rozpocząć swój biznes. Moze chcesz zadać nam więcej pytań.
                    Z chęcią na nie odpowiemy. Skontaktuj się z nami.
                </p>
                <Link className="button" to="/about">
                    Skantakuj się z nami
                </Link>
            </div>
        </div>
      </section>

      {/* --- STYLES --- */}
      <style jsx>{`
      .blocks {
          padding: 100px 0;
      }
        .row {
            display: flex;
            justify-content: center;
        }
        .column {
            max-width: 250px;
            margin: 0 30px;

            h3 {
                color: #005495;
                margin-bottom: 21px;
                font-size: 16px;
                font-weight: 600;
                text-transform: none;
                letter-spacing: 0.12em;
            }

            p {
                color: #777;
                font-size: 14px;
                font-weight: 300;
                line-height: 1.86;
            }

            
        }
      `}</style>
    </React.Fragment>
  );
};

Hero.propTypes = {
};

export default Hero;
