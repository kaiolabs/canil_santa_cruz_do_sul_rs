import { useEffect, useState } from "react";
import styles from "../../components/pages_consulta/ongs.module.css";
import CardDeInformacoesOngs from "../cards/card_de_informacoes_ongs";
import SimplesNavbar from "../navBar/simplesNavBar";
import { supabase } from '../server/supabase.js'

export default function Ongs() {
    const [protetores, setProtetores] = useState([]);
    const [copyOngs, setCopyOngs] = useState([]);
    const [busca, setBusca] = useState("");


    const getProtetores = async () => {
        const { data: Organizacao, error } = await supabase
            .from('Organizacao')
            .select('*')
            setProtetores(Organizacao)
            setCopyOngs(Organizacao)
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
        setCopyOngs(protetores)
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
                        {copyOngs.length > 0 && copyOngs.map(protetor => <CardDeInformacoesOngs key={protetor.id} {...protetor}/>)}        
                        {copyOngs.length === 0 && <h1 className={styles.notValue}>Nenhum protetor independente encontrado</h1>}
                    </div>
                </div>
            </div>
        </div>
    )
}