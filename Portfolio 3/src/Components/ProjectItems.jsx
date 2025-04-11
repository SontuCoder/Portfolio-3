import Project1 from "../Sub-Components/Project1";
import Project2 from "../Sub-Components/Project2";

const ProjectItems = ({pic, name, type, description, readme, link, index}) => {
    return (
        <div className="w-full">
            {index%2?
            <Project2 key={index} pic={pic} name={name} type={type} description={description} readme={readme} link={link} />
            :
            <Project1 key={index} pic={pic} name={name} type={type} description={description} readme={readme} link={link} />
        }
        </div>
    )
}

export default ProjectItems;