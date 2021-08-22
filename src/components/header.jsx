import styles from '../styles/layout.module.css'
import Link from "next/link";

export default function Header() {
    return (
        <div>            
            <h1 className={styles.title}>
                Welcome to <a href="https://nextjs.org">Next.js!</a>
            </h1>

            <div className={styles.navbar}>
                <Link href="/">Home</Link>
                <Link href="/converter">Converter</Link>
            </div>            
        </div>
    )
}