import Layout from '../../template/layout'
import Link from "next/link";
import styles from '../../styles/product.module.css'

export default function ProductPage() {
    return (
        <Layout>
            Product Page            

            <div className={styles.submenu}>               
                <Link href="/product/create">Add</Link>
            </div>
        </Layout>
    )
}