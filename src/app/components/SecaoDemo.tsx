import React from "react";

function SecaoDemo() {
  return (
    <section className="demoSection">
      <div className="divDemoImg">
        <img src="/img/CTA.png" alt="call to action" />
      </div>
      <div className="divDemoCTA">
        <h1>Pronto para triplicar sua Geração de Leads?</h1>
        <h2>Criação e ativação em 4 minutos.</h2>
        <button className="buttonDemo">VER DEMONSTRAÇÃO</button>
        <img src="/img/selo_RD.png" alt="selo RD" className="seloRD"/>
        <img src="/img/no-card-dark.webp" alt="" className="noCard"/>
        <p>Não é necessário Cartão de Crédito |</p>
        <img src="/img/rating.webp" alt="satisfação" className="ratingStar"/>
        <p>4.9/5 média de satisfação</p>
      </div>
    </section>
  );
}

export default SecaoDemo;
