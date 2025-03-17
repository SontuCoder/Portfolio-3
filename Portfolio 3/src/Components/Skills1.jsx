import ProgressBar from "../Sub-Components/ProgressBar";

const Skills1 = () => {
    const skills = [
        {
            name: "JavaScript",
            level: 50,
            css: "lev-50",
        },
        {
            name: "C++",
            level: 50,
            css: "lev-50",
        },
        {
            name: "React",
            level: 50,
            css: "lev-50",
        },
        {
            name: "Python",
            level: 50,
            css: "lev-50",
        },
        {
            name: "MongoDB",
            level: 50,
            css: "lev-50",
        },
        {
            name: "MySQL",
            level: 50,
            css: "lev-50",
        },
        {
            name: "Express Js",
            level: 50,
            css: "lev-50",
        },
    ];

    return (
        <div className=" w-[520px] max-w-full v-shadow py-6 sm:px-7 px-3 rounded-lg">
            {skills.map(({ name, level, css }, index) => (
                <ProgressBar key={index} name={name} level={level} />
            ))}
        </div>
    );
};

export default Skills1;
