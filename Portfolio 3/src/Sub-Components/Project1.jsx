
const Project1 = ({pic, name, type, description, readme, link}) => {
    return (
        <div className=" mt-8 px-2 flex">
            <div className="w-[58%] z-10">
                <p className="text-[35px] ml-2 mt-11 tracking-wide font-semibold -mb-2">
                    {name}
                </p>
                <p className="text-sm text-[var(--st)] ml-2">
                    {type}
                </p>
                <div className="drop-shadow-2xl bg-[var(--bbg)]/30 rounded-lg mt-2 p-4 flex justify-start">
                    <p className=" text-sm text-justify tracking-[1px] w-[90%]" >
                        {description}
                    </p>
                </div>
                <div className=" mt-2 gap-4 flex">
                    <button className="drop-shadow-2xl bg-[var(--bbg)]/30 rounded h-10 px-4 flex items-center w-52">
                        <a href={readme} className="flex gap-2">
                            <p className="text-sm tracking-wide">Learn More About It</p>
                            <span className="material-icons-round text-[var(--bg)] drop-shadow-[0_0_2px_var(--pt)] absolute right-2 -rotate-45 ">arrow_forward</span>
                        </a>
                    </button>
                    <button className="drop-shadow-2xl bg-[var(--bbg)]/30 rounded h-10 px-4 flex items-center w-50">
                        <a href={link} className="flex gap-2">
                            <p className="text-sm tracking-wide">Take A Experience</p>
                            <span className="material-icons-round text-[var(--bg)] drop-shadow-[0_0_2px_var(--pt)] -rotate-45 absolute right-2">arrow_forward</span>
                        </a>
                    </button>
                </div>
            </div>

            <div className=" my-12">
                <div className="bg-[var(--pbg)] w-105 h-65 relative -left-5 rounded-xl"></div>
                <div className="w-105 h-65 relative -top-58 left-3 rounded-xl z-5 overflow-hidden">
                    <img src={pic} alt="" className=" w-full" />
                </div>
            </div>
        </div>
    )
}

export default Project1