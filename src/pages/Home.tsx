import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Resume from "../components/Resume";
import Footer from "../components/Footer";


export default function Home() {
    return (
        <div className="min-h-screen bg-zinc-950 selection:bg-white selection:text-black">
            <Header />
            <main>
                <Hero />
                <About />
                <Resume />
            </main>
            <Footer />
        </div>
    );
}
