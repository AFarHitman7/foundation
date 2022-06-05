import Head from "next/head";
import Image from "next/image";
import Footer from "../components/Footer/Footer";
import Input from "../components/Input/Input";
import Navbar from "../components/Navbar/Navbar";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Foundation Program</title>
        <meta
          name="description"
          content="Enter you Id and see all the badges you have acquiured in this program"
        />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main className={styles.main}>
        <Navbar />
        <Input />
        <Footer />
      </main>
    </div>
  );
}
