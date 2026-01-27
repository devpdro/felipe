"use client";

import { motion } from "framer-motion";

import { Button } from "@/app/components/form";
import { TextShimmer } from "@/app/ui/text-shimmer";

import S from "./price.module.scss";

const Price = () => {
  return (
    <section className={S.section} aria-label="Investimento no Meta Corpo">
      <div className={S.content}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h1 className={S.title}>
            <TextShimmer duration={3.5} spread={3} baseColor="#DAA520" gradientColor="#CD853F">Transforme</TextShimmer>{" "}
            <TextShimmer duration={3.5} spread={3} baseColor="#DAA520" gradientColor="#CD853F">seu corpo</TextShimmer>{" "}
            <TextShimmer duration={3.5} spread={3} baseColor="#DAA520" gradientColor="#CD853F">em sua base</TextShimmer>
          </h1>
        </motion.div>
        <motion.p
          className={S.subtitle}
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
            ease: [0.25, 0.46, 0.45, 0.94],
            delay: 0.1,
          }}
        >
          Um treinamento direto que leva o corpo de volta ao estado onde sustentar sua própria energia é natural e até prazeroso.
        </motion.p>
        <div className={S.grid}>

          <motion.article
            className={S.card}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              ease: [0.25, 0.46, 0.45, 0.94],
              delay: 0.2,
            }}
            whileHover={{
              y: -4,
              transition: {
                duration: 0.3,
                ease: [0.25, 0.46, 0.45, 0.94],
              },
            }}
          >
            <div className={S.topIcon}>
              <span className={S.iconSymbol}>
                <span>✦</span>
                <span>Meta Corpo</span>
              </span>
            </div>
            <div className={S.cardInner}>
              <motion.div
                className={S.heading}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  ease: [0.25, 0.46, 0.45, 0.94],
                  delay: 0.3,
                }}
              >
                Treinamento Completo
              </motion.div>

              <motion.div
                className={S.row}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  ease: [0.25, 0.46, 0.45, 0.94],
                  delay: 0.35,
                }}
              >
                <div className={S.priceValue}>R$88,88</div>
                <div className={S.suffix}>/ vitalício</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  ease: [0.25, 0.1, 0.25, 1],
                  delay: 0.4,
                }}
              >
                <a href="https://pay.hotmart.com/U100928033C" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', display: 'inline-block', width: '100%' }}>
                  <Button
                    label="COMEÇAR AGORA"
                    size="lg"
                    width="100%"
                  />
                </a>
              </motion.div>

              <motion.ul
                className={S.list}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  ease: [0.25, 0.46, 0.45, 0.94],
                  delay: 0.45,
                }}
              >
                {[
                  "Movimento e respiração",
                  "Jejum e treino",
                  "Exposição ao desconforto certo",
                  "Presença no corpo e atenção no agora",
                  "Superação constante e expansão real",
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    className={S.item}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.4,
                      ease: [0.25, 0.46, 0.45, 0.94],
                      delay: 0.5 + index * 0.05,
                    }}
                  >
                    <span className={S.check} aria-hidden="true">✓</span> {item}
                  </motion.li>
                ))}
                <motion.li
                  className={S.item}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.4,
                    ease: [0.25, 0.46, 0.45, 0.94],
                    delay: 0.5 + 5 * 0.05,
                  }}
                >
                  <span className={S.check} aria-hidden="true">✓</span>{" "}
                  <span>Energia estável e foco no dia a dia</span>
                  
                </motion.li>
              </motion.ul>
            </div>
          </motion.article>
        </div>
      </div>
    </section>
  );
};

export default Price;
