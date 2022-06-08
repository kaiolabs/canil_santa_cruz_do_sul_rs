import { useState } from "react";
import SimplesNavbar from "../navBar/simplesNavBar";
import styles from "../pages_cadastro/cadastraProtetorIndependente.module.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { supabase } from '../server/supabase.js'

export default function CadastraProtetorIndependente() {
    const [nome, setNome] = useState("");
    const [cnpj, setCnpj] = useState("");
    const [tipodaorganizacao, setTipodaorganizacao] = useState("");
    const [possuirSede, setPossuirSede] = useState("");
    const [areaAtuacao, setAreaAtuacao] = useState("");
    const [telefone, setTelefone] = useState("");
    const [cep, setCep] = useState("");
    const [endereco, setEndereco] = useState("");
    const [numeroAbrigo, setNumeroAbrigo] = useState("");
    const [capacidade, setCapacidade] = useState("");
    const [larTemporario, setLarTemporario] = useState("");
    const [especiesAnimais, setEspeciesAnimais] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [confirmaSenha, setConfirmaSenha] = useState("");
    
    
    const handleNomeChange = (e) => {
        setNome(e.target.value);
    }

    const handleCpfChange = (e) => {
        setCnpj(e.target.value);
    }

    const handleTipodaorganizacao = (e) => {
        setTipodaorganizacao(e.target.value);
    }

    const handlePossuirAbrigoChange = (e) => {
        setPossuirSede(e.target.value);
    }

    const handleAreaAtuacaoChange = (e) => {
        setAreaAtuacao(e.target.value);
    }

    const handleTelefoneChange = (e) => {
        setTelefone(e.target.value);
    }

    const handleCepChange = (e) => {
        setCep(e.target.value);
    }

    const handleEnderecoChange = (e) => {
        setEndereco(e.target.value);
    }

    const handleNumeroAbrigoChange = (e) => {
        setNumeroAbrigo(e.target.value);
    }

    const handleCapacidadeChange = (e) => {
        setCapacidade(e.target.value);
    }

    const handleLarTemporarioChange = (e) => {
        setLarTemporario(e.target.value);
    }

    const handleEspeciesAnimaisChange = (e) => {
        setEspeciesAnimais(e.target.value);
    }

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }

    const handleSenhaChange = (e) => {
        setSenha(e.target.value);
    }

    const handleConfirmaSenhaChange = (e) => {
        setConfirmaSenha(e.target.value);
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
        toast.success('Login bem sucedido', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
    }

    const handleFormSubmit = async (e) => {
        e.preventDefault();

        if (senha !== confirmaSenha) {
            messengerError();
        }else{
            const { data, error } = await supabase
                .from('Organizacao')
                .insert([{nome: nome, cnpj: cnpj, tipo: tipodaorganizacao, sede: possuirSede, endereco: endereco, telefone: telefone, email: email, capacidade: capacidade, LT: larTemporario, areaAtuacao: areaAtuacao, especies: especiesAnimais, cep: cep, numeroDoAbrigo: numeroAbrigo, senha: senha, email: email.toLowerCase() ,dataDeCadastro: new Date()},])
            
                if (error) {
                    messengerError2();
                }else{
                    messengerSuccess();
                    setTimeout(() => {
                        window.location.href = "/5872b189-7ede-4e1d-895e-45a966e4c876";
                    }, 2000);
                }
        }
    }


    return(
        <div>
            <div>
                <SimplesNavbar/>
            </div>
            <div className={styles.container}>
            <h1 className={styles.title}>Cadastra ONG/OSC</h1>
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
                            <label>CNPJ</label>
                            <input 
                                required
                                type= "text"
                                maxLength={14}
                                minLength={11}
                                value={cnpj}
                                onChange={handleCpfChange}
                                pattern="[0-9]+$"

                                />
                        </div>

                        <div className={styles.input}>
                        <label>Tipo da organização</label>
                            <select 
                                className={styles.select}
                                value={tipodaorganizacao}
                                onChange={handleTipodaorganizacao}
                            >
                                <option value="">Selecione uma opção</option>
                                <option value="ong">ONG</option>
                                <option value="osc">OSC</option>
                            </select>
                        </div>

                    </section>

                    <section>
                    <div className={styles.input}>
                            <label>A ONG/OSC possui sede?</label>
                            <select 
                                className={styles.select}
                                value={possuirSede}
                                onChange={handlePossuirAbrigoChange}
                            >
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
                                value={areaAtuacao}
                                onChange={handleAreaAtuacaoChange}
                            />
                        </div>
                        <div className={styles.input}>
                            <label>Telefone</label>
                            <input 
                                type="text"
                                required
                                minLength={11}
                                value={telefone}
                                onChange={handleTelefoneChange}
                                pattern="[0-9]+$"
                                maxLength={15}
                            />
                        </div>

                    </section>

                    <section>
                        <div className={styles.input}>
                            <label>CEP</label>
                            <input 
                                required
                                type="text"
                                value={cep}
                                onChange={handleCepChange}
                                pattern="[0-9]+$"
                                maxLength={10}
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
                            <label>Número da sede</label>
                            <input 
                                required
                                type="text"
                                value={numeroAbrigo}
                                onChange={handleNumeroAbrigoChange}
                                pattern="[0-9]+$"
                                maxLength={7}
                            />
                        </div>

                    </section>

                    <section>
                    <div className={styles.input}>
                            <label>Capacidade</label>
                            <input 
                                required
                                type="text"
                                value={capacidade}
                                onChange={handleCapacidadeChange}
                                maxLength={100000}
                                pattern="[0-9]+$"
                            />
                        </div>

                        <div className={styles.input}>
                            <label>Lar temporário</label>
                            <input 
                                required
                                type="text"
                                value={larTemporario}
                                onChange={handleLarTemporarioChange}
                            />
                        </div>
                        <div className={styles.input}>
                            <label>Espécies de animais</label>
                            <input 
                                required
                                type="text"
                                value={especiesAnimais}
                                onChange={handleEspeciesAnimaisChange}
                            />
                        </div>
                    </section>

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
                                <label>Senha de acesso</label>
                                <input 
                                    required
                                    type="password"
                                    value={senha}
                                    onChange={handleSenhaChange}
                                />
                        </div>

                        <div className={styles.input}>
                                <label>Confirma senha de acesso</label>
                                <input 
                                    required
                                    type="password"
                                    value={confirmaSenha}
                                    onChange={handleConfirmaSenhaChange}
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