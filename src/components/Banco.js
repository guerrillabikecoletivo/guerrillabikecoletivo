import React from "react";
import pedais from '../images/banco/pedais.jpg';
import manetes from '../images/banco/manetes.jpg';
import passadores from '../images/banco/passadores.jpg';
import rodalivre from '../images/banco/rodalivre.jpg';
import pedivelas from '../images/banco/pedivelas.jpg';
import cubos from '../images/banco/cubos.jpg';
import blocagens from '../images/banco/blocagens.jpg';
import freios from '../images/banco/freios.jpg';
import cambiotras from '../images/banco/cambiotras.jpg';
import cambiodiant from '../images/banco/cambiodiant.jpg';
import mesas from '../images/banco/mesas.jpg';
import abraçadeiras from '../images/banco/abraçadeiras.jpg';
import canotes from '../images/banco/canotes.jpg';
import selim from '../images/banco/selim.jpg';
import varios from '../images/banco/varios.jpg';

const Banco = () => {
  return (
    <div className="form">
      <h1>Banco de Peças</h1> 
      <p>
        Organizamos o que recebemos de doação em um banco de peças, 
        para utilizarmos nas oficinas comunitárias e para que você possa consultar 
        e pedir pra gente o que está precisando. Encontrou algo que estava faltando 
        para arrumar sua bike? Fala com a gente no guerrillabikecoletivo@gmail.com, ou 
        no <a href="https://www.facebook.com/guerrillabikecoletivo/">Facebook</a>, 
        ou no <a href="https://www.instagram.com/guerrillabikecoletivo/">Instagram</a> :)
      </p>
      <ul>
        <li>Pedal (par)	- 10</li>
        <li>Pedal (avulso)	- 6	(5 esquerda / 1 direita)</li>
        <div justify-content="left" className="fotos">
        <img width="500px" src={pedais} alt= 'pedais'/>
        </div>
        <br/>
        <li>Manete + passador de marcha (avulso) -	2	(shimano)</li>
        <li>Manete (par)	- 3	(1 original caloi 10 / 2 alumínio)</li>
        <li>Manete (avulso)	- 9</li>
        <li>Passador de marcha (par) -	1	(shimano 8 marchas rapidfire)</li>
        <li>Passador de marcha (avulso) -	1	(thumb shifter 6 marchas shimano)</li>
        <div justify-content="left" className="fotos">
        <img width="500px" src={manetes} alt= 'manetes de freio'/>
        <img width="500px" src={passadores} alt= 'passadores de marcha'/>
        </div>
        <br/>
        <li>Roda livre -	3	(1, 6 e 7 marchas)</li>
        <li>Cassete	- 3	(8, 7 e 5 marchas, todos incompletos)</li>
        <li>Pinhão fixo -	2	(18 e 24 dentes)</li>
        <div justify-content="left" className="fotos">
        <img width="500px" src={rodalivre} alt= 'roda livre, cassete, pinhão fixo'/>
        </div>
        <br/>
        <li>Pedivela monobloco -	2	(1 coroa e triplo)</li>
        <li>Pedivela triplo -	2	(eixo quadrado)</li>
        <li>Pedivela duplo -	1	(de chaveta)</li>
        <li>Pedivela single -	1	(eixo quadrado)</li>
        <li>Pedivela integrado -	1	(alumínio preto, ponta quadrada)</li>
        <li>Movimento central -	2	(1 selado 103mm, 1 de caixinha)</li>
        <div justify-content="left" className="fotos">
        <img width="500px" src={pedivelas} alt= 'pedivelas'/>
        </div>
        <br/>
        <li>Cubo (par) -	1	(alumínio preto, 36 furos, eixo p/ blocagem)</li>
        <li>Cubo traseiro -	1	(flip flop, rosca do lockring espanada, 36 furos)</li>
        <li>Blocagem (par) -	3</li>
        <li>Blocagem (avulso) -	3	traseiras</li>
        <div justify-content="left" className="fotos">
        <img width="500px" src={cubos} alt= 'cubos'/>
        <img width="500px" src={blocagens} alt= 'blocagens'/>
        </div>
        <br/>
        <li>Freio v-brake de alumínio (par)	- 2</li>
        <li>Freio v-brake de nylon (par)	- 1</li>
        <li>Freio ferradura alumínio (par)	- 1	(caloi 10 original)</li>
        <li>Freio ferradura estrada (par)	- 1	(preto)</li>
        <li>Freio ferradura dianteiro estrada (avulso)	- 2	(preto e polido)</li>
        <li>Par de freios completos caixinha	- 1</li>
        <li>Freio a disco mecânico (avulso)	- 1</li>
        <li>Pastilha (par)	- 1</li>
        <li>Pastilha (avulso)	- 1	(esquerda)</li>
        <div justify-content="left" className="fotos">
        <img width="500px" src={freios} alt= 'freios'/>
        </div>
        <br/>
        <li>Câmbio traseiro	- 4	(1 caloi 10, 2 com gancheira, 1 generico)</li>
        <li>Câmbio dianteiro	- 5	(2 genericos, 1 shimano sora, 1 shimano altus que prende no mov. central, 1 com puxada superior/inferior)</li>
        <div justify-content="left" className="fotos">
        <img width="500px" src={cambiotras} alt= 'câmbio traseiro'/>
        <img width="500px" src={cambiodiant} alt= 'câmbio dianteiro'/>
        </div>
        <br/>
        <li>Mesa alumínio sem rosca	- 3	(1 de 1 polegada, 2 de 1 e 1/8; para guidão 25.8)</li>
        <li>Mesa para garfo com rosca	- 2</li>
        <li>Guidão	- 2	(reto e riser)</li>
        <li>Manopla (par)	- 4	(1 espuma, 2 generica, 1 caixinha)</li>
        <div justify-content="left" className="fotos">
        <img width="500px" src={mesas} alt= 'mesas'/>
        </div>
        <br/>
        <li>Selim	- 7</li>
        <li>Capa para selim	- 1	(de gel)</li>
        <li>Canote sem carrinho	- 3	(1 de aço, 27.2; 2 de alumínio, 26.8)</li>
        <li>Canote com carrinho	- 2	(27.2 e 25.4)</li>
        <li>Abraçadeira de selim	- 4</li>
        <li>Abraçadeira de canote com blocagem - 1</li>
        <div justify-content="left" className="fotos">
        <img width="500px" src={selim} alt= 'selim'/>
        <img width="500px" src={canotes} alt= 'canotes'/>
        <img width="500px" src={abraçadeiras} alt= 'abraçadeiras'/>
        </div>
        <br/>
        <li>Raiação para roda inteira	- 2	36 raios cada</li>
        <li>Pezinho	- 2</li>
        <li>Ciclocomputador	- 1</li>
        <li>Firmapé gaiola nylon (par)	- 1</li>
        <li>Bolsa de quadro	- 1</li>
        <li>Bolsa de canote	- 1</li>
        <div justify-content="left" className="fotos">
        <img width="500px" src={varios} alt= 'varios'/>
        </div>
        <br/>
      </ul>
    </div>
  );
};

export default Banco;