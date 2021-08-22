import styles from '../styles/layout.module.css'
import Header from './header'

export default function Layout(params) {
    return (

        <div className={styles.container}>
            <Header />

            <main className={styles.main}>
                {params.children}
            </main>

            <footer className={styles.footer}>
                Footer here
            </footer>            
        </div>
    )
}