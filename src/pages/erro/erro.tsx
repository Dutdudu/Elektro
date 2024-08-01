import Botao from "../../components/botao";
import Menu from "../../components/menu";
import { CapaBot2, Infeliz, Ops, Tela } from "./erro.style";
import { Bot2 } from "./erro.style";
function Erro(){

    return (
        <Tela>
            <Ops>Opsss...</Ops>
            <img src={require('../../assets/Error.png')} alt="" />
            <Infeliz>Infelizmente, parece que você ainda não está logado</Infeliz>
            <a href="/cadastro"><Botao texto="Cadastrar"/></a>
            <CapaBot2>
            <Bot2>Fazer Login</Bot2>
            </CapaBot2>
            <Menu/>
        </Tela>
        
    )
}

export default Erro