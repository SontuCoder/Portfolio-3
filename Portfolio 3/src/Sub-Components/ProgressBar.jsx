
const ProgressBar = ({ name, level }) => {
    return (
        <div className="ml-0.5 w-full mt-1" >
            <p className="ml-3 mb-3 tracking-wide">{name}</p>
            <div className="flex w-full justify-between">
                <div className="h-[5px] max-w-85 w-[80%] bg-black rounded-2xl flex bar-shadow">
                    <div className="h-[5px] w-[60%] bg-[var(--bbg)] rounded-2xl bar-bg"></div>
                </div>
                <span className="text-[var(--bbg)] relative -top-2 tracking-wide">{level}%</span>
            </div>
        </div>
    )
}

export default ProgressBar;