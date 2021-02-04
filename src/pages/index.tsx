import Head from 'next/head'
import styles from '../../styles/Home.module.css'

export default function Home({ title = 'React Avançado' }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </div>
  )
}
