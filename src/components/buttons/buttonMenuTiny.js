import styles from './buttonMenuTiny.module.css'

export default function ButtonMenuTiny({rota, title, nome, idOrg}){

    const handleClick = () => {
        localStorage.setItem('idOrg', idOrg)
        localStorage.setItem('nome', nome)
    }

    return(
        <div className={styles.box}>
            <a href={rota}><button onClick={handleClick}>{title}</button></a>
            
        </div>
    )
}