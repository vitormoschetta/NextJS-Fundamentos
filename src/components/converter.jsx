import styles from '../styles/Home.module.css'

export default function Converter() {

    return (

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

    )
}