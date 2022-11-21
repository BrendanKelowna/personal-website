import { Container } from "@mui/material";
import {
  collection,
  CollectionReference,
  getDocs,
  getFirestore,
  DocumentReference,
  getDoc,
  doc,
} from "firebase/firestore";
import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import AboutMe from "../components/AboutMe";
import {
  AboutArticle,
  Article,
  ArticleType,
  DBAboutArticle,
  DBArticle,
  DBEmploymentArticle,
  DBProjectArticle,
  EmploymentArticle,
  ProjectArticle,
} from "../components/Article/Article";
import Contact from "../components/Contact";
import Education from "../components/Education";
import Employment from "../components/Employment";
import Header from "../components/Header";
import Objective from "../components/Objective";
import Programing from "../components/Programing";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import ToTop from "../components/ToTop";
import Training from "../components/Training";
import styles from "../styles/Home.module.css";

interface ArticleList {
  about: AboutArticle | undefined;
  objective: Article | undefined;
  contact: Article | undefined;
  programing: Article[];
  employment: EmploymentArticle[];
  education: Article[];
  training: Article[];
  skills: Article[];
  projects: ProjectArticle[];
}
type HomeProps = { articles: ArticleList };

//* Server
export const getStaticProps: GetStaticProps = async () => {
  const db = getFirestore();

  const articles: ArticleList = {
    about: undefined,
    objective: undefined,
    contact: undefined,
    programing: [],
    employment: [],
    education: [],
    training: [],
    skills: [],
    projects: [],
  };

  //Database get
  const promises: Promise<void>[] = [
    getDoc(doc(db, "Articles", "about")).then((doc) => {
      articles.about = { id: doc.id, ...(doc.data() as DBAboutArticle) };
    }),

    getDoc(doc(db, "Articles", "objective")).then((doc) => {
      articles.objective = { id: doc.id, ...(doc.data() as DBArticle) };
    }),

    getDoc(doc(db, "Articles", "contact")).then((doc) => {
      articles.contact = { id: doc.id, ...(doc.data() as DBArticle) };
    }),

    getDocs(collection(db, "Articles", "programing", "items")).then((docs) =>
      docs.forEach((doc) => {
        articles.programing.push({ id: doc.id, ...(doc.data() as DBArticle) });
      })
    ),

    getDocs(collection(db, "Articles", "employment", "items")).then((docs) =>
      docs.forEach((doc) => {
        articles.employment.push({
          id: doc.id,
          ...(doc.data() as DBEmploymentArticle),
        });
      })
    ),

    getDocs(collection(db, "Articles", "education", "items")).then((docs) =>
      docs.forEach((doc) => {
        articles.education.push({ id: doc.id, ...(doc.data() as DBArticle) });
      })
    ),

    getDocs(collection(db, "Articles", "training", "items")).then((docs) =>
      docs.forEach((doc) => {
        articles.training.push({ id: doc.id, ...(doc.data() as DBArticle) });
      })
    ),

    getDocs(collection(db, "Articles", "skills", "items")).then((docs) =>
      docs.forEach((doc) => {
        articles.skills.push({ id: doc.id, ...(doc.data() as DBArticle) });
      })
    ),

    getDocs(collection(db, "Articles", "projects", "items")).then((docs) =>
      docs.forEach((doc) => {
        articles.projects.push({
          id: doc.id,
          ...(doc.data() as DBProjectArticle),
        });
      })
    ),
  ];

  await Promise.allSettled(promises);

  //sorting
  for (const key in articles) {
    const _key = key as ArticleType; //ts fix
    if (
      Object.prototype.hasOwnProperty.call(articles, key) &&
      Array.isArray(articles[_key])
    ) {
      (articles[_key] as Article[]).sort(
        (articleA, articleB) => (articleB.order ?? 0) - (articleA.order ?? 0)
      );
    }
  }

  return {
    props: { articles },
    revalidate: 1800,
  };
};

//* Page
const Home: NextPage<HomeProps> = ({ articles }) => {
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
        {!!articles.about && <AboutMe article={articles.about} />}
        {!!articles.contact && <Contact article={articles.contact} />}
        {!!articles.objective && <Objective article={articles.objective} />}
        {!!articles.employment.length && (
          <Employment articles={articles.employment} />
        )}
        {!!articles.education.length && (
          <Education articles={articles.education} />
        )}
        {!!articles.training.length && (
          <Training articles={articles.training} />
        )}
        {!!articles.skills.length && <Skills articles={articles.skills} />}
        {!!articles.programing.length && (
          <Programing articles={articles.programing} />
        )}
        {!!articles.projects.length && (
          <Projects articles={articles.projects} />
        )}
      </Container>
      <ToTop />
    </div>
  );
};

export default Home;
