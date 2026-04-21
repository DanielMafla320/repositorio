"use client";

import { useState, useEffect } from 'react';
import { Download, Mail, Phone, MapPin, Send, Globe } from 'lucide-react';
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('inicio');
  const [text, setText] = useState("");
  const [language, setLanguage] = useState<'es' | 'en'>('es');
  const [isChanging, setIsChanging] = useState(false);

  const changeLanguage = () => {
    setIsChanging(true);
    setTimeout(() => {
      setLanguage(prev => prev === 'es' ? 'en' : 'es');
      setIsChanging(false);
    }, 250);
  };

  const translations = {
    es: {
      available: '✦ Disponible para proyectos',
      heroDesc: 'Estudiante apasionado por el aprendizaje continuo y los retos técnicos. Me motiva explorar nuevas tecnologías y desarrollar soluciones que generen impacto real.',
      downloadCV: 'Descargar CV',
      inProgress: 'En curso 🎓',
      softEng: 'Ing. Software',

      aboutPill: '✦ Sobre mí',
      aboutTitle: 'Acerca de mí',
      aboutP1: 'Soy estudiante de Ingeniería de Software apasionado por la tecnología y el desarrollo de soluciones innovadoras. Me motiva entender a fondo cómo funcionan los sistemas y enfrentar desafíos que me permitan crecer constantemente como desarrollador, creando software con impacto real.',
      aboutP2: 'Me caracterizo por ser una persona sociable y colaborativa, con facilidad para el trabajo en equipo. También tengo afinidad por la edición de video y la creación de contenido digital, lo que aporta un enfoque creativo a mi perfil como desarrollador.',
      skillTitles: ['Lenguajes', 'Frontend', 'Backend', 'Herramientas'],

      projectsPill: '✦ Portafolio',
      projectsTitle: 'Mis Proyectos',
      projectsDesc: 'Proyectos desarrollados aplicando mis conocimientos...',
      projectCta: 'Ver proyecto',
      projectSoon: 'Próximamente',
      projects: [
        { title: 'XSOUND', desc: 'Reproductor de música de manera local o online' },
        { title: 'Saborify', desc: 'Aplicación que te ayuda a cocinar y te recomienda recetas dependiendo tus necesidades' },
      ],

      testiPill: '✦ Testimonios',
      testiTitle: 'Lo que ',
      testiTitleGrad: 'dicen',
      testiDesc: 'Lo que dicen mis compañeros y colaboradores',
      testimonials: [
        { text: 'Daniel es un desarrollador muy dedicado. Su capacidad para aprender rápido y aplicar lo aprendido en proyectos reales lo hace un colaborador valioso en cualquier equipo.', name: 'Ana Martínez', role: 'Profesora de Ingeniería de Software', avatar: 'https://images.unsplash.com/photo-1581065178047-8ee15951ede6?w=100&q=80' },
        { text: 'Trabajar con Daniel fue una experiencia muy positiva. Su entusiasmo por la tecnología y su compromiso con cada tarea hacen que los proyectos siempre salgan adelante.', name: 'Carlos Ruiz', role: 'Compañero de proyecto universitario', avatar: 'https://images.unsplash.com/photo-1723537742563-15c3d351dbf2?w=100&q=80' },
        { text: 'Daniel tiene una gran curiosidad intelectual y siempre está buscando nuevas formas de mejorar. Es el tipo de estudiante que marca la diferencia en un equipo.', name: 'Laura Fernández', role: 'Mentora de desarrollo web', avatar: 'https://images.unsplash.com/photo-1610387694365-19fafcc86d86?w=100&q=80' },
      ],

      expPill: '✦ Trayectoria',
      expTitle: 'Experiencia ',
      expTitleGrad: 'académica',
      expDesc: 'Mi trayectoria profesional y formación académica',
      experience: [
        { type: 'Académica', date: '2024 - Presente', title: 'Ingeniería de Software', company: 'Universidad — En curso', desc: 'Formación en desarrollo de software, estructuras de datos, algoritmos, bases de datos y arquitectura de sistemas. Participación activa en proyectos académicos.' },
        { type: 'Académica', date: '2024', title: 'Bootcamp en programación con Python', company: 'TalentoTech', desc: 'Formación en fundamentos de programación utilizando Python, incluyendo lógica de programación, estructuras de control, funciones y resolución de problemas.' },
        { type: 'Académica', date: '2022', title: 'Técnico en mantenimiento de equipos de cómputo', company: 'Sena', desc: 'Técnico en mantenimiento de equipos de cómputo con conocimientos en diagnóstico de hardware y software, instalación de sistemas operativos, ensamblaje de equipos, solución de fallas y soporte técnico.' },
      ],

      contactPill: '✦ Contacto',
      contactTitle: 'Hablemos juntos',
      contactDesc: '¿Tienes un proyecto en mente? Escríbeme',
      contactFormTitle: 'Envíame un mensaje',
      contactName: 'Nombre completo',
      contactNamePH: 'Tu nombre',
      contactEmail: 'Email',
      contactEmailPH: 'tu@email.com',
      contactMsg: 'Mensaje',
      contactMsgPH: 'Cuéntame sobre tu proyecto...',
      contactSend: 'Enviar mensaje',
      contactInfoTitle: 'Información de contacto',
      contactInfoDesc: 'Puedes escribirme por cualquiera de estos medios.',
      contactLabels: ['Email', 'Teléfono', 'Ubicación'],
      socialTitle: 'Redes sociales',

      footerDesc: 'Estudiante de Ingeniería de Software apasionado por construir soluciones tecnológicas de impacto.',
      footerSkillsTitle: 'Habilidades',
      footerSkills: ['Desarrollo Web', 'Backend Python & Java', 'Frontend con Next.js', 'Bases de Datos'],
      footerContactTitle: 'Contacto',
      footerFollowTitle: 'Sígueme',
      footerRights: '© 2026 Daniel Mafla. Todos los derechos reservados.',

      nav: { inicio: 'Inicio', acerca: 'Acerca', proyectos: 'Proyectos', testimonios: 'Testimonios', experiencia: 'Experiencia', contacto: 'Contacto' },
    },

    en: {
      available: '✦ Available for projects',
      heroDesc: 'Student passionate about continuous learning and technical challenges. I enjoy exploring new technologies and building impactful solutions.',
      downloadCV: 'Download CV',
      inProgress: 'In progress 🎓',
      softEng: 'Soft. Eng.',

      aboutPill: '✦ About me',
      aboutTitle: 'About me',
      aboutP1: 'I am a Software Engineering student passionate about technology and developing innovative solutions. I am motivated to deeply understand how systems work and face challenges that allow me to constantly grow as a developer, creating software with real impact.',
      aboutP2: 'I am a sociable and collaborative person, with ease for teamwork. I also have an affinity for video editing and digital content creation, which brings a creative approach to my developer profile.',
      skillTitles: ['Languages', 'Frontend', 'Backend', 'Tools'],

      projectsPill: '✦ Portfolio',
      projectsTitle: 'My Projects',
      projectsDesc: 'Projects developed applying my knowledge...',
      projectCta: 'View project',
      projectSoon: 'Coming soon',
      projects: [
        { title: 'XSOUND', desc: 'Local or online music player' },
        { title: 'Saborify', desc: 'App that helps you cook and recommends recipes based on your needs' },
      ],

      testiPill: '✦ Testimonials',
      testiTitle: 'What they ',
      testiTitleGrad: 'say',
      testiDesc: 'What my peers and collaborators say',
      testimonials: [
        { text: 'Daniel is a very dedicated developer. His ability to learn quickly and apply what he has learned to real projects makes him a valuable collaborator on any team.', name: 'Ana Martínez', role: 'Software Engineering Professor', avatar: 'https://images.unsplash.com/photo-1581065178047-8ee15951ede6?w=100&q=80' },
        { text: 'Working with Daniel was a very positive experience. His enthusiasm for technology and his commitment to every task means projects always move forward.', name: 'Carlos Ruiz', role: 'University project teammate', avatar: 'https://images.unsplash.com/photo-1723537742563-15c3d351dbf2?w=100&q=80' },
        { text: 'Daniel has great intellectual curiosity and is always looking for new ways to improve. He is the kind of student who makes a difference on a team.', name: 'Laura Fernández', role: 'Web development mentor', avatar: 'https://images.unsplash.com/photo-1610387694365-19fafcc86d86?w=100&q=80' },
      ],

      expPill: '✦ Journey',
      expTitle: 'Academic ',
      expTitleGrad: 'experience',
      expDesc: 'My professional journey and academic background',
      experience: [
        { type: 'Academic', date: '2024 - Present', title: 'Software Engineering', company: 'University — In progress', desc: 'Training in software development, data structures, algorithms, databases, and systems architecture. Active participation in academic projects.' },
        { type: 'Academic', date: '2024', title: 'Python Programming Bootcamp', company: 'TalentoTech', desc: 'Training in programming fundamentals using Python, including programming logic, control structures, functions, and problem solving.' },
        { type: 'Academic', date: '2022', title: 'Computer Equipment Maintenance Technician', company: 'Sena', desc: 'Technician in computer equipment maintenance with knowledge in hardware and software diagnostics, OS installation, equipment assembly, fault resolution, and technical support.' },
      ],

      contactPill: '✦ Contact',
      contactTitle: "Let's talk",
      contactDesc: 'Do you have a project in mind? Contact me',
      contactFormTitle: 'Send me a message',
      contactName: 'Full name',
      contactNamePH: 'Your name',
      contactEmail: 'Email',
      contactEmailPH: 'you@email.com',
      contactMsg: 'Message',
      contactMsgPH: 'Tell me about your project...',
      contactSend: 'Send message',
      contactInfoTitle: 'Contact information',
      contactInfoDesc: 'You can reach me through any of these channels.',
      contactLabels: ['Email', 'Phone', 'Location'],
      socialTitle: 'Social media',

      footerDesc: 'Software Engineering student passionate about building impactful tech solutions.',
      footerSkillsTitle: 'Skills',
      footerSkills: ['Web Development', 'Backend Python & Java', 'Frontend with Next.js', 'Databases'],
      footerContactTitle: 'Contact',
      footerFollowTitle: 'Follow me',
      footerRights: '© 2026 Daniel Mafla. All rights reserved.',

      nav: { inicio: 'Home', acerca: 'About', proyectos: 'Projects', testimonios: 'Testimonials', experiencia: 'Experience', contacto: 'Contact' },
    },
  };

  const t = translations[language];

  const handleTilt = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = -(y - centerY) / 12;
    const rotateY = (x - centerX) / 12;
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`;
  };

  const resetTilt = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)`;
  };

  useEffect(() => {
    const words = ["Software Engineering Student", "Frontend Developer", "Backend Developer", "Problem Solver"];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    const speed = 80;
    const deleteSpeed = 40;
    const delayBetweenWords = 1500;

    const type = () => {
      const currentWord = words[wordIndex];
      if (isDeleting) {
        setText(currentWord.substring(0, charIndex - 1));
        charIndex--;
      } else {
        setText(currentWord.substring(0, charIndex + 1));
        charIndex++;
      }
      if (!isDeleting && charIndex === currentWord.length) {
        setTimeout(() => (isDeleting = true), delayBetweenWords);
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
      }
    };

    const interval = setInterval(type, isDeleting ? deleteSpeed : speed);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const elements = document.querySelectorAll('.reveal, .reveal-exp');
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            if (el.classList.contains('reveal-exp')) {
              const cards = el.parentElement?.querySelectorAll('.reveal-exp');
              const index = Array.from(cards || []).indexOf(el);
              el.style.transitionDelay = `${index * 120}ms`;
            }
            el.classList.add('active');
            obs.unobserve(el);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    );
    elements.forEach((el) => observer.observe(el));

    const imgWrap = document.querySelector('.about-img-wrap');
    const shimmerObs = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            el.classList.add('shimmer-active');
            el.style.transform = 'scale(1.02)';
            obs.unobserve(el);
          }
        });
      },
      { threshold: 0.3 }
    );
    if (imgWrap) shimmerObs.observe(imgWrap);

    return () => {
      observer.disconnect();
      shimmerObs.disconnect();
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  const projectMeta = [
    { img: '/reproductor xsound.png', tags: ['Typescript', 'CSS'], link: 'https://reproductor-musica-delta.vercel.app/', comingSoon: false },
    { img: 'https://images.unsplash.com/photo-1661246627162-feb0269e0c07?w=600&q=80', tags: ['TypeScript', 'CSS'], comingSoon: true },
  ];

  return (
    <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", background: '#fafafa', minHeight: '100vh', color: '#1a1a2e' }}>

      {/* NAVBAR */}
      <nav style={{
        position: 'sticky', top: 0, zIndex: 50,
        background: '#fafafaee', backdropFilter: 'blur(20px)',
        borderBottom: '1px solid #e8e4fc',
        boxShadow: '0 1px 20px #7c3aed08',
      }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: 64 }}>
          <div style={{ fontFamily: "'Syne', sans-serif", fontSize: 22, fontWeight: 800 }}>
            <span style={{ color: '#1a1a2e' }}>Daniel </span>
            <span className="grad">Mafla</span>
          </div>
          <div style={{ display: 'flex', gap: 2, alignItems: 'center' }}>
            {['inicio', 'acerca', 'proyectos', 'testimonios', 'experiencia', 'contacto'].map(s => (
              <button key={s} className={`nav-btn ${activeSection === s ? 'active' : ''}`} onClick={() => scrollToSection(s)}>
                {t.nav[s as keyof typeof t.nav]}
              </button>
            ))}
            {/* BOTÓN ÚNICO DE IDIOMA */}
            <button
              onClick={changeLanguage}
              className="lang-btn lang-toggle"
              title={language === 'es' ? 'Switch to English' : 'Cambiar a Español'}
              style={{
                marginLeft: 16,
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                padding: '6px 12px',
                borderRadius: 12,
                background: '#ede9fe',
                border: '1px solid #c4b5fd55',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                fontWeight: 600
              }}
            >
              <Globe size={16} style={{ color: '#7c3aed' }} />

              <span
                className={`lang-label ${isChanging ? 'lang-out' : 'lang-in'}`}
                style={{ fontSize: 13 }}
              >
                {language === 'es' ? 'EN' : 'ES'}
              </span>
            </button>
          </div>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section id="inicio" className="bg-dots" style={{ padding: '110px 0', position: 'relative', overflow: 'hidden' }}>
        <div className="blob" style={{ width: 600, height: 600, background: '#7c3aed', top: -200, left: -150 }} />
        <div className="blob" style={{ width: 350, height: 350, background: '#a855f7', bottom: -80, right: 60 }} />
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 80, alignItems: 'center', position: 'relative' }}>
          <div>
            <div className={`pill fade-t ${isChanging ? 'lang-out' : 'lang-in'}`}>{t.available}</div>
            <h1 style={{ fontFamily: "'Syne', sans-serif", fontSize: 'clamp(42px, 8vw, 76px)', fontWeight: 800, lineHeight: 1, color: '#1a1a2e', marginBottom: 16 }}>
              Daniel<br /><span className="grad">Mafla</span>
            </h1>
            <h2 style={{ fontSize: 20, fontWeight: 600, color: '#9090b0', marginBottom: 24 }}>
              {text}<span className="cursor">|</span>
            </h2>
            <p key={language} className="fade-text" style={{ fontSize: 15, lineHeight: 1.85, color: '#6868a0', marginBottom: 36, maxWidth: 460 }}>
              {t.heroDesc}
            </p>
            <button className="btn-primary">
              <Download size={18} />
              <span className={`fade-t ${isChanging ? 'lang-out' : 'lang-in'}`}>{t.downloadCV}</span>
            </button>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div style={{ position: 'relative' }}>
              <div className="profile-img" style={{ width: 340, height: 340, borderRadius: '50%', padding: 3, background: 'linear-gradient(135deg, #7c3aed, #a855f7, #c084fc)', boxShadow: '0 0 80px #7c3aed25, 0 0 140px #a855f715', animation: 'float 4s ease-in-out infinite' }}>
                <div className="img-inner" style={{ width: '100%', height: '100%', borderRadius: '50%', overflow: 'hidden', background: '#ede9fe' }}>
                  <img src="/foto mia traje.jpeg" alt="Daniel Mafla" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
              </div>
              <div style={{ position: 'absolute', bottom: 10, right: -24, background: 'linear-gradient(135deg, #7c3aed, #a855f7)', borderRadius: 16, padding: '10px 18px', boxShadow: '0 8px 32px #7c3aed33' }}>
                <div style={{ fontSize: 10, fontWeight: 700, color: 'rgba(255,255,255,0.75)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                  <span className={`fade-t ${isChanging ? 'lang-out' : 'lang-in'}`}>{t.softEng}</span>
                </div>
                <div style={{ fontSize: 16, fontWeight: 800, color: '#fff' }}>
                  <span className={`fade-t ${isChanging ? 'lang-out' : 'lang-in'}`}>{t.inProgress}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── ACERCA ── */}
      <section id="acerca" className="bg-dots-alt" style={{ padding: '100px 0', position: 'relative', overflow: 'hidden' }}>
        <div className="blob" style={{ width: 400, height: 400, background: '#7c3aed', top: -80, right: -80 }} />
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 64, alignItems: 'start', position: 'relative' }}>
          <div className="reveal reveal-d1">
            <div className="about-img-wrap">
              <img src="/foto mia traje.jpeg" alt="About" />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, #f4f3fff0 0%, transparent 55%)', pointerEvents: 'none' }} />
              <div style={{ position: 'absolute', bottom: 24, left: 20, right: 20, display: 'flex', gap: 8, flexWrap: 'wrap', zIndex: 1 }}>
                {['Python', 'Java', 'Next.js', 'Django'].map(tag => (
                  <span key={tag} style={{ background: '#fafafaee', border: '1.5px solid #a855f755', borderRadius: 10, padding: '7px 13px', fontSize: 12, fontWeight: 700, color: '#7c3aed' }}>{tag}</span>
                ))}
              </div>
            </div>
          </div>
          <div className="reveal reveal-d2">
            <div className={`pill fade-t ${isChanging ? 'lang-out' : 'lang-in'}`}>{t.aboutPill}</div>
            <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: 50, fontWeight: 800, color: '#1a1a2e', lineHeight: 1.08, marginBottom: 22 }}>
              <span className="grad-subtle">{t.aboutTitle}</span>
            </h2>
            <p key={language + 'p1'} className="fade-text" style={{ fontSize: 15, lineHeight: 1.85, color: '#6868a0', marginBottom: 14 }}>
              {t.aboutP1}
            </p>
            <p key={language + 'p2'} className="fade-text" style={{ fontSize: 15, lineHeight: 1.85, color: '#6868a0', marginBottom: 32 }}>
              {t.aboutP2}
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
              {[
                { skills: ['Python', 'Java', 'JavaScript', 'HTML5', 'CSS3'] },
                { skills: ['Next.js', 'Tailwind CSS', 'TypeScript', 'React'] },
                { skills: ['Django', 'Next.js', 'API REST'] },
                { skills: ['Git & GitHub', 'Figma', 'VS Code', 'Postman'] },
              ].map((card, i) => (
                <div key={i} className={`reveal reveal-d${i + 1}`} style={{ background: '#ffffff', border: '1.5px solid #e8e4fc', borderRadius: 18, padding: 18, boxShadow: '0 2px 12px #7c3aed06' }}>
                  <div style={{ fontSize: 11, fontWeight: 700, color: '#7c3aed', letterSpacing: '0.09em', textTransform: 'uppercase', marginBottom: 12 }}>
                    <span className={`fade-t ${isChanging ? 'lang-out' : 'lang-in'}`}>{t.skillTitles[i]}</span>
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                    {card.skills.map(s => <span key={s} className="chip">{s}</span>)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── PROYECTOS ── */}
      <section id="proyectos" className="bg-dots" style={{ padding: '100px 0', position: 'relative', overflow: 'hidden' }}>
        <div className="blob" style={{ width: 450, height: 450, background: '#7c3aed', bottom: -100, left: -100 }} />
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px', position: 'relative' }}>
          <div style={{ textAlign: 'center', marginBottom: 60 }} className="reveal">
            <div className={`pill fade-t ${isChanging ? 'lang-out' : 'lang-in'}`} style={{ display: 'inline-flex' }}>{t.projectsPill}</div>
            <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: 50, fontWeight: 800, color: '#1a1a2e', marginBottom: 10 }}>
              <span className="grad">{t.projectsTitle}</span>
            </h2>
            <p key={language + 'pd'} className="fade-text" style={{ color: '#9090b0', fontSize: 15 }}>{t.projectsDesc}</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 22 }}>
            {t.projects.map((p, i) => {
              const meta = projectMeta[i];
              return (
                <div
                  key={i}
                  className={`proj-card glass reveal reveal-d${i + 1}`}
                  onClick={() => { if (!meta.comingSoon && meta.link) window.open(meta.link, '_blank'); }}
                  style={{ cursor: meta.comingSoon ? 'not-allowed' : 'pointer' }}
                >
                  <div className="proj-card-img">
                    <img src={meta.img} alt={p.title} />
                    <div className="proj-card-overlay">
                      <span className="proj-card-overlay-text">→ {meta.comingSoon ? t.projectSoon : t.projectCta}</span>
                    </div>
                  </div>
                  <div style={{ padding: '20px 22px 22px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
                      <h3 style={{ fontSize: 16, fontWeight: 700, color: '#1a1a2e' }}>{p.title}</h3>
                      <span className="proj-live-dot">Live</span>
                    </div>
                    <p key={language + 'proj' + i} className="fade-text" style={{ fontSize: 13, color: '#8080aa', lineHeight: 1.65, marginBottom: 16 }}>{p.desc}</p>
                    <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                      {meta.tags.map(tag => <span key={tag} className="proj-tag">{tag}</span>)}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIOS ── */}
      <section id="testimonios" className="bg-dots-alt" style={{ padding: '100px 0', position: 'relative', overflow: 'hidden' }}>
        <div className="blob" style={{ width: 350, height: 350, background: '#a855f7', top: -60, right: 100 }} />
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px', position: 'relative' }}>
          <div style={{ textAlign: 'center', marginBottom: 60 }} className="reveal">
            <div className={`pill fade-t ${isChanging ? 'lang-out' : 'lang-in'}`} style={{ display: 'inline-flex' }}>{t.testiPill}</div>
            <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: 50, fontWeight: 800, color: '#1a1a2e', marginBottom: 10 }}>
              <span key={language + 'tt'} className="fade-text">{t.testiTitle}</span><span className="grad">{t.testiTitleGrad}</span>
            </h2>
            <p key={language + 'td'} className="fade-text" style={{ color: '#9090b0', fontSize: 15 }}>{t.testiDesc}</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 22 }}>
            {t.testimonials.map((testi, i) => (
              <div
                key={i}
                className={`testimonial-card glass reveal reveal-d${i + 1}`}
                onMouseMove={handleTilt}
                onMouseLeave={resetTilt}
                style={{ borderRadius: 20, padding: 28, position: 'relative', overflow: 'hidden' }}
              >
                <div className="testi-quote">"</div>
                <div style={{ display: 'flex', gap: 3, marginBottom: 16 }}>
                  {[...Array(5)].map((_, j) => <span key={j} style={{ color: '#a855f7', fontSize: 14 }}>★</span>)}
                </div>
                <p key={language + 'tm' + i} className="fade-text" style={{ fontSize: 14, lineHeight: 1.8, color: '#6868a0', marginBottom: 22 }}>"{testi.text}"</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <div style={{ width: 42, height: 42, borderRadius: '50%', overflow: 'hidden', border: '2px solid #c4b5fd66', flexShrink: 0 }}>
                    <img src={testi.avatar} alt={testi.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                  <div>
                    <div style={{ fontSize: 14, fontWeight: 700, color: '#1a1a2e' }}>{testi.name}</div>
                    <div key={language + 'tr' + i} className={`fade-t ${isChanging ? 'lang-out' : 'lang-in'}`} style={{ fontSize: 12, fontWeight: 600, color: '#7c3aed' }}>{testi.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── EXPERIENCIA ── */}
      <section id="experiencia" className="bg-dots" style={{ padding: '100px 0', position: 'relative', overflow: 'hidden' }}>
        <div className="blob" style={{ width: 380, height: 380, background: '#7c3aed', bottom: -60, right: -40 }} />
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px', position: 'relative' }}>
          <div style={{ textAlign: 'center', marginBottom: 60 }} className="reveal">
            <div className={`pill fade-t ${isChanging ? 'lang-out' : 'lang-in'}`} style={{ display: 'inline-flex' }}>{t.expPill}</div>
            <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: 50, fontWeight: 800, color: '#1a1a2e', marginBottom: 10 }}>
              <span key={language + 'et'} className="fade-text">{t.expTitle}</span><span className="grad-subtle">{t.expTitleGrad}</span>
            </h2>
            <p key={language + 'ed'} className="fade-text" style={{ color: '#9090b0', fontSize: 15 }}>{t.expDesc}</p>
          </div>
          <div style={{ maxWidth: 720, margin: '0 auto', position: 'relative' }}>
            <div className="timeline-line" />
            {t.experience.map((item, i) => (
              <div key={i} className={`exp-card reveal-exp reveal-d${i + 1}`} style={{ display: 'flex', gap: 28, marginBottom: 24, paddingLeft: 4 }}>
                <div style={{ width: 26, height: 26, borderRadius: '50%', background: '#ede9fe', border: '2px solid #7c3aed', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 6, zIndex: 1 }}>
                  <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#7c3aed' }} />
                </div>
                <div style={{ flex: 1, background: '#ffffff', border: '1.5px solid #e8e4fc', borderRadius: 18, padding: 24, boxShadow: '0 2px 12px #7c3aed06' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 10, flexWrap: 'wrap', gap: 8 }}>
                    <span style={{ fontSize: 10, fontWeight: 700, color: '#7c3aed', background: '#ede9fe', border: '1px solid #c4b5fd55', borderRadius: 8, padding: '4px 10px', textTransform: 'uppercase', letterSpacing: '0.08em' }}>{item.type}</span>
                    <span style={{ fontSize: 12, fontWeight: 600, color: '#9090b0' }}>{item.date}</span>
                  </div>
                  <h3 style={{ fontSize: 16, fontWeight: 700, color: '#1a1a2e', marginBottom: 4 }}>{item.title}</h3>
                  <div style={{ fontSize: 13, fontWeight: 600, color: '#7c3aed', marginBottom: 10 }}>{item.company}</div>
                  <p key={language + 'exp' + i} className="fade-text" style={{ fontSize: 13, color: '#8080aa', lineHeight: 1.7 }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACTO ── */}
      <section id="contacto" className="bg-dots-alt" style={{ padding: '100px 0', position: 'relative', overflow: 'hidden' }}>
        <div className="blob" style={{ width: 420, height: 420, background: '#7c3aed', bottom: -100, left: -80 }} />
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px', position: 'relative' }}>
          <div style={{ textAlign: 'center', marginBottom: 60 }} className="reveal">
            <div className={`pill fade-t ${isChanging ? 'lang-out' : 'lang-in'}`} style={{ display: 'inline-flex' }}>{t.contactPill}</div>
            <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: 50, fontWeight: 800, color: '#1a1a2e', marginBottom: 10 }}>
              <span className="grad">{t.contactTitle}</span>
            </h2>
            <p key={language + 'cd'} className="fade-text" style={{ color: '#9090b0', fontSize: 15 }}>{t.contactDesc}</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 28 }}>
            <div className="reveal reveal-d1" style={{ background: '#ffffff', border: '1.5px solid #e8e4fc', borderRadius: 22, padding: 36, boxShadow: '0 4px 24px #7c3aed08' }}>
              <h3 style={{ fontSize: 22, fontWeight: 700, color: '#1a1a2e', marginBottom: 28 }}>
                <span className={`fade-t ${isChanging ? 'lang-out' : 'lang-in'}`}>{t.contactFormTitle}</span>
              </h3>
              <label className="form-label">
                <span className={`fade-t ${isChanging ? 'lang-out' : 'lang-in'}`}>{t.contactName}</span>
              </label>
              <input className="form-input" type="text" placeholder={t.contactNamePH} style={{ marginBottom: 18 }} />
              <label className="form-label">{t.contactEmail}</label>
              <input className="form-input" type="email" placeholder={t.contactEmailPH} style={{ marginBottom: 18 }} />
              <label className="form-label">
                <span className={`fade-t ${isChanging ? 'lang-out' : 'lang-in'}`}>{t.contactMsg}</span>
              </label>
              <textarea className="form-input" placeholder={t.contactMsgPH} rows={5} style={{ resize: 'vertical', marginBottom: 22 }} />
              <button className="btn-send">
                <Send size={17} />
                <span className={`fade-t ${isChanging ? 'lang-out' : 'lang-in'}`}>{t.contactSend}</span>
              </button>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 22 }}>
              <div className="reveal reveal-d2" style={{ background: '#ffffff', border: '1.5px solid #e8e4fc', borderRadius: 22, padding: 28, boxShadow: '0 4px 24px #7c3aed08' }}>
                <h3 style={{ fontSize: 20, fontWeight: 700, color: '#1a1a2e', marginBottom: 6 }}>
                  <span className={`fade-t ${isChanging ? 'lang-out' : 'lang-in'}`}>{t.contactInfoTitle}</span>
                </h3>
                <p key={language + 'cid'} className="fade-text" style={{ fontSize: 13, color: '#9090b0', marginBottom: 24 }}>{t.contactInfoDesc}</p>
                {[
                  { Icon: Mail, value: 'danielmafla320@gmail.com' },
                  { Icon: Phone, value: '+57 300 136 2838' },
                  { Icon: MapPin, value: 'Pasto, Colombia' },
                ].map(({ Icon, value }, idx, arr) => (
                  <div key={value} style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '14px 0', borderBottom: idx < arr.length - 1 ? '1px solid #f0eeff' : 'none' }}>
                    <div style={{ width: 40, height: 40, borderRadius: 12, background: '#ede9fe', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <Icon size={18} style={{ color: '#7c3aed' }} />
                    </div>
                    <div>
                      <div style={{ fontSize: 11, fontWeight: 700, color: '#9090b0', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                        <span className={`fade-t ${isChanging ? 'lang-out' : 'lang-in'}`}>{t.contactLabels[idx]}</span>
                      </div>
                      <div style={{ fontSize: 14, fontWeight: 600, color: '#1a1a2e' }}>{value}</div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="reveal reveal-d3" style={{ background: '#ffffff', border: '1.5px solid #e8e4fc', borderRadius: 22, padding: 28, boxShadow: '0 4px 24px #7c3aed08' }}>
                <h3 style={{ fontSize: 20, fontWeight: 700, color: '#1a1a2e', marginBottom: 18 }}>
                  <span className={`fade-t ${isChanging ? 'lang-out' : 'lang-in'}`}>{t.socialTitle}</span>
                </h3>
                <div style={{ display: 'flex', gap: 12 }}>
                  <a href="https://github.com/DanielMafla320" target="_blank" rel="noopener noreferrer">
                    <div className="social-btn"><FaGithub size={20} /></div>
                  </a>
                  <a href="https://www.linkedin.com/in/daniel-mafla-782541317/?skipRedirect=true" target="_blank" rel="noopener noreferrer">
                    <div className="social-btn"><FaLinkedin size={20} /></div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{ background: '#f0eeff', borderTop: '1px solid #e8e4fc', padding: '60px 0 28px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 40, marginBottom: 48 }}>
            <div>
              <div style={{ fontFamily: "'Syne', sans-serif", fontSize: 20, fontWeight: 800, marginBottom: 14 }}>
                <span style={{ color: '#1a1a2e' }}>Daniel </span><span className="grad">Mafla</span>
              </div>
              <p key={language + 'fd'} className="fade-text" style={{ fontSize: 13, color: '#9090b0', lineHeight: 1.75 }}>{t.footerDesc}</p>
            </div>
            <div>
              <div style={{ fontSize: 11, fontWeight: 700, color: '#1a1a2e', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 16 }}>
                <span className={`fade-t ${isChanging ? 'lang-out' : 'lang-in'}`}>{t.footerSkillsTitle}</span>
              </div>
              {t.footerSkills.map(s => (
                <div key={s} style={{ fontSize: 13, color: '#9090b0', marginBottom: 9, cursor: 'pointer', transition: 'color 0.2s' }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#7c3aed')}
                  onMouseLeave={e => (e.currentTarget.style.color = '#9090b0')}>{s}</div>
              ))}
            </div>
            <div>
              <div style={{ fontSize: 11, fontWeight: 700, color: '#1a1a2e', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 16 }}>
                <span className={`fade-t ${isChanging ? 'lang-out' : 'lang-in'}`}>{t.footerContactTitle}</span>
              </div>
              {[{ Icon: Mail, v: 'danielmafla320@gmail.com' }, { Icon: Phone, v: '+57 300 136 2838' }, { Icon: MapPin, v: 'Pasto, Colombia' }].map(({ Icon, v }) => (
                <div key={v} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13, color: '#9090b0', marginBottom: 10, cursor: 'pointer', transition: 'color 0.2s' }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#7c3aed')}
                  onMouseLeave={e => (e.currentTarget.style.color = '#9090b0')}>
                  <Icon size={14} />{v}
                </div>
              ))}
            </div>
            <div>
              <div style={{ fontSize: 11, fontWeight: 700, color: '#1a1a2e', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 10 }}>
                <span className={`fade-t ${isChanging ? 'lang-out' : 'lang-in'}`}>{t.footerFollowTitle}</span>
              </div>
              <div style={{ display: 'flex', gap: 12 }}>
                <a href="https://github.com/DanielMafla320" target="_blank" rel="noopener noreferrer">
                  <div className="social-btn"><FaGithub size={20} /></div>
                </a>
                <a href="https://www.linkedin.com/in/daniel-mafla-782541317/?skipRedirect=true" target="_blank" rel="noopener noreferrer">
                  <div className="social-btn"><FaLinkedin size={20} /></div>
                </a>
              </div>
            </div>
          </div>
          <div style={{ borderTop: '1px solid #e0dcf8', paddingTop: 24, textAlign: 'center' }}>
            <p key={language + 'fr'} className="fade-text" style={{ fontSize: 13, color: '#b0b0cc' }}>{t.footerRights}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}