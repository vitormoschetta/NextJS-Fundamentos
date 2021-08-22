import styles from '../styles/layout.module.css'
import Navbar from './navbar'

export default function Layout(params) {
    return (

        <div className={styles.container}>
            <Navbar />

            <main className={styles.main}>
                {params.children}
            </main>

            <footer className={styles.footer}>
                Footer here
            </footer>            
        </div>
    )
}