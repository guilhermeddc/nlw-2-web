import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

const TeacherItem: React.FC = () => {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://avatars1.githubusercontent.com/u/43120894?s=460&u=aade7f6f124dab839a3914325fa4760fe8afac19&v=4"
          alt="Guilherme Rodrigues"
        />
        <div>
          <strong>Guilherme Rodrigues</strong>
          <span>Matemárica</span>
        </div>
      </header>

      <p>
        Entusiasta em tecnologia, fascinado por linhas de código,
        <br />
        <br />
        matemática, quebra-cabeças e por desafios. Desenvolvedor fullstack com
        react, react-native e nodejs.
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ 80,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp" />
          Entrar em contato
        </button>
      </footer>
    </article>
  );
};

export default TeacherItem;
