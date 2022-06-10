import { useState } from "react";
import SimplesNavbar from "../navBar/simplesNavBar";
import styles from "../pages_cadastro/permitirAcessoAoSite.module.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { supabase } from '../server/supabase.js'


export default function PermitirAcessoAoSite() {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [senhaConfirmacao, setSenhaConfirmacao] = useState("");

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }

    const handleSenhaChange = (e) => {
        setSenha(e.target.value);
    }

    const handleSenhaConfirmacaoChange = (e) => {
        setSenhaConfirmacao(e.target.value);
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
        if (senha === senhaConfirmacao) {
            
            let { user, error } = await supabase.auth.signUp({
                email: email,
                password: senha,
            })
            
            if (error) {
                messengerError2();
            }else{
                messengerSuccess();
                setTimeout(() => {
                    window.location.href = "/5872b189-7ede-4e1d-895e-45a966e4c876";
                }, 2000);
            }
        } else {
            messengerError();
        }
    }


    return(
        <div>
            <div>
                <SimplesNavbar/>
            </div>
            <div className={styles.container}>
            <h1 className={styles.title}>Permitir acesso ao site</h1>
                <form 
                className={styles.form}
                onSubmit={handleFormSubmit}
                >

                    <section>
                        <div className={styles.input}>
                                <label>Email</label>
                                <input 
                                    required
                                    type="email"
                                    value={email}
                                    
                                    onChange={handleEmailChange}
                                />
                        </div>
                        <div className={styles.input}>
                                <label>Senha</label>
                                <input 
                                    required
                                    type="password"
                                    value={senha}
                                    minLength={8}
                                    onChange={handleSenhaChange}
                                />
                        </div>
                        <div className={styles.input}>
                                <label>Confirmar senha</label>
                                <input 
                                    required
                                    type="password"
                                    minLength={8}
                                    value={senhaConfirmacao}
                                    onChange={handleSenhaConfirmacaoChange}
                                />
                        </div>
                        
                    </section>


                   <div className={styles.boxBtn}>
                        <button className={styles.btn}>Atorizar acesso</button>
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