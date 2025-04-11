
const Project1 = ({pic, name, type, description, readme, link}) => {
    return (
        <div className=" mt-8 px-2 flex flex-col-reverse lg:flex-row items-center gap-60 lg:gap-0 w-full">
            <div className="lg:w-[58%] z-10 ">
                <p className="text-[35px] ml-2 mt-11 tracking-wide font-semibold -mb-2">
                    {name}
                </p>
                <p className="text-sm text-[var(--st)] ml-2">
                    {type}
                </p>
                <div className="drop-shadow-2xl bg-[var(--bbg)]/30 rounded-lg mt-2 p-4 flex justify-start">
                    <p className=" text-sm text-justify tracking-[1px] lg:w-[90%] max-w-[600px] w-full" >
                        {description}
                    </p>
                </div>
                <div className=" mt-2 gap-4 flex flex-col md:flex-row">
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

            <div className=" relative lg:w-[50%] w-full -left-6 sm:-left-10">

                <div className=" flex absolute w-full h-full -left- -top-10">
                    <img src="./Gradient.png" alt="" className="w-[70%] h-100" />
                    <img src="./Gradient.png" alt="" className="w-[70%] h-100 relative -left-20" />
                </div>

                <div className="bg-[var(--pbg)] sm:w-full sm:h-60 w-[300px] h-45 absolute rounded-xl top-15 sm:-left-5 left-5 "></div>
                <div className="w-[300px] h-45 sm:w-full sm:h-60 absolute left-10 rounded-xl z-5 overflow-hidden top-20">
                    <img src={pic} alt="" className="w-full" />
                </div>
            </div>
        </div>
    )
}

export default Project1