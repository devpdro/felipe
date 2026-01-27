'use client';

import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center bg-white py-16 sm:py-20 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 max-w-5xl">
        <div className="flex flex-col items-center text-center space-y-8 sm:space-y-10 md:space-y-12">
          
          {/* Main Headline */}
          <motion.div
            className="space-y-2 sm:space-y-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#1a1a2e] leading-tight">
              <div className="block">Ajudamos empresas digitais e negócios locais</div>
              <div className="block">
                a <span className="relative inline-block">
                  escalar vendas com IAs que duplicam sua equipe
                  {/* Wavy line decoration - heartbeat/growth style */}
                  <svg
                    className="absolute bottom-0 left-0 w-full"
                    viewBox="0 0 400 15"
                    preserveAspectRatio="none"
                    style={{ height: '0.5em', bottom: '-0.1em', width: '100%' }}
                  >
                    <path
                      d="M 0 8 L 25 5 L 50 10 L 75 3 L 100 12 L 125 6 L 150 11 L 175 4 L 200 9 L 225 7 L 250 10 L 275 5 L 300 8 L 325 6 L 350 9 L 375 7 L 400 8"
                      fill="none"
                      stroke="#3b82f6"
                      strokeWidth="3.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span> sem duplicar seus custos
              </div>
            </h1>
          </motion.div>

          {/* Supporting Text */}
          <motion.p
            className="text-base sm:text-lg md:text-xl text-gray-700 max-w-3xl leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Delegue até 80% das conversas para sistemas que vendem, qualificam e atendem sem SDR's caros ou Agências de Marketing que vão te deixar na mão.
          </motion.p>

          {/* CTA Button */}
          <motion.button
            className="px-8 sm:px-10 md:px-12 py-4 sm:py-5 md:py-6 rounded-2xl sm:rounded-3xl text-white font-semibold text-base sm:text-lg md:text-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            style={{
              background: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)',
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            Agende sua chamada de auditoria gratuita
          </motion.button>

        </div>
      </div>
    </section>
  );
}

