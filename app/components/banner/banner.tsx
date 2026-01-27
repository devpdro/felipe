'use client';

import { motion } from 'framer-motion';
import { TextShimmer } from "@/app/ui/text-shimmer";

export default function Banner() {
  return (
    <section className="relative w-full flex items-center justify-center py-16 sm:py-20 md:py-24" style={{
      backgroundColor: '#0a0a0a',
      backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255, 255, 255, 0.2) 1px, transparent 0)',
      backgroundSize: '16px 16px',
      backgroundPosition: '0 0'
    }}>
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 max-w-5xl">
        <div className="flex flex-col items-center text-center space-y-8 sm:space-y-10 md:space-y-12">
          
          {/* Main Headline */}
          <motion.div
            className="space-y-2 sm:space-y-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h1 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight"
              style={{ 
                fontFamily: "var(--font-trajan), 'Trajan Pro', serif",
                color: '#fff'
              }}
            >
              <TextShimmer duration={3.5} spread={3} baseColor="#DAA520" gradientColor="#CD853F">META CORPO</TextShimmer>
            </h1>
          </motion.div>

          {/* Supporting Text */}
          <motion.p
            className="text-base sm:text-lg md:text-xl max-w-3xl leading-relaxed"
            style={{ 
              fontFamily: "var(--font-trajan), 'Trajan Pro', serif",
              color: 'rgba(255, 255, 255, 0.78)'
            }}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              ease: [0.25, 0.46, 0.45, 0.94],
              delay: 0.1,
            }}
          >
            Você está operando com um corpo abaixo do que ele aguenta.
            <br /><br />
            O resultado aparece todo dia na sua energia curta, foco instável, mente acelerada e vontade fraca.
            <br /><br />
            Isso não se resolve pensando melhor, lendo mais, fazendo promessas que sabe que não vai sustentar; e não irá sustentar porque educou a mente para pensar e quer mais, porém nunca educou o corpo para viver em seu auge naturalmente.
          </motion.p>

        </div>
      </div>
    </section>
  );
}
