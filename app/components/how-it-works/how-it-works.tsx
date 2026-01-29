"use client";

import { motion } from "framer-motion";
import { TextShimmer } from "@/app/ui/text-shimmer";
import S from "./how-it-works.module.scss";

const steps = [
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

const HowItWorks = () => {
  return (
    <section className={S.section}>
      <div className={S.container}>
        {/* Header */}
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

        <motion.p
          className={S.subtitle}
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
        >
          Descubra como o método transforma seu corpo e sua energia em duas fases distintas.
        </motion.p>

        {/* Timeline */}
        <div className={S.timeline}>
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className={S.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
            >
              {/* Number Circle */}
              <div className={S.numberCircle}>
                <span className={S.number}>{step.number}</span>
              </div>

              {/* Step Content */}
              <div className={S.stepContent}>
                <h3 className={S.stepTitle}>{step.title}</h3>
                <p className={S.stepDescription}>{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

