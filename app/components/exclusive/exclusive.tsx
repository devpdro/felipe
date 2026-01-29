"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { IMAGE } from "@/app/assets/images";
import { TextShimmer } from "@/app/ui/text-shimmer";
import { Button } from "@/app/components/form";
import S from "./exclusive.module.scss";

const CARDS = [
  {
    image: IMAGE.IMAGE_1,
    title: "DESPARASITAÇÃO",
    description: "Desbloqueie e alinhe seus chakras para viver com mais clareza, energia e equilíbrio interior.",
  },
  {
    image: IMAGE.IMAGE_2,
    title: "EFEITOS COLATERAIS",
    description: "Conecte-se com a fonte da sabedoria interior e receba mensagens que guiam sua jornada espiritual.",
  },
  {
    image: IMAGE.IMAGE_3,
    title: "HARMONIA ALIMENTAR",
    description: "Expanda sua mente, conecte-se com seus padrões e fortaleça sua consciência para viver em plenitude.",
  },
  {
    image: IMAGE.IMAGE_4,
    title: "META CORPO",
    description: "Transforme seu corpo e sua energia através de práticas ancestrais adaptadas para o mundo moderno.",
  },
];

const Exclusive = () => {
  return (
    <section className={S.section}>
      <motion.h1
        className={S.title}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <TextShimmer duration={3.5} spread={3} baseColor="#DAA520" gradientColor="#CD853F">
          Você terá acesso a conteúdos exclusivos.
        </TextShimmer>
      </motion.h1>
      <motion.p
        className={S.subtitle}
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
      >
        Conteúdos profundos para sua transformação completa.
      </motion.p>

      <div className={S.cardsWrapper}>
        <div className={S.cardsContainer}>
          {CARDS.map((card, index) => (
            <motion.div
              key={index}
              className={S.card}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
            >
              <div className={S.imageWrapper}>
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className={S.image}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
              </div>
              <h2 className={S.cardTitle}>{card.title}</h2>
              <p className={S.cardDescription}>{card.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <motion.div
        className={S.cta}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{
          duration: 0.6,
          ease: [0.25, 0.1, 0.25, 1],
          delay: 0.3,
        }}
      >
        <a href="https://pay.hotmart.com/U100928033C" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', display: 'inline-block' }}>
          <Button
            label="EU QUERO O META CORPO"
            size="lg"
          />
        </a>
      </motion.div>
    </section>
  );
};

export default Exclusive;

