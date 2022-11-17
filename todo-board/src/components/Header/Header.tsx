import Image from 'next/image'
import Link from 'next/link'
import { SignInButton } from '../SignInButton/SignInButton'

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

        <SignInButton />
      </div>
    </header>
  )
}