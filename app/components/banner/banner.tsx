'use client'

import { motion } from "framer-motion";
import { Button } from "@/app/components/form";
import { Highlighter } from "@/app/ui/highlighter";

export default function Banner() {
  const badge = "META CORPO"
  const ctaText = "EU QUERO O META CORPO"
  const ctaHref = "https://pay.hotmart.com/U100928033C"
  
  const gradientColors = {
    from: "rgba(218, 165, 32, 0.5)",
    to: "rgba(139, 69, 19, 0.4)"
  }


  return (
    <div className="relative w-full overflow-hidden">
      {/* Top gradient background */}
      <motion.div
        aria-hidden="true"
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <motion.div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            background: `linear-gradient(to top right, ${gradientColors?.from}, ${gradientColors?.to})`
          }}
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] opacity-40 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.4, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
        />
      </motion.div>
      
      {/* Bottom gradient background */}
      <motion.div
        aria-hidden="true"
        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
      >
        <motion.div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            background: `linear-gradient(to top right, ${gradientColors?.from}, ${gradientColors?.to})`
          }}
          className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 opacity-40 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.4, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut", delay: 0.4 }}
        />
      </motion.div>

      <div className="relative isolate px-6 min-h-[85vh] flex flex-col justify-center items-center z-10">        
        <div className="mx-auto max-w-3xl w-full relative z-10">
          {/* Badge */}
          <motion.div 
            className="mb-4 sm:mb-6 flex justify-center relative z-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="inline-flex items-center justify-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider text-[#DAA520] bg-[rgba(139,69,19,0.15)] border border-[rgba(218,165,32,0.3)] shadow-[0_0_10px_rgba(218,165,32,0.3)]">
              <span className="text-[#DAA520]" style={{ fontSize: '14px', lineHeight: '1' }}>✦</span>
              {badge}
            </div>
          </motion.div>
          
          <div className="text-center relative z-10">
            <motion.h1 
              className="text-[28px] sm:text-[36px] md:text-[40px] font-semibold tracking-tight text-white leading-[1.2] mb-6 sm:mb-8 max-w-3xl mx-auto" 
              style={{ fontFamily: "'Trajan Pro', serif" }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            >
              Você está operando com um{" "}
              <Highlighter action="underline" color="#DAA520">
                corpo
              </Highlighter>{" "}
              abaixo do que ele aguenta.
            </motion.h1>
            <motion.p 
              className="mt-4 sm:mt-6 text-[15px] sm:text-[17px] font-normal text-pretty text-white/75 leading-[24px] sm:leading-[26px] max-w-2xl mx-auto" 
              style={{ fontFamily: "'Trajan Pro', serif" }}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            >
              Energia curta. Foco instável. Mente acelerada. Isso não se resolve só pensando melhor.{" "}
              <strong>Transforme seu corpo agora.</strong>
            </motion.p>
            
            {/* Call to action button */}
            <motion.div 
              className="mt-8 sm:mt-10 flex items-center justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
            >
              <a href={ctaHref} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', display: 'inline-block' }}>
                <Button
                  label={ctaText}
                  size="lg"
                />
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}


