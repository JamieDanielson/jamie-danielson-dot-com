import Head from "next/head";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import Nav from "./nav";
import Social from "./social";

export const siteTitle = "Jamie Danielson";

export default function Layout({ children, home, post }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="favicon.ico" />
        <meta
          name="description"
          content="I'm Jamie Danielson and sometimes I write about things."
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="og:type" content="website" />
        <meta name="og:url" content="https://jamiedanielson.com" />
        <meta
          property="og:image"
          content="https://jamiedanielson.com/images/profile.jpg"
        />
      </Head>
      <header className={styles.header}>
        {/* don't show name twice on homepage */}
        {!home && (
          <h2 className={utilStyles.headingLg}>
            <Link href="/">
              <a className={utilStyles.colorInherit}>Jamie Danielson</a>
            </Link>
          </h2>
        )}
        <Nav />
      </header>
      <main>{children}</main>
      {/* only back to home for non-blog pages */}
      {!home && !post && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
      {/* back to blog for blog post pages */}
      {post && (
        <div className={styles.backToBlog}>
          <Link href="/blog">
            <a>← Back to blog</a>
          </Link>
        </div>
      )}
      <footer>
        <Social />
      </footer>
    </div>
  );
}
