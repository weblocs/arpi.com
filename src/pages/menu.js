import React, { Component } from "react";
import { graphql, StaticQuery, Link } from "gatsby";

import Arrow from "../images/svg-icons/arrow-right-gray.svg";
import Container from "../components/Container";
import Socials from "../components/Menu/Socials";
import CollapseMobileItem from "../components/Menu/CollapseMobileItem";

class IndexPage extends Component {
  render() {
    this.items = [
      { label: "Browse services", 
      subitems: [ {text: 'Bemanning', link:'/services/#bemanning'}, {text: 'Regnskap', link:'/services/#regnskap'}, {text: 'Network', link:'/services/#network'}, {text: 'Staffing', link:'/services/#staffing'}, {text: 'Accounting', link: '/services/#accounting'}, {text:'Aviation', link:'/services/#aviation'} ] },
      
      // ...pages,
      { to: "/contact/", label: "Contact" },
      { label: "Languages", 
      subitems: [ {text: 'Polish', link:'/pl'}, {text: 'English', link: '/'}, {text:'Norwegian', link:'/nb'} ] },
      
    ];return (
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
              <div className="toTop">
                <Link to="/">
                  <Arrow />
                </Link>
              </div>

              <div className="mobileMenuBox">
              
                {this.items.map(item => (
                item.subitems ? 
                <CollapseMobileItem item={{ label: item.label, subitems: item.subitems }}  />
                : <Link className="mobileMenuItem" to="/contact">
                    <div className="mobileMenuItem">Contact</div>
                  </Link>
              ))}
              </div>

              <div className="toBottom">
                <Socials />
              </div>

            </Container>

            <style jsx>{`
            .toTop {
              position: fixed;
              top: 72px;
              right: 40px;
              @media(max-width:800px) {
                top: 60px;
              }
            }
            .toBottom {
              position: fixed;
              bottom: 40px;
              right: 40px;
            }
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
