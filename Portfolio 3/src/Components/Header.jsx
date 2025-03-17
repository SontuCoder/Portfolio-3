import Navbar from "../Sub-Components/Navbar"

const Header = () => {
    return (
        <div className="  h-20 w-full max-w-[1200px] text-[var(--pt)] flex items-center justify-between px-1.5">
            <div className="logo md:w-14 w-12 rounded-2xl shadow-2xl overflow-hidden v-shadow">
                <img src="./logo.jpg" alt="logo" className="object-cover" />
            </div>
            <div className="navbar flex sm:px-8 md:justify-between max-w-[65%] gap-3 items-center">
                {/* <Navbar/> */}
                <span className="material-icons-round sm:!text-3xl !text-2xl v-bg rounded-2xl">
                    light_mode
                </span>
            </div>
        </div>
    )
}

export default Header