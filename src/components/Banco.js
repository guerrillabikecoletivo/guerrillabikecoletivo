import React from "react";

const Banco = () => {
  return (
    <div>
      <h1>Banco de Peças</h1> 
      <p>
        Organizamos o que recebemos de doação em um banco de peças, 
        para utilizarmos nas oficinas comunitárias e para que você possa consultar 
        e pedir pra gente o que está precisando. Encontrou algo que estava faltando 
        para arrumar sua bike? Fala com a gente no guerrillabikecoletivo@gmail.com, ou 
        no <a href="https://www.facebook.com/guerrillabikecoletivo/">Facebook</a>, 
        ou no <a href="https://www.instagram.com/guerrillabikecoletivo/">Instagram</a> :)
        <br/>
        Postamos imagens das peças nos stories do Instagram - elas ficam nos destaques!
        </p>
        <br/>
        <div className="frame">
          <div className="banco">
            <iframe width='100%' height='500px' src="https://docs.google.com/spreadsheets/d/e/2PACX-1vR60uSp3ULvCTZ-iIQijVpzxTSAPdI52FKTWyNcQnbGDWUBNgRR1hwavJnDJL4cjcXaJ9hoXIh92O0S/pubhtml?gid=1708330389&amp;single=true&amp;widget=true&amp;headers=false"></iframe>
          </div>
        </div>
      </div>
  );
};

export default Banco;