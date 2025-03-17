import ProjectItems from "../Components/ProjectItems";

const Projects = () => {

    const projects =[
        {
            pic:"./download.jpeg",
            name:"GenZTechno",
            type:"one type of lms platform",
            description:"A Learning Management System (LMS) is a software platform designed to manage, deliver, and track educational courses, training programs, and learning activities. It is widely used in schools, universities, and corporate training environments. Cloud-based LMS: Hosted online, accessible from any devices.",
            readme:"www.google.com",
            link:"www.google.com",
        },
        {
            pic:"./download.jpeg",
            name:"GenZTechno",
            type:"onn type of lms platform",
        description:"A Learning Management System (LMS) is a software platform designed to manage, deliver, and track educational courses, training programs, and learning activities. It is widely used in schools, universities, and corporate training environments. Cloud-based LMS: Hosted online, accessible from any devices.",
        readme:"www.google.com",
            link:"www.google.com",
        },
        {
            pic:"./download.jpeg",
            name:"GenZTechno",
            type:"onn type of lms platform",
            description:"A Learning Management System (LMS) is a software platform designed to manage, deliver, and track educational courses, training programs, and learning activities. It is widely used in schools, universities, and corporate training environments. Cloud-based LMS: Hosted online, accessible from any devices.",
            readme:"www.google.com",
            link:"www.google.com",
        },
    ]

    return (
        <section className='max-w-[var(--width)] w-full text-[var(--pt)] mf  flex flex-col items-center pt-26 ' id="projects">
            <h3 className="heading">My Projects</h3>
            <div className=" w-full flex flex-col px-4 items-center -mb-37">
                {
                    projects.map(({pic, name, type, description, readme, link}, index)=>(
                        <ProjectItems key={index} index={index} pic={pic} name={name} type={type} description={description} readme={readme} link={link} />
                    ))}
            </div>
        </section>
    )
}

export default Projects ;