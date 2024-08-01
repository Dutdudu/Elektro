import Botao from "../../components/botao"
import HeaderCadastro from "../../components/headerCadastro"
import Input from "../../components/input"
import { FaceGoogle, Logo, Tela } from "./cadastro2.style"

function Cadastro2(){

    return(
        <Tela>
            <HeaderCadastro/>
            <FaceGoogle>
                <Logo>
                    <img src={require('../../assets/facecirc.png')} alt="face" />
                </Logo>
                <p>ou</p>
                <Logo>
                    <img src={require('../../assets/googlecirc.png')} alt="google" />
                </Logo>

                

            </FaceGoogle>
            <Input texto="Nome" placeHolder="Digite seu nome completo"/>
            <Input texto="CPF" placeHolder="Digite seu CPF"/>
            <Input texto="Telefon" placeHolder="Digite seu telefone"/>
            <Input texto="E-mail" placeHolder="Digite seu e-mail"/>
            <Input texto="Senha" placeHolder="Digite sua senha"/>
            <Input texto="Confirme sua Senha" placeHolder="Confirme sua Senha"/>
            <a href="/parabens"><Botao texto="Cadastrar-se!"/></a>
        </Tela>

    )
}

export default Cadastro2