import Image from "next/image";
import Layout from "../components/layout";
import Bio from "../components/bio";
import utilStyles from "../styles/utils.module.css";

export default function AboutPage() {
  return (
    <Layout>
      <section>
        <h1>About Me</h1>
        <div className={utilStyles.floatRight}>
          <Image
            priority
            src="/images/profile.jpg"
            className={utilStyles.borderCircle}
            height={144}
            width={144}
            alt={"jamie"}
          />
        </div>
      </section>
      <Bio />
    </Layout>
  );
}
