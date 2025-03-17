
const Skills2 = () => {
    return (
        <div className=" w-[400px] max-w-full flex flex-col items-center pt-5">
            <p className="underline tracking-wider ">Problem Solved in various platforms</p>
            <div className="flex w-full justify-evenly mt-10 mb-12">
                <div className="flex flex-col items-center">
                    <p className="text-3xl font-semibold tracking-widest"><span className="">250</span>+</p>
                    <div className="w-25 h-1 rounded my-1 bg-white"></div>
                    <p className="text-xl">LeetCode</p>
                </div>
                <div className="flex flex-col items-center">
                    <p className="text-3xl font-semibold tracking-widest"><span className="">500</span>+</p>
                    <div className="w-25 rounded my-1 h-1 bg-white"></div>
                    <p className="text-xl">HackerRank</p>
                </div>
            </div>
            <p className="text-lg text-center tracking-wider -mb-1">Experience with other</p>
            <p className="text-lg text-center underline tracking-wider">libraries and frameworks</p>
            <div className="grid py-5 w-70 gap-5 grid-cols-3">
                <div className="bg-[var(--st)]/50 w-20 h-20 overflow-hidden rounded-xl backdrop-blur-2xl p-2">
                    <img src="./Tailwind CSS.png" alt="" className="object-cover" />
                </div>
                <div className="bg-[var(--st)]/50 w-20 h-20 overflow-hidden rounded-xl backdrop-blur-2xl p-2">
                    <img src="./Vite.js.png" alt="" className="object-cover" />
                </div>
                <div className="bg-[var(--st)]/50 w-20 h-20 overflow-hidden rounded-xl backdrop-blur-2xl p-2">
                    <img src="./Bootstrap.png" alt="" className="object-cover" />
                </div>
                <div className="bg-[var(--st)]/50 w-20 h-20 overflow-hidden rounded-xl backdrop-blur-2xl p-2">
                    <img src="./Figma.png" alt="" className="object-cover" />
                </div>
                <div className="bg-[var(--st)]/50 w-20 h-20 overflow-hidden rounded-xl backdrop-blur-2xl p-2">
                    <img src="./Canva.png" alt="" className="object-cover" />
                </div>
                <div className="bg-[var(--st)]/50 w-20 h-20 overflow-hidden rounded-xl backdrop-blur-2xl p-2">
                    <img src="./Anaconda.png" alt="" className="object-cover" />
                </div>
            </div>
        </div>
    )
}

export default Skills2
