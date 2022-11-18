import { useSession, signIn, signOut } from "next-auth/react"

import { FaGithub } from "react-icons/fa"
import { FiX } from "react-icons/fi"

import styles from "./styles.module.scss"

export function SignInButton() {
  const { data: session } = useSession()

  return session ? (
    <button
      type="button"
      className={styles.SignInButton}
      onClick={() => signOut()}
    >
      <img
        src={session.user.image}
        alt={`Foto da ${session.user.name}`}
      />
      Olá, {session.user.name}
      <FiX color="#737380" className={styles.closeIcon} />
    </button>
  ) : (
    <button
      type="button"
      className={styles.SignInButton}
      onClick={() => signIn()}
    >
      <FaGithub color="#FFB800" />
      Entrar com Github
    </button>
  )
}