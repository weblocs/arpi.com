import React, { Component } from "react"
import { graphql, StaticQuery, Link } from "gatsby"

import ReactFullpage from '@fullpage/react-fullpage';

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
                  <div className="section" style={{background: 'blue'}}>
                  <div>
                    <h1>{data.allWordpressPost.edges[0].node.title}</h1>
                    <h2>{data.allWordpressPost.edges[0].node.slug}</h2>
                    </div>
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
