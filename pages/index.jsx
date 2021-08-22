import styles from '../styles/Home.module.css'

export default function Init() {
    return (
        <div className={styles.container}>
            <main className={styles.main}>
                <h1 className={styles.title}>
                    Welcome to <a href="https://nextjs.org">Next.js!</a>
                </h1>
            </main>
        </div>
    )
}