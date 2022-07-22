import Head from 'next/head'
import Link from 'next/link'
import Layout, {siteTitle} from '../components/layout'
import Date from '../components/date'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>About Me Using NextJS</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className={utilStyles.headingMd}>
        <p className={utilStyles.para}>I'm a Software Developer</p>
        <p className={utilStyles.para}>Diploma in Software Engineering and BSc. Mathematics</p>
        <p className={utilStyles.para}>
        I'm versed in Front End and Back End. Proficient in PHP, Javascript, NodeJS with Express, 
          React, NextJS, Bootstrap, Sass, CSS, SQL and NoSQL.           
          Intermediate in Java, C++, and C#.
          Beginner in React Native, Svelte, Vue, and Angular
        </p>
        <p className={utilStyles.para}>Proficient in English</p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingMd}>Skills</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a className={utilStyles.linkText}>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date}/>
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}
