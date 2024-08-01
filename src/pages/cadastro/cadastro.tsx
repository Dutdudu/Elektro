import Botao from "../../components/botao";
import HeaderCadastro from "../../components/headerCadastro";
import { FacaParte, ImgCadast, PossuiCadast, Tela } from "./cadastro.style";


function Cadastro(){

    return(
        <Tela>
            <HeaderCadastro/>
            <ImgCadast>
                <img src={require('../../assets/imagemCadastro.png')} alt="Pessoa e celular gigante" />
            </ImgCadast>
            <FacaParte> Faça parte do nosso time.<br></br> Cadastre-se!!</FacaParte>
            <a href="cadastro2"><Botao texto="Cadastre-se!" /></a>
            <PossuiCadast>Já possui cadastro? Faça Login!</PossuiCadast>

        </Tela>

    )
}

export default Cadastro