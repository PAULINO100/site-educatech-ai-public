export const WHITE_PAPER_CONTENT: any = {
  pt: {
    title: "Dossiê Técnico: Infraestrutura Soberana LATAM v2.2.0",
    sections: [
      {
        id: "intro",
        title: "1. Visão Geral da Infraestrutura Soberana",
        content: `A Educatech AI Soberana v2.2.0 representa a vanguarda da governança técnica descentralizada para a América Latina. Esta infraestrutura foi projetada para garantir que sistemas de Gestão Pública e Governança Digital operem sob o protocolo de Soberania Total, focado em determinismo, resiliência e controle regional de dados. 
        
        A arquitetura é composta por três pilares fundamentais:
        1. ZK-ID (Identidade Soberana Digital)
        2. Civitas Institucional (Inteligência Social)
        3. Civitas Governamental (Infraestrutura de Transparência)
        
        O objetivo central é a eliminação do "Risco de Dependência" (Vendor Lock-in) através do protocolo de Autonomia Soberana, permitindo que nações e instituições gerenciem sua própria base técnica sem exposição de metadados sensíveis.`
      },
      {
        id: "zkid",
        title: "2. ZK-ID: Identidade PII-Zero",
        content: `O sistema ZK-ID utiliza Provas de Conhecimento Zero (Zero-Knowledge Proofs). Diferente de sistemas de identidade tradicionais, o ZK-ID valida a legitimidade de um cidadão ou agente sem nunca ler, armazenar ou transmitir dados pessoais identificáveis (PII).
        
        Especificações Técnicas:
        - Algoritmo de Criptografia: Poseidon Hash
        - Curva Elíptica: BN254
        - Protocolo: PII-Zero (Privacidade Absoluta)`
      },
      {
        id: "civitas",
        title: "3. Civitas e a Transparência Radical",
        content: `A plataforma Civitas (Institucional e Governamental) implementa a "Auditoria ao Vivo" via Mirror Stream. Cada decisão institucional ou voto em pesquisa é registrado em uma árvore de Merkle imutável. 
        
        Destaques da Arquitetura:
        - Sincronização em Tempo Real (WebSockets)
        - Logs de Auditoria com Hash SHA-256
        - Integração Direta com ZK-ID para Votação Soberana`
      },
      {
        id: "resilience",
        title: "4. Protocolo de Resiliência Soberana",
        content: `A resiliência é garantida pelo monitoramento ativo em 12 nodos distribuídos (LATAM Nodes). Caso um ponto da infraestrutura falhe, a Educatech AI redireciona automaticamente o fluxo de trabalho para pontos redundantes em milissegundos.
        
        Camadas de Resiliência:
        - Camada 1: Nodos Locais (Edge Computing)
        - Camada 2: Consenso Técnico Regional
        - Camada 3: Backups Soberanos (Offline Recovery)`
      },
      {
        id: "compliance",
        title: "5. Compliance e Governança Imutável",
        content: `A Educatech AI Soberana v2.2.0 impõe uma trilha de auditoria criptográfica baseada em SHA-256 para cada interação. Isso garante que instituições possam provar a integridade de cada processo perante órgãos reguladores.
        
        Protocolos de Segurança:
        - SHA-256 Interativo (Assinatura de Logs)
        - Circuit Breaker de Integridade
        - Hardware Binding (Segurança de Ponto Final)`
      },
      {
        id: "future",
        title: "6. Roadmap de Soberania 2026",
        content: `O futuro da infraestrutura LATAM prevê a total descentralização dos nodos de inferência, permitindo o processamento em infraestruturas locais de baixo consumo energético e alta soberania técnica.`
      }
    ]
  },
  es: {
    title: "Dossier Técnico: Infraestructura Soberana LATAM v2.2.0",
    sections: [
      {
        id: "intro",
        title: "1. Visión General de la Infraestructura Soberana",
        content: `Educatech AI Soberana v2.2.0 representa la vanguardia de la gobernanza técnica descentralizada para América Latina. Esta infraestructura fue diseñada para garantizar que los sistemas de Gestión Pública y Gobernanza Digital operen bajo el protocolo de Soberanía Total, enfocado en el determinismo, la resiliencia y el control regional de los datos.`
      },
      {
        id: "zkid",
        title: "2. ZK-ID: Identidad PII-Zero",
        content: `El sistema ZK-ID utiliza Pruebas de Conocimiento Cero (Zero-Knowledge Proofs). Permite validar la legitimidad sin exponer datos personales.`
      },
      {
        id: "civitas",
        title: "3. Civitas y Transparencia Radical",
        content: `La plataforma Civitas implementa la "Auditoría en Vivo" vía Mirror Stream, asegurando que cada decisión sea pública e inmutable.`
      },
      {
        id: "resilience",
        title: "4. Protocolo de Resiliencia Soberana",
        content: `La resiliencia está garantizada por el monitoreo activo de 12 nodos distribuidos en LATAM. La arquitectura asegura la continuidad de la operación institucional.`
      }
    ]
  },
  en: {
    title: "Technical Dossier: Sovereign Infrastructure LATAM v2.2.0",
    sections: [
      {
        id: "intro",
        title: "1. Sovereign Infrastructure Overview",
        content: `Educatech AI Soberana v2.2.0 represents the vanguard of decentralized technical governance for Latin America. This infrastructure is designed to ensure that Public Management and Digital Governance systems operate under the Total Sovereignty protocol, focused on determinism, resilience, and regional data control.`
      },
      {
        id: "zkid",
        title: "2. ZK-ID: PII-Zero Identity",
        content: `The ZK-ID system uses Zero-Knowledge Proofs to validate legitimacy without ever exposing personally identifiable information (PII).`
      },
      {
        id: "civitas",
        title: "3. Civitas and Radical Transparency",
        content: `The Civitas platform implements "Live Auditing" via Mirror Stream, registering every decision in an immutable Merkle tree.`
      },
      {
        id: "resilience",
        title: "4. Sovereign Resilience Protocol",
        content: `Resilience is guaranteed through active monitoring of 12 distributed LATAM nodes. Real-time switching ensures zero downtime for institutional operations.`
      }
    ]
  }
};
