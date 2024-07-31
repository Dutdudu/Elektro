import { CaixaProd, StatProd, InfoProd, Preco, Pe } from "./caixaProduto.style"
import { useState } from "react"
type PrivateProps = {
    imagem: string;
    nome: string;
    preco: string;

}
function CaixaProduto({imagem, nome, preco}: PrivateProps){

    const [isFavorito, setIsFavorito] = useState(false);
    const mudar = () =>{
        setIsFavorito(!isFavorito)

    }
    return(
        <CaixaProd>
            <img src={imagem} alt={nome} />
            <StatProd>
                <InfoProd>
                    <Pe>{nome}</Pe>
                    <Preco>{preco}</Preco>
                </InfoProd>
                <img 
                width={25} 
                height={20} 
                src= {isFavorito ? require('../assets/coracaopintado.png') : require('../assets/coracao.png')}
                onClick={mudar}
                />
            </StatProd>

        </CaixaProd>
    )
    

}

export default CaixaProduto