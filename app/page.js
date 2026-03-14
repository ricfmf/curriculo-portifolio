export default function Home() {
  return (
    <div>
      <section className="hero">
        <h1>Robson Lins</h1>
        <p>Estudante de Ciência da Computação | Desenvolvedor de Software | Recife, PE</p>
      </section>

      <section className="section-card">
        <h2>Sobre Mim</h2>
        <p>
          Apaixonado por tecnologia, com sólida base em algoritmos, análise léxica e banco de dados. 
          Tenho experiência prática no desenvolvimento de sistemas e infraestrutura de software, 
          sempre com um olhar apurado para UI/UX Design visando entregar a melhor experiência ao usuário.
        </p>
      </section>

      <section className="section-card">
        <h2>Habilidades Técnicas</h2>
        <div className="tags">
          <span className="tag">Java</span>
          <span className="tag">SQL / Banco de Dados</span>
          <span className="tag">JavaScript & React</span>
          <span className="tag">Next.js</span>
          <span className="tag">UI/UX Design</span>
          <span className="tag">Análise Léxica</span>
          <span className="tag">Infraestrutura & SO</span>
        </div>
      </section>

      <section className="section-card">
        <h2>Projetos em Destaque</h2>
        <ul style={{ listStylePosition: 'inside', color: 'var(--text-muted)' }}>
          <li style={{ marginBottom: '10px' }}>
            <strong style={{ color: 'var(--text-main)' }}>SkillConnect:</strong> Plataforma colaborativa para conectar profissionais e habilidades.
          </li>
          <li>
            <strong style={{ color: 'var(--text-main)' }}>Plataforma Médica Cirúrgica:</strong> Sistema web focado em assinaturas para a área de saúde.
          </li>
        </ul>
      </section>
    </div>
  );
}