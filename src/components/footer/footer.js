import styles from './footer.module.css'

export default function Footer() {
    return (
        <footer>
            <div className={styles.container}>

                <div className={styles.coluna_Contato}>
                    <h3>Contato</h3>     
                    <div className={styles.contatos}>
                        <a href="https://www.instagram.com/canil_municipal_scs/?hl=pt">Instagram</a>
                        <a href="https://www.facebook.com/canilmunicipaldesantacruzdosul/">Facebook</a>
                    </div>
                </div>

                <div className={styles.coluna_Endereco}>
                    <h3>Endereço</h3>
                    <div>
                        <span>R. Victor Frederico Baumhardt, 2581 - Distrito Industrial, Santa Cruz do Sul - RS</span>
                    </div>
                </div>

                <div className={styles.coluna_3}>
                    <p>
                        <span>© 2022 Canil Municipal Santa Cruz do Sul - RS</span>
                    </p>
                </div>

            </div>
        </footer>
    )
}
