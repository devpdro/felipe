'use client';

import { useEffect } from 'react';

export default function Header() {
  useEffect(() => {
    // Embed Unicorn Studio script
    const embedScript = document.createElement('script');
    embedScript.type = 'text/javascript';
    embedScript.textContent = `
      !function(){
        if(!window.UnicornStudio){
          window.UnicornStudio={isInitialized:!1};
          var i=document.createElement("script");
          i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.33/dist/unicornStudio.umd.js";
          i.onload=function(){
            window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)
          };
          (document.head || document.body).appendChild(i)
        }
      }();
    `;
    document.head.appendChild(embedScript);

    // Add CSS to hide branding elements, crop canvas and remove background
    const style = document.createElement('style');
    style.textContent = `
      [data-us-project="whwOGlfJ5Rz2rHaEUgHl"] {
        position: relative !important;
        overflow: hidden !important;
        background: transparent !important;
        width: 100% !important;
        height: 100% !important;
      }
      
      [data-us-project="whwOGlfJ5Rz2rHaEUgHl"] canvas {
        clip-path: inset(0 0 10% 0) !important;
        background: transparent !important;
        width: 100% !important;
        height: 100% !important;
        object-fit: contain !important;
      }
      
      [data-us-project="whwOGlfJ5Rz2rHaEUgHl"] * {
        pointer-events: none !important;
      }
      
      [data-us-project="whwOGlfJ5Rz2rHaEUgHl"] > div,
      [data-us-project="whwOGlfJ5Rz2rHaEUgHl"] > iframe {
        background: transparent !important;
        width: 100% !important;
        height: 100% !important;
      }
      
      @media (max-width: 640px) {
        [data-us-project="whwOGlfJ5Rz2rHaEUgHl"] canvas {
          clip-path: inset(0 0 15% 0) !important;
        }
      }
      
      [data-us-project="whwOGlfJ5Rz2rHaEUgHl"] a[href*="unicorn"],
      [data-us-project="whwOGlfJ5Rz2rHaEUgHl"] button[title*="unicorn"],
      [data-us-project="whwOGlfJ5Rz2rHaEUgHl"] div[title*="Made with"],
      [data-us-project="whwOGlfJ5Rz2rHaEUgHl"] .unicorn-brand,
      [data-us-project="whwOGlfJ5Rz2rHaEUgHl"] [class*="brand"],
      [data-us-project="whwOGlfJ5Rz2rHaEUgHl"] [class*="credit"],
      [data-us-project="whwOGlfJ5Rz2rHaEUgHl"] [class*="watermark"] {
        display: none !important;
        visibility: hidden !important;
        opacity: 0 !important;
        position: absolute !important;
        left: -9999px !important;
        top: -9999px !important;
      }
    `;
    document.head.appendChild(style);

    // Function to aggressively hide branding
    const hideBranding = () => {
      const projectDiv = document.querySelector('[data-us-project="whwOGlfJ5Rz2rHaEUgHl"]');
      if (projectDiv) {
        // Find and remove any elements containing branding text
        const allElements = projectDiv.querySelectorAll('*');
        allElements.forEach(el => {
          const text = (el.textContent || '').toLowerCase();
          if (text.includes('made with') || text.includes('unicorn')) {
            el.remove();
          }
        });
      }
    };

    // Run immediately and periodically
    hideBranding();
    const interval = setInterval(hideBranding, 100);
    
    // Also try after delays
    setTimeout(hideBranding, 1000);
    setTimeout(hideBranding, 3000);
    setTimeout(hideBranding, 5000);

    return () => {
      clearInterval(interval);
      if (document.head.contains(embedScript)) {
        document.head.removeChild(embedScript);
      }
      if (document.head.contains(style)) {
        document.head.removeChild(style);
      }
    };
  }, []);

  return (
    <div className="relative w-full min-h-screen sm:min-h-[600px] md:min-h-screen overflow-hidden bg-transparent" suppressHydrationWarning>
      {/* Vitruvian man animation */}
      <div className="absolute inset-0 w-full h-full z-0 bg-transparent">
        <div 
          data-us-project="whwOGlfJ5Rz2rHaEUgHl" 
          className="w-full h-full"
          style={{ minHeight: '100vh', background: 'transparent' }}
          suppressHydrationWarning
        />
      </div>

      {/* Text overlay - responsive positioning */}
      <div className="absolute left-0 top-0 bottom-0 z-10 flex items-center px-4 sm:px-6 md:px-8 lg:px-12 pointer-events-none">
        <div className="max-w-[280px] sm:max-w-xs md:max-w-sm lg:max-w-md">
          <div 
            className="text-white/90 text-[11px] sm:text-xs md:text-sm lg:text-base leading-relaxed sm:leading-relaxed md:leading-relaxed space-y-1.5 sm:space-y-2 md:space-y-2.5" 
            style={{ fontFamily: "var(--font-trajan), 'Trajan Pro', serif" }}
          >
            <div className="text-white/60 text-[9px] sm:text-[10px] md:text-xs lg:text-sm uppercase tracking-widest mb-2 sm:mb-2.5 md:mb-3">
              META CORPO
            </div>
            <p className="text-white/80 text-[11px] sm:text-xs md:text-sm lg:text-base">
              Você está operando com um corpo abaixo do que ele aguenta.
            </p>
            <p className="text-white/70 text-[11px] sm:text-xs md:text-sm lg:text-base">
              O resultado aparece todo dia na sua energia curta, foco instável, mente acelerada e vontade fraca.
            </p>
            <p className="text-white/60 text-[10px] sm:text-[11px] md:text-xs lg:text-sm leading-snug sm:leading-relaxed">
              Isso não se resolve pensando melhor, lendo mais, fazendo promessas que sabe que não vai sustentar; e não irá sustentar porque educou a mente para pensar e quer mais, porém nunca educou o corpo para viver em seu auge naturalmente.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

