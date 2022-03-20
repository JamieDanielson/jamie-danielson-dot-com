import utilStyles from "../styles/utils.module.css";
import Link from "next/link";

export default function Nav() {
  return (
    <nav className={utilStyles.nav}>
      <Link href="/blog">
        <a>Blog</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
      <Link href="/contact">
        <a>Contact</a>
      </Link>
    </nav>
  );
}
