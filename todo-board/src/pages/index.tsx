import Head from 'next/head'
import Image from 'next/image'

import boardUserImage from "../../public/images/board-user.svg"
import profileImage from "../../public/images/profileImage.png"

import styles from "../styles/home.module.scss"

export default function Home() {
  return (
    <>
      <Head>
        <title>Board - Organizando tarefas</title>
      </Head>
      <main className={styles.contentContainer}>
        <Image src={boardUserImage} alt="Imagem de Ferramenta Board" />

        <section className={styles.callToAction}>
          <h1>Uma ferramenta para seu dia a dia. Escreva, planeja e organize-se...</h1>
          <p>
            <span> 100% Gratuita</span> e online
          </p>
        </section>
        <div className={styles.donaters}>
          <strong>Apoiadores:</strong>
          <div>
            <Image src={profileImage} alt="Usuário 1" />
          </div>
        </div>
      </main>
    </>
  )
}
