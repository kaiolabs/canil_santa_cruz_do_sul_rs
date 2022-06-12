import styles from './navbar.module.css'
import Button from '../buttons/button'
import img from '../../images/logo3.png'

export default function Navbar() {
    return (
        <div className={styles.box}>
            <a href='#Home'>
              <img
                src={img}
                alt="Logo do canil"
                className={styles.logo}
              />
            </a>
            
                <nav>
                    <Button link="https://www.instagram.com/canil_municipal_scs/?hl=pt" text="Instagram"/>
                    <Button link="https://www.facebook.com/canilmunicipaldesantacruzdosul/" text="Facebook"/>
                </nav>
        </div>
    );
}