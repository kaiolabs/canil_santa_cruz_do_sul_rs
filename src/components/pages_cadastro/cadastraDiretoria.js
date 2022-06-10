import { useState } from "react";
import SimplesNavbar from "../navBar/simplesNavBar";
import styles from "../pages_cadastro/cadastraDiretoria.module.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { supabase } from '../server/supabase.js'

export default function CadastraDiretoria() {
    const [nome, setNome] = useState("");
    const [cpf, setCpf] = useState("");
    const [rg, setRg] = useState("");
    const [telefone, setTelefone] = useState("");
    const [endereco, setEndereco] = useState("");
    const [email, setEmail] = useState("");
    const [cargo, setCargo] = useState("");
    
    const handleNomeChange = (e) => {
        setNome(e.target.value);
    }

    const handleCpfChange = (e) => {
        setCpf(e.target.value);
    }

    const handleRgChange = (e) => {
        setRg(e.target.value);
    }

    const handleTelefoneChange = (e) => {
        setTelefone(e.target.value);
    }
    const handleEnderecoChange = (e) => {
        setEndereco(e.target.value);
    }

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }

    const handleCargoChange = (e) => {
        setCargo(e.target.value);
    }

    const messengerError = () => {
        toast.error("Senhas não conferem!", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    }

    const messengerError2 = () => {
        toast.error("Não estamos aceitando cadastros no momento!", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    }
    

    const messengerSuccess = () => {
        toast.success('Cadastro bem sucedido', {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
    }

    const handleFormSubmit = async (e) => {
        e.preventDefault();

            const { data, error } = await supabase
                .from('Diretoria')
                .insert([{nome: nome, cpf: cpf, rg: rg, endereco: endereco, telefone: telefone, email: email.toLowerCase() ,dataCadastro: new Date(), idOrg: localStorage.getItem('idong'), cargo: cargo},])

            if (error) {
                messengerError2();
            }else{
                messengerSuccess();
                setTimeout(() => {
                    localStorage.removeItem('idOrg');
                    localStorage.removeItem('nome');
                    window.location.href = "/5872b189-7ede-4e1d-895e-45a966e4c876";
                }, 2000);
            }
    }


    return(
        <div>
            <div>
                <SimplesNavbar/>
            </div>
            <div className={styles.container}>
            <h1 className={styles.title}>Cadastra membro da diretoria</h1>
            <h3 className={styles.subTitle}>({localStorage.getItem('nome')})</h3>
                <form 
                className={styles.form}
                onSubmit={handleFormSubmit}
                >
                    <section>

                        <div className={styles.input}>
                            <label>Nome</label>
                            <input 
                                required
                                type="text"
                                value={nome}
                                onChange={handleNomeChange}
                            />
                        </div>

                        <div className={styles.input}>
                            <label>CPF</label>
                            <input 
                                required
                                type= "text"
                                maxLength={14}
                                minLength={11}
                                value={cpf}
                                onChange={handleCpfChange}
                                pattern="[0-9]+$"
                                title="Por favor informe somente os números"
                                />
                        </div>

                        <div className={styles.input}>
                            <label>RG</label>
                            <input 
                                required
                                type="text"
                                maxLength={9}
                                value={rg}
                                onChange={handleRgChange}
                                pattern="[0-9]+$"
                                title="Por favor informe somente os números"
                            />
                        </div>

                    </section>

                    <section>
                    <div className={styles.input}>
                            <label>Telefone</label>
                            <input 
                                type="text"
                                required
                                minLength={11}
                                value={telefone}
                                onChange={handleTelefoneChange}
                                pattern="[0-9]+$"
                                title="Por favor informe somente os números"
                                maxLength={15}
                            />
                        </div>

                        <div className={styles.input}>
                            <label>Endereço</label>
                            <input 
                                required
                                type="text"
                                value={endereco}
                                onChange={handleEnderecoChange}
                            />
                        </div>
                        <div className={styles.input}>
                                <label>Email</label>
                                <input 
                                    required
                                    type="email"
                                    value={email}
                                    onChange={handleEmailChange}
                                />
                        </div>
                    </section>
                    <section>
                    <div className={styles.input}>
                            <label>Cargo</label>
                            <input 
                                required
                                type="text"
                                value={cargo}
                                onChange={handleCargoChange}

                            />
                        </div>
                    </section>


                   <div className={styles.boxBtn}>
                        <button className={styles.btn}>Cadastrar</button>
                   </div>
                </form>
        </div>
        <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </div>
    )
}