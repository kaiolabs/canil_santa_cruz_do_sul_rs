import styles from './simplesNavBar.module.css';
import img from '../../images/logo3.png'

export default function SimplesNavbar() {
    return (
        <div className={styles.box}>
            <a href='#Home'>
              <img
                src={img}
                alt="Logo do canil"
                className={styles.logo}
              />
            </a>
        </div>
    );
}