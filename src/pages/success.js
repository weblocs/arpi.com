import React, { Component } from "react";
import { graphql, StaticQuery, Link } from "gatsby";

import Container from "../components/Container";

class IndexPage extends Component {
  render() {
    return (
      <StaticQuery
        query={graphql`
          query allSuccessPageData {
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
              <p>Thank you for your message</p>
              <Link to={data.allWordpressPage.edges[0].node.acf.link}>
                {data.allWordpressPage.edges[0].node.acf.button}
              </Link>
            </Container>

            <style jsx>{`
            p {
              font-size: 40px;
              @media(max-width: 830px) {
                font-size: 24px;
              }
            }

              .mainSection {
                height: 100vh;
                display: flex;
                align-items: center;
              }
            `}</style>
          </div>
        )}
      />
    );
  }
}

export default IndexPage;
