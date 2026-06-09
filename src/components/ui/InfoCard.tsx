"use client";

import { motion } from "framer-motion";

type InfoCardProps = {
  title: string;
  description: string;
  delay?: number;
};

export default function InfoCard({
  title,
  description,
  delay = 0,
}: InfoCardProps) {
  return (
    <motion.article
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,

      }}
      viewport={{ once: true }}
      transition={{
        duration: 1,
        delay,
      }}
      className="
        rounded-2xl
        border border-gray-100
        bg-white
        p-8
        shadow-sm
        transition-all
        duration-300
        hover:-translate-y-2
        hover:shadow-lg
      "
    >
      <h3 className="text-xl font-semibold text-[var(--primary)] mb-4">
        {title}
      </h3>

      <p className="text-gray-600 leading-relaxed">
        {description}
      </p>
    </motion.article>
  );
}