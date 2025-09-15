// Chatbot knowledge base and responses
export interface ChatMessage {
  id: string;
  text: string;
  isBot: boolean;
  timestamp: Date;
  type?: 'text' | 'quick-reply' | 'link';
  quickReplies?: string[];
  links?: { text: string; url: string; }[];
}

export interface ChatIntent {
  keywords: string[];
  responses: string[];
  quickReplies?: string[];
  links?: { text: string; url: string; }[];
}

export const chatbotIntents: Record<string, ChatIntent> = {
  greeting: {
    keywords: ['hola', 'hello', 'hi', 'hey', 'buenos días', 'buenas tardes', 'good morning', 'good afternoon'],
    responses: [
      '¡Hola! 👋 Soy el asistente virtual de Lenin. ¿En qué puedo ayudarte?',
      '¡Hi! 👋 I\'m Lenin\'s virtual assistant. How can I help you?'
    ],
    quickReplies: ['Ver proyectos', 'Tecnologías', 'Contacto', 'Disponibilidad']
  },
  
  technologies: {
    keywords: ['tecnologias', 'tecnologías', 'technologies', 'tech stack', 'habilidades', 'skills', 'que sabes', 'what do you know'],
    responses: [
      '🚀 Lenin trabaja con:\n\n**Frontend:** React, Angular, TypeScript, JavaScript\n**Backend:** Python, C#, Java, Node.js\n**Databases:** PostgreSQL, MySQL, MongoDB\n**Cloud:** AWS, Docker\n**Tools:** Git, Linux, Agile',
      '🚀 Lenin works with:\n\n**Frontend:** React, Angular, TypeScript, JavaScript\n**Backend:** Python, C#, Java, Node.js\n**Databases:** PostgreSQL, MySQL, MongoDB\n**Cloud:** AWS, Docker\n**Tools:** Git, Linux, Agile'
    ],
    quickReplies: ['Ver proyectos', 'Experiencia', 'Contacto']
  },

  projects: {
    keywords: ['proyectos', 'projects', 'portfolio', 'trabajo', 'work', 'experiencia', 'experience', 'ver proyectos'],
    responses: [
      '💼 Lenin ha trabajado en:\n\n• **Deitta (España)** - Marketplace de datos (Angular 18, AWS)\n• **Obengroup** - Sistema de manufactura (React, C#)\n• **Telefónica** - Apps y migraciones (Angular, React)\n\n¿Te interesa algún proyecto específico?',
      '💼 Lenin has worked on:\n\n• **Deitta (Spain)** - Data marketplace (Angular 18, AWS)\n• **Obengroup** - Manufacturing system (React, C#)\n• **Telefónica** - Apps and migrations (Angular, React)\n\nInterested in any specific project?'
    ],
    quickReplies: ['Deitta proyecto', 'Obengroup detalles', 'Telefónica experiencia', 'Ver todos']
  },

  availability: {
    keywords: ['disponible', 'available', 'freelance', 'trabajar', 'work', 'hire', 'contratar'],
    responses: [
      '✅ Sí, Lenin está disponible para proyectos freelance!\n\n🌍 **Modalidad:** Remoto\n⏰ **Horario:** Flexible\n💻 **Especialidad:** Full Stack\n📧 **Contacto:** leninalbino@gmail.com',
      '✅ Yes, Lenin is available for freelance projects!\n\n🌍 **Mode:** Remote\n⏰ **Schedule:** Flexible\n💻 **Specialty:** Full Stack\n📧 **Contact:** leninalbino@gmail.com'
    ],
    quickReplies: ['Contactar ahora', 'Ver CV', 'Presupuesto']
  },

  contact: {
    keywords: ['contacto', 'contact', 'email', 'telefono', 'phone', 'linkedin', 'como contactar'],
    responses: [
      '📞 **Formas de contactar a Lenin:**\n\n📧 Email: leninalbino@gmail.com\n💼 LinkedIn: lenin-leonor-albino-chavez\n🐱 GitHub: @leninalbino\n\n¿Prefieres que te ayude con algo más específico?',
      '📞 **Ways to contact Lenin:**\n\n📧 Email: leninalbino@gmail.com\n💼 LinkedIn: lenin-leonor-albino-chavez\n🐱 GitHub: @leninalbino\n\nWould you like help with something more specific?'
    ],
    links: [
      { text: 'Enviar Email', url: 'mailto:leninalbino@gmail.com' },
      { text: 'LinkedIn Profile', url: 'https://linkedin.com/in/leninalbino' }
    ]
  },

  deitta: {
    keywords: ['deitta', 'marketplace', 'datos', 'data', 'españa', 'spain', 'angular 18', 'deitta proyecto'],
    responses: [
      '🛒 **Proyecto Deitta (Actual)**\n\n**Empresa:** Deitta (España)\n**Rol:** Frontend Developer (Freelance)\n**Tech:** Angular 18, TypeScript, AWS Cognito, Material Design\n**Descripción:** Marketplace completo para compra/venta de datos empresariales con autenticación avanzada y gestión de perfiles.',
      '🛒 **Deitta Project (Current)**\n\n**Company:** Deitta (Spain)\n**Role:** Frontend Developer (Freelance)\n**Tech:** Angular 18, TypeScript, AWS Cognito, Material Design\n**Description:** Complete marketplace for buying/selling business data with advanced authentication and profile management.'
    ],
    quickReplies: ['Otros proyectos', 'Tecnologías Angular', 'Contacto']
  },

  obengroup: {
    keywords: ['obengroup', 'manufactura', 'manufacturing', 'inventario', 'inventory', 'joyit', 'obengroup detalles'],
    responses: [
      '🏭 **Proyecto Obengroup**\n\n**Empresa:** Joyit\n**Cliente:** Obengroup\n**Período:** 2024 - 2025\n**Tech:** React, C#, .NET, SQL Server\n**Descripción:** Sistema web completo para gestión de procesos de manufactura, control de inventarios y seguimiento de producción en tiempo real.',
      '🏭 **Obengroup Project**\n\n**Company:** Joyit\n**Client:** Obengroup\n**Period:** 2024 - 2025\n**Tech:** React, C#, .NET, SQL Server\n**Description:** Complete web system for manufacturing process management, inventory control and real-time production tracking.'
    ],
    quickReplies: ['Más detalles técnicos', 'Otros proyectos', 'Contacto']
  },

  telefonica: {
    keywords: ['telefonica', 'telefónica', 'movistar', 'trazabilidad', 'traceability', 'ntt data', 'stefanini', 'telefónica experiencia'],
    responses: [
      '📱 **Experiencia Telefónica**\n\n**Proyectos:**\n• **App Mi Movistar** (NTT Data 2022-2023)\n• **Migración React → Angular** (Stefanini 2023-2024)\n\n**Tech:** Angular, React, TypeScript, Ionic\n**Descripción:** Desarrollo y migración de aplicaciones para gestión de servicios telefónicos.',
      '📱 **Telefónica Experience**\n\n**Projects:**\n• **Mi Movistar App** (NTT Data 2022-2023)\n• **React → Angular Migration** (Stefanini 2023-2024)\n\n**Tech:** Angular, React, TypeScript, Ionic\n**Description:** Development and migration of applications for telephone services management.'
    ],
    quickReplies: ['Detalles migración', 'Otros proyectos', 'Contacto']
  },

  pricing: {
    keywords: ['precio', 'pricing', 'costo', 'cost', 'presupuesto', 'budget', 'cuanto cobras', 'rates'],
    responses: [
      '💰 **Información de Presupuesto:**\n\nLas tarifas varían según:\n• Complejidad del proyecto\n• Tecnologías requeridas\n• Timeline y urgencia\n• Tipo de colaboración\n\n📧 Escríbeme con detalles de tu proyecto para una cotización personalizada: leninalbino@gmail.com',
      '💰 **Pricing Information:**\n\nRates vary based on:\n• Project complexity\n• Required technologies\n• Timeline and urgency\n• Type of collaboration\n\n📧 Write me with your project details for a personalized quote: leninalbino@gmail.com'
    ],
    quickReplies: ['Contactar para cotización', 'Ver proyectos', 'Tecnologías']
  },

  help: {
    keywords: ['ayuda', 'help', 'que puedes hacer', 'what can you do', 'opciones', 'options'],
    responses: [
      '🤖 **¿Cómo puedo ayudarte?**\n\nPuedo responder sobre:\n• 🚀 Tecnologías y habilidades\n• 💼 Proyectos y experiencia\n• 📞 Información de contacto\n• ✅ Disponibilidad freelance\n• 💰 Presupuestos y cotizaciones\n\n¡Solo pregúntame!',
      '🤖 **How can I help you?**\n\nI can answer about:\n• 🚀 Technologies and skills\n• 💼 Projects and experience\n• 📞 Contact information\n• ✅ Freelance availability\n• 💰 Budgets and quotes\n\nJust ask me!'
    ],
    quickReplies: ['Ver proyectos', 'Tecnologías', 'Contacto', 'Disponibilidad']
  },

  cv: {
    keywords: ['cv', 'curriculum', 'resume', 'ver cv', 'descargar cv', 'download cv'],
    responses: [
      '📄 **CV y Experiencia**\n\nPuedes encontrar información detallada sobre mi experiencia en:\n• Sección de proyectos en el portafolio\n• LinkedIn para experiencia completa\n• GitHub para código y proyectos\n\n¿Te interesa algún proyecto específico?',
      '📄 **CV and Experience**\n\nYou can find detailed information about my experience in:\n• Projects section in the portfolio\n• LinkedIn for complete experience\n• GitHub for code and projects\n\nInterested in any specific project?'
    ],
    quickReplies: ['Ver proyectos', 'LinkedIn', 'GitHub'],
    links: [
      { text: 'Ver LinkedIn', url: 'https://linkedin.com/in/leninalbino' },
      { text: 'Ver GitHub', url: 'https://github.com/leninalbino' }
    ]
  },

  technical_details: {
    keywords: ['más detalles técnicos', 'detalles técnicos', 'technical details', 'arquitectura', 'architecture'],
    responses: [
      '⚙️ **Detalles Técnicos**\n\n**Arquitecturas usadas:**\n• Microservicios con APIs REST\n• SPA con frameworks modernos\n• Bases de datos relacionales y NoSQL\n• Integración con servicios cloud (AWS)\n• Patrones de diseño y clean code\n\n¿Qué proyecto te interesa más?',
      '⚙️ **Technical Details**\n\n**Architectures used:**\n• Microservices with REST APIs\n• SPA with modern frameworks\n• Relational and NoSQL databases\n• Cloud services integration (AWS)\n• Design patterns and clean code\n\nWhich project interests you most?'
    ],
    quickReplies: ['Deitta proyecto', 'Obengroup detalles', 'Tecnologías']
  },

  migration_details: {
    keywords: ['detalles migración', 'migration details', 'react angular', 'migración'],
    responses: [
      '🔄 **Migración React → Angular**\n\n**Proyecto:** Sistema de Trazabilidad Telefónica\n**Desafío:** Migrar aplicación completa manteniendo funcionalidad\n**Proceso:**\n• Análisis de componentes existentes\n• Recreación en Angular con TypeScript\n• Mejora de performance y mantenibilidad\n• Testing y QA completo',
      '🔄 **React → Angular Migration**\n\n**Project:** Telefónica Traceability System\n**Challenge:** Migrate complete application maintaining functionality\n**Process:**\n• Analysis of existing components\n• Recreation in Angular with TypeScript\n• Performance and maintainability improvement\n• Complete testing and QA'
    ],
    quickReplies: ['Otros proyectos', 'Tecnologías Angular', 'Contacto']
  },

  other_projects: {
    keywords: ['otros proyectos', 'other projects', 'más proyectos', 'ver todos'],
    responses: [
      '📋 **Otros Proyectos**\n\n• **Personal Projects** - Desarrollos con diferentes tecnologías\n• **Contribuciones Open Source** - Participación en proyectos de la comunidad\n• **Proyectos académicos** - Durante mi formación\n\n¿Te interesa conocer más sobre algún área específica?',
      '📋 **Other Projects**\n\n• **Personal Projects** - Developments with different technologies\n• **Open Source Contributions** - Community project participation\n• **Academic projects** - During my education\n\nInterested in learning more about any specific area?'
    ],
    quickReplies: ['Proyectos personales', 'Open Source', 'Tecnologías', 'Contacto']
  },

  contact_now: {
    keywords: ['contactar ahora', 'contact now', 'contactar para cotización'],
    responses: [
      '📧 **¡Perfecto! Hablemos**\n\n**Formas de contacto:**\n📧 **Email:** leninalbino@gmail.com\n💼 **LinkedIn:** lenin-leonor-albino-chavez\n\n**Para cotizaciones incluye:**\n• Descripción del proyecto\n• Tecnologías requeridas\n• Timeline estimado\n\n¡Respondo en menos de 24h!',
      '📧 **Perfect! Let\'s talk**\n\n**Contact methods:**\n📧 **Email:** leninalbino@gmail.com\n💼 **LinkedIn:** lenin-leonor-albino-chavez\n\n**For quotes include:**\n• Project description\n• Required technologies\n• Estimated timeline\n\nI respond within 24h!'
    ],
    links: [
      { text: 'Enviar Email', url: 'mailto:leninalbino@gmail.com?subject=Consulta%20de%20Proyecto' },
      { text: 'LinkedIn', url: 'https://linkedin.com/in/leninalbino' }
    ]
  },

  angular_tech: {
    keywords: ['tecnologías angular', 'tecnologias angular', 'angular technologies', 'angular', 'otras tecnologías', 'otras tecnologias'],
    responses: [
      '🅰️ **Experiencia con Angular**\n\n**Versiones:** Angular 12+ hasta Angular 18\n**Ecosistema:**\n• TypeScript avanzado\n• RxJS y programación reactiva\n• Angular Material & CDK\n• NgRx para estado global\n• Testing con Jasmine/Karma\n• SSR con Angular Universal\n\n**Proyectos:** Deitta, Telefónica',
      '🅰️ **Angular Experience**\n\n**Versions:** Angular 12+ to Angular 18\n**Ecosystem:**\n• Advanced TypeScript\n• RxJS and reactive programming\n• Angular Material & CDK\n• NgRx for global state\n• Testing with Jasmine/Karma\n• SSR with Angular Universal\n\n**Projects:** Deitta, Telefónica'
    ],
    quickReplies: ['Deitta proyecto', 'Otras tecnologías', 'Contacto']
  },

  experience: {
    keywords: ['experiencia', 'experience'],
    responses: [
      '💼 **Experiencia Profesional**\n\n**+3 años** como Full Stack Developer\n\n**Empresas:**\n• Deitta (España) - Freelance actual\n• Joyit - Obengroup project\n• Stefanini - Telefónica\n• NTT Data - Telefónica\n\n¿Te interesa conocer algún proyecto específico?',
      '💼 **Professional Experience**\n\n**+3 years** as Full Stack Developer\n\n**Companies:**\n• Deitta (Spain) - Current freelance\n• Joyit - Obengroup project\n• Stefanini - Telefónica\n• NTT Data - Telefónica\n\nInterested in any specific project?'
    ],
    quickReplies: ['Deitta proyecto', 'Obengroup detalles', 'Telefónica experiencia']
  },

  linkedin: {
    keywords: ['linkedin', 'perfil linkedin'],
    responses: [
      '💼 **Perfil LinkedIn**\n\nPuedes encontrar mi experiencia completa y conectar conmigo en LinkedIn.',
      '💼 **LinkedIn Profile**\n\nYou can find my complete experience and connect with me on LinkedIn.'
    ],
    links: [
      { text: 'Ver LinkedIn', url: 'https://linkedin.com/in/leninalbino' }
    ]
  },

  github: {
    keywords: ['github', 'código', 'repositories', 'repositorios'],
    responses: [
      '🐱 **GitHub Profile**\n\nRevisa mi código y proyectos en GitHub.',
      '🐱 **GitHub Profile**\n\nCheck out my code and projects on GitHub.'
    ],
    links: [
      { text: 'Ver GitHub', url: 'https://github.com/leninalbino' }
    ]
  },

  personal_projects: {
    keywords: ['proyectos personales', 'personal projects'],
    responses: [
      '🚀 **Proyectos Personales**\n\n• Desarrollo de aplicaciones web con diferentes stacks\n• Contribuciones a open source\n• Experimentación con nuevas tecnologías\n• Proyectos de aprendizaje\n\n¿Te interesa alguna tecnología específica?',
      '🚀 **Personal Projects**\n\n• Web application development with different stacks\n• Open source contributions\n• Experimentation with new technologies\n• Learning projects\n\nInterested in any specific technology?'
    ],
    quickReplies: ['Tecnologías', 'Open Source', 'Contacto']
  },

  open_source: {
    keywords: ['open source', 'código abierto'],
    responses: [
      '🌟 **Open Source**\n\nParticipo en proyectos de código abierto y contribuyo a la comunidad de desarrolladores. Me gusta compartir conocimiento y aprender de otros desarrolladores.',
      '🌟 **Open Source**\n\nI participate in open source projects and contribute to the developer community. I like to share knowledge and learn from other developers.'
    ],
    quickReplies: ['GitHub', 'Tecnologías', 'Contacto']
  }
};

export const fallbackResponses = [
  '🤔 No estoy seguro de entender esa pregunta. ¿Podrías reformularla o elegir una de estas opciones?',
  '🤔 I\'m not sure I understand that question. Could you rephrase it or choose one of these options?'
];

export const quickReplyOptions = [
  'Ver proyectos',
  'Tecnologías',
  'Contacto',
  'Disponibilidad',
  'Presupuesto',
  'Ayuda'
];

export const welcomeMessage = {
  es: '¡Hola! 👋 Soy el asistente virtual de Lenin Albino. Estoy aquí para responder cualquier pregunta sobre su experiencia, proyectos y disponibilidad. ¿En qué puedo ayudarte?',
  en: 'Hello! 👋 I\'m Lenin Albino\'s virtual assistant. I\'m here to answer any questions about his experience, projects and availability. How can I help you?'
};