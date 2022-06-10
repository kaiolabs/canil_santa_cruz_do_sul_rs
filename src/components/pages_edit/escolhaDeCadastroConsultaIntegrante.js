import ButtonMenu from "../buttons/buttonMenu";
import Navbar from "../navBar/navBar";
import styles from "../pages_edit/escolhaDeCadastroConsultarIntegrante.module.css";

export default function EscolhaDeCadastroConsultarIntegrante() {
    return(
        <div>
            <div>
                <Navbar/>
            </div>
            <div className={styles.box}>
                <h1 className={styles.title}>Integrantes</h1>
                <h3 className={styles.subTitle}>({localStorage.getItem('nome')})</h3>
                <div>
                    <ButtonMenu rota={'/9aabcd75-a57d-4b46-8598-8d0d6a7e0b78'} title={'Cadastra integrante'}/>
                    <ButtonMenu rota={'/181cedce-362b-4669-85f3-cf9d86a1339a'} title={'Consultar integrantes'}/>
                </div>
            </div>
        </div>
    )
}