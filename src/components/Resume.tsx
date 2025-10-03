import { motion } from "framer-motion";
import { FaBriefcase } from "react-icons/fa";


type Item = {
    title: string;
    org: string;
    period: string;
    location?: string;
    bullets?: string[];
    tags?: string[];
    logo?: string; // URL or "/path/in/public"
    url?: string;
};


const ITEMS: Item[] = [
    {
        title: "Owner",
        org: "Turn 4 Detail",
        period: "2024 — Present",
        location: "Kent, WA",
        bullets: [
            "Performed detailing services: cleaning, paint correction, ceramic coating, waxing, and restoration.",
            "Oversaw daily operations, customer service, marketing, and finances.",
            "Managed client relationships and maintained high customer satisfaction.",
            "Built, deployed, and maintained company website to support online presence and bookings using React, Vite, and Github Pages."
        ],
        tags: ["Paint Correction", "Ceramic Coatings", "Sales"],
        logo: "/logos/turn4detail-white-bg_black.jpg",
        url: "https://www.turn4detail.com",
    },
    {
        title: "Senior Pharmacy Technician",
        org: "Providence",
        period: "2024 — Present",
        location: "Seattle, WA",
        bullets: [
            "TBD",
        ],
        tags: ["Healthcare", "Data analysis", "Excel", "Tableau"],
        logo: "/logos/providence.jpg",
        url: "https://www.providence.org/",
    },
    {
        title: "Nuclear Pharmacy Technician",
        org: "Siemens Healthineers",
        period: "2022 — 2024",
        location: "Kent, WA",
        bullets: [
            "Conducted quality control analyses (TLC, GC, BET, etc.) to ensure drug product quality, consistency, and compliance with specifications.",
            "Operated cyclotron and chemistry modules to execute complex compounding tasks for radiopharmaceutical production.",
            "Prepared and compounded [F-18]FDG for clinical PET/CT imaging, ensuring high-quality radiopharmaceuticals for diagnostic purposes.",
        ],
        tags: ["Nuclear Pharmacy", "Chemistry Analysis", "Quality Control"],
        logo: "/logos/siemens-healthineers.png",
        url: "https://www.siemens-healthineers.com/en-us",
    },
];

export default function Resume() {
    return (
        <section id="resume" className="mx-auto w-full max-w-6xl px-6 py-16 bg-zinc-950 text-zinc-100">
            <motion.h2
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5 }}
                className="text-2xl md:text-3xl font-semibold tracking-tight text-center"
            >
                Resume
            </motion.h2>


            <ul className="mt-10 space-y-6 max-w-2xl mx-auto">
                {ITEMS.map((item, idx) => (
                    <motion.li
                        key={item.title + idx}
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.5, delay: idx * 0.05 }}
                    >
                        {/* Card with logo column */}
                        <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm">
                            <div className="p-5 md:p-6 flex items-start gap-4">
                                {/* Logo */}
                                <div className="shrink-0">
                                    {item.logo ? (
                                        <a href={item.url} target="_blank" rel="noreferrer">
                                            <img
                                            src={item.logo}
                                            alt={`${item.org} logo`}
                                            className="h-12 w-12 rounded-xl object-cover ring-1 ring-white/15 bg-white/10 transition overflow-hidden rounded-xl shadow-lg hover:scale-105"
                                            loading="lazy"
                                            
                                        />
                                        </a>
                                    ) : (
                                        <div className="h-12 w-12 rounded-xl grid place-items-center ring-1 ring-white/15 bg-white/10 text-white/80">
                                            <FaBriefcase />
                                        </div>
                                    )}
                                </div>


                                {/* Content shifted right */}
                                <div className="min-w-0 flex-1">
                                    <div className="flex items-start justify-between gap-4">
                                        <div className="min-w-0">
                                            <h3 className="text-lg md:text-xl font-semibold text-white truncate">
                                                {item.title}
                                            </h3>
                                            <div className="mt-1 text-zinc-300 truncate">
                                                <span className="font-medium text-zinc-200">{item.org}</span>
                                                {item.location ? (
                                                    <span className="text-zinc-400"> • {item.location}</span>
                                                ) : null}
                                            </div>
                                        </div>
                                        <div className="text-sm text-zinc-400 whitespace-nowrap">{item.period}</div>
                                    </div>


                                    {item.bullets && (
                                        <ul className="mt-4 space-y-2 text-zinc-300">
                                            {item.bullets.map((b, i) => (
                                                <li key={i} className="leading-6">• {b}</li>
                                            ))}
                                        </ul>
                                    )}


                                    {item.tags && (
                                        <div className="mt-4 flex flex-wrap gap-2">
                                            {item.tags.map((t) => (
                                                <span
                                                    key={t}
                                                    className="text-xs px-2 py-1 rounded-full border border-white/10 bg-white/5 text-zinc-300"
                                                >
                                                    {t}
                                                </span>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </motion.li>
                ))}
            </ul>
        </section>
    );
}