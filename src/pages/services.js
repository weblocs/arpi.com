import React, { Component } from "react";
import { graphql, StaticQuery, Link } from "gatsby";

import ReactFullpage from "@fullpage/react-fullpage";
import Image from "gatsby-image";

import Container from "../components/Container";

import Arrow from "../images/svg-icons/arrow.svg";

class IndexPage extends Component {
  render() {
    return (
      <div>
        <div className="backHome">
                    <Container>
                    <Link to="/">
                      <div className="slideButton">
                      
                      <div>Go back home</div> <Arrow />
                      
                      </div>
                      </Link>
                    </Container>
                  </div>

                  
      
      <StaticQuery
        query={graphql`
          query allFullPageData {
            allWordpressPost(sort: { fields: menu_order, order: ASC }) {
              edges {
                node {
                  title
                  slug
                  content
                  excerpt
                  acf {
                    text
                    gradient
                    link
                    logo {
                      source_url
                    }
                  }
                }
              }
            }
          }
        `}
        render={data => (
          <ReactFullpage
            navigation
            anchors={[ data.allWordpressPost.edges[0].node.slug, data.allWordpressPost.edges[1].node.slug, data.allWordpressPost.edges[2].node.slug, data.allWordpressPost.edges[3].node.slug, data.allWordpressPost.edges[4].node.slug, data.allWordpressPost.edges[5].node.slug ]}
            render={({ state, fullpageApi }) => {
              return (
                <div>
                  
                  <ReactFullpage.Wrapper>
                    {data.allWordpressPost.edges.map(edge => (
                      <div
                        className="section fullpageSlide"
                        style={{ backgroundImage: edge.node.acf.gradient }}
                      >
                        <Container>
                          <div className="slideContent">
                            <div className="slideContentItem">
                              <img width="196" src={edge.node.acf.logo.source_url} />
                              <p>{edge.node.acf.text}</p>
                              <div
                                className="slideButton"
                                onClick={() => fullpageApi.moveSectionDown()}
                              >
                                <div>Next</div> <Arrow />
                              </div>
                            </div>
                            <div className="slideContentItem">
                              <div className="proceed">
                                <a href={edge.node.acf.link} target="_blank">
                                  <div className="proceedText">Proceed</div> <Arrow />
                                </a>
                              </div>
                            </div>
                          </div>

                        </Container>
                      </div>
                    ))}
                  </ReactFullpage.Wrapper>
                  

                  
                </div>
              );
            }}
          />
        )}
      />
      <style jsx>{`
      .slideContent {
        display: flex;
        align-items: center;
        .slideContentItem {
          width: 50%;
          
          .proceedText {
            font-size: 26px;
            color: #fff;
            
            
            display:inline-block;
            margin-right: 15px;
          }
          .proceed {
            opacity: 0.6;
            float: right;
            transition: .2s;
            :hover {
              opacity: 1;
            } 
          }
        }
      }
        
        
        
        .slideButton {
          display: flex;
          align-items: center;
          font-size: 14px;
          color: #fff;
          line-height: 41px;
          font-weight: 700;
          opacity: 0.6;
          letter-spacing: 0.03em;
          transition: .2s;
          cursor: pointer;
          :hover {
            opacity: 1;
          }
          div {
            margin-right: 15px;
          }
        }
        .fullpageSlide {
          p {
            color: #fff;
            opacity: 0.6;
            font-size: 34px;
            max-width: 543px;
            line-height: 40px;
            margin-top: 60px;
            margin-bottom: 40px;
            letter-spacing: 0.03em;
          }
        }
                  .backHome {
                      position: fixed;
                      top: 40px;
                      left: 0;
                      z-index: 3;
                      width: 100%;
                    }
                    `}</style>
      </div>
    );
  }
}

export default IndexPage;
