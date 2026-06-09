"use client";

import { motion } from "framer-motion";

type SectionTitleProps = {
  title: string;
  subtitle?: string;
};

export default function SectionTitle({ title, subtitle }: SectionTitleProps) {
  return (
    <div className="mb-12 text-center">
      <motion.h2
        initial={{
          opacity: 0,
          y: 20,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{ once: true }}
        transition={{
          duration: 0.8,
        }}
        className="text-4xl md:text-6xl font-semibold text-[var(--primary)]"
      >
        {title}
      </motion.h2>

      {subtitle && (
        <motion.p
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            delay: 0.2,
          }}
          className="mt-6 max-w-2xl mx-auto text-center text-gray-600 leading-relaxed"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
