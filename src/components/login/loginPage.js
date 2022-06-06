import Navbar from '../navBar/navBar'
import styles from './loginPage.module.css'
import img from '../../images/logo2.png'
import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { supabaseAuthentication } from '../server/supabase_authentication'


export default function LoginPage() {


    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }

    const messengerError = () => {
        toast.error("Email ou senha inválidos!", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    }
    

    const messengerSuccess = () => {
        toast.success('Login bem sucedido', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
    }

    function validateEmail(email) {
        var re = /\S+@\S+\.\S+/;
        return re.test(email);
    }

    const handleFormSubmit = async(e) => {
        e.preventDefault()

        if (password.length < 8 || validateEmail(email) === false) {
            messengerError()
        } else {
            
            let { user, error } = await supabaseAuthentication.auth.signIn({
                email: email,
                password: password
            })
  
            if (error) {
                console.log(error)
                messengerError();
            }else {
                localStorage.setItem('token', user.aud)
                localStorage.setItem('expiryDate',
                    new Date(new Date().getTime() + (1000 * 60 * 60 * 1)).toString())
                messengerSuccess();
                window.location.href = '/5872b189-7ede-4e1d-895e-45a966e4c876'
                
            }

        }
    }


    return(
        <div>
            <header>
                <Navbar/>
            </header>
            
            <div  className={styles.container}>
                <div className={styles.card}>
                    <img
                        src={img}
                        alt="Logo do canil"
                        className={styles.logo}
                    />
                    <div className = {styles.form} >
                        <h1>Login</h1>
                        <form onSubmit={handleFormSubmit}>

                            <input 
                                required
                                type="email" 
                                placeholder="Email"
                                maxLength={60}
                                value={email}
                                onChange={handleEmailChange}
                            />

                            <input 
                                required
                                // tamanho mínimo da senha
                                minLength={8}
                                type="password" 
                                placeholder="Senha"
                                value={password}
                                onChange={handlePasswordChange}
                                

                            />

                            <button>Entrar</button>
                            
                        </form>
                        <p>Não tem uma conta? <a href="/6f92b345-0ea3-4d40-8791-2512b476e875">Cadastre-se</a></p>
                    </div>
                </div>
            </div>
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </div>

    )
}