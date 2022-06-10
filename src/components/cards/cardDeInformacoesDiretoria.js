import ButtonMenuTiny from "../buttons/buttonMenuTiny";
import styles from "../cards/card_de_informacoes.module.css";

export default function CardDeInformacoesDiretoria( {nome, cpf, endereco, rg, telefone, email, cargo}){
    return(
        <div className={styles.card}>
            <h2><span>{nome}</span></h2>
            <p><span>Cargo:</span>{cargo}</p>
            <p><span>CPF:</span>{cpf}</p>
            <p><span>RG:</span>{rg}</p>
            <p><span>Endereço:</span>{endereco}</p>
            <p><span>Telefone:</span>{telefone}</p>
            <p><span>Email:</span>{email}</p>

            <div className={styles.btnBox}>
                <ButtonMenuTiny className={styles.btnStyle} rota={'/'} title={'Editar'}/>
            </div>
        </div>
    )

}
