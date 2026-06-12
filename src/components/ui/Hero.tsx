"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import Container from "@/src/components/ui/container";

type HeroProps = {
  title: string;
  subtitle: string;
  image: string;
};

export default function Hero({
  title,
  subtitle,
  image,
}: HeroProps) {
  return (
    <section className="relative min-h-[500px] md:min-h-[600px] h-[70vh] md:h-[80vh]">

      {/* Imagen */}
      <Image
        src={image}
        alt={title}
        fill
        priority
        className="object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Contenido */}
      <div className="relative z-10 flex h-full items-center py-24 md:py-0">
        <Container>

          <motion.h1
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 1,
            }}
            className="max-w-4xl text-3xl md:text-7xl font-semibold text-white"
          >
            {title}
          </motion.h1>

          <motion.p
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 1,
              delay: 0.3,
            }}
            className="mt-6 max-w-2xl text-lg text-gray-200"
          >
            {subtitle}
          </motion.p>

        </Container>
      </div>

    </section>
  );
}