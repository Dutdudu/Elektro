
import Menu from "../../components/menu";
import { BotSeta, Infeliz, Ops, Tela } from "./erro2.style";

function Erro2(){

    return (
        <Tela>
            <Ops>Opsss...</Ops>
            <img src={require('../../assets/Error.png')} alt="" />
            <Infeliz>Infelizmente, parece que não encontramos o produto desejado</Infeliz>
            <a href="/"><BotSeta src={require('../../assets/botSeta2.png')} alt="botseta2"/></a>
            <Menu/>
        </Tela>
        
    )
}

export default Erro2