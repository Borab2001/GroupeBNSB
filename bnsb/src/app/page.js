import Phrase from '@/components/Phrases/Index'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.body}>
        <Phrase />
      </div>
    </main>
  )
}
