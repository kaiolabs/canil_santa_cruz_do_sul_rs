import Navbar from "../navBar/navBar";
import SimplesNavbar from "../navBar/simplesNavBar";
import styles from "../pages_cadastro/cadastraONG.module.css";

export default function CadastraONG() {
    return(
        <div>
            <div>
                <SimplesNavbar/>
            </div>
            <div className={styles.container}>
            <h1 className={styles.title}>Cadastra ONG</h1>
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
                            <label>CNPJ</label>
                            <input 
                                required
                                type= "text"
                                maxLength={20}
                                minLength={11}
                                />
                        </div>

                        <div className={styles.input}>
                            <label>Tipo da organização</label>
                            <input 
                                required
                                type="text"
                                maxLength={9}
                            />
                        </div>

                    </section>

                    <section>
                    <div className={styles.input}>
                            <label>A ONG possuir sede?</label>
                            <select className={styles.select}>
                                <option value="">Selecione uma opção</option>
                                <option value="sim">Sim</option>
                                <option value="nao">Não</option>
                            </select>
                        </div>
                        <div className={styles.input}>
                            <label>Área de atuação</label>
                            <input 
                                required
                                type="text"
                            />
                        </div>
                        <div className={styles.input}>
                            <label>Telefone</label>
                            <input 
                                type="tel"
                                required
                                minLength={11}
                            />
                        </div>

                    </section>

                    <section>
                        <div className={styles.input}>
                            <label>CEP</label>
                            <input 
                                required
                                type="text"
                            />
                        </div>
                        <div className={styles.input}>
                            <label>Endereço</label>
                            <input 
                                required
                                type="text"
                            />
                        </div>
                        <div className={styles.input}>
                            <label>Número da sede</label>
                            <input 
                                required
                                type="text"
                            />
                        </div>

                    </section>

                    <section>
                    <div className={styles.input}>
                            <label>Capacidade</label>
                            <input 
                                required
                                type="text"
                            />
                        </div>

                        <div className={styles.input}>
                            <label>Lar temporário</label>
                            <input 
                                required
                                type="text"
                            />
                        </div>
                        <div className={styles.input}>
                            <label>Espécies de animais</label>
                            <input 
                                required
                                type="text"
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
                        <div className={styles.input}>
                                <label>Senha de acesso</label>
                                <input 
                                    required
                                    type="password"
                                />
                        </div>

                        <div className={styles.input}>
                                <label>Confirma senha de acesso</label>
                                <input 
                                    required
                                    type="password"
                                />
                        </div>
                        
                    </section>

                   <div className={styles.boxBtn}>
                        <button className={styles.btn}>Cadastrar</button>
                   </div>
                </form>
        </div>
        </div>
    )
}