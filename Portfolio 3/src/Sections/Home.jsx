
const Home = () => {
    return (
        <section id="home" className="max-w-[var(--width)] w-full flex flex-col items-center md:flex-row gap-[5%] md:px-6 mt-28">
            <div className=" max-w-full w-[400px] flex items-center justify-center h-[400px]">
                <img src="./Gradient.png" alt="" className="absolute w-[400px]" />
                <img src="./Me.png" alt="" className="absolute" />
            </div>
            <div className=" text-[var(--pt)] mf px-3 flex flex-col justify-center pt-10">
                <p className="text-md tracking-[-0.4px]">A Junior Developer who</p>
                <p className="text-5xl mb-4 tracking-[-0.6px]">Judged by</p>
                <p className="text-5xl mt-3">his <span className="text-[var(--st)] tracking-[-1px]">skills</span> ...</p>
                <img src="./Ellipse 5.png" alt="" className=" absolute h-20 w-[11rem] ml-15 mb-2 -rotate-3 drop-shadow-lg d-shadow" />
                <button className=" mx-auto mt-15 p-3 text-xl shadow v-shadow rounded-md text-[var(--st)] font-bold text-"><span className="text-lg tracking-[1px]">Download Resume</span></button>
            </div>
        </section>
    )
}

export default Home