import React from "react";
import oficina from '../images/oficina.jpg';

const Doações = () => {
  return (
    <div>
      <h1>Doações</h1>
      <p>É muito comum bicicletas ficarem abandonadas na garagem das casas ou nos bicicletários de condomínios (onde às vezes existem bikes empilhadas enferrujando, abandonadas por antigos moradores). O Guerrilla existe para, através de oficinas comunitárias, recuperar essas bicis e doar elas a quem precisa, ao mesmo tempo em que ensinamos pessoas a fazer a manutenção de bicicletas e se tornar mais autônomas.</p>
      <p>Se você tem aquela bicicleta parada há anos na garagem, até queria que outra pessoa pudesse usar, mas não sabe arrumar ela nem pra quem destinar, fala com a gente!</p>
      <p>Se você é morador de um condomínio com bikes abandonadas acumulando, entre em contato e nos conte a sua situação :) Já arrumamos e destinamos várias bicicletas que vieram de condomínios, fale com seu síndico!</p>
      <p>A depender do estado das bikes podemos receber/ir buscar elas. Você pode entrar em contato conosco pelo email guerrillabikecoletivo@gmail.com , pelo <a href="https://www.facebook.com/guerrillabikecoletivo/">Facebook</a> ou pelo <a href="https://www.instagram.com/guerrillabikecoletivo/">Instagram</a>. </p>
      <img justify-content="center" width="800px" src={oficina} alt= 'oficina comunitária'/>
    </div>
  );
};

export default Doações;
