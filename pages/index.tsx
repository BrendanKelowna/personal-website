import type { NextPage } from "next";
import Head from "next/head";
import AboutMe from "../components/AboutMe";
import Contact from "../components/Contact";
import Education from "../components/Education";
import Employment from "../components/Employment";
import Header from "../components/Header";
import Objective from "../components/Objective";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import ToTop from "../components/ToTop";
import Training from "../components/Training";
import styles from "../styles/Home.module.css";
import { Container } from "@mui/material";

const Home: NextPage = () => {
  return (
    <div className={styles.page}>
      <Head>
        <title>Brendan Kelly</title>
        <meta
          name="Brendan Kelly - Personal Website"
          content="This website is a personal website made for and built by Brendan Kelly"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Container role="main" className={styles.main}>
        <AboutMe />
        <Objective />
        <Employment />
        <Education />
        <Training />
        <Skills />
        <Contact />
        <Projects />
      </Container>
      <ToTop />
    </div>
  );
};

export default Home;
