import React from "react";
import foto1 from '../images/foto1.jpg';
import foto2 from '../images/foto2.jpg';
import foto3 from '../images/foto3.jpg';
import foto4 from '../images/foto4.jpg';
import foto5 from '../images/foto5.jpg';
import foto6 from '../images/foto6.jpg';
import foto7 from '../images/foto7.jpg';
import foto8 from '../images/foto8.jpg';

const Oficinas = () => {
  return (
    <div>
      <h1>Oficinas Comunitárias</h1>
      <p>
      Fazemos encontros em praças, parques, em geral na rua, para ensinar mecânica de bicicleta pra quem se interessar. Fazemos reparos simples e gratuitos nas bikes e, se tivermos a peça que você precisa no nosso banco de peças, é só pegar!
      </p>
      <p>
        Quer que a gente cole em um evento, escola, bairro? 
        <br/> Manda uma mensagem pro guerrillabikecoletivo@gmail.com 
        <br/> Ou no <a href="https://www.facebook.com/guerrillabikecoletivo/">Facebook</a>, 
        ou no <a href="https://www.instagram.com/guerrillabikecoletivo/">Insta</a>!

      </p>
      <div className="fotos">
        <img width="400px" src={foto1} alt= 'oficina comunitária'/>
        <img width="400px" src={foto2} alt= 'oficina comunitária'/>
        <img width="400px" src={foto3} alt= 'oficina comunitária'/>
        <img width="400px" src={foto4} alt= 'oficina comunitária'/>
        <img width="400px" src={foto5} alt= 'oficina comunitária'/>
        <img width="400px" src={foto6} alt= 'oficina comunitária'/>
        <img width="400px" src={foto7} alt= 'oficina comunitária'/>
        <img width="400px" src={foto8} alt= 'oficina comunitária'/>
        </div>
    </div>

        );
};

export default Oficinas;