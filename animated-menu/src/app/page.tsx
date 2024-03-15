import Image from "next/image";

//Components
import Navbar from "./components/Navbar"
import Menu from './components/Menu'

export default function Home() {
  return (
    <main>
      <Navbar />
      <section className="flex justify-center items-center w-screen h-screen bg-[#232323] z-[1]">
        <h2 className="text-4xl font-black text-black">Text on a screen</h2>
      </section>
    </main>
  );
}
