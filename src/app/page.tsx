import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FoldImages from "./components/FoldImages";
import Match from "./components/Match";
import Story from "./components/Story";


export default function Home() {
  return (
   <main>
    {/* the logo here */}
    <div className="w-[291.51px] h-29 sm:gap-2.5 sm:px-16 py-4 mx-auto">
      <img className="w-[163.51px] h-20 rounded-2xl " src="http://surl.li/roptp" alt="logo here" />
    </div>
    <Navbar />
    <Hero />
    <FoldImages/>
    <Match/>
    <Story/>
   </main>
  );
}