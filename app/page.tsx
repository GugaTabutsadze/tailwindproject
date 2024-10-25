import Image from "next/image";
import Nav from "./components/nav/Nav";
import Herosection from "./components/HeroSection/Herosection";
import Heromiddle from "./components/Hero2/Heromiddle";
import Practice from "./components/practice/Practice";



export default function Home() {
  return (
    <div>
      <Nav />
      <Herosection />
      <Heromiddle />
    </div>
  );
}
