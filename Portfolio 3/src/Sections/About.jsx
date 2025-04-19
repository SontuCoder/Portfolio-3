import { useState, useRef, useEffect } from "react";
const About = () => {

    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);
    const containerRef = useRef(null);
    const triggered = useRef(false);
    const project = 30;
    const exprience = 2;

    useEffect(() => {
        const handleScroll = () => {
            if (!containerRef.current) return;

            const top = containerRef.current.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (top < windowHeight - 50 && !triggered.current) {
                triggered.current = true;
                let i = 0;
                const interval = setInterval(() => {
                    i++;
                    setCount1(i);
                    if (i >= exprience) clearInterval(interval);
                }, 50);
                let j = 0;
                const interval2 = setInterval(() => {
                    j++;
                    setCount2(j);
                    if (j >= project) clearInterval(interval2);
                }, 30); 
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [project,exprience]);

    return (
        <section className="max-w-[var(--width)] w-full text-[var(--pt)] mf  pt-10 flex flex-col items-center px-6 sm:px-8" id='about'>
            <p className="tracking-[1px] text-xl">I'm currently pursing MCA</p>
            <p className="text-4xl tracking-[2px] mt-3 text-center">I'm a <span className="text-[var(--st)]" id='about_loader'>Web Developer...I</span></p>
            <p className="mt-13 text-center text-lg leading-7.5 tracking-[1px]">I am Subhadip Maity from West Bengal, currently living in Delhi. I hold a B.Sc in Mathematics from Panskura Banamali College under Vidyasagar University and am pursuing an MCA from Galgotias University. I have developed strong skills in HTML, CSS, JavaScript, React.js, and databases like MongoDB and MySQL. I also have a solid foundation in programming languages such as JavaScript, C++, and Python. As a passionate learner, I enjoy solving coding challenges on platforms like LeetCode and HackerRank.</p>
            <div className="flex w-full justify-evenly mt-10 sm:mt-2 sm:-ml-2 flex-col items-center gap-8 sm:flex-row" ref={containerRef}>
                <div className="flex font-semibold">
                    <span className="text-5xl text-[var(--st)] sf tracking-wide">{count1}</span>
                    <p className="text-xl mt-4 ml-1 tracking-widest "> + Years Experiences</p>
                </div>
                <div className="flex font-semibold">
                    <span className="text-5xl text-[var(--st)] sf tracking-wide">{count2}</span>
                    <p className="text-xl mt-4 ml-1 tracking-widest "> + Projects Done</p>
                </div>
            </div>
        </section>
    )
}

export default About