import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";

const name = "Jamie Danielson";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <div className={utilStyles.homeContainer}>
        <section className={utilStyles.homeBlurb}>
          <h1 className={utilStyles.heading2Xl}>{name}</h1>
          <p className={`${utilStyles.headingMd}`}>
            softwareEngineer
            <br />
            catLover
            <br />
            giggleMonster
          </p>
        </section>
      </div>
    </Layout>
  );
}
