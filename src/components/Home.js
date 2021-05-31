import React from "react";
import Capa from '../images/grupo.jpg';
import {Link} from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h2>GUERRILLA BIKE COLETIVO</h2>
      <p>
      Coletivo autônomo, criado e tocado entre amigos, com o objetivo de promover e facilitar o uso da bicicleta em Florianópolis. Estamos sempre aceitando doações! :)
      </p>
        <img src={Capa} alt= 'grupo gbc'/>
      <hr/>
      <p>
        <strong>O que fazemos:</strong>
      </p>
      <ul>
        <li>Oficinas comunitárias itinerantes</li>
        <li>Recebemos bikes e peças usadas</li>
        <li>Reparamos e destinamos bicicletas a quem precisa</li>
      </ul>

      <p>
      Quer usar a bike como transporte mas não tem como comprar? {<Link to="/Pedidos">Preencha o formulário e entre na fila de espera para receber uma!</Link>}
      </p>
      <p>
      Tem uma bike parada na garagem? {<Link to="/Doações">Doa ela pra gente destinar a alguém que precisa :)</Link>}
      </p>
      <p>
      Conheça também o nosso {<Link to="/Banco">Banco de Peças!</Link>}
      </p>
      
    </div>
  );
};

export default Home;
