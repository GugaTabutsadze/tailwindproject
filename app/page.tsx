import Image from "next/image";
import Nav from "./components/nav/Nav";
import Herosection from "./components/HeroSection/Herosection";
import Heromiddle from "./components/Hero2/Heromiddle";
import Practice from "./components/practice/Practice";
import Testimonials from "./components/Testimonials/Testimonials";
import Ctasection from "./components/Ctasection/Ctasection";
import Footer from "./components/Footer/Footer";



export default function Home() {
  return (
    <div className=" bg-no-repeat" 
    style={{ backgroundImage: 'url("/images/bg-tablet-pattern.svg")',
          backgroundPosition: '120% -24%', backgroundSize: '900px' }}>
      <Nav />
      <Herosection />
      <Heromiddle />
      <Testimonials />
      <Ctasection />
      <Footer />
    </div>
  );
}
