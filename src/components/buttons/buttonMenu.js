import { Link } from 'react-router-dom';
import styles from './buttonMenu.module.css'

export default function ButtonMenu({rota, title}){
    return(
            <button className={styles.bnt}><Link className={styles.title} to = {rota}>{title}</Link></button>
    )
}