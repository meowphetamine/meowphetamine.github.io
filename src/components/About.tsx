import { motion } from "framer-motion";

export default function About() {
    return (
        <section id="about" className="mx-auto w-full max-w-6xl px-6 py-16 bg-zinc-950 text-zinc-100">
            <motion.h2
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5 }}
                className="text-2xl md:text-3xl font-semibold tracking-tight text-center"
            >
                About me
            </motion.h2>

            <div className="mt-8 space-y-8 leading-7">
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                >
                    <h3 className="text-lg font-semibold text-white">Pharmacy Career</h3>
                    <p className="text-zinc-300">
                        My professional experience is rooted in healthcare. I’ve spent <strong>5+ years</strong> working
                        as a Pharmacy Technician across <em>nuclear</em>, <em>inpatient</em>, and
                        <em> specialty</em> settings—building disciplined workflows, sterile technique,
                        and accuracy under pressure.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <h3 className="text-lg font-semibold text-white">Hobby Computer Science</h3>
                    <p className="text-zinc-300">
                        I enjoy <span className="italic">vibe coding</span>—building things because they’re fun.
                        My favorite projects are Minecraft plugins that overhaul gameplay, items,
                        and progression. Lately I’ve been focused on shipping fast, clean sites
                        with React, TypeScript, Vite, Tailwind, and Framer Motion.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                >
                    <h3 className="text-lg font-semibold text-white">Photography</h3>
                    <p className="text-zinc-300">
                        I’ve been shooting for about a year on a{" "}
                        <a
                            href="https://en.wikipedia.org/wiki/Sony_%CE%B16600"
                            className="underline text-blue-400 hover:text-blue-500"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Sony α6600
                        </a>{" "}
                        paired with a Sigma 18–50mm f/2.8. I gravitate to automotive photography. If you’re in WA, you’ll often catch me at local
                        meets or AVANTS events.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}