
import styles from './buttonMenu.module.css'

export default function ButtonMenu({rota, title}){
    return(
        <div className={styles.box}>
            <a href={rota}><button>{title}</button></a>
        </div>
    )
}