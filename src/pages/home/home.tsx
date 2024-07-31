import { Nav } from "../../components/menu.style";
import Menu from "../../components/menu";
import HamburgerMenu from "../../components/hambmenu";
import BarraSuperior from "../../components/barraSuperior";
import { CompTitle, Title, CaTitle, Categorias, SubCat, Produto, Tela, CaTitle2, CaixaCaixa } from "./home.style";
import CaixaProduto from "../../components/caixaProduto";
import ImageCarousel from "../../components/carrosel";
import carro1 from '../../assets/carro1.png';
import carro2 from '../../assets/carro3.png';
import carro3 from '../../assets/carro3.png';
/*const carro1 = require('../../assets/carro1.png');
const carro2 = require('../../assets/carro2.png');
const carro3 = require('../../assets/carro3.png');*/
function Home(){
    const fotoQuad1 = require('../../assets/fotoquad1.png');
    const fotoQuad2 = require('../../assets/fotoquad2.png');
    const fotoQuad3 = require('../../assets/fotoquad3.png');
    const fotoQuad4 = require('../../assets/fotoquad4.png');
    const fotoQuad5 = require('../../assets/fotoquad5.png');
    const fotoQuad6 = require('../../assets/fotoquad6.png');
   
    const carros = [carro1, carro2, carro3];
    return(
        
        <Tela> 
        
        <BarraSuperior/>
        <CompTitle>
            <img  src={require('../../assets/raio elektro 1.png')} alt="" />
            <Title> Bem vindo à Elektro!</Title>
        </CompTitle>
        <ImageCarousel images={carros} />
        <CaTitle>
            Categorias Elektro
        </CaTitle>
        <Categorias>
            <SubCat>
                <Produto>
                    <img src={require('../../assets/fotocirc1.png')} alt="Celulares" />
                    <p> Celulares</p>
                </Produto>
                <Produto>
                    <img src={require('../../assets/fotocirc2.png')} alt="Notebooks" />
                    <p> Notebooks</p>
                </Produto>
                <Produto>
                    <img src={require('../../assets/fotocirc3.png')} alt="Tablets" />
                    <p> Tablets</p>
                </Produto>
                <Produto>
                    <img src={require('../../assets/fotocirc4.png')} alt="Periféricos" />
                    <p> Periféricos</p>
                </Produto>
            </SubCat>
            <SubCat>
                <Produto>
                    <img src={require('../../assets/fotocirc5.png')} alt="TVs" />
                    <p> TVs</p>
                </Produto>
                <Produto>
                    <img src={require('../../assets/fotocirc6.png')} alt="Acessórios" />
                    <p> Acessórios</p>
                </Produto>
                <Produto>
                    <img src={require('../../assets/fotocirc7.png')} alt="PCs" />
                    <p> PCs</p>
                </Produto>
                <Produto>
                    <img src={require('../../assets/fotocirc8.png')} alt="Smartwatches" />
                    <p> Smartwatches</p>
                </Produto>
            </SubCat>
        </Categorias>
        <CaTitle2>
            Para Você
        </CaTitle2>
        <CaixaCaixa>
            <CaixaProduto imagem= {fotoQuad1}  nome="Celular" preco="R$800,00" ></CaixaProduto>
            <CaixaProduto imagem= {fotoQuad2}  nome="Capa" preco="R$20,00" ></CaixaProduto>
        </CaixaCaixa>

        <CaTitle2>
            Produtos em Destaque
        </CaTitle2>
        <CaixaCaixa>
            <CaixaProduto imagem= {fotoQuad3}  nome="Smart TV" preco="R$1400,00" ></CaixaProduto>
            <CaixaProduto imagem= {fotoQuad4}  nome="Monitor" preco="R$750,00" ></CaixaProduto>
        </CaixaCaixa>
        <CaTitle2>
            Mais Vendidos
        </CaTitle2>
        <CaixaCaixa>
            <CaixaProduto imagem= {fotoQuad5}  nome="Smartphone" preco="R$3200,00" ></CaixaProduto>
            <CaixaProduto imagem= {fotoQuad6}  nome="Smartwatch" preco="R$900,00" ></CaixaProduto>
        </CaixaCaixa>
        <Menu/>
        </Tela>
    )
}

export default Home;