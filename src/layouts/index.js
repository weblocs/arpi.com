import "typeface-open-sans";
import FontFaceObserver from "fontfaceobserver";
import PropTypes from "prop-types";
import React from "react";
import { graphql, StaticQuery } from "gatsby";

import { getScreenWidth, timeoutThrottlerHandler } from "../utils/helpers";
import Footer from "../components/Footer/";
import Header from "../components/Header";
import Seo from "../components/Seo";
import Transition from "../components/transition"

import "../font/font.css";

export const ThemeContext = React.createContext(null);
export const ScreenWidthContext = React.createContext(0);
export const FontLoadedContext = React.createContext(false);

import themeObjectFromYaml from "../theme/theme.yaml";

class Layout extends React.Component {

  
  
  constructor() {
    super();

    this.state = {
      font400loaded: false,
      font600loaded: false,
      screenWidth: 0,
      headerMinimized: false,
      theme: themeObjectFromYaml
    };

    

    if (typeof window !== `undefined`) {
      this.loadFont("font400", "Roboto", 400);
      this.loadFont("font600", "Roboto", 600);
    }
  }

  timeouts = {};

  componentDidMount() {
    this.setState({
      screenWidth: getScreenWidth()
    });
    if (typeof window !== "undefined") {
      window.addEventListener("resize", this.resizeThrottler, false);
    }
  }

  resizeThrottler = () => {
    return timeoutThrottlerHandler(this.timeouts, "resize", 100, this.resizeHandler);
  };

  resizeHandler = () => {
    this.setState({ screenWidth: getScreenWidth() });
  };

  isHomePage = () => {
    if (this.props.location.pathname === "/") {
      return true;
    }

    return false;
  };

  loadFont = (name, family, weight) => {
    const font = new FontFaceObserver(family, {
      weight: weight
    });

    font.load(null, 10000).then(
      () => {
        console.log(`${name} is available`);
        this.setState({ [`${name}loaded`]: true });
      },
      () => {
        console.log(`${name} is not available`);
      }
    );
  };

  render() {
    
    return (
      <StaticQuery
        query={graphql`
          query LayoutQuery {
            pages: allMarkdownRemark(
              filter: { fileAbsolutePath: { regex: "//pages//" }, fields: { prefix: { regex: "/^\\d+$/" } } }
              sort: { fields: [fields___prefix], order: ASC }
            ) {
              edges {
                node {
                  fields {
                    slug
                    prefix
                  }
                  frontmatter {
                    title
                    menuTitle
                  }
                }
              }
            }
            footnote: markdownRemark(fileAbsolutePath: { regex: "/footnote/" }) {
              id
              html
            }
          }
        `}
        render={data => {
          const { children } = this.props;
          const {
            footnote: { html: footnoteHTML },
            pages: { edges: pages }
          } = data;

          return (
            <ThemeContext.Provider value={this.state.theme}>
              <FontLoadedContext.Provider value={this.state.font400loaded}>
                <ScreenWidthContext.Provider value={this.state.screenWidth}>
                  <React.Fragment>
                    <Header
                      path={this.props.location.pathname}
                      pages={pages}
                      theme={this.state.theme}
                    />
                    <Transition location={location}>{children}</Transition>
                    <main>{children}</main>
                    <Footer html={footnoteHTML} theme={this.state.theme} />

                    <Seo facebook={{
    title: 'ARPI Group',
    description: 'Outsourcing solutions for your business',
    siteUrl: 'https://arpi.com/',
    }} />

                    
                    {/* --- STYLES --- */}
                    <style jsx>{`
                      main {
                        min-height: 100vh;
                      }
                    `}</style>
                    <style jsx global>{`
                      html {
                        box-sizing: border-box;
                      }
                      *,
                      *:after,
                      *:before {
                        box-sizing: inherit;
                        margin: 0;
                        padding: 0;
                      }
                      body {
                        font-family: Geomanist, sans-serif;
                      }
                      h1,
                      h2,
                      h3 {
                        font-weight: ${this.state.font600loaded ? 600 : 400};
                        line-height: 1.1;
                        letter-spacing: -0.03em;
                        margin: 0;
                      }
                      h1 {
                        letter-spacing: -0.04em;
                      }
                      p {
                        margin: 0;
                      }
                      strong {
                        font-weight: ${this.state.font600loaded ? 600 : 400};
                      }
                      a {
                        text-decoration: none;
                        color: #666;
                      }
                      main {
                        width: auto;
                        display: block;
                      }
                      a.button {
                        background: #005495;
                        border: 1px solid #005495;
                        border-radius: 0;
                        text-transform: none;
                        opacity: 0.9;
                        padding: 13px 34px;
                        font-size: 13px;
                        color: #fff;
                        display: inline-block;
                        margin-top: 20px;
                        transition: .2s;

                        :hover {
                          border-color: #005495;
                          background: transparent;
                          color:  #005495;
                        }
                        
                    }

                    iframe {
                      border: 0;
                    }
                    @media(min-width: 1200px) {
                    #fp-nav.fp-right {
                      left: 40px;
                      width: 28px;
                    }
                    }
                    @media(max-width: 1199px) {
                      #fp-nav.fp-right {
                        right: 30px;
                        top: calc(100% - 115px);
                        width: 28px;
                      }
                    }

                    @media(max-width:800px) {
                      .logotype {
                        width: 100px;
                        position: absolute;
                        left: 40px;
                        top: 5px;
                      }
                    }


                    #fp-nav ul li a span {
                      background: #fff !important;
                      height: 8px !important;
                      width: 8px !important;
                      margin: -4px 0 0 -4px !important;
                      opacity: 0.3 !important;
                    }
                    #fp-nav ul li:hover a.active span, #fp-nav ul li a.active span, .fp-slidesNav ul li:hover a.active span, .fp-slidesNav ul li a.active span {
                      opacity: 1 !important;
                      height: 8px !important;
                      width: 8px !important;
                      margin: -4px 0 0 -4px !important;
                    }
                    .slideButton {
                      font-family: "geomanist-bold";
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
                      .textGray {
                        color: #434343;
                        margin-right: 15px;
                        display: inline-block;
                      }
                    }
                    @media(max-width:1024px) {
                      nav.menu {
                        top: 0;
                        background: transparent !important;
                        ul {
                          justify-content: flex-end !important;
                        }
                        ::after {
                          display: none;
                        }
                      }
                    }
                    @media(max-width:800px) {
                      nav.menu {
                        top: -570px;
                      }
                    }

                    `}</style>
                  </React.Fragment>
                </ScreenWidthContext.Provider>
              </FontLoadedContext.Provider>
            </ThemeContext.Provider>
          );
        }}
      />
    );
  }
}

Layout.propTypes = {
  children: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired
};

export default Layout;

//eslint-disable-next-line no-undef
/*
export const postQuery = graphql`
  query LayoutQuery {
    pages: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "//pages//" }, fields: { prefix: { regex: "/^\\d+$/" } } }
      sort: { fields: [fields___prefix], order: ASC }
    ) {
      edges {
        node {
          fields {
            slug
            prefix
          }
          frontmatter {
            title
            menuTitle
          }
        }
      }
    }
    footnote: markdownRemark(fileAbsolutePath: { regex: "/footnote/" }) {
      id
      html
    }
  }
`;

*/
