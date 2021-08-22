import styles from '../styles/Home.module.css'

export default function Init() {
    
    const titulo = <h1 className={styles.title}> Welcome to Converter!</h1>

    return (
        <div className={styles.container}>
            <main className={styles.main}>
                
                {titulo}

                <div className={styles.formulario}>
                    <div>
                        <label>Valor Real R$</label>
                        <input type="text"></input>
                    </div>

                    <div>
                        <label>Valor Dolar</label>
                        <input type="text"></input>
                    </div>
                </div>
            </main>
        </div>
    )
}