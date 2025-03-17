
const About = () => {
    return (
        <section className="max-w-[var(--width)] w-full text-[var(--pt)] mf  pt-10 flex flex-col items-center px-6 sm:px-8" id='about'>
            <p className="tracking-[1px] text-xl">I'm currently pursing MCA</p>
            <p className="text-4xl tracking-[2px] mt-3 text-center">I'm a <span className="text-[var(--st)]" id='about_loader'>Web Developer...I</span></p>
            <p className="mt-13 text-center text-lg leading-7.5 tracking-[1px]">I am Subhadip Maity from West Bengal, currently living in Delhi. I hold a B.Sc in Mathematics from Panskura Banamali College under Vidyasagar University and am pursuing an MCA from Galgotias University. I have developed strong skills in HTML, CSS, JavaScript, React.js, and databases like MongoDB and MySQL. I also have a solid foundation in programming languages such as JavaScript, C++, and Python. As a passionate learner, I enjoy solving coding challenges on platforms like LeetCode and HackerRank.</p>
            <div className="flex w-full justify-evenly mt-10 sm:mt-2 sm:-ml-2 flex-col items-center gap-8 sm:flex-row">
                <div className="flex font-semibold">
                    <span className="text-5xl text-[var(--st)] sf tracking-wide">2</span>
                    <p className="text-xl mt-4 ml-1 tracking-widest "> + Years Experiences</p>
                </div>
                <div className="flex font-semibold">
                    <span className="text-5xl text-[var(--st)] sf tracking-wide">30</span>
                    <p className="text-xl mt-4 ml-1 tracking-widest "> + Projects Done</p>
                </div>
            </div>
        </section>
    )
}

export default About