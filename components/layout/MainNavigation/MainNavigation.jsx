import styles from "./MainNavigation.module.css";

import Link from "next/link";
import React from "react";
import Logo from "../Logo/Logo";

export default function MainNavigation() {
  return (
    <header className={styles.header}>
      <Link href='/'>
        <Logo />
      </Link>

      <nav>
        <ul>
          <li>
            <Link href='/posts'>Posts</Link>
          </li>
          <li>
            <Link href='/contact'>Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
