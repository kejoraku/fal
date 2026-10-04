'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Menu, X, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const games = [
    { id: 'arma3', title: 'Arma III', bg: '/images/bg-arma3.jpg', bgMobile: '/images/bg-arma3-mobile.jpg', desc: 'Simulación militar ultra realista.' },
    { id: 'wardogs', title: 'Wardogs', bg: '/images/bg-wardogs.jpg', bgMobile: '/images/bg-wardogs-mobile.jpg', desc: 'Combate táctico e intensidad en el frente.' },
    { id: 'reforger', title: 'Arma Reforger', bg: '/images/bg-reforger.jpg', bgMobile: '/images/bg-reforger-mobile.jpg', desc: 'La nueva era del motor Enfusion.' },
    { id: 'minecraft', title: 'Minecraft', bg: '/images/bg-minecraft.jpg', bgMobile: '/images/bg-minecraft-mobile.jpg', desc: 'Construcción, supervivencia y comunidad.' },
  ];

  // Datos para los 4 bloques de video
  const videoFeeds = [
    { id: 'vid1', title: 'DRONE RECON // INTEL', src: 'https://w3schools.com' },
    { id: 'vid2', title: 'BODYCAM // SQUAD ALPHA', src: 'https://w3schools.com' },
    { id: 'vid3', title: 'SATELLITE // LIVE FEED', src: 'https://w3schools.com' },
    { id: 'vid4', title: 'THERMAL // OVERWATCH', src: 'https://w3schools.com' },
  ];

  // Las 5 imágenes asignadas para el carrusel táctico de abajo
  const carruselImagenes = [
    '/images/carrusel-1.jpg',
    '/images/carrusel-2.jpg',
    '/images/carrusel-3.jpg',
    '/images/carrusel-4.jpg',
    '/images/carrusel-5.jpg',
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === carruselImagenes.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? carruselImagenes.length - 1 : prev - 1));
  };

  return (
    <div style={{ backgroundColor: '#09090b', color: '#ffffff', minHeight: '100vh', width: '100%', fontFamily: 'sans-serif', margin: 0, padding: 0 }}>
      
      {/* 🎖️ SELLO TOP SECRET CLAVADO EN SU LUGAR PERFECTO */}
      <div 
        style={{ 
          position: 'fixed', 
          top: '2px',         
          right: '-38px',     
          width: '260px',     
          height: '120px', 
          transform: 'rotate(38deg)', 
          zIndex: 200, 
          pointerEvents: 'none'
        }}
      >
        <Image 
          src="/images/top-secret.png" 
          alt="Top Secret Stamp" 
          fill 
          sizes="260px"
          style={{ objectFit: 'contain' }}
        />
      </div>

      {/* 1. NAVEGADOR SUPERIOR */}
      <nav 
        style={{ 
          position: 'fixed', 
          top: 0, 
          left: 0, 
          width: '100%', 
          height: '84px', 
          backgroundColor: 'rgba(24, 24, 27, 0.85)', 
          backdropFilter: 'blur(12px)',
          borderBottom: '1px solid rgba(39, 39, 42, 0.6)',
          display: 'grid', 
          gridTemplateColumns: '1fr auto 1fr', 
          alignItems: 'center', 
          padding: '0 32px',
          boxSizing: 'border-box',
          zIndex: 100 
        }}
      >
        {/* Columna Izquierda: Logo FAL */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}>
          <div style={{ position: 'relative', width: '180px', height: '60px' }}>
            <Image 
              src="/images/logo-fal.png" 
              alt="FAL Logo" 
              fill 
              sizes="180px" 
              style={{ objectFit: 'contain', objectPosition: 'left' }} 
              priority 
            />
          </div>
        </div>

        {/* Columna Central: Texto "Campañas" limpio sin recuadro con scroll suavizado */}
        <div className="menu-desktop" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <a 
            href="#campanas" 
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('campanas')?.scrollIntoView({ behavior: 'smooth' });
            }}
            style={{ color: '#fbbf24', textDecoration: 'none', fontWeight: 600, fontSize: '15px', textTransform: 'uppercase', letterSpacing: '0.05em' }}
          >
            Campañas
          </a>
        </div>

        {/* Columna Derecha: Hamburguesa Mobile */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="btn-hamburguesa"
            style={{ background: 'none', border: 'none', color: '#a1a1aa', cursor: 'pointer', padding: '8px' }}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Desplegable Mobile */}
        {isOpen && (
          <div style={{ position: 'absolute', top: '84px', left: 0, width: '100%', backgroundColor: '#18181b', borderBottom: '1px solid #27272a', padding: '20px', display: 'flex', flexDirection: 'column', gap: '12px', boxSizing: 'border-box', boxShadow: '0 20px 25px -5px rgba(0,0,0,0.7)', zIndex: 99 }}>
            <a 
              href="#campanas" 
              onClick={(e) => {
                e.preventDefault();
                setIsOpen(false);
                document.getElementById('campanas')?.scrollIntoView({ behavior: 'smooth' });
              }} 
              style={{ display: 'block', textAlign: 'center', color: '#fbbf24', textDecoration: 'none', fontWeight: 600, textTransform: 'uppercase' }}
            >
              Campañas
            </a>
          </div>
        )}
      </nav>

      {/* 2. LOS 4 BANNERS FULL SCREEN */}
      {games.map((game) => (
        <section 
          key={game.id} 
          style={{ 
            position: 'relative', 
            width: '100%', 
            height: '100vh', 
            display: 'flex', 
            flexDirection: 'column', 
            justifyContent: 'center', 
            alignItems: 'center', 
            textAlign: 'center', 
            padding: '0 24px',
            boxSizing: 'border-box',
            overflow: 'hidden',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundImage: `linear-gradient(to top, #09090b 5%, rgba(9, 9, 11, 0.15) 50%, #09090b 95%), url(${game.bg})`
          }}
        >
          <div style={{ maxWidth: '700px', zIndex: 10, padding: '0 12px', marginTop: '40px' }}>
            <span style={{ fontSize: '13px', fontWeight: 700, letterSpacing: '0.25em', color: '#f59e0b', textTransform: 'uppercase' }}>Comunidad F.A.L</span>
            <h1 style={{ fontSize: 'min(10vw, 72px)', fontWeight: 900, textTransform: 'uppercase', margin: '16px 0', lineHeight: 1.05, color: '#ffffff' }}>
              {game.title}
            </h1>
            <p style={{ fontSize: 'min(4.5vw, 19px)', color: '#e4e4e7', margin: '0 auto 32px auto', fontWeight: 300, lineHeight: 1.6, maxWidth: '520px' }}>
              {game.desc}
            </p>
            <div>
              <button style={{ backgroundColor: '#ffffff', color: '#000000', border: 'none', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.15em', fontSize: '13px', padding: '16px 36px', cursor: 'pointer', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.3)' }}>
                Ver Servidores
              </button>
            </div>
          </div>
        </section>
      ))}
      {/* 3. NUEVA SECCIÓN DE CAMPAÑAS REDISEÑADA AL 100% */}
      <section 
        id="campanas" 
        style={{ position: 'relative', width: '100%', minHeight: '100vh', backgroundColor: '#09090b', paddingTop: '110px', paddingBottom: '80px', boxSizing: 'border-box' }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px', boxSizing: 'border-box' }}>
          
          {/* Encabezado solicitado: Título con fecha y descripción táctica */}
          <div style={{ borderLeft: '4px solid #f59e0b', paddingLeft: '16px', marginBottom: '48px' }}>
            <h2 style={{ fontSize: 'min(7vw, 40px)', fontWeight: 900, textTransform: 'uppercase', margin: 0, letterSpacing: '0.02em', color: '#ffffff' }}>
              E X A M I N A T I O N - 3 de Octubre
            </h2>
            <p style={{ fontSize: '16px', color: '#d4d4d8', marginTop: '12px', lineHeight: 1.6, maxWidth: '800px', fontWeight: 300 }}>
              Esta noche nos infiltramos en una instalación secreta del ejército Ruso en las cercanías de Moscú. 
              El objetivo prioritario es extraer la información encriptada de los servidores principales y asegurar la zona de evacuación antes del amanecer. Mantener silencio de radio absoluto hasta el inicio de la fase Alpha.
            </p>
          </div>

          {/* Fila con un espacio de 4 cajitas para ver videos en una sola fila */}
          <h3 style={{ fontSize: '14px', fontWeight: 700, color: '#f59e0b', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '16px' }}>
            // TRANSMISIONES DE VIDEO ASOCIADAS
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px', marginBottom: '64px' }}>
            {videoFeeds.map((feed) => (
              <div 
                key={feed.id}
                onClick={() => setActiveVideo(feed.src)}
                style={{ 
                  backgroundColor: '#18181b', 
                  border: '1px solid #27272a', 
                  borderRadius: '6px', 
                  overflow: 'hidden', 
                  cursor: 'pointer',
                  aspectRatio: '16/9',
                  position: 'relative',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 4px 6px -1px rgba(0,0,0,0.3)'
                }}
              >
                {/* Título de la transmisión sobre el fondo */}
                <div style={{ zIndex: 10, backgroundColor: 'rgba(0,0,0,0.6)', padding: '10px 16px', borderRadius: '4px', border: '1px solid rgba(255,255,255,0.2)', fontSize: '11px', fontWeight: 'bold', letterSpacing: '0.05em' }}>
                  {feed.title}
                </div>
                {/* Degradado de fondo táctico interno de la cajita */}
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, #27272a 0%, #09090b 100%)', opacity: 0.85 }} />
              </div>
            ))}
          </div>

          {/* Carrusel de Banners con 5 imágenes */}
          <h3 style={{ fontSize: '14px', fontWeight: 700, color: '#f59e0b', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '16px' }}>
            // REGISTRO FOTOGRÁFICO DE OPERACIONES
          </h3>
          <div style={{ position: 'relative', width: '100%', height: '500px', backgroundColor: '#18181b', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 20px 25px -5px rgba(0,0,0,0.5)' }}>
            
            {/* Imagen del Carrusel conectada a tu carpeta public/images/ */}
            <div style={{ position: 'relative', width: '100%', height: '100%' }}>
              <Image 
                src={carruselImagenes[currentSlide]} 
                alt={`Operación foto ${currentSlide + 1}`} 
                fill
                sizes="100vw"
                style={{ objectFit: 'cover', objectPosition: 'center' }}
              />
              
              {/* Capa de sombreado interno inferior */}
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 40%)', zIndex: 5 }} />
              <div style={{ position: 'absolute', bottom: '24px', left: '24px', zIndex: 10, fontSize: '14px', fontWeight: 'bold', color: '#ffffff', backgroundColor: 'rgba(0,0,0,0.6)', padding: '8px 16px', borderRadius: '4px', border: '1px solid rgba(255,255,255,0.1)' }}>
                ARCHIVO RECON // FOTO_0{currentSlide + 1}.PNG
              </div>
            </div>

            {/* Controles laterales de navegación del carrusel */}
            <button 
              onClick={prevSlide}
              style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', backgroundColor: 'rgba(0,0,0,0.7)', border: '1px solid #27272a', color: '#ffffff', padding: '12px', borderRadius: '50%', cursor: 'pointer', zIndex: 10 }}
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={nextSlide}
              style={{ position: 'absolute', right: '16px', top: '50%', transform: 'translateY(-50%)', backgroundColor: 'rgba(0,0,0,0.7)', border: '1px solid #27272a', color: '#ffffff', padding: '12px', borderRadius: '50%', cursor: 'pointer', zIndex: 10 }}
            >
              <ChevronRight size={24} />
            </button>
          </div>

        </div>
      </section>

      {/* 🖥️ REPRODUCTOR MODAL FLOTANTE (Para agrandar y ver los videos a gran escala) */}
      {activeVideo && (
        <div 
          style={{ 
            position: 'fixed', 
            inset: 0, 
            backgroundColor: 'rgba(5, 5, 6, 0.95)', 
            backdropFilter: 'blur(10px)',
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            zIndex: 300,
            padding: '24px' 
          }}
        >
          <div style={{ position: 'relative', width: '100%', maxWidth: '960px', aspectRatio: '16/9', backgroundColor: '#000000', borderRadius: '8px', overflow: 'hidden', border: '1px solid #27272a', boxShadow: '0 25px 50px -12px rgba(0,0,0,0.8)' }}>
            {/* Botón para Cerrar el Video */}
            <button 
              onClick={() => setActiveVideo(null)}
              style={{ position: 'absolute', top: '16px', right: '16px', backgroundColor: 'rgba(0,0,0,0.7)', border: '1px solid rgba(255,255,255,0.2)', color: '#ffffff', padding: '8px', borderRadius: '50%', cursor: 'pointer', zIndex: 310 }}
            >
              <X size={20} />
            </button>
            {/* Tag de Video Nativo Reproducible */}
            <video 
              src={activeVideo} 
              controls 
              autoPlay 
              style={{ width: '100%', height: '100%', objectFit: 'contain' }} 
            />
          </div>
        </div>
      )}

    </div>
  );
}
