import React from 'react';
import { Project } from './types';

// ==========================================
// CENTRAL DE LINKS
// ==========================================
export const SOCIAL_LINKS = {
  whatsapp: "https://wa.link/cd0rfy", 
  instagram: "https://www.instagram.com/artylab_",
  facebook: "https://www.facebook.com/share/1B6tLE1Awd/",
};

// ==========================================
// CENTRAL DE DADOS DOS PROJETOS
// ==========================================
/**
 * GUIA PARA ADICIONAR NOVO PROJETO:
 * 1. Copie o bloco inteiro dentro de { ... },
 * 2. Cole logo após o último item, antes do '];'
 * 3. Mude o 'id' para um número único (ex: '4')
 * 4. Substitua as URLs das imagens e os textos.
 * 
 * SOBRE AS IMAGENS:
 * - 'coverImage': Imagem que aparece na grade principal.
 * - 'galleryImages': Lista de imagens que aparecem no carrossel quando abre o projeto.
 * - Recomendado usar links externos ou importar imagens locais.
 */
export const PROJECTS_DATA: Project[] = [
  {
    id: '1',
    title: 'Nexus Architecture',
    category: 'Branding & Identity',
    // Imagem de Capa
    coverImage: 'https://picsum.photos/id/12/1920/1080',
    // Galeria Interna (Adicione quantas quiser separadas por vírgula)
    galleryImages: [
      'https://picsum.photos/id/12/1920/1080',
      'https://picsum.photos/id/13/1920/1080',
      'https://picsum.photos/id/14/1920/1080',
    ],
    shortDescription: 'Rebranding completo para um escritório de arquitetura moderno.',
    fullDescription: 'Este projeto envolveu a reestruturação total da identidade visual da Nexus Architecture. Começamos com a desconstrução do logo anterior, buscando formas mais geométricas que remetessem à estabilidade e precisão da engenharia moderna. A paleta de cores monocromática com toques de azul cobalto transmite confiança. O resultado foi um aumento de 40% na percepção de valor da marca pelos clientes de alto padrão.'
  },
  {
    id: '2',
    title: 'EcoVibe Market',
    category: 'Web Design & Dev',
    coverImage: 'https://picsum.photos/id/20/1920/1080',
    galleryImages: [
      'https://picsum.photos/id/20/1920/1080',
      'https://picsum.photos/id/24/1920/1080',
      'https://picsum.photos/id/28/1920/1080',
    ],
    shortDescription: 'E-commerce estático ultra-rápido para produtos orgânicos.',
    fullDescription: 'A EcoVibe precisava de uma loja que carregasse instantaneamente em dispositivos móveis. Utilizamos HTML5 puro e TailwindCSS, hospedado no GitHub Pages, para criar uma vitrine estática segura. Integramos com APIs de pagamento externas via JavaScript. O tempo de carregamento caiu de 4.5s para 0.8s, resultando em uma melhor experiência de usuário e melhor ranqueamento no Google.'
  },
  {
    id: '3',
    title: 'Lumina Coffee',
    category: 'Social Media',
    coverImage: 'https://picsum.photos/id/42/1920/1080',
    galleryImages: [
      'https://picsum.photos/id/42/1920/1080',
      'https://picsum.photos/id/43/1920/1080',
    ],
    shortDescription: 'Direção de arte e templates para Instagram.',
    fullDescription: 'Para a Lumina Coffee, o desafio era traduzir o aroma do café em pixels. Criamos um kit de mídia social com tons terrosos e texturas granuladas. O projeto incluiu 15 templates editáveis para Stories e Feed, permitindo que o cliente mantenha a consistência visual diariamente sem depender de um designer para cada postagem.'
  }
];

export const AI_SYSTEM_INSTRUCTION = `
# ROLE
You are the ArtyLab AI Assistant.

# MISSION
Answer questions about graphic design and web performance.
LANGUAGE: Portuguese (Brazil) ONLY.

# CRITICAL RULES
1. **BREVITY**: Responses must be EXTREMELY SHORT. Maximum 2 sentences.
2. **OBJECTIVE**: Do not explain concepts in depth. Give a teaser.
3. **CONVERSION**: Always end by suggesting they talk to Gabriel on WhatsApp for a solution.
4. **NO HALLUCINATION**: Only talk about Design (Branding) and Code (Static Web).

# EXAMPLE RESPONSE
"Um Brand Manual garante a consistência da sua marca. Para criar o seu, fale com o Gabriel no WhatsApp."
`;

