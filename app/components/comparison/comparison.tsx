"use client";

import { motion } from "framer-motion";
import { TextShimmer } from "@/app/ui/text-shimmer";
import S from "./comparison.module.scss";

const FOR_WHO_ITEMS = [
  "Para quem sente que está vivendo abaixo do que pode.",
  "Para quem já cansou de tentar resolver tudo pela mente.",
  "Para quem quer energia estável no dia a dia.",
  "Para quem já entende mas quer encarnar tudo que sabe.",
  "Para quem quer mais presença, leveza e uma espiritualidade sólida.",
];

const NOT_FOR_WHO_ITEMS = [
  "Para quem busca soluções rápidas sem comprometimento.",
  "Para quem prefere continuar na zona de conforto.",
  "Para quem não está disposto a mudar hábitos.",
  "Para quem busca apenas teoria sem prática.",
  "Para quem não está pronto para encarar seus limites.",
];

const Comparison = () => {
  return (
    <section className={S.section}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h1 className={S.mainTitle}>
          <TextShimmer duration={3.5} spread={3} baseColor="#DAA520" gradientColor="#CD853F">
            Para quem é
          </TextShimmer>
        </h1>
      </motion.div>
      <motion.p
        className={S.subtitle}
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
      >
        Descubra se o Meta Corpo é para você.
      </motion.p>
      <div className={S.container}>
        {/* Coluna Negativa - PARA QUEM NÃO É */}
        <motion.div
          className={S.column}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className={S.title}>
            Para quem <span className={S.highlight}>NÃO</span> é
          </h2>
          <div className={S.panel}>
            <ul className={S.list}>
              {NOT_FOR_WHO_ITEMS.map((item, index) => (
                <motion.li
                  key={index}
                  className={S.item}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 + index * 0.05 }}
                >
                  <span className={S.icon}>✗</span>
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Coluna Positiva - PARA QUEM É */}
        <motion.div
          className={S.column}
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className={S.title}>
            Para quem <span className={S.highlight}>É</span>
          </h2>
          <div className={S.panel}>
            <ul className={S.list}>
              {FOR_WHO_ITEMS.map((item, index) => (
                <motion.li
                  key={index}
                  className={S.item}
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 + index * 0.05 }}
                >
                  <span className={S.icon}>✓</span>
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Comparison;

