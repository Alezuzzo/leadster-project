import React from "react";

function Footer() {
  return (
    <section>
      <div className="divLogoFooter">
        <img src="/img/logo.png" alt="logo leadster" />
        <p>Transformando visitantes em clientes</p>
      </div>
      <div className="divInformationFooter">
        <ul>
          <p>Links Principais</p>
          <li><a href="https://leadster.com.br/">Home</a></li>
          <li><a href="https://leadster.com.br/">Ferramenta</a></li>
          <li><a href="https://leadster.com.br/">Preços</a></li>
          <li><a href="https://leadster.com.br/">Contato</a></li>
        </ul>

        <ul>
          <p>Cases</p>
          <li><a href="https://leadster.com.br/">Geração de Leads B2B</a></li>
          <li><a href="https://leadster.com.br/">Geração de Leads em Software</a></li>
          <li><a href="https://leadster.com.br/">Geração de Leads em Imobiliária</a></li>
          <li><a href="https://leadster.com.br/">Cases de Sucesso</a></li>
        </ul>

        <ul>
          <p>Materiais</p>
          <li><a href="https://leadster.com.br/">Blog</a></li>
          <li><a href="https://leadster.com.br/">Parceria com Agências</a></li>
          <li><a href="https://leadster.com.br/">Guia Definitivo do Marketing</a></li>
          <li><a href="https://leadster.com.br/">Materiais Gratuitos</a></li>
        </ul>

        <ul>
          <p>Siga a Leadster</p>
          <img src="" alt="in" />
          <img src="" alt="in" />
          <img src="" alt="in" />
          <li>E-mail: contato@leadster.com.br</li>
          <li>Telefone: (42)98828-9851</li>
        </ul>
      </div>
    </section>
  );
}

export default Footer;
