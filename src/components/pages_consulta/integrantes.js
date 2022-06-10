import styles from "./integrantes.module.css";
import { useEffect, useState } from "react";
import SimplesNavbar from "../navBar/simplesNavBar";
import { supabase } from '../server/supabase.js'
import CardDeInformacoesDiretoria from "../cards/cardDeInformacoesDiretoria";

export default function Integrantes() {
    const [protetores, setProtetores] = useState([]);
    const [copyOngs, setCopyOngs] = useState([]);
    const [busca, setBusca] = useState("");
    var lista = [];


    const getProtetores = async () => {
        const { data: Organizacao, error } = await supabase
            .from('Integrantes')
            .select('*')
            setProtetores(Organizacao)

            for (let i = 0; i < protetores.length; i++) {
                if(protetores[i].idOrg == localStorage.getItem('idOrg')){
                    console.log(protetores[i])
                    lista.push(protetores[i])
                    
                }
            }
            setCopyOngs(lista)
    }

    useEffect(() => {
        getProtetores();
    }, [])

    const handleBusca = (e) => {
        setBusca(e.target.value)
    }

    const handleReload = (e) => {
        e.preventDefault()
        setBusca("")
        setCopyOngs(lista)
    }

    const buscaProtetores = async(e) => {
        e.preventDefault()

        if(busca.length > 0){
            setCopyOngs(protetores.filter(protetor => protetor.nome.toLowerCase().includes(busca.toLowerCase())))
        }
    }

    return(
        <div>
            <SimplesNavbar/>
            <div>
                <h1 className={styles.title}>ONGs OSCs</h1>
                <div className={styles.container}>
                    <div className={styles.busca}>
                        <input 
                            type="text" 
                            placeholder="Buscar por nome"
                            className={styles.inputDeBusca}
                            value={busca}
                            onChange={handleBusca}


                        />
                        <div className={styles.buttons}>
                            <button 
                                className={styles.botaoDeBusca}
                                onClick={buscaProtetores}
                            >Buscar</button>
                            <button 
                                className={styles.botaoDeBusca}
                                onClick={handleReload}
                            >Recarregar</button>
                        </div>
                    </div>
                    <div className={styles.cards}>
                        {copyOngs.length > 0 && copyOngs.map(protetor => <CardDeInformacoesDiretoria key={protetor.id} {...protetor}/>)}        
                        {copyOngs.length === 0 && <h1 className={styles.notValue}>Nenhum protetor independente encontrado</h1>}
                    </div>
                </div>
            </div>
        </div>
    )
}