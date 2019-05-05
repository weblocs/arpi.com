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
              allWordpressPost(
                sort:{
                    fields:menu_order
                    order:ASC
                }
                ) {
                edges {
                  node {
                    title
                    slug
                    content
                    excerpt
                    acf {
                        text
                        gradient
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
            render={({ state, fullpageApi }) => {
              return (
                <div>
                <ReactFullpage.Wrapper>
                    {data.allWordpressPost.edges.map((edge) => 
                        <div className="section" style={{backgroundImage: edge.node.acf.gradient}}>
                            <Container>
                                <img width="200" src={edge.node.acf.logo.source_url} />
                                <p>{edge.node.acf.text}</p>
                                <div onClick={() => fullpageApi.moveSectionDown()}>
                                    Next
                                </div>
                                
                            </Container>
                        </div>
                    )}
                    
                </ReactFullpage.Wrapper>
                <style jsx>{`
                #fp-nav.fp-right {
                left: 18px;
                }
            `}</style>
            </div>
              );
            }}
          />
            
          )}
        />
    )
  }
}

export default IndexPage