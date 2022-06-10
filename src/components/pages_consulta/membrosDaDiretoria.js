import styles from "./diretoria.module.css";
import { useEffect, useState } from "react";
import SimplesNavbar from "../navBar/simplesNavBar";
import { supabase } from '../server/supabase.js'
import CardDeInformacoesDiretoria from "../cards/cardDeInformacoesDiretoria";

export default function MembrosDaDiretoria() {
    const [integrantes, setIntegrantes] = useState([]);
    const [copyOngs, setCopyOngs] = useState([]);
    const [busca, setBusca] = useState("");
    var lista = [];

    useEffect(() => {
        getIntegrantes();
    }, [])

    const getIntegrantes = async () => {
        const { data: Organizacao, error } = await supabase
            .from('Diretoria')
            .select('*')

            for (let i = 0; i < Organizacao.length; i++) {
                if(Organizacao[i].idOrg == localStorage.getItem('idOrg')){
                    lista.push(Organizacao[i])
                }
            }
            setIntegrantes(lista)
            setCopyOngs(lista)
            lista = []
            
    }
    

    const handleInputBusca = (e) => {
        e.preventDefault()
        setBusca(e.target.value)
    }

    const handleReload = (e) => {
        e.preventDefault()
        setBusca("")
        setCopyOngs(integrantes)
    }

    const buscaIntegrantes = async(e) => {
        e.preventDefault()

        if(busca.length > 0){
            setCopyOngs(integrantes.filter(integrante => integrante.nome.toLowerCase().includes(busca.toLowerCase())))
        }
    }

    return(
        <div>
            <SimplesNavbar/>
            <div>
                <h1 className={styles.title}>{localStorage.getItem('nome')}</h1>
                <div className={styles.container}>
                    <div className={styles.busca}>
                        <input 
                            type="text" 
                            placeholder="Buscar por nome"
                            className={styles.inputDeBusca}
                            value={busca}
                            onChange={handleInputBusca}

                        />
                        <div className={styles.buttons}>
                            <button 
                                className={styles.botaoDeBusca}
                                onClick={buscaIntegrantes}
                            >Buscar</button>
                            <button 
                                className={styles.botaoDeBusca}
                                onClick={handleReload}
                            >Recarregar</button>
                        </div>
                    </div>
                    <div className={styles.cards}>
                        {copyOngs.length > 0 && copyOngs.map(integrante => <CardDeInformacoesDiretoria key={integrante.id} {...integrante}/>)}        
                        {copyOngs.length === 0 && <h1 className={styles.notValue}>Nenhum membro da diretoria encontrado</h1>}
                    </div>
                </div>
            </div>
        </div>
    )
}