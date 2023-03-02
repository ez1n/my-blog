import Link from "next/link";
import React from "react";
import Logo from "../Logo/Logo";
import styles from "./MainNavigation.module.css";

export default function MainNavigation() {
  return (
    <header>
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
