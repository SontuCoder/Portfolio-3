import Header from "./Components/Header";
import Home from "./Sections/Home";
import About from "./Sections/About";
import Skills from "./Sections/Skills";
import Projects from "./Sections/Projects";
import Education from "./Sections/Education";
import Contact from "./Sections/Contact";
import Footer from "./Components/Footer";

function App() {


  return (
    <>
      <header className="flex items-center justify-center w-full px-4 sm:px-6 md:px-10 lg:px-16 bg-[var(--bg)]">
        <Header/>
      </header>
      <main className="w-full bg-[var(--bg)] flex flex-col items-center">
        <Home/>
        <About/>
        <Skills/>
        <Projects/>
        <Education/>
        <Contact/>
      </main>
      <footer className="flex items-center justify-center bg-[var(--bg)]">
        <Footer/>
      </footer>
    </>
  )
}

export default App
