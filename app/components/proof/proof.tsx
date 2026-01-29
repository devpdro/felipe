"use client";

import { memo } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { IMAGE } from "@/app/assets/images";
import { TextShimmer } from "@/app/ui/text-shimmer";

import S from "./proof.module.scss";

const PROOF_IMAGES = [
  { src: IMAGE.FAQ_1, size: "medium" },
  { src: IMAGE.FAQ_2, size: "medium" },
  { src: IMAGE.FAQ_3, size: "medium" },
];

const Proof = memo(() => {
  return (
    <section className={S.section}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h1 className={S.title}>
          <TextShimmer duration={3.5} spread={3} baseColor="#DAA520" gradientColor="#CD853F">Resultados reais</TextShimmer>{" "}
          <TextShimmer duration={3.5} spread={3} baseColor="#DAA520" gradientColor="#CD853F">de quem já</TextShimmer>{" "}
          <TextShimmer duration={3.5} spread={3} baseColor="#DAA520" gradientColor="#CD853F">transformou o corpo</TextShimmer>
        </h1>
      </motion.div>
      <motion.p
        className={S.subtitle}
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
      >
        Você acorda com mais energia. Sustenta atenção por mais tempo. Reage menos. Cansa menos. Sente mais presença no dia. Isso tudo só na primeira semana, como pode ver no exemplo de uma aluna que recebeu uma aula, sim, apenas uma aula do meta corpo.
      </motion.p>
      <div className={S.grid}>
        {PROOF_IMAGES.map((item, index) => (
          <motion.div
            key={index}
            className={`${S.item} ${S[item.size]}`}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
          >
            <Image
              src={item.src}
              alt={`Prova social ${index + 1}`}
              fill
              className={S.media}
              sizes="(max-width: 560px) 100vw, (max-width: 920px) 50vw, 33vw"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
});

Proof.displayName = 'Proof';

export default Proof;