"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { IMAGE } from "@/app/assets/images";
import { TextShimmer } from "@/app/ui/text-shimmer";
import S from "./manifesto.module.scss";

const Manifesto = () => {
  return (
    <section className={S.section}>
      {/* Spiral Icon */}
      <motion.div
        className={S.iconWrapper}
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={S.spiralIcon}
        >
          <path
            d="M16 4C9.373 4 4 9.373 4 16s5.373 12 12 12 12-5.373 12-12S22.627 4 16 4zm0 20c-4.418 0-8-3.582-8-8s3.582-8 8-8 8 3.582 8 8-3.582 8-8 8z"
            stroke="#3b82f6"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
          />
          <path
            d="M16 8c-4.418 0-8 3.582-8 8s3.582 8 8 8 8-3.582 8-8-3.582-8-8-8zm0 12c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4z"
            stroke="#3b82f6"
            strokeWidth="1.5"
            fill="none"
            strokeLinecap="round"
          />
        </svg>
      </motion.div>

      {/* Main Title */}
      <motion.h1
        className={S.title}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
      >
        <TextShimmer duration={3.5} spread={3} baseColor="#DAA520" gradientColor="#CD853F">
          O Manifesto da Fonte
        </TextShimmer>
      </motion.h1>

      {/* Central Image Container */}
      <motion.div
        className={S.imageContainer}
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      >
        <div className={S.imageWrapper}>
          <Image
            src={IMAGE.IMAGE_4}
            alt="Manifesto da Fonte"
            fill
            className={S.image}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 80vw"
            priority
          />
          {/* Overlay gradient at the bottom */}
          <div className={S.overlay} />
          {/* Text overlay at the bottom */}
          <div className={S.textOverlay}>
            <motion.p
              className={S.overlayText}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Pensamento, emoção e foco passam pelo corpo é da essência dele, mas um corpo desorganizado limita tudo isso.
              <br /><br />
              Aqui você ajusta o físico primeiro e o resto desbloqueia, como um efeito cascata.
              <br /><br />
              Movimento, respiração, jejum, treino e exposição ao desconforto certo.
              <br /><br />
              Quando o simples é aprofundado efeitos grandes são gerados.
              <br /><br />
              Agora, lendo isso, imagine como será sua vida daqui a seis meses com foco, disciplina, mente criativa, ações centradas, emocional regulado… e estamos falando dos resultados básicos que você notará.
              <br /><br />
              Meu corpo mudou minha vida, e agora quero passar isso a diante.
            </motion.p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Manifesto;

