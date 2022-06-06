import styles from "../cards/card_de_informacoes.module.css";

export default function CardDeInformacoes( {nome, cnpj, endereco, abrigo, telefone, email, capacidade, areaAtuacao}){
    return(
        <div className={styles.card}>
            <h2><span>{nome}</span></h2>
            <p><span>CPF:</span>{cnpj}</p>
            <p><span>Endereço:</span>{endereco}</p>
            <p><span>Sede:</span>{abrigo}</p>
            <p><span>Telefone:</span>{telefone}</p>
            <p><span>Email:</span>{email}</p>
            <p><span>Capacidade:</span>{capacidade}</p>
            <p><span>Área de atuação:</span>{areaAtuacao}</p>
        </div>
    )

}
