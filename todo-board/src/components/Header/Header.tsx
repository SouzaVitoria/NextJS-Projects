import Image from 'next/image'
import Link from 'next/link'

import logoImg from '../../../public/images/logo.svg'
import styles from "./header.module.scss"

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <Link href="/">
          <Image
            src={logoImg}
            alt="Logo Meu Board"
          />
        </Link>

        <nav>
          <Link href="/"> Home </Link>
          <Link href="/board"> Meu board </Link>
        </nav>

        <button> Entrar com Github </button>
      </div>
    </header>
  )
}