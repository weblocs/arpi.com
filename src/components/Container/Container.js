/**
 * Containre layout component
 */

import React from "react"
import PropTypes from "prop-types"
import styles from "./container.module.scss"

const Container = ({ children }) => (
  
      <section className={styles.container}>
        {children}
      </section>
)

Container.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Container
