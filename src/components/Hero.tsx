import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Hero() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const prefersReducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const enterScale = prefersReducedMotion ? 1 : 1.06;
  const scale = prefersReducedMotion ? 1 : useTransform(scrollYProgress, [0, 0.3], [1, 1.08]);
  const overlay = prefersReducedMotion ? 0.45 : useTransform(scrollYProgress, [0, 0.3], [0.35, 0.6]);

  return (
    <section id="top" className="relative h-screen flex items-center justify-center  h-[90vh] min-h-[640px] w-full overflow-clip">
      <motion.div
        initial={{ opacity: 0, scale: enterScale, filter: "blur(8px)" }}
        animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
        transition={{ duration: 1.0, ease: "easeOut" }}
        style={{ scale, backgroundImage: `url('/hero.jpg')` }}
        className="absolute inset-0 bg-cover bg-center will-change-transform"
      />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: prefersReducedMotion ? 0.45 : 0.35 }}
        style={{ opacity: overlay }}
        transition={{ duration: 0.9, ease: "easeOut", delay: 0.05 }}
        className="absolute inset-0 bg-black"
      />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 flex flex-col items-center text-center text-white px-4"
      >
        {/* Logo */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-6 overflow-hidden rounded-xl shadow-lg"
        >
          <img
            src="https://avatars.githubusercontent.com/u/42904962?v=4"
            alt="Logo"
            className="w-32 h-32 rounded-xl object-cover transition hover:scale-110"
          />
        </motion.div>

        {/* Name + Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-4xl md:text-5xl font-bold tracking-tight"
        >
          Meowphetamine
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-2 text-lg md:text-xl text-zinc-300"
        >
          Professional nose bleeder and car enjoyer
        </motion.p>

        {/* Socials */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-6 flex gap-6 text-3xl"
        >
          <a
            href="https://instagram.com/meowphetamine"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full text-white transition hover:-translate-y-0.5 hover:text-gray-200"
          >
            <FaInstagram />
          </a>
          <a
            href="https://github.com/meowphetamine"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full text-white transition hover:-translate-y-0.5 hover:text-gray-200"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/steven-c-tran"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full text-white transition hover:-translate-y-0.5 hover:text-gray-200"
          >
            <FaLinkedin />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}