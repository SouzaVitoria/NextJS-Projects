import Head from 'next/head'
import styles from "../styles/home.module.scss"

export default function Home() {
  return (
    <>
      <Head>
        <title>Board - Organizando tarefas</title>
      </Head>
      <div>
        <h1 className={styles.title}> Initial <span>NextJS</span></h1>
      </div>
    </>
  )
}
