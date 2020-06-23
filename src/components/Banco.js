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
import peçasgarupa from '../images/banco/peçasgarupa.jpeg';

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
        <br/>
        (fotos ao fim da lista)
        </p>
        <br/>
    <div className="frame">
      <div className="banco">
      <iframe width='100%' height='500px' src="https://docs.google.com/spreadsheets/d/e/2PACX-1vR60uSp3ULvCTZ-iIQijVpzxTSAPdI52FKTWyNcQnbGDWUBNgRR1hwavJnDJL4cjcXaJ9hoXIh92O0S/pubhtml?gid=1708330389&amp;single=true&amp;widget=true&amp;headers=false"></iframe>
      </div>
    </div>
      <div className="fotos">
        <img justify-content="center" width="400px" src={pedais} alt= 'pedais'/>
        <img justify-content="center" width="400px" src={manetes} alt= 'manetes'/>
        <img justify-content="center" width="400px" src={passadores} alt= 'passadores'/>
        <img justify-content="center" width="400px" src={rodalivre} alt= 'rodalivre'/>
        <img justify-content="center" width="400px" src={pedivelas} alt= 'pedivelas'/>
        <img justify-content="center" width="400px" src={cubos} alt= 'cubos'/>
        <img justify-content="center" width="400px" src={blocagens} alt= 'blocagens'/>
        <img justify-content="center" width="400px" src={freios} alt= 'freios'/>
        <img justify-content="center" width="400px" src={cambiotras} alt= 'câmbios traseiros'/>
        <img justify-content="center" width="400px" src={cambiodiant} alt= 'câmbios dianteiros'/>
        <img justify-content="center" width="400px" src={mesas} alt= 'mesas'/>
        <img justify-content="center" width="400px" src={abraçadeiras} alt= 'abraçadeiras'/>
        <img justify-content="center" width="400px" src={canotes} alt= 'canotes'/>
        <img justify-content="center" width="400px" src={selim} alt= 'selim'/>
        <img justify-content="center" width="400px" height="250px" src={varios} alt= 'varios'/>
        <img justify-content="center" width="400px" src={peçasgarupa} alt= 'novas peças do banco'/>
      </div>
      </div>
  );
};

export default Banco;