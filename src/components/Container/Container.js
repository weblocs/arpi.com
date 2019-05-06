/**
 * Containre layout component
 */

import React from "react"
import PropTypes from "prop-types"
import styles from "./Container.module.scss"

const Container = ({ children }) => (
    <div className={styles.containerBox}>
      <section className={styles.container}>
        {children}
      </section>
    </div>
)

Container.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Container
