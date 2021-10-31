import Main from 'components/main'
import Head from 'next/head'
import Image from 'next/image'
import styles from './styles/Home.module.css'

type Props = {
  title: string
}

export default function Home({title ="React Avancado"}:Props) {
  return (
    <div className={styles.container}>
      <h1>{title}</h1>
      <Main />
    </div>
  )
}
