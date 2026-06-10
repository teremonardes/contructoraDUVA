"use client";

import { motion } from "framer-motion";

type TeamCardProps = {
  name: string;
  role: string;
  delay?: number;
};

export default function TeamCard({
  name,
  role,
  delay = 0,
}: TeamCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.8,
        delay,
      }}
      className="
        rounded-2xl
        border
        border-gray-200
        bg-white
        p-6
        shadow-sm
        transition-all
        duration-300
        hover:-translate-y-2
        hover:shadow-md
      "
    >
      <h3 className="text-xl font-semibold text-[var(--primary)]">
        {name}
      </h3>

      <p className="mt-2 text-gray-600">
        {role}
      </p>
    </motion.article>
  );
}