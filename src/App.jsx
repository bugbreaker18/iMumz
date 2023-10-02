import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Article from "./components/Article";
import Support from "./components/Support";
import Footer from "./components/Footer";

export default function App() {
    return (
      <div className="min-h-screen">
        <Navbar />
        <Hero />
        <Article />
        <Support />
        <Footer />
      </div>
    )
}
