import { useEffect, useRef, useState } from "react";

const ProgressBar = ({ name, level }) => {
    const [count, setCount] = useState(0);
    const containerRef = useRef(null);
    const triggered = useRef(false);

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
                    setCount(i);
                    if (i >= level) clearInterval(interval);
                }, 20); 
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [level]);

    return (
        <div className="progress-container ml-0.5 w-full mt-1" ref={containerRef}>
            <p className="ml-3 mb-3 tracking-wide">{name}</p>
            <div className="flex w-full justify-between">
                <div className="h-[5px] max-w-85 w-[80%] bg-black rounded-2xl flex bar-shadow">
                    <div className="h-[5px] bg-[var(--bbg)] rounded-2xl bar-bg"
                        style={{ width: `${count}%`, transition: "width 0.3s ease-in-out" }}
                    ></div>
                </div>
                <span className="level text-[var(--bbg)] relative -top-2 tracking-wide">{count}%</span>
            </div>
        </div>
    );
};

export default ProgressBar;
