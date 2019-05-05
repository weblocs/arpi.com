import React, { Component } from "react";
import { graphql, StaticQuery, Link } from "gatsby";
import { Formik } from "formik";

import Container from "../components/Container";

class IndexPage extends Component {
  render() {
    return (
      <StaticQuery
        query={graphql`
          query allContactPageData {
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
              <Formik
                
                initialValues={{ email: "", password: "" }}
                validate={values => {
                  let errors = {};
                  if (!values.email) {
                    errors.email = "Required";
                  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
                    errors.email = "Invalid email address";
                  }
                  return errors;
                }}
                onSubmit={(values, { setSubmitting }) => {
                  setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                  }, 400);
                }}
              >
                {({
                  values,
                  errors,
                  touched,
                  handleChange,
                  handleBlur,
                  handleSubmit,
                  isSubmitting
                  /* and other goodies */
                }) => (
                  <form onSubmit={handleSubmit}
                  name="contact" method="POST" data-netlify="true">
                    <input
                      type="email"
                      name="email"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.email}
                    />
                    {errors.email && touched.email && errors.email}
                    <input
                      type="password"
                      name="password"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.password}
                    />
                    {errors.password && touched.password && errors.password}
                    <button type="submit" disabled={isSubmitting}>
                      Submit
                    </button>
                  </form>
                )}
              </Formik>

              <p>{data.allWordpressPage.edges[0].node.title}</p>
              <Link to={data.allWordpressPage.edges[0].node.acf.link}>
                {data.allWordpressPage.edges[0].node.acf.button}
              </Link>
            </Container>

            <style jsx>{`
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
