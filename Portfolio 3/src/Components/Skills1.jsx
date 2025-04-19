import ProgressBar from "../Sub-Components/ProgressBar";

const Skills1 = () => {
    const skills = [
        {
            name: "JavaScript",
            level: 70,
        },
        {
            name: "C++",
            level: 80,
        },
        {
            name: "React",
            level: 50,
        },
        {
            name: "Python",
            level: 70,
        },
        {
            name: "MongoDB",
            level: 80,
        },
        {
            name: "MySQL",
            level: 80,
        },
        {
            name: "Express Js",
            level: 50,
        },
    ];

    return (
        <div className=" w-[520px] max-w-full v-shadow py-6 sm:px-7 px-3 rounded-lg">
            {skills.map(({ name, level }, index) => (
                <ProgressBar key={index} name={name} level={level} />
            ))}
        </div>
    );
};

export default Skills1;
