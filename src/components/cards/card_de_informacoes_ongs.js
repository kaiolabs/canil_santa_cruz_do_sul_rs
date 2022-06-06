import styles from "../cards/card_de_informacoes.module.css";

export default function CardDeInformacoesOngs( {nome, cnpj, endereco, sede, tipo, telefone, email, capacidade, areaAtuacao}){
    return(
        <div className={styles.card}>
            <h2><span>{nome}</span></h2>
            <p><span>CNPJ:</span>{cnpj}</p>
            <p><span>Endereço:</span>{endereco}</p>
            <p><span>Sede:</span>{sede}</p>
            <p><span>Tipo:</span>{tipo}</p>
            <p><span>Telefone:</span>{telefone}</p>
            <p><span>Email:</span>{email}</p>
            <p><span>Capacidade:</span>{capacidade}</p>
            <p><span>Área de atuação:</span>{areaAtuacao}</p>
        </div>
    )

}