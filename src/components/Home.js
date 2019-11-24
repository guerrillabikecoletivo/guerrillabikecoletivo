import React from "react";
import Capa from '../images/grupo.jpg';

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
        <li>Recebemos bikes e partes usadas</li>
        <li>Reparamos e destinamos bicicletas a quem precisa</li>
      </ul>
      
      
      
    </div>
  );
};

export default Home;
