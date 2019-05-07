import PropTypes from "prop-types";
import React from "react";
import { graphql, Link } from "gatsby";
import { ThemeContext } from "../layouts";
import Container from "../components/Container";
import Contact from "../components/Contact";
import Headline from "../components/Article/Headline";
import Seo from "../components/Seo";
import Arrow from "../images/svg-icons/arrow-right-gray.svg";

const ContactPage = props => {
  const {
    data: {
      site: {
        siteMetadata: { facebook }
      }
    }
  } = props;

  return (
    <React.Fragment>
      <ThemeContext.Consumer>
        {theme => (
          <div className="contactForm">
          <Container>
            <header>
              <h1>drop us a line</h1>
              <p>Describe briefly what kind of assistance can we provide</p>
            </header>
            <div className="resp-container">
                <iframe className="resp-iframe" src="https://arpistaffing.com/email/contact-form/"></iframe>
            </div>
            <div>
              <Link to="/">
                <div className="linkBox">
                  <div className="link" >Go back home</div> <Arrow /> 
                </div>
              </Link>

            </div>
            
            
          </Container>
          </div>
        )}
      </ThemeContext.Consumer>

      <Seo facebook={facebook} />
      <style jsx>{`
      h1 {
        font-size: 64px;
        line-height: 66px;
        letter-spacing: 0.03em;
        color: #434343;
        font-weight: 300;
        margin-bottom: 30px;
        margin-top: 50px;
      }
      p {
        font-size:34px;
        line-height: 40px;
        max-width: 470px;
        letter-spacing: 0.03em;
        opacity: 0.6;
        font-weight: 300;
        margin-bottom: 55px;
      }
      .linkBox {
        display: flex;
        align-items: center;
        transition: .2s;
        opacity: 0.6;
        margin-bottom: 50px;
        :hover {
          opacity: 1;
        }
      }
      .link {
        font-size: 14px;
        color: #434343;
        
    line-height: 20px;
    margin-bottom: -3px;
        font-weight: 700;
        transition: .2s;
        display: inline-block;
        margin-right: 15px;
        
      }
      .contactForm {
        min-height:100vh;
        display: flex;
        align-items: center;
        z-index: 1;
        position: relative;
        background: #fff;
      }
      .resp-container {
        position: relative;
        overflow: hidden;
        height: 600px;
    }
    .resp-iframe {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border: 0;
  }
  
      `}</style>
    </React.Fragment>
  );
};

ContactPage.propTypes = {
  data: PropTypes.object.isRequired
};

export default ContactPage;

//eslint-disable-next-line no-undef
export const query = graphql`
  query ContactQuery {
    site {
      siteMetadata {
        facebook {
          appId
        }
      }
    }
  }
`;
