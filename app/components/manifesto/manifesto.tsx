"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { IMAGE } from "@/app/assets/images";
import S from "./manifesto.module.scss";

const Manifesto = () => {
  return (
    <section className={S.section}>
      <motion.div
        className={S.card}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className={S.imageWrapper}>
          <Image
            src={IMAGE.IMAGE_4}
            alt="Meta Corpo"
            fill
            className={S.image}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 800px"
          />
        </div>

        <div className={S.content}>
          <div className={S.textContent}>
            <p className={S.paragraph}>
              Pensamento, emoção e foco passam pelo corpo é da essência dele, mas um corpo desorganizado limita tudo isso.
            </p>

            <p className={S.paragraph}>
              Aqui você ajusta o físico primeiro e o resto desbloqueia, como um efeito cascata.
            </p>

            <p className={S.paragraph}>
              Movimento, respiração, jejum, treino e exposição ao desconforto certo.
            </p>

            <p className={S.paragraph}>
              Quando o simples é aprofundado efeitos grandes são gerados.
            </p>

            <p className={S.paragraph}>
              Agora, lendo isso, imagine como será sua vida daqui a seis meses com foco, disciplina, mente criativa, ações centradas, emocional regulado… e estamos falando dos resultados básicos que você notará.
            </p>

            <p className={S.paragraph}>
              Meu corpo mudou minha vida, e agora quero passar isso a diante.
            </p>
          </div>

          {/* Overlay no final */}
          <div className={S.overlay}></div>
        </div>
      </motion.div>
    </section>
  );
};

export default Manifesto;
