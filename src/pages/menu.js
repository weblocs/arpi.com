import React, { Component } from "react";
import { graphql, StaticQuery, Link } from "gatsby";

import Arrow from "../images/svg-icons/arrow-right-gray.svg";
import Container from "../components/Container";
import Hamburger from "../components/Menu/Hamburger";

class IndexPage extends Component {
  render() {
    return (
      <StaticQuery
        query={graphql`
          query allMenuPageData {
            allWordpressPage(sort: { fields: menu_order, order: ASC }) {
              edges {
                node {
                  title
                  slug
                  acf {
                    button
                    link
                  }
                }
              }
            }
          }
        `}
        render={data => (
          <div className="mainSection">
            
            <Container>
              <div className="mobileMenuBox">
                <div className="mobileMenuItem">Browser services</div>
                <Link className="mobileMenuItem" to="/contact">
                  <div className="mobileMenuItem">Contact</div>
                </Link>
                <div className="mobileMenuItem">Languages</div>
              </div>
            </Container>

            <style jsx>{`
              .mainSection {
                height: 100vh;
                display: flex;
                align-items: center;

                .mobileMenuBox {
                  text-align: right;
                  .mobileMenuItem {
                    color: #434343 !important;
                    cursor: pointer;
                    font-size: 28px;
                    font-weight: 300;
                    line-height: 36px !important;
                    margin-bottom: 20px;
                    line-height: 0.03em;
                    transition: .2s;
                    opacity: 0.6;
                    :hover {
                      opacity: 1;
                    }
                  }
                }
              }
            `}</style>
          </div>
        )}
      />
    );
  }
}

export default IndexPage;
