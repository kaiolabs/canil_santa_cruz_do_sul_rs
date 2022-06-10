import ButtonMenuTiny from "../buttons/buttonMenuTiny";
import styles from "../cards/card_de_informacoes.module.css";

export default function CardDeInformacoesIntegrantes( {nome, cpf, endereco, cep, abrigo, telefone, email, capacidade, areaAtuacao}){
    return(
        <div className={styles.card}>
            <h2><span>{nome}</span></h2>
            <p><span>CPF:</span>{cpf}</p>
            <p><span>Endereço:</span>{endereco}</p>
            <p><span>CEP:</span>{cep}</p>
            <p><span>Abrigo:</span>{abrigo}</p>
            <p><span>Telefone:</span>{telefone}</p>
            <p><span>Email:</span>{email}</p>
            <p><span>Capacidade:</span>{capacidade}</p>
            <p><span>Área de atuação:</span>{areaAtuacao}</p>

            <div className={styles.btnBox}>
                <ButtonMenuTiny className={styles.btnStyle} rota={'/5872b189-7ede-4e1d-895e-45a966e4c876'} title={'Editar'}/>
            </div>
        </div>
    )

}
