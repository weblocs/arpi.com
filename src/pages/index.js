import React, { Component } from "react";
import { graphql, StaticQuery, Link } from "gatsby";

import Arrow from "../images/svg-icons/arrow-right-gray.svg";
import Container from "../components/Container";

import ColorBar from "../images/svg-icons/colors.svg"

class IndexPage extends Component {
  render() {
    return (
      <StaticQuery
        query={graphql`
          query allIndexPageData {
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
              <p>{data.allWordpressPage.edges[0].node.title}</p>
              
              <Link className="slideButton" to={data.allWordpressPage.edges[0].node.acf.link}>
                <div className="textGray">{data.allWordpressPage.edges[0].node.acf.button}</div> <Arrow /> 
              </Link>
            </Container>

            <div className="bottomColors">
              <ColorBar />
            </div>

            <style jsx>{`

            .bottomColors {
              position: fixed;
              bottom: 0;
              display: inherit;
              width: 100%;
              svg {
                width: 100%;
              }
            }
              .mainSection {
                height: 100vh;
                display: flex;
                align-items: center;
                
                
                p {
                  color: #434343;
                  line-height: 66px;
                  font-weight: 400;
                  font-size: 64px;
                  max-width: 673px;
                  letter-spacing: 0.045em;
                  margin-bottom: 40px;  
                  margin-top: 100px;
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
