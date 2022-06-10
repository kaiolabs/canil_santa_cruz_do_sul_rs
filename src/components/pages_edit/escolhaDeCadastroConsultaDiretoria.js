import ButtonMenu from "../buttons/buttonMenu";
import Navbar from "../navBar/navBar";
import styles from "../pages_edit/escolhaDeCadastroConsultarDiretoria.module.css";

export default function EscolhaDeCadastroConsultarDiretoria() {
    return(
        <div>
            <div>
                <Navbar/>
            </div>
            <div className={styles.box}>
                <h1 className={styles.title}>Membro da diretoria</h1>
                <h3 className={styles.subTitle}>({localStorage.getItem('nome')})</h3>
                <div>
                    <ButtonMenu rota={'16168235-54d5-45ec-a0bb-97e481dc4b32'} title={'Cadastra membro da diretoria'}/>
                    <ButtonMenu rota={'/65ff8568-cf3e-4555-a242-cd6bc6b9cb91'} title={'Consultar membros da diretoria'}/>
                </div>
            </div>
        </div>
    )
}