import { useEffect, useState } from "react";
import { scrollToId } from "../lib/scroll";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all ${
        scrolled
          ? "backdrop-blur bg-zinc-950/60 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="flex h-16 items-center justify-center text-white">
          <nav className="flex gap-8 text-sm text-zinc-200">
            <a
              href="#about"
              onClick={(e) => {
                e.preventDefault();
                scrollToId("about");
              }}
              className="hover:text-white"
            >
              About
            </a>
            <a
              href="#resume"
              onClick={(e) => {
                e.preventDefault();
                scrollToId("resume");
              }}
              className="hover:text-white"
            >
              Resume
            </a>
            <a
              href="#portfolio"
              onClick={(e) => {
                e.preventDefault();
                scrollToId("portfolio");
              }}
              className="hover:text-white"
            >
              Portfolio
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
