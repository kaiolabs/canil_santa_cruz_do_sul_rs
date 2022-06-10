import { useState } from "react";
import ButtonMenuTiny from "../buttons/buttonMenuTiny";
import styles from "../cards/card_de_informacoes.module.css";

export default function CardDeInformacoesOngOsc( {id, nome, cnpj, endereco, cep, sede, tipo, telefone, email, capacidade, areaAtuacao}){

    return(
        <div className={styles.card}>
            <h2><span>{nome}</span></h2>
            <p><span>CNPJ:</span>{cnpj}</p>
            <p><span>Endereço:</span>{endereco}</p>
            <p><span>CEP:</span>{cep}</p>
            <p><span>Sede:</span>{sede}</p>
            <p><span>Tipo:</span>{tipo}</p>
            <p><span>Telefone:</span>{telefone}</p>
            <p><span>Email:</span>{email}</p>
            <p><span>Capacidade:</span>{capacidade}</p>
            <p><span>Área de atuação:</span>{areaAtuacao}</p>

            <div className={styles.btnBox}>
                <ButtonMenuTiny className={styles.btnStyle} rota={'/26cb1fd3-a71a-4c82-93f9-652da031b967'} title={'Diretoria'} idOrg={id} nome={nome} />
                <ButtonMenuTiny className={styles.btnStyle}rota={'/777a6bf1-75d6-4027-aa00-ecbfd724cf1c'} title={'Integrantes'} idOrg={id} nome={nome}/>
            </div>
        </div> 
    )

}