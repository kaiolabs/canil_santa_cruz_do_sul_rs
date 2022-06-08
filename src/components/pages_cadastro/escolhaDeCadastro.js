import ButtonMenu from "../buttons/buttonMenu";
import Navbar from "../navBar/navBar";
import styles from "../pages_cadastro/escolhaDeCadastro.module.css";

export default function EscolhaDeCadastro() {
    return(
        <div>
            <div>
                <Navbar/>
            </div>
            <div className={styles.box}>
                <h1 className={styles.title}>Escolha o tipo de cadastro</h1>
                <div>
                    <ButtonMenu rota={'/c8188d50-7e7e-44d5-81fa-6d666563eff3'} title={'Cadastra ONG/OSC'}/>
                    <ButtonMenu rota={'/9018cb68-66e3-4fdd-bf90-bfb54d52b0f7'} title={'Cadastra protetor independente'}/>
                </div>
            </div>
        </div>
    )
}