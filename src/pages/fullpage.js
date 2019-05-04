import React, { Component } from "react"
import { graphql, StaticQuery, Link } from "gatsby"

import ReactFullpage from '@fullpage/react-fullpage';
import Image from "gatsby-image"

import Container from "../components/Container"


class IndexPage extends Component {
  render() {
    return (
        <StaticQuery
          query={graphql`
            query allFullPageData {
              allWordpressPost {
                edges {
                  node {
                    title
                    slug
                    content
                    excerpt
                    acf {
                        text
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
            render={({ state, fullpageApi }) => {
              return (
                <ReactFullpage.Wrapper>
                  <div className="section" style={{backgroundImage: 'linear-gradient(-90deg, red, yellow)'}}>
                    <Container>
                        <img width="200" src={data.allWordpressPost.edges[0].node.acf.logo.source_url} />
                        <p>{data.allWordpressPost.edges[0].node.acf.text}</p>
                        <div onClick={() => fullpageApi.moveSectionDown()}>
                            Next
                        </div>
                    </Container>
                  </div>
                  <div className="section">
                    <p>Section 2</p>
                  </div>
                </ReactFullpage.Wrapper>
              );
            }}
          />
            
          )}
        />
    )
  }
}

export default IndexPage