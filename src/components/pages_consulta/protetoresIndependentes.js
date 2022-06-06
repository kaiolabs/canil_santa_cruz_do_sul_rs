import { useEffect, useState } from "react";
import styles from "../../components/pages_consulta/protetoresIndependentes.module.css";
import CardDeInformacoes from "../cards/card_de_informacoes";
import SimplesNavbar from "../navBar/simplesNavBar";
import { supabase } from '../server/supabase.js'

export default function ProtetoresIndependentes () {

    const [protetores, setProtetores] = useState([]);
    const [copyProtetores, setCopyProtetores] = useState([]);
    const [busca, setBusca] = useState("");


    const getProtetores = async () => {
        const { data: Organizacao, error } = await supabase
            .from('Protetor')
            .select('*')
            setProtetores(Organizacao)
            setCopyProtetores(Organizacao)
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
        setCopyProtetores(protetores)
    }

    const buscaProtetores = async(e) => {
        e.preventDefault()

        if(busca.length > 0){
            setCopyProtetores(protetores.filter(protetor => protetor.nome.toLowerCase().includes(busca.toLowerCase())))
        }
    }

    return(
        <div>
            <SimplesNavbar/>
            <div>
                <h1 className={styles.title}>Protetores independentes</h1>
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
                        {copyProtetores.length > 0 && copyProtetores.map(protetor => <CardDeInformacoes key={protetor.id} {...protetor}/>)}        
                        {copyProtetores.length === 0 && <h1 className={styles.notValue}>Nenhum protetor independente encontrado</h1>}
                    </div>
                </div>
            </div>
        </div>
    )
}