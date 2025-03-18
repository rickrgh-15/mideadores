import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import styles from './Navbar.module.css'

import React from 'react'

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <ul>
        <li className={styles.title}>Mideadores</li>

        <li><Link to="/Login">Login</Link></li>
        <li><Link to="/Signup">Signup</Link></li>
      </ul>
    </nav>
  )
}
