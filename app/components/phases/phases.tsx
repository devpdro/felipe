"use client";

import { motion } from "framer-motion";
import { TextShimmer } from "@/app/ui/text-shimmer";
import S from "./phases.module.scss";

const phases = [
  {
    number: "Fase 1",
    title: "Presença no corpo. Atenção no agora.",
    description: "A vida começa a voltar.",
  },
  {
    number: "Fase 2",
    title: "Superação constante. Expansão real.",
    description: "O corpo deixa de ser limite.",
  },
];

const Phases = () => {
  return (
    <section className={S.section}>
      <div className={S.container}>
        {/* Title */}
        <motion.h2
          className={S.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <TextShimmer duration={3.5} spread={3} baseColor="#DAA520" gradientColor="#CD853F">
            COMO O MÉTODO EVOLVE
          </TextShimmer>
        </motion.h2>

        {/* Timeline */}
        <div className={S.timeline}>
          {phases.map((phase, index) => (
            <motion.div
              key={index}
              className={S.phase}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
            >
              {/* Timeline line connector */}
              {index < phases.length - 1 && (
                <div className={S.connector}>
                  <div className={S.line}></div>
                </div>
              )}

              {/* Phase content */}
              <div className={S.phaseContent}>
                <div className={S.phaseNumber}>{phase.number}</div>
                <h3 className={S.phaseTitle}>{phase.title}</h3>
                <p className={S.phaseDescription}>{phase.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Phases;

