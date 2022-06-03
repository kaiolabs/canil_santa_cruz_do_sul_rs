import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate} from "react-router-dom";
import HomePage from "../home/home.js";
import LoginPage from "../login/loginPage";
import CadastraIntegrante from "../pages_cadastro/cadastraIntegrante.js";
import CadastraMembrosDaDiretoria from "../pages_cadastro/cadastraMembrosDaDiretoria.js";
import CadastraONG from "../pages_cadastro/cadastraONG.js";
import CadastraProtetorIndependente from "../pages_cadastro/cadastraProtetorIndependente.js";
import EscolhaDeCadastro from "../pages_cadastro/escolhaDeCadastro.js";
import PermitirAcessoAoSite from "../pages_cadastro/permitirAcessoAoSite.js";
import Integrantes from "../pages_consulta/integrantes.js";
import MembrosDaDiretoria from "../pages_consulta/membrosDaDiretoria.js";
import Ongs from "../pages_consulta/ongs.js";
import ProtetoresIndependentes from "../pages_consulta/protetoresIndependentes.js";
import { isAuthenticated } from "../server/authe";

function PrivateRoute({ children }) {
    const auth = isAuthenticated();
    return auth ? children : <Navigate to="/" />;
  }

const Rotas = () => (
    <Router>
        <Routes>
            <Route exact path="/" element={<LoginPage/>}></Route>
            <Route path='*' element={<h1>Not Found</h1>}/>


            <Route path="/6f92b345-0ea3-4d40-8791-2512b476e875" element={
                <PrivateRoute>
                   <EscolhaDeCadastro/>
                </PrivateRoute>
            }/>
            

            <Route path="/5872b189-7ede-4e1d-895e-45a966e4c876" element={
                <PrivateRoute>
                    <HomePage/>
                </PrivateRoute>
            }/>


            <Route path="/26cb1fd3-a71a-4c82-93f9-652da031b967" element={
                <PrivateRoute>
                    <CadastraMembrosDaDiretoria/>
                </PrivateRoute>
            }/>


            <Route path="/777a6bf1-75d6-4027-aa00-ecbfd724cf1c" element={
                <PrivateRoute>
                    <CadastraIntegrante/>
                </PrivateRoute>
            }/>

            <Route path="/c8188d50-7e7e-44d5-81fa-6d666563eff3" element={<CadastraONG/>}/>

            <Route path="/9018cb68-66e3-4fdd-bf90-bfb54d52b0f7" element={<CadastraProtetorIndependente/>}/>

            <Route path="/e6851794-1cff-4aea-a1b6-5686a6f2afb6" element={
                <PrivateRoute>
                   <PermitirAcessoAoSite/>
                </PrivateRoute>
            }/>

            <Route path="/65ff8568-cf3e-4555-a242-cd6bc6b9cb91" element={
                <PrivateRoute>
                   <MembrosDaDiretoria/>
                </PrivateRoute>
            }/>

            <Route path="/181cedce-362b-4669-85f3-cf9d86a1339a" element={
                <PrivateRoute>
                   <Integrantes/>
                </PrivateRoute>
            }/>

            <Route path="/9bfff959-74f6-41ea-b37a-ad5007b0cc04" element={
                <PrivateRoute>
                   <Ongs/>
                </PrivateRoute>
            }/>

            <Route path="/02c19a89-30b6-4ac8-9aee-7cd24e08f73c" element={
                <PrivateRoute>
                   <ProtetoresIndependentes/>
                </PrivateRoute>
            }/>

        </Routes>
    </Router>
);

export default Rotas;