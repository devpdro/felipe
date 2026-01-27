"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TextShimmer } from "@/app/ui/text-shimmer";
import { Button } from "@/app/components/form";

import S from "./faq.module.scss";

type FaqItem = {
  question: string;
  answer: string;
};

const ITEMS: FaqItem[] = [
  {
    question: "O que é o Meta Corpo exatamente?",
    answer:
      "Meta Corpo é um treinamento direto que leva o corpo de volta ao estado onde sustentar sua própria energia é natural e até prazeroso. Quando o corpo entra no eixo, o cansaço perde força, a mente desacelera e a ação volta. Sem discursos ou picos emocionais. Natural, simples.",
  },
  {
    question: "Como funciona o treinamento?",
    answer:
      "O método trabalha com movimento, respiração, jejum, treino e exposição ao desconforto certo. Você ajusta o físico primeiro e o resto desbloqueia, como um efeito cascata. Quando o simples é aprofundado, efeitos grandes são gerados. Pensamento, emoção e foco passam pelo corpo — é da essência dele, mas um corpo desorganizado limita tudo isso.",
  },
  {
    question: "Quais resultados posso esperar?",
    answer:
      "Você acorda com mais energia, sustenta atenção por mais tempo, reage menos, cansa menos e sente mais presença no dia. Isso tudo só na primeira semana. Com o tempo, você desenvolve foco, disciplina, mente criativa, ações centradas e emocional regulado. Esses são os resultados básicos que você notará.",
  },
  {
    question: "Para quem é indicado?",
    answer:
      "Para quem sente que está vivendo abaixo do que pode. Para quem já cansou de tentar resolver tudo pela mente. Para quem quer energia estável no dia a dia. Para quem já entende mas quer encarnar tudo que sabe. Para quem quer mais presença, leveza e uma espiritualidade sólida.",
  },
  {
    question: "Quanto custa e como funciona?",
    answer:
      "Meta Corpo custa R$ 97. Menos que uma saída ao mercado. Menos que um mês de distração. Com retorno diário em energia e foco. Esse é o valor do projeto encarnado, mas com certeza está para muito além disso. Para alguns pode ser desvalorização, para outros, uma oportunidade do universo.",
  },
];

const Chevron = ({ open }: { open: boolean }) => (
  <motion.svg
    className={`${S.chevron} ${open ? S.chevronOpen : ""}`}
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden
    animate={{
      rotate: open ? 180 : 0,
      scale: open ? 1.05 : 1,
    }}
    transition={{
      duration: 0.25,
      ease: [0.4, 0, 0.2, 1],
    }}
  >
    <path
      d="M6 9l6 6 6-6"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </motion.svg>
);

const Item: React.FC<FaqItem & { index: number }> = ({
  question,
  answer,
  index,
}) => {
  const [open, setOpen] = useState(false);
  const itemId = `faq-item-${index}`;
  const panelId = `faq-panel-${index}`;

  const handleToggle = () => {
    setOpen((prev) => !prev);
  };

  return (
    <motion.article
      className={`${S.card} ${open ? S.open : ""}`}
      itemScope
      itemType="https://schema.org/Question"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
        ease: "easeOut",
        delay: 0.2 + index * 0.08,
      }}
    >
      <button
        className={S.header}
        onClick={handleToggle}
        aria-expanded={open}
        aria-controls={panelId}
        aria-label={`${open ? "Fechar" : "Abrir"} pergunta: ${question}`}
      >
        <Chevron open={open} />
        <span className={S.question} itemProp="name">{question}</span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={panelId}
            role="region"
            aria-labelledby={itemId}
            aria-hidden={!open}
            className={S.panel}
            itemScope
            itemType="https://schema.org/Answer"
            style={{ overflow: "hidden" }}
            initial={{ height: 0, opacity: 0 }}
            animate={{
              height: "auto",
              opacity: 1,
              transition: {
                height: { duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] },
                opacity: { duration: 0.25, delay: 0.1 },
              },
            }}
            exit={{
              height: 0,
              opacity: 0,
              transition: {
                height: { duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] },
                opacity: { duration: 0.2 },
              },
            }}
          >
            <motion.div
              className={S.answer}
              initial={{ y: -8, opacity: 0 }}
              animate={{
                y: 0,
                opacity: 1,
                transition: {
                  delay: 0.15,
                  duration: 0.25,
                  ease: [0.25, 0.46, 0.45, 0.94],
                },
              }}
              exit={{
                y: -8,
                opacity: 0,
                transition: {
                  duration: 0.15,
                  ease: [0.25, 0.46, 0.45, 0.94],
                },
              }}
            >
              <p itemProp="text">{answer}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.article>
  );
};

const FAQ = () => {
  return (
    <section
      className={S.wrapper}
      aria-label="Perguntas frequentes sobre o Meta Corpo"
      itemScope
      itemType="https://schema.org/FAQPage"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <TextShimmer
          as="h1"
          duration={3.5}
          spread={3}
          className={S.title}
          baseColor="#DAA520"
          gradientColor="#CD853F"
        >
          Perguntas Frequentes
        </TextShimmer>
      </motion.div>

      <motion.p
        className={S.subtitle}
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
      >
        Encontre clareza sobre o treinamento e a transformação que te aguarda.
      </motion.p>

      {ITEMS.map((it, idx) => (
        <Item
          key={idx}
          question={it.question}
          answer={it.answer}
          index={idx}
        />
      ))}

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
        <a href="https://pay.hotmart.com/S102777434V?bid=1765628003164" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', display: 'inline-block' }}>
          <Button
            label="COMEÇAR AGORA"
            size="lg"
          />
        </a>
      </motion.div>
    </section>
  );
};

export default FAQ;
