import styles from '../styles/Home.module.css'
import Header from '../components/header'
import Converter from '../components/converter'

export default function Init() {
    return (
        <div className={styles.container}>
            <main className={styles.main}>
                <Header/>
                <Converter />
            </main>
        </div>
    )
}