export const TEXTS = {
  nav: {
    home: "INÍCIO",
    services: "SERVIÇOS",
    projects: "PROJETOS",
    about: "SOBRE NÓS",
    socials: "REDES SOCIAIS"
  },
  hero: {
    l1: "Ordem",
    l2: "Em meio ao caos!",
    subtitle_part1: "Onde a arte encontra a precisão técnica,",
    subtitle_part2: "administrado por ArtyLab.",
    cta: "FALE CONOSCO" 
  },
  gallery: {
    back: "← Voltar para Galeria",
    readMore: "Ler Mais",
    readLess: "Ler Menos",
    otherProjects: "Outros Projetos",
    title: "Projetos",
    subtitle: "Uma seleção curada de transformações de marca e interfaces digitais."
  },
  modals: {
    about: {
      title: "ArtyLab | Onde Estratégia e Criatória Encontram Sua Essência Visual",
      content: `Na ArtyLab, acreditamos que uma marca é muito mais que um logo ou uma paleta de cores. É a alma do seu negócio traduzida em uma linguagem visual. Somos um estúdio de design estratégico que atua como parceiro criativo de pequenas empresas, empreendedores e criadores de conteúdo que desejam construir uma presença digital com propósito, clareza e profissionalismo.

Nosso nome reflete nosso método: o "Arte" da criatividade expressiva e da sensibilidade estética, unida ao "Lab" do estudo meticuloso, da estratégia e do processo bem estruturado. Entendemos que, no mercado atual, a beleza isolada não basta. Cada linha, cor e fonte deve cumprir uma função: comunicar valores, conectar-se com o público certo e estabelecer uma base sólida para o crescimento.

Atuamos com uma voz direta e profissional, mas nunca distante. Nosso atendimento é 100% online e humano, pautado pela parceria, porque entendemos que por trás de cada marca há um sonho e uma história que merecem ser contadas com excelência. Nosso compromisso é ser a ponte entre a essência única do seu negócio e uma identidade visual que não apenas impressiona, mas também performa e gera resultados.

Do Brasil para o mundo, trabalhamos para transformar visões abstratas em marcas concretas, estratégicas e memoráveis.`
    },
    services: {
      title: "Nossos Serviços",
      subtitle: "Design com Estratégia para Sua Presença Digital",
      intro: "Na ArtyLab, oferecemos soluções visuais focadas em construir uma base sólida e profissional para sua marca. Trabalhamos com serviços que são o alicerce de uma comunicação digital eficaz:",
      items: [
        {
          title: "1. Identidade Visual Completa",
          text: "Desenvolvemos a personalidade da sua marca do zero. Este serviço inclui a criação de logo, definição da paleta de cores estratégica, seleção de tipografias e a criação de um manual básico de uso. É o pacote essencial para quem está começando ou precisa de um recomeço com profissionalismo."
        },
        {
          title: "2. Design para Mídias Sociais",
          text: "Criamos kits visuais coesos e estratégicos para suas redes sociais. Desenvolvemos templates para feed e stories do Instagram, capas e elementos visuais para Facebook, sempre alinhados com a identidade da sua marca. Ajudamos você a manter uma presença consistente, profissional e que engaja seu público."
        },
        {
          title: "3. Desenvolvimento de Sites Estáticos",
          text: "Oferecemos a criação de sites leves, seguros e de altíssima performance através da tecnologia de sites estáticos. Ideal para Landing Pages, Sites Institucionais e Portfólios. Desenvolvemos o site e o publicamos diretamente no GitHub Pages, eliminando custos com hospedagem tradicional. Sites rápidos, seguros e sem manutenção."
        }
      ]
    }
  },
  about: {
    title: "ArtyLab",
    subtitle: "Inteligência Visual",
    desc1: "A ArtyLab não é apenas um estúdio de design; é um laboratório de precisão visual.",
    desc2: "Nossa missão é elevar o padrão do seu negócio através de Brand Manuals estratégicos.",
    cardTitle: "Visão Estratégica",
    cardQuote: "\"Design sem estratégia é apenas decoração.\"",
    cardContext: "A combinação de estética clássica com engenharia moderna."
  },
  services: {
    title: "Nossa Expertise",
    sub: "Soluções guiadas pela precisão",
    s1_title: "Design & Branding",
    s1_desc: "Identidade é mais que um logo. Forjamos linguagens visuais completas.",
    s2_title: "Desenv. Web Estático",
    s2_desc: "Velocidade é a nova moeda. Sites ultra-rápidos e seguros.",
  },
  portfolio: {
    title: "Transformação",
    sub: "Veja a diferença que a precisão faz",
    drag: "Arraste para comparar o Amadorismo (Esq) com a ArtyLab (Dir)."
  },
  footer: {
    rights: "© 2026 ArtyLab | Criado por Gabriel S. Silva"
  },
  chat: {
    greeting: "Olá. Sou o assistente virtual da ArtyLab. Como posso ajudar com Design ou Performance Web hoje?"
  }
};

export const PaintBrushIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128Zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42" />
  </svg>
);

export const CodeBracketIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 18" />
  </svg>
);

export const ChatBubbleIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z" />
  </svg>
);
