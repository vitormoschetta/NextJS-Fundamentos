import styles from '../styles/layout.module.css'

export default function Converter(params) {

    // params é somente leitura

    return (
        <div className={styles.formulario}>
            <div>
                <label>Valor Real R$</label>
                <input type="text" value={params.vlr_real}></input>
            </div>

            <div>
                <label>Valor Dolar</label>
                <input type="text" value={params.vlr_dolar}></input>
            </div>
        </div>

    )
}