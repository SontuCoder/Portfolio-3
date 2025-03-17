import Skills1 from "../Components/Skills1"
import Skills2 from "../Components/Skills2"

const Skills = () => {
    return (
        <section className="max-w-[var(--width)] w-full text-[var(--pt)] mf  flex flex-col items-center pt-26 pb-9 px-4" id="skills">
            <h2 className="heading text-center">
                My Experience and Skills
            </h2>
            <div className="flex justify-between flex-col lg:flex-row mt-6 items-center gap-8 w-[90%]">
                <Skills1/>
                <Skills2/>
            </div>
        </section>
    )
}

export default Skills