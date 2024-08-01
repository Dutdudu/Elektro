import { Anima, BemVindo, BotSeta, Conseguiu, Tela } from "./parabens.style";


function Parabens(){

    return(
        <Tela>
            <Anima src={require('../../assets/animacao.png')}alt = "anima"/>
            <Conseguiu> Parabéns, você conseguiu!</Conseguiu>
            <BemVindo> Bem-vindo ao time de usuários e colaboradores do Elektro.</BemVindo>
            <a href="/"><BotSeta src={require('../../assets/botSeta.png')} alt="botseta"/></a>

        </Tela>

    )

}

export default Parabens