import React, { useState } from 'react';
import CustomCursor from './components/CustomCursor';
import ThemeToggle from './components/ThemeToggle';
import ComparisonSlider from './components/ComparisonSlider';
import ChatWidget from './components/ChatWidget';
import SocialModal from './components/SocialModal';
import InfoModal from './components/InfoModal';
import ProjectsGallery from './components/ProjectsGallery';
import { PaintBrushIcon, CodeBracketIcon, SOCIAL_LINKS, TEXTS } from './constants';
import { ViewState } from './types';

const App: React.FC = () => {
  const [view, setView] = useState<ViewState>('home'); // SPA Routing State
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showSocialModal, setShowSocialModal] = useState(false);
  
  // Modals for About and Services
  const [showAboutModal, setShowAboutModal] = useState(false);
  const [showServicesModal, setShowServicesModal] = useState(false);

  const t = TEXTS;

  const handleNavClick = (key: string) => {
    setIsMenuOpen(false);
    
    // Custom Navigation Logic
    if (key === 'projects') {
      setView('projects');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (key === 'home') {
      setView('home');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (key === 'about') {
      setShowAboutModal(true);
    } else if (key === 'services') {
      setShowServicesModal(true);
    }
  };

  const NavContent = () => (
    <>
      <button 
        onClick={() => view === 'projects' ? handleNavClick('home') : handleNavClick('projects')} 
        className="hover:text-soul-purple transition-colors text-left clickable font-bold"
      >
        {view === 'projects' ? t.nav.home : t.nav.projects}
      </button>
      <button onClick={() => handleNavClick('services')} className="hover:text-soul-purple transition-colors text-left clickable">
        {t.nav.services}
      </button>
      <button onClick={() => handleNavClick('about')} className="hover:text-soul-purple transition-colors text-left clickable">
        {t.nav.about}
      </button>
      <button onClick={() => { setIsMenuOpen(false); setShowSocialModal(true); }} className="hover:text-soul-purple transition-colors text-left clickable">
        {t.nav.socials}
      </button>
    </>
  );

  return (
    <div className="relative w-full overflow-hidden flex flex-col min-h-screen">
      <CustomCursor />
      
      {/* Navigation / Header */}
      {/* Added specific text colors to fix visibility issues in Light Mode (white background) */}
      <header className="fixed top-0 w-full z-30 transition-all duration-300 glass-panel text-gray-900 dark:text-white">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          
          {/* Mobile: Hamburger Button */}
          <button 
            className="md:hidden p-2 text-current clickable"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Menu"
          >
            <div className="w-6 flex flex-col items-start gap-1.5">
              <span className={`block h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? 'w-6 rotate-45 translate-y-2' : 'w-6'}`}></span>
              <span className={`block h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'w-4'}`}></span>
              <span className={`block h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? 'w-6 -rotate-45 -translate-y-2' : 'w-2'}`}></span>
            </div>
          </button>

          {/* Logo Section */}
          <div className="flex items-center cursor-pointer clickable gap-3" onClick={() => setView('home')}>
             {/* 
                ========================================================================
                LOGO REPLACEMENT ZONE
                ========================================================================
             */}
             <div className="text-2xl font-serif font-bold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-soul-purple to-soul-violet flex items-center gap-2">
                {/* Palette Logo SVG */}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="url(#logo-gradient)" className="w-10 h-10">
                  <defs>
                    <linearGradient id="logo-gradient" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="#9929EA" />
                      <stop offset="100%" stopColor="#5808FB" />
                    </linearGradient>
                  </defs>
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c1.85 0 3.58-.58 5.01-1.57.54-.37.79-1.04.59-1.67-.32-.98-1.24-1.66-2.28-1.66h-.82c-1.1 0-2-.9-2-2 0-.39.11-.76.31-1.08.3-.49.49-1.06.49-1.67 0-1.66-1.34-3-3-3s-3 1.34-3 3c0 1.66 1.34 3 3 3 .34 0 .67-.06.97-.16.32-.11.66-.17 1.03-.17h2c1.1 0 2 .9 2 2 0 .55-.45 1-1 1h-2c-2.76 0-5 2.24-5 5s2.24 5 5 5c2.76 0 5-2.24 5-5 0-2.76-2.24-5-5-5z" />
                  <circle cx="6.5" cy="6.5" r="1.5" fill="white" fillOpacity="0.9"/>
                  <circle cx="11.5" cy="4.5" r="1.5" fill="white" fillOpacity="0.9"/>
                  <circle cx="16.5" cy="7.5" r="1.5" fill="white" fillOpacity="0.9"/>
                </svg>
             </div>
          </div>

          {/* Desktop Nav & Controls */}
          <div className="hidden md:flex items-center gap-6">
            <nav className="flex gap-6 text-sm font-medium tracking-wide">
              <NavContent />
            </nav>
            
            <div className="h-6 w-px bg-current opacity-20 mx-2"></div>
            
            <ThemeToggle />
          </div>

          {/* Mobile Spacer */}
          <div className="w-6 md:hidden"></div>
        </div>

        {/* Mobile Dropdown Menu */}
        <div className={`md:hidden absolute top-full left-0 w-full glass-panel border-t border-gray-200 dark:border-white/10 transition-all duration-300 overflow-hidden ${isMenuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
           <div className="flex flex-col p-6 gap-4 items-center">
              <NavContent />
              <hr className="w-full border-current opacity-10 my-2"/>
              <div className="flex items-center gap-8">
                 <ThemeToggle />
              </div>
           </div>
        </div>
      </header>

      {/* Main Content Area (Switches based on View State) */}
      <main className="flex-grow pt-20">
        {view === 'projects' ? (
          <ProjectsGallery />
        ) : (
          /* HOME VIEW */
          <>
            {/* Hero Section */}
            <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-4 -mt-20">
              <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,rgba(88,8,251,0.10)_0%,rgba(0,0,0,0)_70%)] pointer-events-none"></div>
              
              <div className="relative z-10 flex flex-col items-center mb-8">
                  <h1 className="font-serif leading-none tracking-tighter">
                    <span className="block text-6xl md:text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-gray-800 to-gray-500 dark:from-white dark:to-gray-500 mb-2 md:mb-4">
                      {t.hero.l1}
                    </span>
                    <span className="block text-4xl md:text-7xl font-sans font-light text-soul-purple">
                      {t.hero.l2}
                    </span>
                  </h1>
              </div>
              
              <p className="font-sans text-lg md:text-xl text-gray-700 dark:text-off-white opacity-90 max-w-2xl mx-auto mb-12 tracking-wide leading-relaxed">
                <span className="inline-block">{t.hero.subtitle_part1}</span>
                <span className="block md:inline-block md:ml-2 font-semibold text-soul-purple">{t.hero.subtitle_part2}</span>
              </p>
              
              <a 
                href={SOCIAL_LINKS.whatsapp}
                className="relative px-8 py-3 rounded-full bg-transparent border border-soul-purple text-soul-purple overflow-hidden group transition-all duration-300 hover:text-white hover:border-transparent hover:shadow-[0_0_20px_rgba(153,41,234,0.6)] clickable"
              >
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-soul-purple to-soul-violet opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                <span className="relative z-10 font-bold tracking-wider text-sm">{t.hero.cta}</span>
              </a>
            </section>

            {/* About Teaser (Opens Modal) */}
            <section id="about" className="py-24 px-6 relative z-10 bg-gray-100 dark:bg-black/20 transition-colors">
              <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-soul-purple to-soul-violet text-glow">
                    {t.about.title}
                  </h2>
                  <div className="space-y-2">
                    <h3 className="text-xl font-light uppercase tracking-widest opacity-70">
                      {t.about.subtitle}
                    </h3>
                    <div className="h-1 w-20 bg-gradient-to-r from-soul-purple to-soul-violet animate-loading-bar rounded-full"></div>
                  </div>
                  
                  <p className="font-sans text-lg leading-relaxed opacity-90 pt-4">
                    {t.about.desc1}
                  </p>
                  <button 
                    onClick={() => setShowAboutModal(true)}
                    className="text-soul-purple font-bold tracking-wide border-b border-soul-purple pb-0.5 hover:text-soul-violet transition-colors clickable"
                  >
                    Leia Nossa História Completa →
                  </button>
                </div>
                <div className="relative">
                  <div className="aspect-[4/5] rounded-lg overflow-hidden glass-panel relative flex flex-col items-center justify-center p-8 text-center group cursor-pointer clickable" onClick={() => setShowAboutModal(true)}>
                     <div className="absolute inset-0 bg-gradient-to-br from-soul-purple/10 to-transparent transition-opacity duration-500 group-hover:opacity-100 opacity-50"></div>
                     <div className="text-6xl mb-6 transform transition-transform duration-500 group-hover:-translate-y-2">
                       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-16 h-16 text-soul-purple animate-glow-pulse">
                         <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
                       </svg>
                     </div>
                     <h3 className="font-serif text-2xl font-bold mb-4 relative z-10 text-gray-900 dark:text-white">Visão Estratégica</h3>
                     <p className="text-lg italic font-serif mb-6 relative z-10 opacity-90">{t.about.cardQuote}</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Services Teaser (Opens Modal) */}
            <section id="services" className="py-24 px-6 relative z-10">
              <div className="container mx-auto">
                <div className="text-center mb-16">
                  <h2 className="font-serif text-4xl font-bold mb-2">{t.services.title}</h2>
                  <p className="opacity-60">{t.services.sub}</p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div onClick={() => setShowServicesModal(true)} className="glass-panel p-8 rounded-2xl hover:bg-gray-200 dark:hover:bg-white/10 transition-colors duration-300 group cursor-pointer clickable">
                    <div className="w-14 h-14 rounded-full bg-soul-purple/20 flex items-center justify-center mb-6 text-soul-purple group-hover:scale-110 transition-transform">
                      <PaintBrushIcon />
                    </div>
                    <h3 className="font-serif text-2xl font-bold mb-4">{t.services.s1_title}</h3>
                    <p className="opacity-80 leading-relaxed mb-6">{t.services.s1_desc}</p>
                  </div>
                  <div onClick={() => setShowServicesModal(true)} className="glass-panel p-8 rounded-2xl hover:bg-gray-200 dark:hover:bg-white/10 transition-colors duration-300 group cursor-pointer clickable">
                    <div className="w-14 h-14 rounded-full bg-soul-violet/20 flex items-center justify-center mb-6 text-soul-violet group-hover:scale-110 transition-transform">
                      <CodeBracketIcon />
                    </div>
                    <h3 className="font-serif text-2xl font-bold mb-4">{t.services.s2_title}</h3>
                    <p className="opacity-80 leading-relaxed mb-6">{t.services.s2_desc}</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Comparison Portfolio */}
            <section className="py-24 px-6 bg-gray-200 dark:bg-black/30 transition-colors">
              <div className="container mx-auto">
                <div className="text-center mb-16">
                  <h2 className="font-serif text-4xl font-bold mb-2">{t.portfolio.title}</h2>
                  <p className="opacity-60">{t.portfolio.sub}</p>
                </div>
                <div className="flex flex-col gap-16">
                  <div className="flex flex-col items-center">
                    <h4 className="mb-4 font-bold text-lg opacity-70">Identidade Visual</h4>
                    <ComparisonSlider beforeImage="https://picsum.photos/id/235/800/600?grayscale" afterImage="https://picsum.photos/id/238/800/600" />
                  </div>
                  <div className="flex flex-col items-center">
                     <h4 className="mb-4 font-bold text-lg opacity-70">Web Design</h4>
                    <ComparisonSlider beforeImage="https://picsum.photos/id/3/800/600?grayscale&blur=2" afterImage="https://picsum.photos/id/60/800/600" />
                    <p className="mt-8 text-center text-sm opacity-50 italic max-w-md">{t.portfolio.drag}</p>
                  </div>
                </div>
              </div>
            </section>
          </>
        )}
      </main>

      {/* Footer */}
      <footer id="footer" className="py-12 border-t border-current/10 bg-gray-50 dark:bg-anthracite-start relative z-10 transition-colors duration-500 mt-auto">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left order-2 md:order-1">
            <h4 className="font-serif text-xl font-bold">ArtyLab</h4>
            <p className="text-sm opacity-50 mt-1">{t.footer.rights}</p>
          </div>
          {/* Social Icons removed as requested to avoid duplication and bugs */}
        </div>
      </footer>

      {/* Persistent Widgets */}
      <ChatWidget />
      <SocialModal isOpen={showSocialModal} onClose={() => setShowSocialModal(false)} />

      {/* About Modal */}
      <InfoModal 
        isOpen={showAboutModal} 
        onClose={() => setShowAboutModal(false)} 
        title={t.modals.about.title}
        size="lg"
      >
        <div className="font-sans text-lg leading-relaxed whitespace-pre-line opacity-90 text-gray-800 dark:text-off-white">
          {t.modals.about.content}
        </div>
      </InfoModal>

      {/* Services Modal */}
      <InfoModal 
        isOpen={showServicesModal} 
        onClose={() => setShowServicesModal(false)} 
        title={t.modals.services.title}
        size="xl"
      >
        <div className="space-y-8">
          <div className="mb-8">
            <h3 className="text-2xl font-serif font-bold text-soul-purple mb-2">{t.modals.services.subtitle}</h3>
            <p className="text-lg opacity-80">{t.modals.services.intro}</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {t.modals.services.items.map((item, idx) => (
              <div key={idx} className="bg-gray-100 dark:bg-black/20 p-6 rounded-xl border border-current/10 hover:border-soul-purple/50 transition-colors">
                <h4 className="text-xl font-bold mb-4 text-soul-violet">{item.title}</h4>
                <p className="leading-relaxed text-sm opacity-90 text-gray-800 dark:text-off-white">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </InfoModal>

    </div>
  );
};

export default App;