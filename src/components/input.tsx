import { Texto } from "./input.style";
import { CaixaInput, RealInput } from "./input.style";

type PrivateProps = {

    placeHolder: string;
    texto: string;


}

function Input({placeHolder, texto}: PrivateProps){

    return(
        <CaixaInput>
            <Texto>
                {texto}
            </Texto>
            <RealInput placeholder={placeHolder}/>

            
        </CaixaInput>
    )

}

export default Input