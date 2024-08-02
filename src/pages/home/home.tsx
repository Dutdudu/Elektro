import { Nav } from "../../components/menu.style";
import Menu from "../../components/menu";
import HamburgerMenu from "../../components/hambmenu";
import BarraSuperior from "../../components/barraSuperior";
import { CompTitle, Title, CaTitle, Categorias, SubCat, Produto, Tela, CaTitle2, CaixaCaixa, Footer, IconesSeguidos, A, P } from "./home.style";
import CaixaProduto from "../../components/caixaProduto";
import ImageCarousel from "../../components/carrosel";
import carro1 from '../../assets/carro1.png';
import carro2 from '../../assets/carro2.png';
import carro3 from '../../assets/carro3.png';
import Carousel from "../../components/carrossel2";
import CarrosselProdutos from "../../components/carrossel2";
import CarrosselProdutos2 from "../../components/carrossel3";
import CarrosselProdutos3 from "../../components/carrossel4";
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
                <A href="/erro2"> <img src={require('../../assets/fotocirc1.png')} alt="Celulares" /></A>   
                    <P> Celulares</P>
                </Produto>
                <Produto>
                <A href="/erro2"><img src={require('../../assets/fotocirc2.png')} alt="Notebooks" /></A>
                    <P> Notebooks</P>
                </Produto>
                <Produto>
                <A href="/erro2"> <img src={require('../../assets/fotocirc3.png')} alt="Tablets" /></A>
                    <P> Tablets</P>
                </Produto>
                <Produto>
                <A href="/erro2"> <img src={require('../../assets/fotocirc4.png')} alt="Periféricos" /></A>
                    <P> Periféricos</P>
                </Produto>
            </SubCat>
            <SubCat>
                <Produto>
                    <A href="/erro2"><img src={require('../../assets/fotocirc5.png')} alt="TVs" /></A>
                    <P> TVs</P>
                </Produto>
                <Produto>
                <A href="/erro2"> <img src={require('../../assets/fotocirc6.png')} alt="Acessórios" /></A>
                    <P> Acessórios</P>
                </Produto>
                <Produto>
                <A href="/erro2"> <img src={require('../../assets/fotocirc7.png')} alt="PCs" /></A>
                    <P> PCs</P>
                </Produto>
                <Produto>
                <A href="/erro2"> <img src={require('../../assets/fotocirc8.png')} alt="Smartwatches" /></A>
                    <P> Smartwatches</P>
                </Produto>
            </SubCat>
        </Categorias>
        <CaTitle2>
            Para Você
        </CaTitle2>
        <CarrosselProdutos/>

        <CaTitle2>
            Produtos em Destaque
        </CaTitle2>
        
        <CarrosselProdutos2/>
        
        <CaTitle2>
            Mais Vendidos
        </CaTitle2>
       <CarrosselProdutos3/>
        <Footer>
            <p>Siga-nos nas redes sociais!</p>
            <IconesSeguidos>
                <img src={require('../../assets/face.png')} alt="face" />
                <img src={require('../../assets/insta.png')} alt="insta" />
                <img src={require('../../assets/tiktok.png')} alt="tiktok" />
                <img src={require('../../assets/tt.png')} alt="tt" />
                <img src={require('../../assets/linkedin.png')} alt="linkedin" />
            </IconesSeguidos>

        </Footer>
        <Menu/>
        </Tela>
    )
}

export default Home;