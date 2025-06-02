import Footer from "./components/footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Industry from "./components/industry";
import L from "./components/l";
import M from "./components/m";
import N from "./components/n";
// import T from "./components/t";
import X from "./components/x";
import Y from "./components/y";
import Z from "./components/z";

export default function App() {
  return (
    <div className="bg-darkbg text-white min-h-screen">
      <Header />
      <main className="pt-20">
        <Hero />
        {/* Add Work, About, Contact sections here */}
        <Y/>
        <X/>
        <Z/>
        {/* <T/> */}
        <Industry/>
        <L/>
        <M/>
        <N/>
        <Footer/>
      </main>
    </div>
  );
}
