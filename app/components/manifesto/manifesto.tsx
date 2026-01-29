"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { IMAGE } from "@/app/assets/images";
import S from "./manifesto.module.scss";

const texts = [
  "Meta Corpo é um treinamento direto.",
  "Ele leva o corpo de volta ao estado onde sustentar sua própria energia é natural e até prazeroso.",
  "Quando o corpo entra no eixo o cansaço perde força, a mente desacelera e a ação volta.",
  "Sem discursos ou picos emocionais. Natural, simples.",
  "Pensamento, emoção e foco passam pelo corpo é da essência dele, mas um corpo desorganizado limita tudo isso.",
  "Aqui você ajusta o físico primeiro e o resto desbloqueia, como um efeito cascata.",
  "Movimento, respiração, jejum, treino e exposição ao desconforto certo.",
  "Quando o simples é aprofundado efeitos grandes são gerados.",
  "Agora, lendo isso, imagine como será sua vida daqui a seis meses com foco, disciplina, mente criativa, ações centradas, emocional regulado… e estamos falando dos resultados básicos que você notará.",
  "Meu corpo mudou minha vida, e agora quero passar isso a diante."
];

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
        <div className={S.iconWrapper}>
          <svg
            className={S.icon}
            viewBox="0 0 24 24"
            fill="none"
          >
            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            <path
              d="M12 2C12 2 8 6 8 12C8 18 12 22 12 22"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <path
              d="M12 2C12 2 16 6 16 12C16 18 12 22 12 22"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <circle cx="12" cy="12" r="3" fill="currentColor" />
          </svg>
        </div>

        <div className={S.imageWrapper}>
          <Image
            src={IMAGE.IMAGE_4}
            alt="Meta Corpo"
            fill
            className={S.image}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 900px"
          />
        </div>

        <div className={S.content}>
          <div className={S.textContent}>
            {texts.map((text, index) => (
              <p key={index} className={S.paragraph}>
                {text}
              </p>
            ))}
          </div>

          {/* Overlay no final */}
          <div className={S.overlay}></div>
        </div>
      </motion.div>
    </section>
  );
};

export default Manifesto;
