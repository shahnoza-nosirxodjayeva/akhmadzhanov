import About from "@/components/home/About";
import ContactForm from "@/components/home/ContactForm";
import HeroSlider from "@/components/home/HeroSlider";

export default function HomePage() {
  return (
    <main className="overflow-x-hidden">
      <HeroSlider />
      <About/>
      <ContactForm/>
    </main>
  );
}
