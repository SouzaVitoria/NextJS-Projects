import Image from "next/image"
import profileImage from "../../../public/images/profileImage.png";
import { FaGithub } from "react-icons/fa"
import { FiX } from "react-icons/fi"

import styles from "./styles.module.scss"

export function SignInButton() {
  let session = true;

  return session ? (
    <button
      type="button"
      className={styles.SignInButton}
      onClick={() => alert("oi")}
    >
      <Image src={profileImage} alt="Vitória" />
      Olá, Vitória
      <FiX color="#737380" className={styles.closeIcon} />
    </button>
  ) : (
    <button
      type="button"
      className={styles.SignInButton}
      onClick={() => alert("oi")}
    >
      <FaGithub color="#FFB800" />
      Entrar com Github
    </button>
  )
}