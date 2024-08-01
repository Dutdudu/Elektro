import { Cadastrarse, HeadCadast, SetaEsq } from "./headerCadastro.style";


function HeaderCadastro(){

    return(

        <HeadCadast>
            <SetaEsq>
            <a href="/"><img src={require('../assets/setaEsquerda.png')} alt="seta" /></a>
            </SetaEsq>

            <Cadastrarse> Cadastrar-se</Cadastrarse>

        </HeadCadast>
    )


}

export default HeaderCadastro