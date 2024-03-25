import CaseStudies from "./Components/CaseStudies";
import Header from "./Components/Header";
import Hero from "./Components/Hero";

export default function App() {
  return (
    <section className="flex flex-col">
      <Header />
      <Hero />
      <CaseStudies />
    </section>
  );
}
