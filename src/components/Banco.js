import React from "react";
import banco1 from '../images/banco1.jpg';

const Banco = () => {
  return (
    <div>
      <h1>Banco de Peças</h1> 
      <p>
        Organizamos o que recebemos de doação em um banco de peças, 
        para utilizarmos nas oficinas comunitárias e para que você possa consultar 
        e pedir pra gente o que está precisando. Algo que está faltando 
        para arrumar sua bike? Fala com a gente no guerrillabikecoletivo@gmail.com, ou 
        no <a href="https://www.facebook.com/guerrillabikecoletivo/">Facebook</a>, 
        ou no <a href="https://www.instagram.com/guerrillabikecoletivo/">Instagram</a> :)
        <br/>
        Postamos imagens das peças nos stories do Instagram - elas ficam nos destaques!
        </p>
        <img justify-content="center" width="800px" src={banco1} alt= 'oficina comunitária - banco de peças'/>
    </div>
  );
};

export default Banco;