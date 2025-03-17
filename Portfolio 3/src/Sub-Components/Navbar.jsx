import { useState, useEffect } from "react";

const Navbar = () => {

    const nav_links = [
        {
            name:"Home",
            nav:"#home"
        },
        {
            name:"About",
            nav:"#about"
        },
        {
            name:"Skills",
            nav:"#skills"
        },
        {
            name:"Projects",
            nav:"#projects"
        },
        {
            name:"Education",
            nav:"#education"
        },
        {
            name:"Contact",
            nav:"#contact"
        },
    ]

    const [size, setsize] = useState(getWidth());

    function getWidth() {
        let width = window.innerWidth;
        return (width < 768) ? true : false;
    }
    useEffect(() => {
        const handleResize = () => {
            setsize(getWidth());
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);


    return (
        <div className="flex mt-0.5">
            {size ? <span class="material-icons-round sm:!text-4xl !text-3xl v-bg rounded-xl">
                menu
            </span>
            :
            <div className="bg-amber-300">
                {nav_links.map(({name, nav},index)=>(
                    <a key={index} href={nav} className="">{name}</a>
                ))}
            </div>
            }
        </div>
    )
}

export default Navbar;