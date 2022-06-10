import styles from './cadastraMembrosDaDiretoria.module.css';
export default function CadastraMembrosDaDiretoria(){
    return(
        <div className={styles.container}>
            <div className={styles.topoPag}>

            </div>
                <form className={styles.form}>
                    <section>
                        <div className={styles.input}>
                            <label>Nome</label>
                            <input 
                                required
                                type="text"
                            />
                        </div>
                        <div className={styles.input}>
                            <label>CPF/CNPJ</label>
                            <input 
                                required
                                type= "text"
                                maxLength={20}
                                minLength={11}
                                pattern="[0-9]+$"
                                title="Por favor informe somente os números"
                                />
                        </div>
                        <div className={styles.input}>
                            <label>RG</label>
                            <input 
                                required
                                type="text"
                                pattern="[0-9]+$"
                                title="Por favor informe somente os números"
                                maxLength={9}
                            />
                        </div>
                    </section>
                    <section>
                        <div className={styles.input}>
                            <label>CEP</label>
                            <input 
                                required
                                type="text"
                                pattern="[0-9]+$"
                                title="Por favor informe somente os números"
                            />
                        </div>
                        <div className={styles.input}>
                            <label>Cargo</label>
                            <input 
                                required
                                type="text"
                            />
                        </div>
                        <div className={styles.input}>
                            <label>Telefone</label>
                            <input 
                            // someente numeros
                                type="tel"
                                required
                                minLength={11}
                                pattern="[0-9]+$"
                                title="Por favor informe somente os números"
                            />
                        </div>
                    </section>
                    <section>
                        <div className={styles.input}>
                            <label>Email</label>
                            <input 
                                required
                                type="email"
                            />
                        </div>
                    </section>

                   <div className={styles.boxBtn}>
                        <button className={styles.btn}>Cadastrar</button>
                   </div>
                </form>
        </div>
    )
}