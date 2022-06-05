import styles from "./home.module.css";
import ButtonMenu from "../buttons/buttonMenu";
import SimplesNavbar from "../navBar/simplesNavBar";

export default function HomePage(){
    return(
        <div>
            <header>
                <SimplesNavbar/>
            </header>
            <main className={styles.container}>
                <div className={styles.header}>
                    <h1>Home</h1>
                </div>
                <div className={styles.conteudo}>
                    <div className={styles.cadastro}>
                        <h2>Areá de cadastros e permissões</h2>
                        
                        <div className={styles.opicoes}>
                            <ButtonMenu rota={'/26cb1fd3-a71a-4c82-93f9-652da031b967'} title={'Cadastra membros da diretoria'}/>
                            <ButtonMenu rota={'/777a6bf1-75d6-4027-aa00-ecbfd724cf1c'} title={'Cadastra integrante'}/>
                            <ButtonMenu rota={'/c8188d50-7e7e-44d5-81fa-6d666563eff3'} title={'Cadastra ONG'}/>
                            <ButtonMenu rota={'/9018cb68-66e3-4fdd-bf90-bfb54d52b0f7'} title={'Cadastra protetor independente'}/>
                            <ButtonMenu rota={'/e6851794-1cff-4aea-a1b6-5686a6f2afb6'} title={'Permitir acesso ao site'}/>
                        </div>

                    </div>
                    <div className={styles.comsulta}>
                        <h2>Areá de consulta</h2>
                        <div className={styles.opicoes}>
                            <ButtonMenu rota={'/9bfff959-74f6-41ea-b37a-ad5007b0cc04'} title={'ONGs'}/>
                            <ButtonMenu rota={'/02c19a89-30b6-4ac8-9aee-7cd24e08f73c'} title={'Protetores independentes'}/>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}