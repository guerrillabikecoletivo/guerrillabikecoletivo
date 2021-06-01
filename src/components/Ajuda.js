import React from "react";
import capish1 from '../images/capish1.jpg';
import capish2 from '../images/capish2.jpg';

const Ajuda = () => {
  return (
    <div>
      <h1>Como você pode ajudar</h1>
      <p> 
      Temos uma lista (abaixo) de itens que precisamos para tocar os trabalhos.
      Se você tem alguma dessas ferramentas para doar, entre em contato que vamos buscar!
      Caso queira contribuir financeiramente, temos algumas opções: 
      </p>
      <hr/>
      <p>
      1) Faça uma contribuição voluntária, com qualquer valor, pelo nosso PIX. Chave PIX: guerillabikecoletivo@gmail.com
      </p>
      <p>
      2) Compre um cap da edição especial feita em parceira com o pessoal da Capish! Na compra de 
      um cap do Guerrilla, parte do dinheiro é revertido para o nosso caixinha e usado na compra 
      de equipamentos e produtos que precisamos.
      </p>
      <a href="https://produto.mercadolivre.com.br/MLB-1411384473-bone-de-ciclismo-cap-guerrilla-bike-coletivo-capish-caveira-_JM?quantity=1">[Link para comprar]</a>
      
      <div className="fotos">
        <img justify-content="center" width="400px" src={capish1} alt= 'cap especial G.B.C. da marca capish'/>
        <img justify-content="center" width="400px" src={capish2} alt= 'cap especial G.B.C. da marca capish'/>
      </div>
      <hr/>
      <p>
      3) Temos também pontos de coleta para doações (famosa "caixinha")
      na <a href="https://www.facebook.com/chosenbikeshop/">Chosen</a> ou na <a href="https://www.facebook.com/garupa.bike/">Garupa</a>, ambas parceiras do coletivo, no bairro Trindade.
      </p>
      <div className="maps">
      <iframe 
      src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14145.02971062429!2d-48.5263176!3d-27.5855475!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xc18dddb0c002fc5a!2sChosen%20Bike%20Shop%20-%20Oficina%20Especializada%20em%20Manuten%C3%A7%C3%A3o%20de%20Bicicleta!5e0!3m2!1spt-BR!2sbr!4v1575325053736!5m2!1spt-BR!2sbr" 
      title="chosen"
      width="350" 
      height="250"
      margin="15px" 
      frameborder="0"  
      allowfullscreen="">
      </iframe>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3535.949667677561!2d-48.52368924979814!3d-27.595090028568748!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x952738542d1babfd%3A0x60fe405dfaa08a2e!2sGarupa%20Bicicletaria%20%26%20Etc.!5e0!3m2!1spt-BR!2sbr!4v1575485959781!5m2!1spt-BR!2sbr" 
      title="garupa"
      width="350" 
      height="250" 
      margin="15px" 
      frameborder="0"
      allowfullscreen="">
      </iframe>
      </div>
      <br/>      
      <br/>
      <p>
        <strong>Ferramentas para manutenção de bicicletas</strong>
        <br/>
        <br/>
        <strong>Comum:</strong>
        <br/>
        (em ordem de prioridade)
        <br/>
        <br/>
        <ul>
          <li>Chaves de boca e estrela em todos os tamanhos possíveis. Os tamanhos indispensáveis são 9, 10, 13, 14, 15 e 17 mm</li>
          <li>Chaves de boca reguláveis</li>
          <li>Chaves de fenda e Phillips de tamanhos variados</li>
          <li>Chaves Allen e Torx em todos os tamanhos possíveis. Os tamanhos indispensáveis são 4, 5, 6 e 8 mm</li>
          <li>Alicates (universal, bico fino e de corte)</li>
          <li>Martelos e marretas</li>
          <li>Panos</li>
          <li>Tacos de madeira</li>
          <li>Morsa de bancada</li>
          <li>Chaves de catraca/soquete</li>
          <li>Serras</li>
          <li>Pincéis</li>
          <li>Mangueira de água</li>
        </ul>
      </p>
        <strong>Específicos:</strong>
        <br/>
        (em ordem de prioridade)
        <br/>
        <br/>
        <ul>
          <li>Bomba de ar</li>
          <li>Espátulas de pneu</li>
          <li>Chave de corrente</li>
          <li>Chaves de cone</li>
          <li>Chave de raio</li>
          <li>Extrator de pedivela</li>
          <li>Chave de movimento central</li>
          <li>Extratores de cassete</li>
          <li>Ferramentas para instalar e desmontar caixa de direção</li>
          <li>Chave de porca de coroa</li>
          <li>Chave de lock ring</li>
          <li>Chaves de roda livre</li>
          <li>Chaves de movimento central integrado</li>
          <li>Cavalete para prender bicicleta</li>
          <li>Cavalete para centrar rodas</li>
        </ul>
        <br/>
        <strong>Produtos para manutenção:</strong>
        <br/>
        <br/>
        <ul>
          <li>Óleo de corrente</li>
          <li>WD-40</li>
          <li>Desengripante</li>
          <li>Graxa</li>
          <li>Desengraxante</li>
          <li>Detergente</li>
        </ul>
        <br/>
        <strong>Peças de reposição (novas):</strong>
        <br/>
        <br/>
        <ul>
          <li>Remendo para câmara de ar</li>
          <li>Cabos e conduítes</li>
          <li>Pastilhas de freio</li>
        </ul>
    </div>
  );
};

export default Ajuda;