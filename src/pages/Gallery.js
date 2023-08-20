import SearchBar from "../components/SearchBar.js";
import { projects } from "../data.js";
import Github from "../assets/github.svg.png"
import Internet from "../assets/internet.png"
import './Gallery.css'

export default function Gallery(props) {
  const { search, setSearch } = props;
//   console.log(projects);

  const filterproject = projects.filter((project)=> project.title.toLowerCase().includes(search.toLowerCase()))
  return (
    <div>
      <h1>Gallery</h1>
      <SearchBar search={search} setSearch={setSearch} />

      {filterproject.map((project, index) => {
        return (
            
          <div className="gallery" key={index}>
            <br/>
            <h3>{project.title}</h3>
            <div>
              <a href={project.link} alt="rngrpg" target="blank">
                <img
                  src={project.image}
                  alt="rngrpg"
                />
              </a>
              <p>{project.description}</p>
              <a href={project.github} target="blank">
                 <img
                    src={Github}
                    alt="github"
                    style={{ height: "2em", width: "2em" }}
                  />
                </a>
                <a href={project.link} target="blank">
                 <img
                    src={Internet}
                    alt="github"
                    style={{ height: "2em", width: "2em" }}
                  />
                </a>

              <div> Technology Stack:
              {project.tech.map((tech, index) => {
                return(
                    <div key={index}>
                        <div>{tech}</div>
                        </div>
                )
                })}
                </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
